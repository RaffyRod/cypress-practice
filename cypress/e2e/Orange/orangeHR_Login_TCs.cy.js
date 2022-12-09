import LoginPage from "../../support/pageObjects/loginPage";
import { randEmail, randAbbreviation } from "@ngneat/falso";

const loginPage = new LoginPage();

const fakeEmail = randEmail();
const fakePassword = randAbbreviation();

describe("Login", () => {

  beforeEach(function(){
    cy.openLogin();
  });

  it("Click on Login with empty fields", () => {
    loginPage.loginButton().click();
    loginPage.usernameRequiredText().should("be.visible");
    loginPage.passwordRequiredText().should("be.visible");
  });

  it("Login with invalid username and password.", () => {
    loginPage.userNameInput().type(fakeEmail);
    loginPage.userPassword().type(fakePassword);
    loginPage.loginButton().click();
    loginPage.invalidCredentialsText().should("be.visible");
  });

  it("Login with just email typed.", () => {
    loginPage.userNameInput().type(fakeEmail);
    loginPage.loginButton().click();
    loginPage.passwordRequiredText().should("be.visible");
  });

  it("Login with just password typed.", () => {
    loginPage.userPassword().type(fakePassword);
    loginPage.loginButton().click();
    loginPage.usernameRequiredText().should("be.visible");
  });
});
