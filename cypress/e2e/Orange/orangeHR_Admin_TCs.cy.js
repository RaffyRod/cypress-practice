import AdminPage from "../../support/pageObjects/adminPage";

const adminPage = new AdminPage();

describe('Admin Page', () => {

  beforeEach(function(){
    cy.login();
  });

  it('Add Admin User using Admin Page', () => {
    adminPage.adminButton().click();
    adminPage.addUserButton().click();
    adminPage.addUserRole().click();
    adminPage.selectAdminRole().click();
    adminPage.addEmployeeName().type('Alice Duval');
    adminPage.selectEmployeeName().click();
    adminPage.addStatus().click();
    adminPage.selectEnabledStatus().click();
    adminPage.addUserName().type('alfredo110');
    adminPage.addPassword().click();
    adminPage.addPassword().type('ThisIsSparta123@');
    adminPage.confirmPassword().type('ThisIsSparta123@');
    adminPage.saveUserButton().click();
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Saved');
  });
});