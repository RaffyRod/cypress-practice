import LoginPage from "./pageObjects/loginPage";
import userProfile from "./pageObjects/userProfile";

const loginpage = new LoginPage();
const userProfileSection = new userProfile();

Cypress.Commands.add("openLogin", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Cypress.Commands.add("login", () => {
  cy.openLogin();
  loginpage.userNameInput().type(Cypress.env("USER_NAME"));
  loginpage.userPassword().type(Cypress.env("USER_PASSWORD"));
  loginpage.loginButton().click();
  loginpage.dashBoardpage().should("have.text", "Dashboard");
});

Cypress.Commands.add("logout", () => {
  cy.wait(6000)
  userProfileSection.userProfileDropdown().click();
  userProfileSection.logoutSection().click();
  cy.url().should('eq', Cypress.env("baseUrl"));
  loginpage.userNameInput().should('be.visible');
  loginpage.userPassword().should('be.visible');
  loginpage.loginButton().should('be.visible');
});
