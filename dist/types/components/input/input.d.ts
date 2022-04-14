import { Scale, Status } from "../interfaces";
import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { InputPlacement } from "./interfaces";
import { Position } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
declare type NumberNudgeDirection = "up" | "down";
/**
 * @slot action - A slot for positioning a button next to an input
 */
export declare class Input implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteInputElement;
  /** specify the alignment of the value of the input */
  alignment: Position;
  /** should the input autofocus */
  autofocus: boolean;
  /** optionally display a clear button that displays when field has a value
   * shows by default for search, time, date
   * will not display for type="textarea" */
  clearable: boolean;
  /** is the input disabled  */
  disabled: boolean;
  disabledWatcher(): void;
  /** for number values, displays the locale's group separator */
  groupSeparator: boolean;
  /** when true, the component will not be visible */
  hidden: boolean;
  /** when used as a boolean set to true, show a default recommended icon for certain
   * input types (tel, password, email, date, time, search). You can also pass a
   * calcite-ui-icon name to this prop to display a requested icon for any input type */
  icon: string | boolean;
  /**
   * string to override English loading text
   * @default "Loading"
   */
  intlLoading?: string;
  /** flip the icon in rtl */
  iconFlipRtl: boolean;
  /** Applies to the aria-label attribute on the button or hyperlink */
  label?: string;
  /** specify if the input is in loading state */
  loading: boolean;
  /** BCP 47 language tag for desired language and country format */
  locale?: string;
  /**
   * Toggles locale formatting for numbers.
   * @internal
   */
  localeFormat: boolean;
  /** input max */
  max?: number;
  /** watcher to update number-to-string for max */
  maxWatcher(): void;
  /** input min */
  min?: number;
  /** watcher to update number-to-string for min */
  minWatcher(): void;
  /**
   * Maximum length of text input.
   * @deprecated use maxLength instead
   */
  maxlength?: number;
  /** Maximum length of the input value */
  maxLength?: number;
  /** Minimum length of the text input */
  minLength?: number;
  /** The name of the input */
  name: string;
  /** specify the placement of the number buttons */
  numberButtonType?: InputPlacement;
  /** explicitly whitelist placeholder attribute */
  placeholder: string;
  /** optionally add prefix  */
  prefixText?: string;
  /** When true, a field cannot be modified. */
  readOnly: boolean;
  /** is the input required */
  required: boolean;
  /** specify the scale of the input, defaults to m */
  scale: Scale;
  /** specify the status of the input field, determines message and icons */
  status: Status;
  /** input step */
  step?: number | "any";
  /** optionally add suffix  **/
  suffixText?: string;
  /** @internal adds inline styles for text input when slotted in calcite-inline-editable */
  editingEnabled: boolean;
  /**
   * specify the input type
   *
   * Note that the following types add type-specific icons by default: `date`, `email`, `password`, `search`, `tel`, `time`
   */
  type: "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "number" | "password" | "search" | "tel" | "text" | "textarea" | "time" | "url" | "week";
  /** input value */
  value: string;
  valueWatcher(newValue: string): void;
  updateRequestedIcon(): void;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Input["value"];
  inlineEditableEl: HTMLCalciteInlineEditableElement;
  /** keep track of the rendered child type */
  private childEl?;
  /** keep track of the rendered child type */
  private childElType?;
  /** number text input element for locale */
  private childNumberEl?;
  /** whether the value of the input was changed as a result of user typing or not */
  private internalValueChange;
  get isClearable(): boolean;
  get isTextarea(): boolean;
  private minString?;
  private maxString?;
  private preFocusValue;
  private previousValue;
  /** the computed icon to render */
  private requestedIcon?;
  private nudgeNumberValueIntervalId;
  mutationObserver: MutationObserver;
  localizedValue: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentShouldUpdate(newValue: string, oldValue: string, property: string): boolean;
  componentDidRender(): void;
  /**
   * @internal
   */
  calciteInputFocus: EventEmitter;
  /**
   * @internal
   */
  calciteInputBlur: EventEmitter;
  /**
   * This event fires each time a new value is typed.
   */
  calciteInputInput: EventEmitter;
  /**
   * This event fires each time a new value is typed and committed.
   */
  calciteInputChange: EventEmitter<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  keyDownHandler: (event: KeyboardEvent) => void;
  onLabelClick(): void;
  incrementOrDecrementNumberValue(direction: NumberNudgeDirection, inputMax: number | null, inputMin: number | null, nativeEvent: KeyboardEvent | MouseEvent): void;
  private clearInputValue;
  private inputBlurHandler;
  private inputFocusHandler;
  private inputInputHandler;
  private inputKeyDownHandler;
  private inputNumberInputHandler;
  private inputNumberKeyDownHandler;
  private nudgeNumberValue;
  private numberButtonMouseUpAndMouseOutHandler;
  private numberButtonMouseDownHandler;
  onFormReset(): void;
  syncHiddenFormInput(input: HTMLInputElement): void;
  private setChildElRef;
  private setChildNumberElRef;
  private setDisabledAction;
  private setInputValue;
  private setPreviousValue;
  private setValue;
  private inputKeyUpHandler;
  private warnAboutInvalidNumberValue;
  render(): VNode;
}
export {};
