import { Component, Element, h, Host, Prop } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import Sortable from "sortablejs";

@Component({
  tag: "calcite-nav-app-switcher-group",
  styleUrl: "calcite-nav-app-switcher-group.scss",
  shadow: true
})
export class CalciteNavAppSwitcherGroup {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) type: "primary" | "secondary" = "primary";

  @Prop() groupTitle?: string;
  @Prop({ reflect: true }) isDraggable: boolean;

  private sortables: Sortable[] = [];

  componentDidLoad() {
    this.sortables.push(
      Sortable.create(this.el, {
        group: ".calcite-nav-app-drag-group",
        handle: `.drag-handle`,
        draggable: "calcite-nav-app-switcher-item",
        onUpdate: () => {
          //       this.items = Array.from(this.el.querySelectorAll("calcite-nav-app-switcher-group"));
          //         const values = this.items.map((item) => item.value);
          //         this.calciteListOrderChange.emit(values);
        }
      })
    );
  }

  render() {
    const dir = getElementDir(this.el);

    return (
      <Host dir={dir} class={this.isDraggable ? "calcite-nav-app-drag-group" : null}>
        {this.groupTitle ? (
          <div class="group-title">{this.groupTitle}</div>
        ) : (
          <div class="group-title">Placeholder</div>
        )}
        <slot />
      </Host>
    );
  }
}
