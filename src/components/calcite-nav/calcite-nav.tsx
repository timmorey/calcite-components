import {
  Component,
  Element,
  h,
  Host,
  Event,
  EventEmitter,
  Listen,
  Prop,
  State,
  VNode
} from "@stencil/core";

@Component({
  tag: "calcite-nav",
  styleUrl: "calcite-nav.scss",
  shadow: true
})
export class CalciteNav {
  /**
   * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
   * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
   * @slot expand-tooltip - Used to set the tooltip for the expand toggle.
   */
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteNavElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** Speficy the scale of the loader. Defaults to "m" */
  @Prop() type: "primary" | "secondary" = "primary";
  @State() drawerActive: boolean = false;
  @Event() drawerUpdated: EventEmitter;

  @Listen("calciteShellDrawerToggleEvent") listenForEvent(e) {
    this.drawerUpdated.emit(e.detail.requestedContent);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  //todo add watcher to slot refs to update?
  render(): VNode {
    //const progress =
    //  this.active && this.dismiss ? <div class="alert-dismiss"></div> : "";
    // todo add drawer
    return (
      <Host>
        {!!this.el.querySelector('[slot="nav-logo"]') ? <slot name="nav-logo" /> : null}
        {!!this.el.querySelector('[slot="nav-actions-start"]') ? (
          <slot name="nav-actions-start" />
        ) : null}
        {!!this.el.querySelector('[slot="nav-menu-start"]') ? <slot name="nav-menu-start" /> : null}
        {!!this.el.querySelector('[slot="nav-menu-end"]') ? <slot name="nav-menu-end" /> : null}
        {!!this.el.querySelector('[slot="nav-actions-end"]') ? (
          <slot name="nav-actions-end" />
        ) : null}
        {!!this.el.querySelector('[slot="nav-profile"]') ? <slot name="nav-profile" /> : null}
      </Host>
    );
  }
}
