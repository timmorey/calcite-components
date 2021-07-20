import { Component, Element, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "calcite-nav-logo",
  styleUrl: "calcite-nav-logo.scss",
  shadow: true
})
export class CalciteNavLogo {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteNavLogoElement;
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Prop({ reflect: true }) srcTitle?;

  // app title for display
  @Prop({ reflect: true }) appName?;

  // todo image link
  @Prop({ reflect: true }) href?;
  // todo image link
  @Prop({ reflect: true }) src?;

  /** optionally used with icon, select where to position the icon */
  @Prop({ reflect: true }) textEnabled?: boolean;

  /** the title */
  @Prop({ reflect: true }) text?: string;

  render() {
    return (
      <Host tabIndex={0}>
        <a href={this.href} tabIndex={1}>
          <img src={this.src}></img>
          {this.text && this.textEnabled ? <span class="logo-text">{this.text}</span> : null}
        </a>
      </Host>
    );
  }
}
