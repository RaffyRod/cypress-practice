import SideMenu from "../../support/pageObjects/sideMenu";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const sidemenu = new SideMenu();

describe('Side Menu', () => {

  beforeEach(function(){
    cy.login();
    cy.url().should('eq', Cypress.env('dashboardurl'));
  });

  it('Collide Side Menu', ()=>{
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('not.be.visible');
  });

  it('Expand side menu', ()=>{
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('not.be.visible');
    sidemenu.collideButton().click();
    sidemenu.sideSearchBar().should('be.visible');
  });

  it('Click on the on OrangeHRM icon', ()=>{
    sidemenu.getBanner().click();
    //cy.wait(7000);
    const newUrl = cy.url();
    expect(Cypress.env('baseUrl')).to.not.equal(newUrl);
  });
});
