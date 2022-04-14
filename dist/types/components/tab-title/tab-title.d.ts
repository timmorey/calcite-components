import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "../tab/interfaces";
import { TabID, TabLayout, TabPosition } from "../tabs/interfaces";
import { FlipContext, Scale } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding text.
 */
export declare class TabTitle implements InteractiveComponent {
  el: HTMLCalciteTabTitleElement;
  /** Show this tab title as selected */
  active: boolean;
  /** Disable this tab title  */
  disabled: boolean;
  /** optionally pass an icon to display at the end of a tab title - accepts calcite ui icon names  */
  iconEnd?: string;
  /** flip the icon(s) in rtl */
  iconFlipRtl?: FlipContext;
  /** optionally pass an icon to display at the start of a tab title - accepts calcite ui icon names  */
  iconStart?: string;
  /** @internal Parent tabs component layout value */
  layout: TabLayout;
  /** @internal Parent tabs component or parent tab-nav component's position */
  position: TabPosition;
  /** @internal Parent tabs component or parent tab-nav component's scale */
  scale: Scale;
  /** @internal Parent tabs component bordered value */
  bordered: boolean;
  /**
   * Optionally include a unique name for the tab title,
   * be sure to also set this name on the associated tab.
   */
  tab?: string;
  activeTabChanged(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): VNode;
  componentDidLoad(): Promise<void>;
  componentDidRender(): void;
  internalTabChangeHandler(event: CustomEvent<TabChangeEventDetail>): void;
  onClick(): void;
  keyDownHandler(e: KeyboardEvent): void;
  /**
   * Fires when a specific tab is activated (`event.details`)
   * @see [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)
   */
  calciteTabsActivate: EventEmitter<TabChangeEventDetail>;
  /**
   * Fires when a specific tab is activated (`event.details`)
   * @see [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)
   * @internal
   */
  calciteInternalTabsActivate: EventEmitter<TabChangeEventDetail>;
  /**
   * @internal
   */
  calciteTabsFocusNext: EventEmitter;
  /**
   * @internal
   */
  calciteTabsFocusPrevious: EventEmitter;
  /**
   * @internal
   */
  calciteTabTitleRegister: EventEmitter<TabID>;
  /**
   * Return the index of this title within the nav
   */
  getTabIndex(): Promise<number>;
  /**
   * @internal
   */
  getTabIdentifier(): Promise<TabID>;
  /**
   * @internal
   */
  updateAriaInfo(tabIds?: string[], titleIds?: string[]): Promise<void>;
  /** watches for changing text content **/
  mutationObserver: MutationObserver;
  controls: string;
  /** determine if there is slotted text for styling purposes */
  hasText: boolean;
  parentTabNavEl: HTMLCalciteTabNavElement;
  parentTabsEl: HTMLCalciteTabsElement;
  updateHasText(): void;
  setupTextContentObserver(): void;
  emitActiveTab(userTriggered?: boolean): void;
  guid: string;
}
