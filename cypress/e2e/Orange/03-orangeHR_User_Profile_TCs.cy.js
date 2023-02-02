import UserProfile from "../../support/pageObjects/userProfile";
import LoginPage from "../../support/pageObjects/loginPage";

const userProfileSection = new UserProfile();
const loginPage = new LoginPage();

describe('User profile section', () => {

  beforeEach(function(){
    cy.login();Cypress.on('uncaught:exception', () => {
      return false
    });
  });

  afterEach(function(){
    cy.logout();
  });

  it('Click on About section', () => {
    userProfileSection.userProfileDropdown().click();
    userProfileSection.aboutSection().click();
    userProfileSection.validateAboutSection().should('be.visible');
    userProfileSection.dismissAboutSection().click();
  });

  it('Click on Support section', () => {
    userProfileSection.userProfileDropdown().click();
    userProfileSection.supportSection().click();
    userProfileSection.validateSupportSection().should('be.visible');
  });

  it('Click on Change password section', () => {
    userProfileSection.userProfileDropdown().click();
    userProfileSection.changePasswordSection().click();
    userProfileSection.validateUpdatePasswordHeader().should('be.visible');
  });

  it('Close user profile section by clicking somewhere else.', () => {
    userProfileSection.userProfileDropdown().click();
    loginPage.dashBoardpage().click();
  });
});