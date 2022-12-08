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
  });
});