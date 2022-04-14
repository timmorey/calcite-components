import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { HeadingLevel } from "../functional/Heading";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding custom content.
 * @slot header-actions-start - A slot for adding actions or content to the start side of the panel header.
 * @slot header-actions-end - A slot for adding actions or content to the end side of the panel header.
 * @slot header-content - A slot for adding custom content to the header.
 * @slot header-menu-actions - A slot for adding an overflow menu with actions inside a dropdown.
 * @slot fab - A slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer-actions - A slot for adding buttons to the footer.
 * @slot footer - A slot for adding custom content to the footer.
 */
export declare class Panel implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * Hides the panel.
   */
  dismissed: boolean;
  dismissedHandler(): void;
  /**
   * When provided, this method will be called before it is removed from the parent flow.
   */
  beforeBack?: () => Promise<void>;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * Displays a close button in the trailing side of the header.
   */
  dismissible: boolean;
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  /**
   * Shows a back button in the header.
   */
  showBackButton: boolean;
  /**
   * 'Back' text string.
   */
  intlBack?: string;
  /**
   * Specifies the maximum height of the panel.
   */
  heightScale?: Scale;
  /**
   * This sets width of the panel.
   */
  widthScale?: Scale;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true.
   */
  intlClose?: string;
  /**
   * 'Options' text string for the actions menu.
   */
  intlOptions?: string;
  /**
   * Heading text.
   */
  heading?: string;
  /**
   * Summary text. A description displayed underneath the heading.
   */
  summary?: string;
  /**
   * Opens the action menu.
   */
  menuOpen: boolean;
  componentDidRender(): void;
  el: HTMLCalcitePanelElement;
  backButtonEl: HTMLCalciteActionElement;
  dismissButtonEl: HTMLCalciteActionElement;
  containerEl: HTMLElement;
  panelScrollEl: HTMLElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Emitted when the close button has been clicked.
   */
  calcitePanelDismissedChange: EventEmitter;
  /**
   * Emitted when the content has been scrolled.
   */
  calcitePanelScroll: EventEmitter;
  /**
   * Emitted when the back button has been clicked.
   */
  calcitePanelBackClick: EventEmitter;
  setContainerRef: (node: HTMLElement) => void;
  setDismissRef: (node: HTMLCalciteActionElement) => void;
  setBackRef: (node: HTMLCalciteActionElement) => void;
  panelKeyDownHandler: (event: KeyboardEvent) => void;
  dismiss: () => void;
  panelScrollHandler: () => void;
  backButtonClick: () => void;
  /** Sets focus on the component. */
  setFocus(focusId?: "dismiss-button" | "back-button"): Promise<void>;
  /** Scrolls panel content to a particular set of coordinates.
   *
   * ```
   *   myCalcitePanel.scrollContentTo({
   *     left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *     top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *     behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   *   });
   * ```
   */
  scrollContentTo(options?: ScrollToOptions): Promise<void>;
  renderBackButton(): VNode;
  renderHeaderContent(): VNode;
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent(): VNode;
  renderHeaderStartActions(): VNode;
  renderHeaderActionsEnd(): VNode;
  renderMenu(): VNode;
  renderHeaderNode(): VNode;
  renderFooterNode(): VNode;
  renderContent(): VNode;
  renderFab(): VNode;
  render(): VNode;
}
