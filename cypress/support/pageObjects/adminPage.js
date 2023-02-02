class AdminPage{

  expandCollideSystemUsersTable(){
    return cy.get(':nth-child(3) > .oxd-icon-button');
  }

  adminButton(){
    return cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text');
  }

  addUserButton(){
    return cy.get('.orangehrm-header-container > .oxd-button');
  }

  addUserRole(){
    return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text');
  }

  selectAdminRole(){
    return cy.get('.oxd-select-dropdown > :nth-child(2)');
  }

  addEmployeeName(){
    return cy.get('.oxd-autocomplete-text-input > input');
  }

  selectEmployeeName(){
    return cy.get('.oxd-autocomplete-option > span');
  }

  addStatus(){
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input');
  }

  selectEnabledStatus(){
    return cy.get('.oxd-select-dropdown > :nth-child(2) > span');
  }

  selectDisabledStatus(){
    return cy.get('.oxd-select-dropdown > :nth-child(3) > span');
  }

  addUserName(){
    return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  addPassword(){
    return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  confirmPassword(){
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  saveUserButton(){
    return cy.get('.oxd-button--secondary');
    // Lisa  Andrews
  }

  confirmationToast(){
    return cy.get('.oxd-toast-content');
  }

  userSearch(){
    return cy.get(':nth-child(2) > .oxd-input');
  }

  searchButton(){
    return cy.get('.oxd-form-actions > .oxd-button--secondary');
  }

  resetSearchButton(){
    return cy.get('.oxd-button--ghost');
  }

  totalUsers(){
    return cy.get('.orangehrm-horizontal-padding > .oxd-text');
  }

  selectAllUsers(){
    return cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon');
  }

  usernameRow() {
    return cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2)');
  }

  userRoleRow() {
    return cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3)');
  }

  employeeNameRow() {
    return cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4)');
  }

  userStatusRow() {
    return cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5)');
  }

}

export default AdminPage;