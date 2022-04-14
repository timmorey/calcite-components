/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
import "form-request-submit-polyfill/form-request-submit-polyfill";
import { Component, Element, h, Method, Prop, Build, State, Watch } from "@stencil/core";
import { CSS, TEXT } from "./resources";
import { closestElementCrossShadowBoundary } from "../../utils/dom";
import { connectLabel, disconnectLabel, getLabelText } from "../../utils/label";
import { createObserver } from "../../utils/observers";
import { updateHostInteraction } from "../../utils/interactive";
/** Passing a 'href' will render an anchor link, instead of a button. Role will be set to link, or button, depending on this. */
/** It is the consumers responsibility to add aria information, rel, target, for links, and any button attributes for form submission */
/** @slot - A slot for adding text. */
export class Button {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** optionally specify alignment of button elements. */
    this.alignment = "center";
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "blue";
    /** is the button disabled  */
    this.disabled = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** optionally add a calcite-loader component to the button, disabling interaction.  */
    this.loading = false;
    /** optionally add a round style to the button  */
    this.round = false;
    /** specify the scale of the button, defaults to m */
    this.scale = "m";
    /** is the button a child of a calcite-split-button */
    this.splitChild = false;
    /** The type attribute to apply to the button */
    this.type = "button";
    /** specify the width of the button, defaults to auto */
    this.width = "auto";
    /** watches for changing text content **/
    this.mutationObserver = createObserver("mutation", () => this.updateHasContent());
    /** determine if there is slotted content for styling purposes */
    this.hasContent = false;
    /** determine if loader present for styling purposes */
    this.hasLoader = false;
    // act on a requested or nearby form based on type
    this.handleClick = () => {
      const { formEl, type } = this;
      if (this.href) {
        return;
      }
      // this.type refers to type attribute, not child element type
      if (type === "submit") {
        formEl === null || formEl === void 0 ? void 0 : formEl.requestSubmit();
      }
      else if (type === "reset") {
        formEl === null || formEl === void 0 ? void 0 : formEl.reset();
      }
    };
  }
  loadingChanged(newValue, oldValue) {
    if (!!newValue && !oldValue) {
      this.hasLoader = true;
    }
    if (!newValue && !!oldValue) {
      window.setTimeout(() => {
        this.hasLoader = false;
      }, 300);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.hasLoader = this.loading;
    this.setupTextContentObserver();
    connectLabel(this);
    this.formEl = closestElementCrossShadowBoundary(this.el, this.form ? `#${this.form}` : "form");
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectLabel(this);
    this.formEl = null;
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.updateHasContent();
    }
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    const childElType = this.href ? "a" : "button";
    const Tag = childElType;
    const loaderNode = this.hasLoader ? (h("div", { class: CSS.buttonLoader },
      h("calcite-loader", { active: true, class: this.loading ? CSS.loadingIn : CSS.loadingOut, inline: true, label: this.intlLoading, scale: "m" }))) : null;
    const iconStartEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const contentEl = (h("span", { class: CSS.content },
      h("slot", null)));
    return (h(Tag, { "aria-label": getLabelText(this), class: {
        [CSS.contentSlotted]: this.hasContent,
        [CSS.iconStartEmpty]: !this.iconStart,
        [CSS.iconEndEmpty]: !this.iconEnd
      }, disabled: this.disabled || this.loading, href: childElType === "a" && this.href, name: childElType === "button" && this.name, onClick: this.handleClick, ref: (el) => (this.childEl = el), rel: childElType === "a" && this.rel, tabIndex: this.disabled || this.loading ? -1 : null, target: childElType === "a" && this.target, type: childElType === "button" && this.type },
      loaderNode,
      this.iconStart ? iconStartEl : null,
      this.hasContent ? contentEl : null,
      this.iconEnd ? iconEndEl : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.childEl.focus();
  }
  updateHasContent() {
    var _a, _b;
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && ((_a = this.el.childNodes[0]) === null || _a === void 0 ? void 0 : _a.nodeName) === "#text"
        ? ((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  static get is() { return "calcite-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonAlignment",
        "resolved": "\"center\" | \"end\" | \"icon-end-space-between\" | \"icon-start-space-between\" | \"space-between\" | \"start\"",
        "references": {
          "ButtonAlignment": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally specify alignment of button elements."
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "\"center\""
    },
    "appearance": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonAppearance",
        "resolved": "\"clear\" | \"outline\" | \"solid\" | \"transparent\"",
        "references": {
          "ButtonAppearance": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance style of the button, defaults to solid."
      },
      "attribute": "appearance",
      "reflect": true,
      "defaultValue": "\"solid\""
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Applies to the aria-label attribute on the button or hyperlink"
      },
      "attribute": "label",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonColor",
        "resolved": "\"blue\" | \"inverse\" | \"neutral\" | \"red\"",
        "references": {
          "ButtonColor": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the color of the button, defaults to blue"
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "\"blue\""
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "is the button disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally pass a href - used to determine if the component should render as a button or an anchor"
      },
      "attribute": "href",
      "reflect": true
    },
    "iconEnd": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally pass an icon to display at the end of a button - accepts calcite ui icon names"
      },
      "attribute": "icon-end",
      "reflect": true
    },
    "iconFlipRtl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FlipContext",
        "resolved": "\"both\" | \"end\" | \"start\"",
        "references": {
          "FlipContext": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "flip the icon(s) in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true
    },
    "iconStart": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally pass an icon to display at the start of a button - accepts calcite ui icon names"
      },
      "attribute": "icon-start",
      "reflect": true
    },
    "intlLoading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "default",
            "text": "\"Loading\""
          }],
        "text": "string to override English loading text"
      },
      "attribute": "intl-loading",
      "reflect": false,
      "defaultValue": "TEXT.loading"
    },
    "loading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "optionally add a calcite-loader component to the button, disabling interaction."
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The name attribute to apply to the button"
      },
      "attribute": "name",
      "reflect": false
    },
    "rel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The rel attribute to apply to the hyperlink"
      },
      "attribute": "rel",
      "reflect": false
    },
    "form": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "\u2013 this property is no longer needed if placed inside a form."
          }],
        "text": "The form ID to associate with the component"
      },
      "attribute": "form",
      "reflect": false
    },
    "round": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "optionally add a round style to the button"
      },
      "attribute": "round",
      "reflect": true,
      "defaultValue": "false"
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Scale",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {
          "Scale": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of the button, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "splitChild": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "\"primary\" | \"secondary\" | false",
        "resolved": "\"primary\" | \"secondary\" | boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "is the button a child of a calcite-split-button"
      },
      "attribute": "split-child",
      "reflect": true,
      "defaultValue": "false"
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The target attribute to apply to the hyperlink"
      },
      "attribute": "target",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type attribute to apply to the button"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"button\""
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Width",
        "resolved": "\"auto\" | \"full\" | \"half\"",
        "references": {
          "Width": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the width of the button, defaults to auto"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"auto\""
    }
  }; }
  static get states() { return {
    "hasContent": {},
    "hasLoader": {}
  }; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "loading",
      "methodName": "loadingChanged"
    }]; }
}
