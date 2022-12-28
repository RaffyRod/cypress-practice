import SideMenu from "../../support/pageObjects/sideMenu";
Cypress.on('uncaught:exception', () => {
  return false;
});

const sidemenu = new SideMenu();

describe('Side Menu', () => {

  beforeEach(function(){
    cy.login();
    cy.url().should('eq', Cypress.env('dashboardurl'));
    Cypress.on('uncaught:exception', () => {
      return false
    });
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
    cy.origin(Cypress.env('prodURL'), ()=> {
      cy.url().should('eq', Cypress.env('prodURL'));
    });
  });

  it('Visit all side menu pages', ()=>{
    sidemenu.adminLink().should('have.attr', 'href').and('include', 'admin');
    sidemenu.pmiLink().should('have.attr', 'href').and('include', 'pim')
    sidemenu.leaveLink().should('have.attr', 'href').and('include', 'leave');
    sidemenu.timeLink().should('have.attr', 'href').and('include', 'time');
    sidemenu.recruitmentLink().should('have.attr', 'href').and('include', 'recruitment');
    sidemenu.infoLink().should('have.attr', 'href').and('include', 'viewMyDetails');
    sidemenu.performanceLink().should('have.attr', 'href').and('include', 'performance');
    sidemenu.directoryLink().should('have.attr', 'href').and('include', 'directory');
    sidemenu.maintenanceLink().should('have.attr', 'href').and('include', 'maintenance');
  });

  it('Perform search using the search bar', ()=>{
    sidemenu.sideSearchBar().type('Admin');
    sidemenu.menuItemResult().should('have.text', 'Admin').click().go('back');
    sidemenu.sideSearchBar().type('PIM');
    sidemenu.menuItemResult().should('have.text', 'PIM').click().go('back');
  });
});
