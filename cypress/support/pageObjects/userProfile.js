class UserProfile {
  userProfileDropdown() {
    return cy.get('.oxd-userdropdown-tab');
  }

  aboutSection() {
    return cy.get(':nth-child(1) > .oxd-userdropdown-link');
  }

  validateAboutSection() {
    return cy.get('.oxd-dialog-container-default--inner > .oxd-sheet');
  }

  dismissAboutSection() {
    return cy.get('.oxd-dialog-close-button');
  }

  supportSection() {
    return cy.get(':nth-child(2) > .oxd-userdropdown-link');
  }

  validateSupportSection() {
    return cy.get('.orangehrm-card-container');
  }

  changePasswordSection() {
    return cy.get(':nth-child(3) > .oxd-userdropdown-link');
  }

  validateUpdatePasswordHeader() {
    return cy.get('.orangehrm-card-container > .oxd-text--h6');
  }

  logoutSection() {
    return cy.get(':nth-child(4) > .oxd-userdropdown-link');
  }
}

export default UserProfile;