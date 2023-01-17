class DashBoardPage {
  timeAtWorkCard() {
    return cy.get(':nth-child(1) > .oxd-sheet');
  }

  timeAtWorkTitle() {
    return cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }

  myActionsCard() {
    return cy.get(':nth-child(2) > .oxd-sheet');
  }

  myActionsTitle() {
    return cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }

  quickLunchCard() {
    return cy.get(':nth-child(3) > .oxd-sheet');
  }

  quickLunchTitle() {
    return cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }

  employeesOnLeaveTodayCard() {
    return cy.get(':nth-child(4) > .oxd-sheet');
  }

  employeesOnLeaveTitle() {
    return cy.get(':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }

  employeeDistributionbySubUnitCard() {
    return cy.get(':nth-child(5) > .oxd-sheet');
  }

  employeeDistributionbySubUniTitle() {
    return cy.get(':nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }

  employeeDistributionbyLocationCard() {
    return cy.get(':nth-child(6) > .oxd-sheet');
  }

  employeeDistributionbyLocationTitle() {
    return cy.get(':nth-child(7) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
  }
}

export default DashBoardPage;