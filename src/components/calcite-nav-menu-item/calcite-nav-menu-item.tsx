import { Component, Element, Event, EventEmitter, Fragment, h, Host, Prop } from "@stencil/core";
import { Position } from "../interfaces";
import { guid } from "../../utils/guid";

@Component({
  tag: "calcite-nav-menu-item",
  styleUrl: "calcite-nav-menu-item.scss",
  shadow: true
})
export class CalciteNavMenuItem {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLCalciteNavElement;

  @Prop({ reflect: true }) linktitle: "light" | "name" = "name";

  @Prop({ reflect: true }) href?;

  @Prop({ reflect: true, mutable: true }) breadcrumb?: boolean = false;

  @Prop({ reflect: true, mutable: true }) active: boolean;

  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  @Prop({ reflect: true }) icon?: string;

  /** flip the icon in rtl */
  @Prop({ reflect: true }) iconFlipRtl?: boolean;

  /** optionally used with icon, select where to position the icon */
  @Prop({ reflect: true }) iconPosition?: Position = "start";

  /** optionally used with icon, select where to position the icon */
  @Prop({ reflect: true }) textEnabled?: boolean;

  /** the title */
  @Prop({ reflect: true }) text?: string;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * @internal
   */
  @Event() calciteMenuItemSelected: EventEmitter;

  guid = `calcite-nav-menu-item-${guid()}`;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  render() {
    const iconEl = (
      <calcite-icon
        class={`icon${this.iconPosition === "end" ? " icon-end" : " icon-start"}`}
        flipRtl={this.iconFlipRtl}
        icon={this.icon}
        scale="s"
      />
    );

    return (
      <Host tabIndex={0}>
        <a href={this.href ? this.href : null}>
          {this.icon && this.iconPosition === "start" ? iconEl : null}
          {this.text && this.textEnabled ? this.text : null}
          {this.icon && this.iconPosition === "end" ? iconEl : null}
          {this.breadcrumb ? (
            <calcite-icon class="icon icon-breadcrumb" icon="chevron-right" scale="s" />
          ) : null}
        </a>
      </Host>
    );
  }
}
