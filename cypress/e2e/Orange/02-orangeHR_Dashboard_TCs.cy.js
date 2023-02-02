import DashBoardPage from "../../support/pageObjects/dashboardPage";

const dashBoardPage = new DashBoardPage ();

describe('Dashboard Page', () => {

  beforeEach(function(){
    cy.login();
    cy.url().should('eq', Cypress.env('dashboardurl'));
    Cypress.on('uncaught:exception', () => {
      return false
    });
  });

  afterEach(function(){
    cy.logout();
  });

  it('Check Time at Work section', () => {
    dashBoardPage.timeAtWorkCard().should('be.visible');
    dashBoardPage.timeAtWorkTitle().contains('Time at Work');
  });

  it('Check My Actions section', () => {
    dashBoardPage.myActionsCard().should('be.visible');
    dashBoardPage.myActionsTitle().contains('My Actions');
  });

  it('Check Quick Launch section', () => {
    dashBoardPage.quickLunchCard().should('be.visible');
    dashBoardPage.quickLunchTitle().contains('Quick Launch');
  });

  it('Check Employees on Leave', () => {
    dashBoardPage.employeesOnLeaveTodayCard().should('be.visible');
    dashBoardPage.employeesOnLeaveTitle().contains('Employees on Leave Today');
  });

  it('Check Employee Distribution by Sub Unit',() => {
    dashBoardPage.employeeDistributionbySubUnitCard().should('be.visible');
    dashBoardPage.employeeDistributionbySubUniTitle().contains('Employee Distribution by Sub Unit');
  });

  it('Check Employee Distribution by Location', () => {
    dashBoardPage.employeeDistributionbyLocationCard().should('be.visible');
    dashBoardPage.employeeDistributionbyLocationTitle().contains('Employee Distribution by Location');
  });
});