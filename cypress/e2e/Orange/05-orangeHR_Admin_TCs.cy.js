import AdminPage from "../../support/pageObjects/adminPage";
import { randUser } from '@ngneat/falso';

const adminPage = new AdminPage();
const fakeUserName = randUser().username;

describe('Admin Page', () => {

  it.skip('Add Admin User using Admin Page', () => {
    adminPage.adminButton().click();
    adminPage.addUserButton().click();
    adminPage.addUserRole().click();
    adminPage.selectAdminRole().click();
    adminPage.addEmployeeName().type('Alice Duval');
    adminPage.selectEmployeeName().click();
    adminPage.addStatus().click();
    adminPage.selectEnabledStatus().click();
    adminPage.addUserName().type(fakeUserName);
    adminPage.addPassword().click();
    adminPage.addPassword().type('ThisIsSparta123@');
    adminPage.confirmPassword().type('ThisIsSparta123@');
    adminPage.saveUserButton().click();
    adminPage.confirmationToast().should('have.text', 'SuccessSuccessfully Saved');
  });
});