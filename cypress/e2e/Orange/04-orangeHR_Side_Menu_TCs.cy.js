import SideMenu from "../../support/pageObjects/sideMenu";
Cypress.on('uncaught:exception', () => {
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
    const newUrl = cy.url();
    expect(Cypress.env('baseUrl')).to.not.equal(newUrl);
  });

  it('Visit all side menu pages', ()=>{
    sidemenu.adminLink().click();
    cy.url().should('includes', 'admin').go('back');
    sidemenu.pmiLink().click();
    cy.url().should('includes', 'pim').go('back');
    sidemenu.leaveLink().click();
    cy.url().should('includes', 'leave').go('back');
    sidemenu.timeLink().click();
    cy.url().should('includes', 'time').go('back');
    sidemenu.recruitmentLink().click();
    cy.url().should('includes', 'recruitment').go('back');
    sidemenu.infoLink().click();
    cy.url().should('includes', 'viewPersonalDetails').go('back');
    sidemenu.performanceLink().click();
    cy.url().should('includes', 'performance').go('back');
    sidemenu.directoryLink().click();
    cy.url().should('includes', 'directory').go('back');
    sidemenu.maintenanceLink().click();
    cy.url().should('includes', 'maintenance').go('back');
  });

  it('Perform search using the search bar', ()=>{
    sidemenu.sideSearchBar().type('Admin');
    sidemenu.menuItemResult().should('have.text', 'Admin').click().go('back');
    sidemenu.sideSearchBar().type('PIM');
    sidemenu.menuItemResult().should('have.text', 'PIM').click().go('back');
  });
});
