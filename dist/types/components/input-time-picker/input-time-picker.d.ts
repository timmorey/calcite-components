import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { PopperPlacement } from "../../utils/popper";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class InputTimePicker implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteInputTimePickerElement;
  /** The active state of the time input */
  active: boolean;
  activeHandler(): void;
  /** The disabled state of the time input */
  disabled: boolean;
  handleDisabledChange(value: boolean): void;
  /** aria-label for the hour input */
  intlHour?: string;
  /** aria-label for the hour down button */
  intlHourDown?: string;
  /** aria-label for the hour up button */
  intlHourUp?: string;
  /** aria-label for the meridiem (am/pm) input */
  intlMeridiem?: string;
  /** aria-label for the meridiem (am/pm) down button */
  intlMeridiemDown?: string;
  /** aria-label for the meridiem (am/pm) up button */
  intlMeridiemUp?: string;
  /** aria-label for the minute input */
  intlMinute?: string;
  /** aria-label for the minute down button */
  intlMinuteDown?: string;
  /** aria-label for the minute up button */
  intlMinuteUp?: string;
  /** aria-label for the second input */
  intlSecond?: string;
  /** aria-label for the second down button */
  intlSecondDown?: string;
  /** aria-label for the second up button */
  intlSecondUp?: string;
  /**
   * BCP 47 language tag for desired language and country format
   * @internal
   */
  locale: string;
  localeWatcher(newLocale: string): void;
  /** The name of the time input */
  name: string;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /** The scale (size) of the time input */
  scale: Scale;
  /**
   * Determines where the popover will be positioned relative to the input.
   * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
   */
  placement: PopperPlacement;
  /** number (seconds) that specifies the granularity that the value must adhere to */
  step: number;
  /** The selected time in UTC (always 24-hour format) */
  value: string;
  valueWatcher(newValue: string): void;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: InputTimePicker["value"];
  private calciteInputEl;
  private calciteTimePickerEl;
  /** whether the value of the input was changed as a result of user typing or not */
  private internalValueChange;
  private previousValidValue;
  private referenceElementId;
  localizedValue: string;
  /**
   * Fires when the time value is changed as a result of user input.
   */
  calciteInputTimePickerChange: EventEmitter<string>;
  private calciteInputBlurHandler;
  private calciteInputFocusHandler;
  private calciteInputInputHandler;
  clickHandler(event: MouseEvent): void;
  keyUpHandler(event: KeyboardEvent): void;
  timePickerBlurHandler(event: CustomEvent): void;
  private timePickerChangeHandler;
  timePickerFocusHandler(event: CustomEvent): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  onLabelClick(): void;
  private shouldIncludeSeconds;
  private setCalciteInputEl;
  private setCalciteTimePickerEl;
  private setInputValue;
  private setValue;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
