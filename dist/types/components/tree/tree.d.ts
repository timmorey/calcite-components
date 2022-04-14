import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TreeItemSelectDetail } from "../tree-item/interfaces";
import { TreeSelectDetail, TreeSelectionMode } from "./interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for `calcite-tree-item` elements.
 */
export declare class Tree {
  el: HTMLCalciteTreeElement;
  /** Display indentation guide lines */
  lines: boolean;
  /** Display input
   * @deprecated use "ancestors" selection-mode for checkbox input
   */
  inputEnabled: boolean;
  /** @internal If this tree is nested within another tree, set to false */
  child: boolean;
  /** Specify the scale of the tree, defaults to m */
  scale: Scale;
  /** Customize how tree selection works (single, multi, children, multi-children, ancestors)
   * @default "single"
   * @see [TreeSelectionMode](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L5)
   */
  selectionMode: TreeSelectionMode;
  componentWillRender(): void;
  render(): VNode;
  onFocus(): void;
  onFocusIn(event: FocusEvent): void;
  onFocusOut(event: FocusEvent): void;
  onClick(e: CustomEvent<TreeItemSelectDetail>): void;
  keyDownHandler(event: KeyboardEvent): void;
  updateAncestorTree(e: CustomEvent<TreeItemSelectDetail>): void;
  /**
   * Emitted when user selects/deselects tree items. An object including an array of selected items will be passed in the event's `detail` property.
   * @see [TreeSelectDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L1)
   */
  calciteTreeSelect: EventEmitter<TreeSelectDetail>;
  getRootTabIndex(): number;
}
