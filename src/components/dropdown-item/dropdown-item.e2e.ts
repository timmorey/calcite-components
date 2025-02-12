import { newE2EPage } from "@stencil/core/testing";
import { focusable, renders, hidden } from "../../tests/commonTests";

describe("calcite-dropdown-item", () => {
  it("renders", () => renders("calcite-dropdown-item", { display: "flex" }));

  it("honors hidden attribute", async () => hidden("calcite-dropdown-item"));

  it("can be focused", async () => focusable(`calcite-dropdown-item`));

  it("should emit calciteDropdownItemSelect", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-dropdown-item id="item-1"> Dropdown Item Content </calcite-dropdown-item>`);

    const element = await page.find("calcite-dropdown-item");
    const itemChangeSpy = await element.spyOnEvent("calciteDropdownItemSelect");

    let calciteDropdownItemSelectEvent: Promise<any>;

    calciteDropdownItemSelectEvent = page.waitForEvent("calciteDropdownItemSelect");
    await element.click();
    await calciteDropdownItemSelectEvent;

    expect(itemChangeSpy).toHaveReceivedEventTimes(1);

    calciteDropdownItemSelectEvent = page.waitForEvent("calciteDropdownItemSelect");
    await element.callMethod("setFocus");
    await page.keyboard.press("Enter");
    await calciteDropdownItemSelectEvent;

    expect(itemChangeSpy).toHaveReceivedEventTimes(2);

    calciteDropdownItemSelectEvent = page.waitForEvent("calciteDropdownItemSelect");
    await element.callMethod("setFocus");
    await page.keyboard.press("Space");
    await calciteDropdownItemSelectEvent;

    expect(itemChangeSpy).toHaveReceivedEventTimes(3);
  });
});
