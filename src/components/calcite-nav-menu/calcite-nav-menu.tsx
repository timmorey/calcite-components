import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";

@Component({
  tag: "calcite-nav-menu",
  styleUrl: "calcite-nav-menu.scss",
  shadow: true
})
//--------------------------------------------------------------------------
//
//  Element
//
//--------------------------------------------------------------------------
export class CalciteNavMenu {
  @Element() el: HTMLCalciteNavMenuElement;

  private mobileView: boolean = false;

  @Listen("resize", { target: "window" }) determineWidth() {
    let windowWidth = document.body.clientWidth;
    this.mobileView = windowWidth < 480;
    console.log(this.mobileView);
  }

  render() {
    return <Host>{this.mobileView ? <slot /> : <slot />}</Host>;
  }
}
