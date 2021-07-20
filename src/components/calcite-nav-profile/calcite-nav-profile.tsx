import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop } from "@stencil/core";
import { getElementDir } from "../../utils/dom";

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
  tag: "calcite-nav-profile",
  styleUrl: "calcite-nav-profile.scss",
  shadow: true
})
export class CalciteNavProfile {
  @Element() el: HTMLElement;

  /** Select theme (light or dark) */
  @Prop({ reflect: true }) theme: "light" | "dark";

  @Prop({ reflect: true }) srcTitle: "light" | "name" = "name";

  @Prop({ reflect: true }) src?;
  @Prop({ reflect: true }) userName?;
  @Prop({ reflect: true }) userOrganization?;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() calciteShellDrawerToggleEvent: EventEmitter;
  @Listen("click") onClick() {
    this.calciteShellDrawerToggleEvent.emit({
      requestedContent: "profile-menu"
    });
  }
  render() {
    return (
      <Host tabIndex={0}>
        <calcite-avatar full-name={this.userName}></calcite-avatar>
        <div class="user-details">
          <span class="user-name">{this.userName}</span>
          <span class="user-organization">{this.userOrganization}</span>
        </div>
      </Host>
    );
  }
}
