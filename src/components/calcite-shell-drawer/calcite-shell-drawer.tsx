import { Component, Element, h, Host, Listen, Prop } from "@stencil/core";
import { getElementDir } from "../../utils/dom";

@Component({
  tag: "calcite-shell-drawer",
  styleUrl: "calcite-shell-drawer.scss",
  shadow: true
})
export class CalciteShellDrawer {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) active: boolean;
  @Prop({ reflect: true, mutable: true }) requestedContent: string;

  /** Select theme (light or dark) */
  @Prop({ reflect: true }) theme: "light" | "dark";

  connectedCallback() {
    // prop validations
    let themes = ["dark", "light"];
    if (!themes.includes(this.theme)) this.theme = "light";
  }

  @Listen("drawerUpdated", { target: "body" })
  handleDrawer(e) {
    if (this.active === true && this.requestedContent === e.detail) {
      this.active = false;
    } else if (this.active === true && this.requestedContent !== e.detail) {
      this.requestedContent = e.detail;
    } else {
      this.active = true;
      this.requestedContent = e.detail;
    }
  }

  render() {
    const dir = getElementDir(this.el);

    const Tag = `calcite-shell-${this.requestedContent}`;

    return (
      <Host dir={dir}>
        <Tag />
      </Host>
    );
  }
}
