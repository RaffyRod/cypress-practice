class AdminPage{

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
    cy.get('.oxd-form-actions > .oxd-button--secondary');
  }

}

export default AdminPage;