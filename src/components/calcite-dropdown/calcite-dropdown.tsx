import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  VNode,
  Watch
} from "@stencil/core";
import { DropdownPlacement, ItemKeyboardEvent } from "./interfaces";

import { focusElement } from "../../utils/dom";
import {
  positionFloatingUI,
  FloatingCSS,
  OverlayPositioning,
  FloatingUIComponent,
  connectFloatingUI,
  disconnectFloatingUI
} from "../../utils/floating-ui";
import { Scale } from "../interfaces";
import { DefaultDropdownPlacement, SLOTS } from "./resources";
import { createObserver } from "../../utils/observers";

/**
 * @slot - A slot for adding `calcite-dropdown-group`s or `calcite-dropdown-item`s.
 * @slot dropdown-trigger - A slot for the element that triggers the dropdown.
 */
@Component({
  tag: "calcite-dropdown",
  styleUrl: "calcite-dropdown.scss",
  shadow: true
})
export class CalciteDropdown implements FloatingUIComponent {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteDropdownElement;

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /** Opens or closes the dropdown */
  @Prop({ reflect: true, mutable: true }) active = false;

  @Watch("active")
  activeHandler(): void {
    this.reposition();
  }

  /**
   allow the dropdown to remain open after a selection is made
   if the selection-mode of the selected item's containing group is "none", the dropdown will always close
   */
  @Prop({ reflect: true }) disableCloseOnSelect = false;

  /** is the dropdown disabled  */
  @Prop({ reflect: true }) disabled = false;

  /**
   specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -
   this value does not include groupTitles passed to calcite-dropdown-group
  */
  @Prop() maxItems = 0;

  @Watch("maxItems")
  maxItemsHandler(): void {
    this.reposition();
  }

  /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
  @Prop() overlayPositioning: OverlayPositioning = "absolute";

  /**
   * Determines where the dropdown will be positioned relative to the button.
   * @default "bottom-leading"
   */
  @Prop({ reflect: true }) placement: DropdownPlacement = DefaultDropdownPlacement;

  @Watch("placement")
  placementHandler(): void {
    this.reposition();
  }

  /** specify the scale of dropdown, defaults to m */
  @Prop({ reflect: true }) scale: Scale = "m";

  /**
   * **read-only** The currently selected items
   *
   * @readonly
   */
  @Prop({ mutable: true }) selectedItems: HTMLCalciteDropdownItemElement[] = [];

  /** specify whether the dropdown is opened by hover or click of a trigger element */
  @Prop({ reflect: true }) type: "hover" | "click" = "click";

  /** specify the width of dropdown, defaults to m */
  @Prop({ reflect: true }) width: Scale = "m";

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  connectedCallback(): void {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateItems();
    this.reposition();
  }

  componentDidLoad(): void {
    this.reposition();
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
    disconnectFloatingUI(this);
  }

  render(): VNode {
    const { active } = this;

    return (
      <Host tabIndex={this.disabled ? -1 : null}>
        <div
          class="calcite-dropdown-trigger-container"
          onClick={this.openCalciteDropdown}
          onKeyDown={this.keyDownHandler}
          ref={this.setReferenceEl}
        >
          <slot
            aria-expanded={active.toString()}
            aria-haspopup="true"
            name={SLOTS.dropdownTrigger}
          />
        </div>
        <div
          aria-hidden={(!active).toString()}
          class="calcite-dropdown-wrapper"
          ref={this.setFloatingEl}
        >
          <div
            class={{
              ["calcite-dropdown-content"]: true,
              [FloatingCSS.animation]: true,
              [FloatingCSS.animationActive]: active
            }}
            onTransitionEnd={this.transitionEnd}
            ref={this.setScrollerEl}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Updates the position of the component. */
  @Method()
  async reposition(): Promise<void> {
    this.setMaxScrollerHeight();

    const { floatingEl, referenceEl, placement, overlayPositioning } = this;

    return positionFloatingUI({
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      type: "menu"
    });
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** fires when a dropdown item has been selected or deselected **/
  @Event() calciteDropdownSelect: EventEmitter<void>;

  /** fires when a dropdown has been opened **/
  @Event() calciteDropdownOpen: EventEmitter<void>;

  /** fires when a dropdown has been closed **/
  @Event() calciteDropdownClose: EventEmitter<void>;

  @Listen("click", { target: "window" })
  closeCalciteDropdownOnClick(e: Event): void {
    if (!this.active || e.composedPath().includes(this.el)) {
      return;
    }

    this.closeCalciteDropdown();
  }

  @Listen("calciteDropdownCloseRequest")
  closeCalciteDropdownOnEvent(): void {
    this.closeCalciteDropdown();
  }

  @Listen("calciteDropdownOpen", { target: "window" })
  closeCalciteDropdownOnOpenEvent(e: Event): void {
    if (e.composedPath().includes(this.el)) {
      return;
    }

    this.active = false;
  }

  @Listen("mouseenter")
  mouseEnterHandler(): void {
    if (this.type === "hover") {
      this.openCalciteDropdown();
    }
  }

  @Listen("mouseleave")
  mouseLeaveHandler(): void {
    if (this.type === "hover") {
      this.closeCalciteDropdown();
    }
  }

  @Listen("calciteDropdownItemKeyEvent")
  calciteDropdownItemKeyEvent(e: CustomEvent<ItemKeyboardEvent>): void {
    const { keyboardEvent } = e.detail;
    // handle edge
    const target = keyboardEvent.target as HTMLCalciteDropdownItemElement;
    const itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
    const isFirstItem = this.itemIndex(itemToFocus) === 0;
    const isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
    switch (keyboardEvent.key) {
      case "Tab":
        if (isLastItem && !keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        } else if (isFirstItem && keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        } else if (keyboardEvent.shiftKey) {
          this.focusPrevItem(itemToFocus);
        } else {
          this.focusNextItem(itemToFocus);
        }
        break;
      case "ArrowDown":
        this.focusNextItem(itemToFocus);
        break;
      case "ArrowUp":
        this.focusPrevItem(itemToFocus);
        break;
      case "Home":
        this.focusFirstItem();
        break;
      case "End":
        this.focusLastItem();
        break;
    }

    e.stopPropagation();
  }

  @Listen("calciteDropdownItemSelect")
  handleItemSelect(event: CustomEvent): void {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (
      !this.disableCloseOnSelect ||
      event.detail.requestedDropdownGroup.selectionMode === "none"
    ) {
      this.closeCalciteDropdown();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  items: HTMLCalciteDropdownItemElement[] = [];

  /** trigger elements */
  triggers: HTMLSlotElement[];

  floatingEl: HTMLDivElement;

  referenceEl: HTMLDivElement;

  activeTransitionProp = "visibility";

  scrollerEl: HTMLDivElement;

  mutationObserver = createObserver("mutation", () => this.updateItems());

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  updateItems = (): void => {
    this.updateSelectedItems();

    this.triggers = Array.from(
      this.el.querySelectorAll("[slot=dropdown-trigger]")
    ) as HTMLSlotElement[];

    this.items = Array.from(
      this.el.querySelectorAll<HTMLCalciteDropdownItemElement>("calcite-dropdown-item")
    );

    this.reposition();
  };

  setMaxScrollerHeight = (): void => {
    const { scrollerEl } = this;

    if (scrollerEl) {
      const maxScrollerHeight = this.getMaxScrollerHeight();
      scrollerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
    }
  };

  setScrollerEl = (scrollerEl: HTMLDivElement): void => {
    this.scrollerEl = scrollerEl;
  };

  transitionEnd = (event: TransitionEvent): void => {
    if (event.propertyName === this.activeTransitionProp) {
      this.active ? this.calciteDropdownOpen.emit() : this.calciteDropdownClose.emit();
    }
  };

  setReferenceEl = (el: HTMLDivElement): void => {
    this.referenceEl = el;
    connectFloatingUI(this, "referenceEl");
  };

  setFloatingEl = (el: HTMLDivElement): void => {
    this.floatingEl = el;
    connectFloatingUI(this, "floatingEl");
  };

  private keyDownHandler = (e: KeyboardEvent): void => {
    const target = e.target as HTMLSlotElement;
    const key = e.key;
    if (
      this.triggers.includes(target) ||
      this.triggers.some((trigger) => trigger.contains(target))
    ) {
      if (target.nodeName !== "BUTTON" && target.nodeName !== "CALCITE-BUTTON") {
        switch (key) {
          case " ":
          case "Enter":
            this.openCalciteDropdown();
            break;
          case "Escape":
            this.closeCalciteDropdown();
            break;
        }
      } else if (this.active && (key === "Escape" || (e.shiftKey && key === "Tab"))) {
        this.closeCalciteDropdown();
      }
    }
  };

  private updateSelectedItems(): void {
    const items = Array.from(
      this.el.querySelectorAll<HTMLCalciteDropdownItemElement>("calcite-dropdown-item")
    );
    this.selectedItems = items.filter((item) => item.active);
  }

  private getMaxScrollerHeight(): number {
    const groups = Array.from(
      this.el.querySelectorAll<HTMLCalciteDropdownGroupElement>("calcite-dropdown-group")
    );

    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    let groupHeaderHeight: number;

    groups.forEach((group) => {
      if (maxItems > 0 && itemsToProcess < maxItems) {
        Array.from(group.children).forEach((item: HTMLCalciteDropdownItemElement, index) => {
          if (index === 0) {
            if (isNaN(groupHeaderHeight)) {
              groupHeaderHeight = item.offsetTop;
            }

            maxScrollerHeight += groupHeaderHeight;
          }

          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });

    return maxScrollerHeight;
  }

  private closeCalciteDropdown() {
    this.active = false;
    focusElement(this.triggers[0]);
  }

  private focusOnFirstActiveOrFirstItem = (): void => {
    this.getFocusableElement(this.items.find((item) => item.active) || this.items[0]);
  };

  private focusFirstItem() {
    const firstItem = this.items[0];
    this.getFocusableElement(firstItem);
  }

  private focusLastItem() {
    const lastItem = this.items[this.items.length - 1];
    this.getFocusableElement(lastItem);
  }

  private focusNextItem(e): void {
    const index = this.itemIndex(e);
    const nextItem = this.items[index + 1] || this.items[0];
    this.getFocusableElement(nextItem);
  }

  private focusPrevItem(e): void {
    const index = this.itemIndex(e);
    const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
    this.getFocusableElement(prevItem);
  }

  private itemIndex(e): number {
    return this.items.indexOf(e);
  }

  private getFocusableElement(item): void {
    if (!item) {
      return;
    }

    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : (item as HTMLCalciteDropdownItemElement);

    focusElement(target);
  }

  private toggleOpenEnd = (): void => {
    this.focusOnFirstActiveOrFirstItem();
    this.el.removeEventListener("calciteDropdownOpen", this.toggleOpenEnd);
  };

  private openCalciteDropdown = () => {
    this.active = !this.active;

    if (this.active) {
      this.el.addEventListener("calciteDropdownOpen", this.toggleOpenEnd);
    }
  };
}
