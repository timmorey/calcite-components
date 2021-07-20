import { Component, Element, h, Host, Prop } from "@stencil/core";
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
  tag: "calcite-nav-app-switcher",
  styleUrl: "calcite-nav-app-switcher.scss",
  shadow: true
})
export class CalciteNavAppSwitcher {
  @Element() el: HTMLElement;

  /** Color for the alert (will apply to top border and icon) */
  @Prop({ reflect: true }) color: "blue" | "green" | "red" | "yellow" = "blue";

  render() {
    const dir = getElementDir(this.el);

    return (
      <Host dir={dir}>
        <calcite-value-list dir="ltr" drag-enabled="">
          <calcite-value-list-item label="ArcGIS Online" value="ArcGIS Online">
            <calcite-action
              slot="actions-end"
              label="click-me"
              text="test"
              appearance="clear"
              scale="s"
              icon="arrow-right"
            />
          </calcite-value-list-item>
          <img slot="actions-start" src={"../../../assets/images/online-logo.svg"} />
        </calcite-value-list>
        <calcite-nav-app-switcher-group group-title="current app">
          <calcite-nav-app-switcher-item href="" imgSrc={"../../../assets/images/online-logo.svg"}>
            ArcGIS Online
          </calcite-nav-app-switcher-item>
        </calcite-nav-app-switcher-group>
        <calcite-nav-app-switcher-group is-draggable group-title="my favorite apps">
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/workforce-logo.svg"}
          >
            Workforce
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/dashboard-logo.svg"}
          >
            Operations Dashboard
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item href="" imgSrc={"../../../assets/images/tracker-logo.svg"}>
            Tracker
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/appstudio-logo.svg"}
          >
            AppStudio
          </calcite-nav-app-switcher-item>
        </calcite-nav-app-switcher-group>

        <calcite-nav-app-switcher-group type="secondary" is-draggable group-title="more Esri apps">
          <calcite-nav-app-switcher-item href="">
            Find more apps on Marketplace
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/survey123-logo.svg"}
          >
            Survey123
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/quickcapture-logo.svg"}
          >
            QuickCapture
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/storymaps-logo.svg"}
          >
            StoryMaps
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item href="" imgSrc={"../../../assets/images/hub-logo.svg"}>
            Hub
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/businessanalyst-logo.svg"}
          >
            Business Analyst
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/geoplanner-logo.svg"}
          >
            Geo Planner
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/explorer-logo.svg"}
          >
            Explorer
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/excalibur-logo.svg"}
          >
            Excalibur
          </calcite-nav-app-switcher-item>
        </calcite-nav-app-switcher-group>

        <calcite-nav-app-switcher-group
          type="secondary"
          is-draggable
          group-title="Community Apps you've logged in to"
        >
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/survey123-logo.svg"}
          >
            Geo Jobe
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/quickcapture-logo.svg"}
          >
            Third Party Thing
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/storymaps-logo.svg"}
          >
            Another Integration
          </calcite-nav-app-switcher-item>{" "}
          <calcite-nav-app-switcher-item
            href=""
            imgSrc={"../../../assets/images/storymaps-logo.svg"}
          >
            Another Integration
          </calcite-nav-app-switcher-item>
          <calcite-nav-app-switcher-item href="">Manage this list</calcite-nav-app-switcher-item>
        </calcite-nav-app-switcher-group>
      </Host>
    );
  }
}
