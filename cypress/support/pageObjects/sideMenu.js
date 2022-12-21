class SideMenu{

  collideButton(){
    return cy.get('.oxd-main-menu-search > .oxd-icon-button');
  }

  sideSearchBar(){
    return cy.get('.oxd-input');
  }

  getBanner(){
    return cy.get('.oxd-brand-banner > img');
  }
}

export default SideMenu;