import AdminPage from "../../support/pageObjects/adminPage";
import { randUser } from '@ngneat/falso';
import { userInfo } from '../../support/inputData';

const adminPage = new AdminPage();
const fakeUserName = randUser().username;

describe('Admin Page', () => {

  beforeEach(function(){
    cy.login();Cypress.on('uncaught:exception', () => {
      return false
    });
  });

  afterEach(function(){
    cy.logout();
  });

  it('Expand/Collide System Users section', () => {
    adminPage.adminButton().click();
    adminPage.expandCollideSystemUsersTable().click({force: true});
  });

  it('Search user by username', () => {
    adminPage.adminButton().click();
    adminPage.userSearch().type('Admin');
    adminPage.searchButton().click({force: true});
    adminPage.usernameRow().should('have.text', 'Admin');
  });

  it('Search user by User Role', () => {
    adminPage.adminButton().click();
    adminPage.userSearch().type('Admin');
    adminPage.searchButton().click({force: true});
    adminPage.userRoleRow().should('have.text', 'Admin');
  });

  it('Search user by Employee Name', () => {
    adminPage.adminButton().click();
    adminPage.userSearch().type('Admin');
    adminPage.searchButton().click({force: true});
    adminPage.employeeNameRow().should('be.visible');
  });

  it('Search user by Status', () => {
    adminPage.adminButton().click();
    adminPage.userSearch().type('Admin');
    adminPage.searchButton().click({force: true});
    adminPage.userStatusRow().should('have.text', 'Enabled');
  });

  it('Reset user search', () => {
    adminPage.adminButton().click();
    adminPage.userSearch().type('Admin');
    adminPage.resetSearchButton().click({force: true});
    adminPage.userSearch().should('be.empty');
  });

  it('Display number of users', () => {
    adminPage.adminButton().click();
    adminPage.totalUsers().should('be.visible');
  });

  it('Select all users', () => {
    adminPage.adminButton().click();
    adminPage.selectAllUsers().click({force: true});
  });

  it('Delete user', () => {
    adminPage.adminButton().click();
    adminPage.userRoleDropdown().click({force: true});
    adminPage.userRoleESS().click({force: true});
    adminPage.searchButton().click({force: true});
    adminPage.deleteFirstUserIcon().click({force: true});
    adminPage.deleteModal().should('be.visible');
    adminPage.deleteButton().click();
    adminPage.confirmationToast().should('be.visible');
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Deleted');
  });

  it('Edit user', () => {
    adminPage.adminButton().click();
    adminPage.editFirstUserIcon().click({force: true});
    adminPage.addUserName().clear().type(userInfo.userData.fullName);
    adminPage.saveUserButton().click();
    adminPage.confirmationToast().should('be.visible');
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Updated');
  });

  it('Delete selected users.', () => {
    adminPage.adminButton().click();
    adminPage.userRoleDropdown().click({force: true});
    adminPage.userRoleESS().click({force: true});
    adminPage.searchButton().click({force: true});
    adminPage.selectFirstUser().click({force: true});
    adminPage.deletedSelectedUsersButton().click({force: true});
    adminPage.deletedSelectedUsersModalButton().click()
    adminPage.confirmationToast().should('be.visible');
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Deleted');
  });

  it('Use filer by Ascending on Users table', () => {
    adminPage.adminButton().click();
    adminPage.sortUsernames().click({force: true});
    adminPage.sortUsernamesAscending().click({force: true});
  });

  it('Use filer by Descending on Users table', () => {
    adminPage.adminButton().click();
    adminPage.sortUsernames().click({force: true});
    adminPage.sortUsernamesDescending().click({force: true});
  });

  it.skip('Add user', () => {
    adminPage.adminButton().click();
    adminPage.addUserButton().click();
    adminPage.addUserRole().click();
    adminPage.selectAdminRole().click();
    adminPage.addEmployeeName().type('Alice Duval');
    adminPage.selectEmployeeName().click();
    adminPage.addStatus().click();
    adminPage.selectEnabledStatus().click();
    adminPage.addUserName().type(fakeUserName);
    adminPage.addPassword().click();
    adminPage.addPassword().type('ThisIsSparta123@');
    adminPage.confirmPassword().type('ThisIsSparta123@');
    adminPage.saveUserButton().click();
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Saved');
  });
});