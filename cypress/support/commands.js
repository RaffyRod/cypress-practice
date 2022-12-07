import LoginPage from "./pageObjects/loginPage";



const loginpage = new LoginPage();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
    Cypress.Commands.add('login', (email, password) => {
        cy.visit(Cypress.env('baseUrl'));
        loginpage.userNameInput().type(Cypress.env('USER_NAME'));
        loginpage.userPassword().type(Cypress.env('USER_PASSWORD'));
        loginpage.loginButton().click();
        loginpage.dashBoardpage().should('have.text', 'Dashboard');
     });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })