const LoginPage = require("../../pageobjects/login.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await LoginPage.assertPage();
  });
  // add more possible it blocks
});
