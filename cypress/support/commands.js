import LoginPage from "./pageObjects/loginPage";

const loginpage = new LoginPage();

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
