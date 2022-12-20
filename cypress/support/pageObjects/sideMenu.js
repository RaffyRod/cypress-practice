class SideMenu{

  collideButton(){
    return cy.get('.oxd-main-menu-search > .oxd-icon-button');
  }

  sideSearchBar(){
    return cy.get('.oxd-input');
  }
}

export default SideMenu;