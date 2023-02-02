# Cypress Automation Practice (OrangeHRm demo page)

The following project is an Automation framework designed using Cypress and Javascript best practices applied for the following modules using a test plan:

| Module           |Number of Scenarios  | Status                                                                |
| ----------------- |------------ |------------------------------------------------------------------ |
| Login |5 | :white_check_mark: |
| User profile |5 | :white_check_mark: |
| Dashboard |5 | :white_check_mark: |
| Side menu |5 | :white_check_mark: |
| Admin page |13 | :white_check_mark: |

## Test Cases automated on each module
#### Login Page

- Login successful.
- Click on Login with empty fields.
- Login with invalid username and password.
- Login with just email typed.
- Login with just password typed.

#### User profile section

- Click on About.
- Click on Support.
- Click on Change password.
- Click on Logout.
- Close user profile section by clicking somewhere else.

#### Dashboard page

- Check Time at Work section.
- Check My Actions section.
- Check Quick Launch section.
- Check Employees on Leave Today section.
- Check Employee Distribution by Sub Unit section.
- Check Employee Distribution by Location section.

#### Side menu Test cases

- Collide side menu.
- Expand side menu.
- Perform search using the search bar.
- Visit all side menu pages.
- Click on OrangeHRM icon.

#### Admin page

- Expand/Collide System Users section.
- Search user by username.
- Search user by User Role.
- Search user by Employee Name.
- Search user by Status.
- Reset user search.
- Delete user.
- Edit user.
- Display number of users.
- Select all users.
- Delete selected users.
- Use filer by Ascending on Users table.
- Use filer by Descending on Users table.

## Important

- After pushing changes to the repo the CI will run finishing by creating and deploying a report to GitHub pages on the following link: https://raffyrod.github.io/cypress-practice/

- SonarCloud code review information can be found at: https://sonarcloud.io/project/overview?id=RaffyRod_cypress-practice