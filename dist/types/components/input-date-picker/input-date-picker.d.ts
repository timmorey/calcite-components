import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { OverlayPositioning, ComputedPlacement, MenuPlacement } from "../../utils/popper";
import { StrictModifiers } from "@popperjs/core";
import { DateRangeChange } from "../date-picker/interfaces";
import { InteractiveComponent } from "../../utils/interactive";
export declare class InputDatePicker implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteInputDatePickerElement;
  /**
   * When false, the component won't be interactive.
   */
  disabled: boolean;
  handleDisabledChange(value: boolean): void;
  /** Selected date */
  value: string | string[];
  valueHandler(value: string | string[]): void;
  /**
   * Defines the available placements that can be used when a flip occurs.
   */
  flipPlacements?: ComputedPlacement[];
  flipPlacementsHandler(): void;
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  /** Selected date as full date object*/
  valueAsDate?: Date | Date[];
  /**
   * Selected start date as full date object
   * @deprecated use valueAsDate instead
   */
  startAsDate?: Date;
  /**
   * Selected end date as full date object
   * @deprecated use valueAsDate instead
   */
  endAsDate?: Date;
  /** Earliest allowed date as full date object */
  minAsDate?: Date;
  /** Latest allowed date as full date object */
  maxAsDate?: Date;
  /** Earliest allowed date ("yyyy-mm-dd") */
  min?: string;
  onMinChanged(min: string): void;
  /** Latest allowed date ("yyyy-mm-dd") */
  max?: string;
  onMaxChanged(max: string): void;
  /** Expand or collapse when calendar does not have input */
  active: boolean;
  activeHandler(): void;
  /**
   * The picker's name. Gets submitted with the form.
   */
  name: string;
  /** Localized string for "previous month" (used for aria label)
   * @default "Previous month"
   */
  intlPrevMonth?: string;
  /** Localized string for "next month" (used for aria label)
   * @default "Next month"
   */
  intlNextMonth?: string;
  /** Localized string for "year" (used for aria label)
   * @default "Year"
   */
  intlYear?: string;
  /** BCP 47 language tag for desired language and country format */
  locale?: string;
  /** specify the scale of the date picker */
  scale: "s" | "m" | "l";
  /**
   * Determines where the date-picker component will be positioned relative to the input.
   * @default "bottom-leading"
   */
  placement: MenuPlacement;
  /** Range mode activation */
  range: boolean;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /**
   * Selected start date
   * @deprecated use value instead
   */
  start?: string;
  /**
   * Selected end date
   * @deprecated use value instead
   */
  end?: string;
  /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
  overlayPositioning: OverlayPositioning;
  /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
  proximitySelectionDisabled: boolean;
  /** Layout */
  layout: "horizontal" | "vertical";
  handleDateOrRangeChange(): void;
  calciteDaySelectHandler(): void;
  /**
   * Trigger calcite date change when a user changes the date.
   *
   * @deprecated use `calciteInputDatePickerChange` instead.
   */
  calciteDatePickerChange: EventEmitter<Date>;
  /**
   * Trigger calcite date change when a user changes the date range.
   * @see [DateRangeChange](https://github.com/Esri/calcite-components/blob/master/src/components/calcite-date-picker/interfaces.ts#L1)
   *
   * @deprecated use `calciteInputDatePickerChange` instead.
   */
  calciteDatePickerRangeChange: EventEmitter<DateRangeChange>;
  /**
   * This event fires when the input date picker value changes.
   */
  calciteInputDatePickerChange: EventEmitter<void>;
  /**
   * @internal
   */
  calciteInputDatePickerOpen: EventEmitter;
  /**
   * @internal
   */
  calciteInputDatePickerClose: EventEmitter;
  /** Updates the position of the component. */
  setFocus(): Promise<void>;
  /** Updates the position of the component. */
  reposition(): Promise<void>;
  connectedCallback(): void;
  componentWillLoad(): Promise<void>;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
  filteredFlipPlacements: ComputedPlacement[];
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: InputDatePicker["value"];
  focusedInput: "start" | "end";
  private localeData;
  private startInput;
  private endInput;
  private popper;
  private menuEl;
  private referenceEl;
  private startWrapper;
  private endWrapper;
  private activeTransitionProp;
  setReferenceEl(): void;
  setFilteredPlacements: () => void;
  onLabelClick(): void;
  transitionEnd: (event: TransitionEvent) => void;
  setStartInput: (el: HTMLCalciteInputElement) => void;
  setEndInput: (el: HTMLCalciteInputElement) => void;
  deactivate: () => void;
  keyUpHandler: (e: KeyboardEvent) => void;
  inputBlur: (e: CustomEvent<any>) => void;
  startInputFocus: () => void;
  endInputFocus: () => void;
  inputInput: (e: CustomEvent<any>) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  setStartWrapper: (el: HTMLDivElement) => void;
  setEndWrapper: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  startWatcher(start: string): void;
  endWatcher(end: string): void;
  private loadLocaleData;
  private clearCurrentValue;
  /**
   * If inputted string is a valid date, update value/active
   */
  private input;
  /**
   * Clean up invalid date from input on blur
   */
  private blur;
  /**
   * Event handler for when the selected date changes
   */
  handleDateChange: (event: CustomEvent<Date>) => void;
  private shouldFocusRangeStart;
  private shouldFocusRangeEnd;
  private handleDateRangeChange;
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  private getDateFromInput;
}
