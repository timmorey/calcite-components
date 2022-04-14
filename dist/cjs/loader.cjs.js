/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-98559b14.js');

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy(JSON.parse("[[\"calcite-action.cjs\",[[1,\"calcite-action\",{\"active\":[516],\"alignment\":[513],\"appearance\":[513],\"compact\":[516],\"disabled\":[516],\"icon\":[1],\"indicator\":[516],\"intlLoading\":[1,\"intl-loading\"],\"label\":[1],\"loading\":[516],\"scale\":[513],\"text\":[1],\"textEnabled\":[516,\"text-enabled\"],\"setFocus\":[64]}]]],[\"calcite-action-menu.cjs\",[[1,\"calcite-action-menu\",{\"expanded\":[516],\"flipPlacements\":[16],\"label\":[1],\"open\":[1540],\"overlayPositioning\":[1,\"overlay-positioning\"],\"placement\":[513],\"scale\":[513],\"activeMenuItemIndex\":[32],\"setFocus\":[64]},[[8,\"click\",\"closeCalciteActionMenuOnClick\"]]]]],[\"calcite-block_2.cjs\",[[1,\"calcite-block\",{\"collapsible\":[4],\"disabled\":[516],\"dragHandle\":[516,\"drag-handle\"],\"heading\":[1],\"headingLevel\":[2,\"heading-level\"],\"intlCollapse\":[1,\"intl-collapse\"],\"intlExpand\":[1,\"intl-expand\"],\"intlLoading\":[1,\"intl-loading\"],\"intlOptions\":[1,\"intl-options\"],\"loading\":[516],\"open\":[1540],\"status\":[513],\"summary\":[1]}],[1,\"calcite-block-section\",{\"intlCollapse\":[1,\"intl-collapse\"],\"intlExpand\":[1,\"intl-expand\"],\"open\":[1540],\"status\":[513],\"text\":[1],\"toggleDisplay\":[513,\"toggle-display\"]}]]],[\"calcite-value-list_2.cjs\",[[1,\"calcite-value-list\",{\"disabled\":[516],\"dragEnabled\":[516,\"drag-enabled\"],\"filterEnabled\":[516,\"filter-enabled\"],\"filterPlaceholder\":[513,\"filter-placeholder\"],\"group\":[1],\"loading\":[516],\"multiple\":[516],\"selectionFollowsFocus\":[4,\"selection-follows-focus\"],\"selectedValues\":[32],\"dataForFilter\":[32],\"getSelectedItems\":[64],\"setFocus\":[64]},[[0,\"focusout\",\"calciteListFocusOutHandler\"],[0,\"calciteListItemRemove\",\"calciteListItemRemoveHandler\"],[0,\"calciteListItemChange\",\"calciteListItemChangeHandler\"],[0,\"calciteListItemPropsChange\",\"calciteListItemPropsChangeHandler\"],[0,\"calciteListItemValueChange\",\"calciteListItemValueChangeHandler\"]]],[1,\"calcite-value-list-item\",{\"description\":[513],\"disabled\":[516],\"disableDeselect\":[4,\"disable-deselect\"],\"nonInteractive\":[516,\"non-interactive\"],\"handleActivated\":[1028,\"handle-activated\"],\"icon\":[513],\"label\":[513],\"metadata\":[16],\"removable\":[516],\"selected\":[1540],\"value\":[8],\"toggleSelected\":[64],\"setFocus\":[64]},[[0,\"calciteListItemChange\",\"calciteListItemChangeHandler\"]]]]],[\"calcite-action-bar.cjs\",[[1,\"calcite-action-bar\",{\"expandDisabled\":[516,\"expand-disabled\"],\"expanded\":[1540],\"intlExpand\":[1,\"intl-expand\"],\"intlCollapse\":[1,\"intl-collapse\"],\"overflowActionsDisabled\":[4,\"overflow-actions-disabled\"],\"position\":[513],\"scale\":[513],\"overflowActions\":[64],\"setFocus\":[64]}]]],[\"calcite-action-pad.cjs\",[[1,\"calcite-action-pad\",{\"expandDisabled\":[516,\"expand-disabled\"],\"expanded\":[1540],\"layout\":[513],\"intlExpand\":[1,\"intl-expand\"],\"intlCollapse\":[1,\"intl-collapse\"],\"position\":[513],\"scale\":[513],\"setFocus\":[64]}]]],[\"calcite-tip_3.cjs\",[[1,\"calcite-tip\",{\"dismissed\":[1540],\"nonDismissible\":[516,\"non-dismissible\"],\"heading\":[1],\"headingLevel\":[2,\"heading-level\"],\"selected\":[516],\"intlClose\":[1,\"intl-close\"]}],[1,\"calcite-tip-manager\",{\"closed\":[1540],\"headingLevel\":[2,\"heading-level\"],\"intlClose\":[1,\"intl-close\"],\"intlDefaultTitle\":[1,\"intl-default-title\"],\"intlNext\":[1,\"intl-next\"],\"intlPaginationLabel\":[1,\"intl-pagination-label\"],\"intlPrevious\":[1,\"intl-previous\"],\"selectedIndex\":[32],\"tips\":[32],\"total\":[32],\"direction\":[32],\"groupTitle\":[32],\"nextTip\":[64],\"previousTip\":[64]}],[1,\"calcite-tip-group\",{\"groupTitle\":[1,\"group-title\"]}]]],[\"calcite-checkbox.cjs\",[[1,\"calcite-checkbox\",{\"checked\":[1540],\"disabled\":[516],\"guid\":[1537],\"hovered\":[1540],\"indeterminate\":[1540],\"label\":[1],\"name\":[520],\"required\":[516],\"scale\":[513],\"value\":[8],\"setFocus\":[64]}]]],[\"calcite-loader.cjs\",[[1,\"calcite-loader\",{\"active\":[516],\"inline\":[516],\"label\":[1],\"scale\":[513],\"type\":[513],\"value\":[2],\"text\":[1],\"noPadding\":[4,\"no-padding\"]}]]],[\"calcite-card.cjs\",[[1,\"calcite-card\",{\"loading\":[516],\"selected\":[1540],\"selectable\":[516],\"intlLoading\":[1,\"intl-loading\"],\"intlSelect\":[1,\"intl-select\"],\"intlDeselect\":[1,\"intl-deselect\"]}]]],[\"calcite-icon.cjs\",[[1,\"calcite-icon\",{\"icon\":[513],\"flipRtl\":[516,\"flip-rtl\"],\"scale\":[513],\"textLabel\":[1,\"text-label\"],\"pathData\":[32],\"visible\":[32]}]]],[\"calcite-input-date-picker.cjs\",[[1,\"calcite-input-date-picker\",{\"disabled\":[516],\"value\":[1025],\"flipPlacements\":[16],\"headingLevel\":[2,\"heading-level\"],\"valueAsDate\":[1040],\"startAsDate\":[1040],\"endAsDate\":[1040],\"minAsDate\":[1040],\"maxAsDate\":[1040],\"min\":[1025],\"max\":[1025],\"active\":[1540],\"name\":[1],\"intlPrevMonth\":[1,\"intl-prev-month\"],\"intlNextMonth\":[1,\"intl-next-month\"],\"intlYear\":[1,\"intl-year\"],\"locale\":[1],\"scale\":[513],\"placement\":[513],\"range\":[516],\"required\":[516],\"start\":[1025],\"end\":[1025],\"overlayPositioning\":[1,\"overlay-positioning\"],\"proximitySelectionDisabled\":[4,\"proximity-selection-disabled\"],\"layout\":[513],\"focusedInput\":[32],\"localeData\":[32],\"setFocus\":[64],\"reposition\":[64]},[[0,\"calciteDatePickerChange\",\"handleDateOrRangeChange\"],[0,\"calciteDatePickerRangeChange\",\"handleDateOrRangeChange\"],[0,\"calciteDaySelect\",\"calciteDaySelectHandler\"]]]]],[\"calcite-panel.cjs\",[[1,\"calcite-panel\",{\"dismissed\":[1540],\"beforeBack\":[16],\"disabled\":[516],\"dismissible\":[516],\"headingLevel\":[2,\"heading-level\"],\"showBackButton\":[516,\"show-back-button\"],\"intlBack\":[1,\"intl-back\"],\"heightScale\":[513,\"height-scale\"],\"widthScale\":[513,\"width-scale\"],\"loading\":[516],\"intlClose\":[1,\"intl-close\"],\"intlOptions\":[1,\"intl-options\"],\"heading\":[1],\"summary\":[1],\"menuOpen\":[516,\"menu-open\"],\"setFocus\":[64],\"scrollContentTo\":[64]}]]],[\"calcite-split-button.cjs\",[[1,\"calcite-split-button\",{\"appearance\":[513],\"color\":[513],\"disabled\":[516],\"active\":[1540],\"dropdownIconType\":[513,\"dropdown-icon-type\"],\"dropdownLabel\":[513,\"dropdown-label\"],\"loading\":[516],\"overlayPositioning\":[1,\"overlay-positioning\"],\"primaryIconEnd\":[513,\"primary-icon-end\"],\"primaryIconFlipRtl\":[513,\"primary-icon-flip-rtl\"],\"primaryIconStart\":[513,\"primary-icon-start\"],\"primaryLabel\":[513,\"primary-label\"],\"primaryText\":[513,\"primary-text\"],\"scale\":[513],\"width\":[513]}]]],[\"calcite-combobox_3.cjs\",[[1,\"calcite-combobox\",{\"active\":[1540],\"disabled\":[516],\"label\":[1],\"placeholder\":[1],\"maxItems\":[2,\"max-items\"],\"name\":[513],\"allowCustomValues\":[4,\"allow-custom-values\"],\"overlayPositioning\":[1,\"overlay-positioning\"],\"required\":[4],\"selectionMode\":[513,\"selection-mode\"],\"scale\":[513],\"value\":[1025],\"intlRemoveTag\":[1,\"intl-remove-tag\"],\"flipPlacements\":[16],\"items\":[32],\"groupItems\":[32],\"selectedItems\":[32],\"visibleItems\":[32],\"needsIcon\":[32],\"activeItemIndex\":[32],\"activeChipIndex\":[32],\"activeDescendant\":[32],\"text\":[32],\"reposition\":[64],\"setFocus\":[64]},[[4,\"click\",\"documentClickHandler\"],[0,\"calciteComboboxItemChange\",\"calciteComboboxItemChangeHandler\"]]],[1,\"calcite-combobox-item\",{\"disabled\":[516],\"selected\":[1540],\"active\":[4],\"ancestors\":[1040],\"guid\":[1],\"icon\":[1],\"textLabel\":[513,\"text-label\"],\"value\":[8],\"constant\":[516],\"toggleSelected\":[64]}],[1,\"calcite-combobox-item-group\",{\"ancestors\":[1040],\"label\":[1]}]]],[\"calcite-tile-select_2.cjs\",[[1,\"calcite-tile-select\",{\"checked\":[1540],\"description\":[513],\"disabled\":[516],\"heading\":[513],\"hidden\":[516],\"icon\":[513],\"name\":[520],\"inputEnabled\":[516,\"input-enabled\"],\"inputAlignment\":[513,\"input-alignment\"],\"type\":[513],\"value\":[8],\"width\":[513],\"focused\":[32],\"setFocus\":[64]},[[0,\"calciteCheckboxChange\",\"checkboxChangeHandler\"],[0,\"calciteInternalCheckboxFocus\",\"checkboxFocusBlurHandler\"],[0,\"calciteInternalCheckboxBlur\",\"checkboxFocusBlurHandler\"],[0,\"calciteRadioButtonChange\",\"radioButtonChangeHandler\"],[0,\"calciteInternalRadioButtonCheckedChange\",\"radioButtonCheckedChangeHandler\"],[0,\"calciteInternalRadioButtonFocus\",\"radioButtonFocusBlurHandler\"],[0,\"calciteInternalRadioButtonBlur\",\"radioButtonFocusBlurHandler\"],[0,\"click\",\"click\"],[1,\"mouseenter\",\"mouseenter\"],[1,\"mouseleave\",\"mouseleave\"]]],[1,\"calcite-tile-select-group\",{\"disabled\":[516],\"layout\":[513]}]]],[\"calcite-fab.cjs\",[[1,\"calcite-fab\",{\"appearance\":[513],\"color\":[513],\"disabled\":[516],\"icon\":[1],\"label\":[1],\"loading\":[516],\"scale\":[513],\"text\":[1],\"textEnabled\":[516,\"text-enabled\"],\"setFocus\":[64]}]]],[\"calcite-inline-editable.cjs\",[[1,\"calcite-inline-editable\",{\"disabled\":[516],\"editingEnabled\":[1540,\"editing-enabled\"],\"loading\":[1540],\"controls\":[516],\"intlEnableEditing\":[513,\"intl-enable-editing\"],\"intlCancelEditing\":[513,\"intl-cancel-editing\"],\"intlConfirmChanges\":[513,\"intl-confirm-changes\"],\"scale\":[1537],\"afterConfirm\":[16],\"setFocus\":[64]},[[0,\"calciteInputBlur\",\"blurHandler\"]]]]],[\"calcite-modal.cjs\",[[1,\"calcite-modal\",{\"active\":[1540],\"beforeClose\":[16],\"disableCloseButton\":[4,\"disable-close-button\"],\"disableOutsideClose\":[4,\"disable-outside-close\"],\"intlClose\":[1,\"intl-close\"],\"docked\":[516],\"firstFocus\":[16],\"disableEscape\":[4,\"disable-escape\"],\"scale\":[513],\"width\":[520],\"fullscreen\":[516],\"color\":[513],\"backgroundColor\":[513,\"background-color\"],\"noPadding\":[4,\"no-padding\"],\"hasFooter\":[32],\"focusElement\":[64],\"setFocus\":[64],\"scrollContent\":[64]},[[8,\"keyup\",\"handleEscape\"]]]]],[\"calcite-tree_2.cjs\",[[1,\"calcite-tree-item\",{\"selected\":[1540],\"expanded\":[1540],\"parentExpanded\":[4,\"parent-expanded\"],\"depth\":[1538],\"hasChildren\":[1540,\"has-children\"],\"lines\":[1540],\"inputEnabled\":[4,\"input-enabled\"],\"scale\":[1537],\"indeterminate\":[516],\"selectionMode\":[1025,\"selection-mode\"]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-tree\",{\"lines\":[1540],\"inputEnabled\":[4,\"input-enabled\"],\"child\":[1540],\"scale\":[1537],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"focus\",\"onFocus\"],[0,\"focusin\",\"onFocusIn\"],[0,\"focusout\",\"onFocusOut\"],[0,\"calciteTreeItemSelect\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-alert.cjs\",[[1,\"calcite-alert\",{\"active\":[1540],\"autoDismiss\":[4,\"auto-dismiss\"],\"autoDismissDuration\":[513,\"auto-dismiss-duration\"],\"color\":[513],\"icon\":[520],\"intlClose\":[1,\"intl-close\"],\"label\":[1],\"placement\":[1],\"scale\":[513],\"queue\":[32],\"queueLength\":[32],\"queued\":[32],\"requestedIcon\":[32],\"setFocus\":[64]},[[8,\"calciteAlertSync\",\"alertSync\"],[8,\"calciteAlertRegister\",\"alertRegister\"]]]]],[\"calcite-rating.cjs\",[[1,\"calcite-rating\",{\"scale\":[513],\"value\":[1538],\"readOnly\":[516,\"read-only\"],\"disabled\":[516],\"showChip\":[516,\"show-chip\"],\"count\":[514],\"average\":[514],\"name\":[513],\"intlRating\":[1,\"intl-rating\"],\"intlStars\":[1,\"intl-stars\"],\"required\":[516],\"hoverValue\":[32],\"focusValue\":[32],\"hasFocus\":[32],\"setFocus\":[64]},[[0,\"blur\",\"blurHandler\"]]]]],[\"calcite-option_3.cjs\",[[1,\"calcite-select\",{\"disabled\":[516],\"label\":[1],\"name\":[1],\"required\":[516],\"scale\":[513],\"value\":[1025],\"selectedOption\":[1040],\"width\":[513],\"setFocus\":[64]},[[0,\"calciteOptionChange\",\"handleOptionOrGroupChange\"],[0,\"calciteOptionGroupChange\",\"handleOptionOrGroupChange\"]]],[1,\"calcite-option\",{\"disabled\":[516],\"label\":[1025],\"selected\":[516],\"value\":[1032]}],[1,\"calcite-option-group\",{\"disabled\":[516],\"label\":[1]}]]],[\"calcite-accordion_2.cjs\",[[1,\"calcite-accordion-item\",{\"active\":[1540],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"icon\":[513]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteAccordionChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-accordion\",{\"appearance\":[513],\"iconPosition\":[513,\"icon-position\"],\"iconType\":[513,\"icon-type\"],\"scale\":[513],\"selectionMode\":[513,\"selection-mode\"]},[[0,\"calciteAccordionItemKeyEvent\",\"calciteAccordionItemKeyEvent\"],[0,\"calciteAccordionItemRegister\",\"registerCalciteAccordionItem\"],[0,\"calciteAccordionItemSelect\",\"updateActiveItemOnChange\"]]]]],[\"calcite-radio-group_2.cjs\",[[1,\"calcite-radio-group-item\",{\"checked\":[1540],\"icon\":[513],\"iconFlipRtl\":[516,\"icon-flip-rtl\"],\"iconPosition\":[513,\"icon-position\"],\"value\":[1032]}],[1,\"calcite-radio-group\",{\"appearance\":[513],\"disabled\":[516],\"required\":[516],\"layout\":[513],\"name\":[1],\"scale\":[513],\"value\":[1025],\"selectedItem\":[1040],\"width\":[513],\"setFocus\":[64]},[[0,\"calciteRadioGroupItemChange\",\"handleSelected\"],[0,\"keydown\",\"handleKeyDown\"]]]]],[\"calcite-stepper_2.cjs\",[[1,\"calcite-stepper-item\",{\"active\":[1540],\"complete\":[516],\"error\":[4],\"disabled\":[516],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"layout\":[1537],\"icon\":[1028],\"numbered\":[1028],\"scale\":[1537]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteStepperItemChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-stepper\",{\"icon\":[516],\"layout\":[513],\"numbered\":[516],\"scale\":[513],\"requestedContent\":[1040],\"nextStep\":[64],\"prevStep\":[64],\"goToStep\":[64],\"startStep\":[64],\"endStep\":[64]},[[0,\"calciteStepperItemKeyEvent\",\"calciteStepperItemKeyEvent\"],[0,\"calciteStepperItemRegister\",\"registerItem\"],[0,\"calciteStepperItemSelect\",\"updateItem\"]]]]],[\"calcite-avatar.cjs\",[[1,\"calcite-avatar\",{\"scale\":[513],\"thumbnail\":[1],\"fullName\":[1,\"full-name\"],\"username\":[1],\"userId\":[1,\"user-id\"],\"error\":[32]}]]],[\"calcite-input-message.cjs\",[[1,\"calcite-input-message\",{\"active\":[516],\"icon\":[520],\"scale\":[1537],\"status\":[1537],\"type\":[513]}]]],[\"calcite-notice.cjs\",[[1,\"calcite-notice\",{\"active\":[1540],\"color\":[513],\"dismissible\":[516],\"icon\":[520],\"intlClose\":[1,\"intl-close\"],\"scale\":[513],\"width\":[513],\"setFocus\":[64]}]]],[\"calcite-pagination.cjs\",[[1,\"calcite-pagination\",{\"num\":[2],\"start\":[1026],\"total\":[2],\"textLabelNext\":[1,\"text-label-next\"],\"textLabelPrevious\":[1,\"text-label-previous\"],\"scale\":[513],\"nextPage\":[64],\"previousPage\":[64]}]]],[\"calcite-list_3.cjs\",[[1,\"calcite-list\",{\"disabled\":[516],\"headingLevel\":[2,\"heading-level\"],\"setFocus\":[64]}],[1,\"calcite-list-item\",{\"nonInteractive\":[516,\"non-interactive\"],\"description\":[1],\"disabled\":[516],\"label\":[1],\"setFocus\":[64]}],[1,\"calcite-list-item-group\",{\"heading\":[513],\"headingLevel\":[2,\"heading-level\"]}]]],[\"calcite-shell_3.cjs\",[[1,\"calcite-shell\",{\"contentBehind\":[516,\"content-behind\"]}],[1,\"calcite-shell-center-row\",{\"detached\":[516],\"heightScale\":[513,\"height-scale\"],\"position\":[513]}],[1,\"calcite-shell-panel\",{\"collapsed\":[516],\"detached\":[516],\"detachedHeightScale\":[513,\"detached-height-scale\"],\"widthScale\":[513,\"width-scale\"],\"position\":[513],\"intlResize\":[1,\"intl-resize\"],\"resizable\":[516],\"contentWidth\":[32]}]]],[\"calcite-flow.cjs\",[[1,\"calcite-flow\",{\"panelCount\":[32],\"flowDirection\":[32],\"panels\":[32],\"back\":[64]},[[0,\"calcitePanelBackClick\",\"handleCalcitePanelBackClick\"]]]]],[\"calcite-radio-button.cjs\",[[1,\"calcite-radio-button\",{\"checked\":[1540],\"disabled\":[516],\"focused\":[1540],\"guid\":[1537],\"hidden\":[516],\"hovered\":[1540],\"label\":[1],\"name\":[513],\"required\":[516],\"scale\":[513],\"value\":[1032],\"setFocus\":[64],\"emitCheckedChange\":[64]},[[1,\"mouseenter\",\"mouseenter\"],[1,\"mouseleave\",\"mouseleave\"]]]]],[\"calcite-radio-button-group.cjs\",[[1,\"calcite-radio-button-group\",{\"disabled\":[516],\"hidden\":[516],\"layout\":[513],\"name\":[513],\"required\":[516],\"scale\":[513]},[[0,\"calciteRadioButtonChange\",\"radioButtonChangeHandler\"]]]]],[\"calcite-sortable-list.cjs\",[[1,\"calcite-sortable-list\",{\"dragSelector\":[1,\"drag-selector\"],\"group\":[1],\"handleSelector\":[1,\"handle-selector\"],\"layout\":[1],\"disabled\":[516],\"loading\":[516],\"handleActivated\":[32]},[[0,\"calciteHandleNudge\",\"calciteHandleNudgeHandler\"]]]]],[\"calcite-pick-list_3.cjs\",[[1,\"calcite-pick-list\",{\"disabled\":[516],\"filterEnabled\":[516,\"filter-enabled\"],\"filterPlaceholder\":[513,\"filter-placeholder\"],\"headingLevel\":[2,\"heading-level\"],\"loading\":[516],\"multiple\":[516],\"selectionFollowsFocus\":[4,\"selection-follows-focus\"],\"selectedValues\":[32],\"dataForFilter\":[32],\"getSelectedItems\":[64],\"setFocus\":[64]},[[0,\"calciteListItemRemove\",\"calciteListItemRemoveHandler\"],[0,\"calciteListItemChange\",\"calciteListItemChangeHandler\"],[0,\"calciteListItemPropsChange\",\"calciteListItemPropsChangeHandler\"],[0,\"calciteListItemValueChange\",\"calciteListItemValueChangeHandler\"],[0,\"focusout\",\"calciteListFocusOutHandler\"]]],[1,\"calcite-pick-list-group\",{\"groupTitle\":[513,\"group-title\"],\"headingLevel\":[2,\"heading-level\"]}],[1,\"calcite-pick-list-item\",{\"description\":[513],\"disabled\":[516],\"disableDeselect\":[4,\"disable-deselect\"],\"nonInteractive\":[516,\"non-interactive\"],\"icon\":[513],\"label\":[513],\"metadata\":[16],\"removable\":[516],\"selected\":[1540],\"intlRemove\":[513,\"intl-remove\"],\"value\":[8],\"toggleSelected\":[64],\"setFocus\":[64]}]]],[\"calcite-input-time-picker_2.cjs\",[[1,\"calcite-input-time-picker\",{\"active\":[1540],\"disabled\":[516],\"intlHour\":[1,\"intl-hour\"],\"intlHourDown\":[1,\"intl-hour-down\"],\"intlHourUp\":[1,\"intl-hour-up\"],\"intlMeridiem\":[1,\"intl-meridiem\"],\"intlMeridiemDown\":[1,\"intl-meridiem-down\"],\"intlMeridiemUp\":[1,\"intl-meridiem-up\"],\"intlMinute\":[1,\"intl-minute\"],\"intlMinuteDown\":[1,\"intl-minute-down\"],\"intlMinuteUp\":[1,\"intl-minute-up\"],\"intlSecond\":[1,\"intl-second\"],\"intlSecondDown\":[1,\"intl-second-down\"],\"intlSecondUp\":[1,\"intl-second-up\"],\"locale\":[1025,\"lang\"],\"name\":[1],\"required\":[516],\"scale\":[513],\"placement\":[513],\"step\":[2],\"value\":[1025],\"localizedValue\":[32],\"setFocus\":[64]},[[0,\"click\",\"clickHandler\"],[0,\"keyup\",\"keyUpHandler\"],[0,\"calciteTimePickerBlur\",\"timePickerBlurHandler\"],[0,\"calciteTimePickerFocus\",\"timePickerFocusHandler\"]]],[1,\"calcite-time-picker\",{\"intlHour\":[1,\"intl-hour\"],\"intlHourDown\":[1,\"intl-hour-down\"],\"intlHourUp\":[1,\"intl-hour-up\"],\"intlMeridiem\":[1,\"intl-meridiem\"],\"intlMeridiemDown\":[1,\"intl-meridiem-down\"],\"intlMeridiemUp\":[1,\"intl-meridiem-up\"],\"intlMinute\":[1,\"intl-minute\"],\"intlMinuteDown\":[1,\"intl-minute-down\"],\"intlMinuteUp\":[1,\"intl-minute-up\"],\"intlSecond\":[1,\"intl-second\"],\"intlSecondDown\":[1,\"intl-second-down\"],\"intlSecondUp\":[1,\"intl-second-up\"],\"locale\":[1025,\"lang\"],\"scale\":[1],\"step\":[2],\"value\":[1025],\"hour\":[32],\"hourCycle\":[32],\"localizedHour\":[32],\"localizedHourSuffix\":[32],\"localizedMeridiem\":[32],\"localizedMinute\":[32],\"localizedMinuteSuffix\":[32],\"localizedSecond\":[32],\"localizedSecondSuffix\":[32],\"meridiem\":[32],\"minute\":[32],\"second\":[32],\"showSecond\":[32],\"setFocus\":[64]},[[0,\"blur\",\"hostBlurHandler\"],[0,\"focus\",\"hostFocusHandler\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tile.cjs\",[[1,\"calcite-tile\",{\"active\":[516],\"description\":[513],\"disabled\":[516],\"embed\":[516],\"focused\":[516],\"heading\":[513],\"hidden\":[516],\"href\":[513],\"icon\":[513]}]]],[\"calcite-dropdown_3.cjs\",[[1,\"calcite-dropdown-item\",{\"active\":[1540],\"iconFlipRtl\":[513,\"icon-flip-rtl\"],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"href\":[513],\"label\":[1],\"rel\":[1],\"target\":[1],\"setFocus\":[64]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteDropdownItemChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-dropdown-group\",{\"groupTitle\":[513,\"group-title\"],\"selectionMode\":[513,\"selection-mode\"],\"scale\":[513]},[[0,\"calciteDropdownItemSelect\",\"updateActiveItemOnChange\"]]],[1,\"calcite-dropdown\",{\"active\":[1540],\"disableCloseOnSelect\":[516,\"disable-close-on-select\"],\"disabled\":[516],\"flipPlacements\":[16],\"maxItems\":[2,\"max-items\"],\"overlayPositioning\":[1,\"overlay-positioning\"],\"placement\":[513],\"scale\":[513],\"selectedItems\":[1040],\"type\":[513],\"width\":[513],\"reposition\":[64]},[[8,\"click\",\"closeCalciteDropdownOnClick\"],[0,\"calciteDropdownCloseRequest\",\"closeCalciteDropdownOnEvent\"],[8,\"calciteDropdownOpen\",\"closeCalciteDropdownOnOpenEvent\"],[1,\"mouseenter\",\"mouseEnterHandler\"],[1,\"mouseleave\",\"mouseLeaveHandler\"],[0,\"calciteDropdownItemKeyEvent\",\"calciteDropdownItemKeyEvent\"],[0,\"calciteDropdownItemSelect\",\"handleItemSelect\"]]]]],[\"calcite-graph_2.cjs\",[[1,\"calcite-slider\",{\"disabled\":[516],\"hasHistogram\":[1540,\"has-histogram\"],\"histogram\":[16],\"histogramStops\":[16],\"labelHandles\":[516,\"label-handles\"],\"labelTicks\":[516,\"label-ticks\"],\"max\":[514],\"maxLabel\":[1,\"max-label\"],\"maxValue\":[1026,\"max-value\"],\"min\":[514],\"minLabel\":[1,\"min-label\"],\"minValue\":[1026,\"min-value\"],\"mirrored\":[516],\"name\":[513],\"pageStep\":[2,\"page-step\"],\"precise\":[4],\"required\":[516],\"snap\":[4],\"step\":[2],\"ticks\":[2],\"value\":[1538],\"scale\":[1],\"activeProp\":[32],\"minMaxValueRange\":[32],\"minValueDragRange\":[32],\"maxValueDragRange\":[32],\"tickValues\":[32],\"setFocus\":[64]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"click\",\"clickHandler\"],[1,\"pointerdown\",\"pointerDownHandler\"]]],[1,\"calcite-graph\",{\"data\":[16],\"colorStops\":[16],\"highlightMin\":[2,\"highlight-min\"],\"highlightMax\":[2,\"highlight-max\"],\"min\":[2],\"max\":[2]}]]],[\"calcite-handle.cjs\",[[1,\"calcite-handle\",{\"activated\":[1540],\"textTitle\":[513,\"text-title\"],\"setFocus\":[64]}]]],[\"calcite-label.cjs\",[[1,\"calcite-label\",{\"alignment\":[513],\"status\":[513],\"for\":[513],\"scale\":[513],\"layout\":[513],\"disableSpacing\":[4,\"disable-spacing\"],\"disabled\":[516]}]]],[\"calcite-switch.cjs\",[[1,\"calcite-switch\",{\"disabled\":[516],\"label\":[1],\"name\":[513],\"scale\":[513],\"switched\":[1028],\"checked\":[1540],\"value\":[8],\"setFocus\":[64]}]]],[\"calcite-action-group.cjs\",[[1,\"calcite-action-group\",{\"expanded\":[516],\"layout\":[513],\"columns\":[514],\"intlMore\":[1,\"intl-more\"],\"menuOpen\":[1540,\"menu-open\"],\"scale\":[513]}]]],[\"calcite-filter.cjs\",[[1,\"calcite-filter\",{\"items\":[1040],\"disabled\":[516],\"filteredItems\":[1040],\"intlClear\":[1,\"intl-clear\"],\"intlLabel\":[1,\"intl-label\"],\"placeholder\":[1],\"scale\":[513],\"value\":[1025],\"setFocus\":[64]}]]],[\"calcite-link.cjs\",[[1,\"calcite-link\",{\"disabled\":[516],\"download\":[520],\"href\":[513],\"iconEnd\":[513,\"icon-end\"],\"iconFlipRtl\":[513,\"icon-flip-rtl\"],\"iconStart\":[513,\"icon-start\"],\"rel\":[1],\"target\":[1],\"setFocus\":[64]}]]],[\"calcite-chip.cjs\",[[1,\"calcite-chip\",{\"appearance\":[513],\"color\":[513],\"dismissible\":[516],\"dismissLabel\":[1,\"dismiss-label\"],\"icon\":[513],\"iconFlipRtl\":[516,\"icon-flip-rtl\"],\"scale\":[513],\"value\":[8],\"setFocus\":[64]}]]],[\"calcite-button.cjs\",[[1,\"calcite-button\",{\"alignment\":[513],\"appearance\":[513],\"label\":[1],\"color\":[513],\"disabled\":[516],\"href\":[513],\"iconEnd\":[513,\"icon-end\"],\"iconFlipRtl\":[513,\"icon-flip-rtl\"],\"iconStart\":[513,\"icon-start\"],\"intlLoading\":[1,\"intl-loading\"],\"loading\":[516],\"name\":[1],\"rel\":[1],\"form\":[1],\"round\":[516],\"scale\":[513],\"splitChild\":[520,\"split-child\"],\"target\":[1],\"type\":[1025],\"width\":[513],\"hasContent\":[32],\"hasLoader\":[32],\"setFocus\":[64]}]]],[\"calcite-tab_4.cjs\",[[1,\"calcite-tab-title\",{\"active\":[1540],\"disabled\":[516],\"iconEnd\":[513,\"icon-end\"],\"iconFlipRtl\":[513,\"icon-flip-rtl\"],\"iconStart\":[513,\"icon-start\"],\"layout\":[1537],\"position\":[1537],\"scale\":[1537],\"bordered\":[1540],\"tab\":[513],\"controls\":[32],\"hasText\":[32],\"getTabIndex\":[64],\"getTabIdentifier\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteInternalTabChange\",\"internalTabChangeHandler\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-tab\",{\"tab\":[513],\"active\":[1540],\"scale\":[1537],\"labeledBy\":[32],\"getTabIndex\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteInternalTabChange\",\"internalTabChangeHandler\"]]],[1,\"calcite-tab-nav\",{\"storageId\":[1,\"storage-id\"],\"syncId\":[1,\"sync-id\"],\"scale\":[1537],\"layout\":[1537],\"position\":[1537],\"bordered\":[1540],\"indicatorOffset\":[1026,\"indicator-offset\"],\"indicatorWidth\":[1026,\"indicator-width\"],\"selectedTab\":[32],\"selectedTabEl\":[32]},[[0,\"calciteTabsFocusPrevious\",\"focusPreviousTabHandler\"],[0,\"calciteTabsFocusNext\",\"focusNextTabHandler\"],[0,\"calciteInternalTabsActivate\",\"internalActivateTabHandler\"],[0,\"calciteTabsActivate\",\"activateTabHandler\"],[0,\"calciteTabTitleRegister\",\"updateTabTitles\"],[16,\"calciteInternalTabChange\",\"globalInternalTabChangeHandler\"]]],[1,\"calcite-tabs\",{\"layout\":[513],\"position\":[513],\"scale\":[513],\"bordered\":[1540],\"titles\":[32],\"tabs\":[32]},[[0,\"calciteTabTitleRegister\",\"calciteTabTitleRegister\"],[16,\"calciteTabTitleUnregister\",\"calciteTabTitleUnregister\"],[0,\"calciteTabRegister\",\"calciteTabRegister\"],[16,\"calciteTabUnregister\",\"calciteTabUnregister\"]]]]],[\"calcite-color-picker_3.cjs\",[[1,\"calcite-color-picker\",{\"allowEmpty\":[4,\"allow-empty\"],\"appearance\":[513],\"color\":[1040],\"disabled\":[516],\"format\":[1],\"hideHex\":[4,\"hide-hex\"],\"hideChannels\":[4,\"hide-channels\"],\"hideSaved\":[4,\"hide-saved\"],\"intlB\":[1,\"intl-b\"],\"intlBlue\":[1,\"intl-blue\"],\"intlDeleteColor\":[1,\"intl-delete-color\"],\"intlG\":[1,\"intl-g\"],\"intlGreen\":[1,\"intl-green\"],\"intlH\":[1,\"intl-h\"],\"intlHsv\":[1,\"intl-hsv\"],\"intlHex\":[1,\"intl-hex\"],\"intlHue\":[1,\"intl-hue\"],\"intlNoColor\":[1,\"intl-no-color\"],\"intlR\":[1,\"intl-r\"],\"intlRed\":[1,\"intl-red\"],\"intlRgb\":[1,\"intl-rgb\"],\"intlS\":[1,\"intl-s\"],\"intlSaturation\":[1,\"intl-saturation\"],\"intlSaveColor\":[1,\"intl-save-color\"],\"intlSaved\":[1,\"intl-saved\"],\"intlV\":[1,\"intl-v\"],\"intlValue\":[1,\"intl-value\"],\"scale\":[513],\"storageId\":[1,\"storage-id\"],\"value\":[1025],\"colorFieldAndSliderInteractive\":[32],\"channelMode\":[32],\"channels\":[32],\"dimensions\":[32],\"savedColors\":[32],\"colorFieldScopeTop\":[32],\"colorFieldScopeLeft\":[32],\"scopeOrientation\":[32],\"hueScopeLeft\":[32],\"hueScopeTop\":[32],\"setFocus\":[64]},[[2,\"keydown\",\"handleChannelKeyUpOrDown\"],[2,\"keyup\",\"handleChannelKeyUpOrDown\"]]],[1,\"calcite-color-picker-hex-input\",{\"allowEmpty\":[4,\"allow-empty\"],\"intlHex\":[1,\"intl-hex\"],\"intlNoColor\":[1,\"intl-no-color\"],\"scale\":[513],\"value\":[1537],\"internalColor\":[32],\"setFocus\":[64]},[[2,\"keydown\",\"onInputKeyDown\"]]],[1,\"calcite-color-picker-swatch\",{\"active\":[516],\"color\":[1],\"scale\":[513]}]]],[\"calcite-scrim.cjs\",[[1,\"calcite-scrim\",{\"intlLoading\":[1,\"intl-loading\"],\"loading\":[516]}]]],[\"calcite-tooltip_2.cjs\",[[1,\"calcite-tooltip\",{\"label\":[1],\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"overlayPositioning\":[1,\"overlay-positioning\"],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"effectiveReferenceElement\":[32],\"reposition\":[64]}],[1,\"calcite-tooltip-manager\",{\"selector\":[1]},[[4,\"keyup\",\"keyUpHandler\"],[3,\"mouseover\",\"mouseEnterShow\"],[3,\"mouseout\",\"mouseLeaveHide\"],[2,\"click\",\"clickHandler\"],[2,\"focus\",\"focusShow\"],[2,\"blur\",\"blurHide\"]]]]],[\"calcite-popover_2.cjs\",[[1,\"calcite-popover-manager\",{\"selector\":[1],\"autoClose\":[516,\"auto-close\"]},[[10,\"click\",\"closeOpenPopovers\"]]],[1,\"calcite-popover\",{\"closeButton\":[516,\"close-button\"],\"dismissible\":[516],\"disableFlip\":[516,\"disable-flip\"],\"disablePointer\":[516,\"disable-pointer\"],\"flipPlacements\":[16],\"heading\":[1],\"headingLevel\":[2,\"heading-level\"],\"label\":[1],\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[1540],\"overlayPositioning\":[1,\"overlay-positioning\"],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"intlClose\":[1,\"intl-close\"],\"effectiveReferenceElement\":[32],\"reposition\":[64],\"setFocus\":[64],\"toggle\":[64]}]]],[\"calcite-progress.cjs\",[[1,\"calcite-progress\",{\"type\":[1],\"value\":[2],\"label\":[1],\"text\":[1],\"reversed\":[4]}]]],[\"calcite-input.cjs\",[[1,\"calcite-input\",{\"alignment\":[513],\"autofocus\":[4],\"clearable\":[516],\"disabled\":[516],\"groupSeparator\":[4,\"group-separator\"],\"hidden\":[4],\"icon\":[520],\"intlLoading\":[1,\"intl-loading\"],\"iconFlipRtl\":[516,\"icon-flip-rtl\"],\"label\":[1],\"loading\":[516],\"locale\":[1],\"localeFormat\":[4,\"locale-format\"],\"max\":[514],\"min\":[514],\"maxlength\":[514],\"maxLength\":[514,\"max-length\"],\"minLength\":[514,\"min-length\"],\"name\":[513],\"numberButtonType\":[513,\"number-button-type\"],\"placeholder\":[1],\"prefixText\":[1,\"prefix-text\"],\"readOnly\":[4,\"read-only\"],\"required\":[4],\"scale\":[1537],\"status\":[1537],\"step\":[520],\"suffixText\":[1,\"suffix-text\"],\"editingEnabled\":[1540,\"editing-enabled\"],\"type\":[513],\"value\":[1025],\"localizedValue\":[32],\"setFocus\":[64]}]]],[\"calcite-date-picker_4.cjs\",[[1,\"calcite-date-picker\",{\"activeRange\":[1,\"active-range\"],\"value\":[1025],\"headingLevel\":[2,\"heading-level\"],\"valueAsDate\":[1040],\"startAsDate\":[1040],\"endAsDate\":[1040],\"minAsDate\":[1040],\"maxAsDate\":[1040],\"min\":[1025],\"max\":[1025],\"intlPrevMonth\":[1,\"intl-prev-month\"],\"intlNextMonth\":[1,\"intl-next-month\"],\"intlYear\":[1,\"intl-year\"],\"locale\":[1],\"scale\":[513],\"range\":[516],\"start\":[1025],\"end\":[1025],\"proximitySelectionDisabled\":[4,\"proximity-selection-disabled\"],\"activeDate\":[32],\"activeStartDate\":[32],\"activeEndDate\":[32],\"localeData\":[32],\"hoverRange\":[32]}],[1,\"calcite-date-picker-month\",{\"selectedDate\":[16],\"activeDate\":[16],\"startDate\":[16],\"endDate\":[16],\"min\":[16],\"max\":[16],\"scale\":[513],\"localeData\":[16],\"hoverRange\":[16]},[[1,\"mouseout\",\"mouseoutHandler\"]]],[1,\"calcite-date-picker-month-header\",{\"selectedDate\":[16],\"activeDate\":[16],\"headingLevel\":[2,\"heading-level\"],\"min\":[16],\"max\":[16],\"locale\":[1],\"intlPrevMonth\":[1,\"intl-prev-month\"],\"intlNextMonth\":[1,\"intl-next-month\"],\"intlYear\":[1,\"intl-year\"],\"scale\":[513],\"localeData\":[16],\"nextMonthDate\":[32],\"prevMonthDate\":[32]}],[1,\"calcite-date-picker-day\",{\"day\":[2],\"disabled\":[516],\"currentMonth\":[516,\"current-month\"],\"selected\":[516],\"highlighted\":[516],\"range\":[516],\"startOfRange\":[516,\"start-of-range\"],\"endOfRange\":[516,\"end-of-range\"],\"rangeHover\":[516,\"range-hover\"],\"active\":[516],\"localeData\":[16],\"scale\":[513],\"value\":[16]},[[1,\"mouseover\",\"mouseoverHandler\"]]]]]]"), options);
  });
};

exports.defineCustomElements = defineCustomElements;
