class LoginPage {
  userNameInput() {
    return cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    );
  }

  userPassword() {
    return cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    );
  }

  loginButton() {
    return cy.get(".oxd-button");
  }
  dashBoardpage() {
    return cy.get(".oxd-topbar-header-breadcrumb > .oxd-text");
  }

  usernameRequiredText() {
    return cy.get(":nth-child(2) > .oxd-input-group > .oxd-text");
  }

  passwordRequiredText() {
    return cy.get(":nth-child(3) > .oxd-input-group > .oxd-text");
  }

  invalidCredentialsText() {
    return cy.get(".oxd-alert .oxd-text");
  }
}

export default LoginPage;
