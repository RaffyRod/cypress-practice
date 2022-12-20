import SideMenu from "../../support/pageObjects/sideMenu";

const sidemenu = new SideMenu();

describe('Side Menu', () => {

  beforeEach(function(){
    cy.login();
    cy.url().should('eq', Cypress.env('dashboardurl'));
  });

  afterEach(function(){
    cy.logout();
  });

  it('Collide Side Menu', ()=>{
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('not.be.visible');
  });

  it('Expand side menu', ()=>{
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('not.be.visible');
    cy.wait(2000);
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('be.visible');

  });

});