import AdminPage from "../../support/pageObjects/adminPage";

const adminPage = new AdminPage();

describe('Admin Page', () => {

  beforeEach(function(){
    cy.login();
  });

  it('Add User using Admin Page', () => {
    adminPage.adminButton().click();
    adminPage.addUserButton().click();
    adminPage.addUserRole().click();
    adminPage.selectAdminRole().click();
  });
});