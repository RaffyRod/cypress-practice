class LoginPage{

    userNameInput(){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }
        userPassword(){
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    loginButton(){
        return cy.get('.oxd-button');
    }
    dashBoardpage(){
        return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text');
    }

}

export default LoginPage;