import { Component, Element, h, Host, Prop } from "@stencil/core";
import { getElementDir, getElementProp } from "../../utils/dom";

/** Alerts are not meant to be used inline with content, or be present in view on page load.
 * As such, calcite-alert relies on calcite-alerts for positioning - displaying an alert on its own
 * will lead to unexpected and potentially undesireable results
 */

/**
 * @slot alert-title - Title of the alert (optional)
 * @slot alert-message - Main text of the alert
 * @slot alert-link - Optional action to take from the alert (undo, try again, link to page, etc.)
 */

@Component({
  tag: "calcite-nav-app-switcher-item",
  styleUrl: "calcite-nav-app-switcher-item.scss",
  shadow: true
})
export class CalciteNavAppSwitcherItem {
  @Element() el: HTMLElement;

  @Prop() imgSrc?: string;

  @Prop() href?: string;
  @Prop() type?: string;
  @Prop() isDraggable?;

  /** Color for the alert (will apply to top border and icon) */
  @Prop({ reflect: true }) color: "blue" | "green" | "red" | "yellow" = "blue";

  /** Select theme (light or dark) */
  @Prop({ reflect: true }) theme: "light" | "dark";

  connectedCallback() {
    // prop validations
    let colors = ["blue", "red", "green", "yellow"];
    if (!colors.includes(this.color)) this.color = "blue";

    let themes = ["dark", "light"];
    if (!themes.includes(this.theme)) this.theme = "light";
  }

  componentWillLoad() {
    const type2 = getElementProp(this.el, "type", "primary");
    this.isDraggable = type2;
  }
  render() {
    const dir = getElementDir(this.el);

    const type = getElementProp(this.el, "type", "primary");
    //todo wrapper with handle and slot/image as flex siblings so handle cna be full height
    return (
      <Host dir={dir} type={type}>
        {this.imgSrc ? <img class="item-image" src={this.imgSrc} /> : null}
        <slot />
        {this.isDraggable ? (
          <div class="drag-handle">
            <calcite-icon scale="s" icon="drag" />
          </div>
        ) : null}
      </Host>
    );
  }
}
