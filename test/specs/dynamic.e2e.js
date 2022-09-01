import DynamicPage from "../pageobjects/dynamic.page";

describe("Dynamic Test", function () {
  it("should show the correct heading", async function () {
    await DynamicPage.open();
    await expect(DynamicPage.heading).toHaveTextContaining("Dynamic Control");
    await expect(DynamicPage.footerLink).toHaveText("Elemental Selenium");
  });

  it("should toggle the checkbox", async function () {
    await DynamicPage.open();
    await expect(DynamicPage.ARbutton).toBePresent();
    await expect(DynamicPage.checkbox).toBePresent();
    await DynamicPage.toggleCheckbox();
    await expect(DynamicPage.message).toBePresent();
    // await expect(DynamicPage.message).toHaveTextContaining(/wait/i);
    await expect(DynamicPage.loadingBar).toBePresent();
    await expect(DynamicPage.checkbox).not.toBeDisplayed();
  });
});
