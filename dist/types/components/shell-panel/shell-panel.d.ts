import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding content to the shell panel.
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 */
export declare class ShellPanel implements ConditionalSlotComponent {
  /**
   * Hide the content panel.
   */
  collapsed: boolean;
  watchHandler(): void;
  /**
   * This property makes the content area appear like a "floating" panel.
   */
  detached: boolean;
  /**
   * Specifies the maximum height of the contents when detached.
   */
  detachedHeightScale: Scale;
  /**
   * This sets width of the content area.
   */
  widthScale: Scale;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: Position;
  /**
   * Accessible label for resize separator.
   * @default "Resize"
   */
  intlResize: string;
  /**
   * This property makes the content area resizable if the calcite-shell-panel is not 'detached'.
   */
  resizable: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  el: HTMLCalciteShellPanelElement;
  contentWidth: number;
  initialContentWidth: number;
  initialClientX: number;
  contentEl: HTMLDivElement;
  separatorEl: HTMLDivElement;
  contentWidthMax: number;
  contentWidthMin: number;
  step: number;
  stepMultiplier: number;
  /**
   * Emitted when collapse has been toggled.
   */
  calciteShellPanelToggle: EventEmitter;
  renderHeader(): VNode;
  render(): VNode;
  setContentWidth(width: number): void;
  updateAriaValues(): void;
  storeContentEl: (contentEl: HTMLDivElement) => void;
  getKeyAdjustedWidth: (event: KeyboardEvent) => number | null;
  separatorKeyDown: (event: KeyboardEvent) => void;
  separatorPointerMove: (event: PointerEvent) => void;
  separatorPointerUp: (event: PointerEvent) => void;
  setInitialContentWidth: () => void;
  separatorPointerDown: (event: PointerEvent) => void;
  connectSeparator: (separatorEl: HTMLDivElement) => void;
  disconnectSeparator: () => void;
}
