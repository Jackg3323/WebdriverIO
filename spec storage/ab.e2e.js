import ABPage from "../test/pageobjects/ab.page";

describe("AB Test", function () {
  it("should show the correct heading", async function () {
    await ABPage.open();
    await expect(ABPage.heading).toHaveTextContaining("A/B Test");
    await expect(ABPage.footerLink).toHaveText("Elemental Selenium");
  });
});
