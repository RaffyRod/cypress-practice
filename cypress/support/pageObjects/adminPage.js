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
    cy.wait(1000);
    return cy.get('.oxd-button--secondary');
    // Lisa  Andrews
  }

  confirmationToast(){
    return cy.get('.oxd-toast-content');
  }

  userRoleDropdown(){
    cy.wait(1000);
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  }

  userRoleESS(){
    return cy.get('.oxd-select-dropdown > :nth-child(3)');
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

  sortUsernames(){
    return cy.get(':nth-child(2) > .oxd-table-header-sort > .oxd-icon-button__icon');
  }

  sortUsernamesAscending(){
    return cy.get('.--active > ul > :nth-child(1) > .oxd-text');
  }

  sortUsernamesDescending(){
    return cy.get('.--active > ul > :nth-child(2) > .oxd-text');
  }

  selectAllUsers(){
    return cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon');
  }

  selectFirstUser() {
    return cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon')
  }

  deletedSelectedUsersButton() {
    return cy.get('.orangehrm-horizontal-padding > div > .oxd-button')
  }

  deletedSelectedUsersModalButton() {
    return cy.get('.orangehrm-modal-footer > .oxd-button--label-danger')
  }

  editFirstUserIcon() {
    return cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)')
  }

  deleteFirstUserIcon() {
    cy.wait(1500);
    return cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)')
  }

  deleteModal() {
    return cy.get('.oxd-sheet');
  }

  deleteButton() {
    return cy.get('.oxd-button--label-danger');
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