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

  addStatus(){
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input');
  }

  addUserName(){
    return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  addPassword(){
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  confirmPassword(){
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  saveUserButton(){
    return cy.get('.oxd-button--secondary');
    // Lisa  Andrews
  }

  userSearch(){
    return cy.get(':nth-child(2) > .oxd-input');
  }

  searchButton(){
    cy.get('.oxd-form-actions > .oxd-button--secondary');
  }

}

export default AdminPage;