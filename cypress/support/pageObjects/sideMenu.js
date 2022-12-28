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

  adminLink(){
    return cy.get(':nth-child(1) > .oxd-main-menu-item');
  }

  pmiLink(){
    return cy.get(':nth-child(2) > .oxd-main-menu-item');
  }

  leaveLink(){
    return cy.get(':nth-child(3) > .oxd-main-menu-item');
  }

  timeLink(){
    return cy.get(':nth-child(4) > .oxd-main-menu-item');
  }

  recruitmentLink(){
    return cy.get(':nth-child(5) > .oxd-main-menu-item');
  }

  infoLink(){
    return cy.get(':nth-child(6) > .oxd-main-menu-item');
  }

  performanceLink(){
    return cy.get(':nth-child(7) > .oxd-main-menu-item');
  }

  directoryLink(){
    return cy.get(':nth-child(9) > .oxd-main-menu-item');
  }

  maintenanceLink(){
    return cy.get(':nth-child(10) > .oxd-main-menu-item');
  }

  menuItemResult(){
    return cy.get('.oxd-main-menu-item');
  }
}

export default SideMenu;