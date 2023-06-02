/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user

  before(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
  });

  it('should successfully register a new user', () => {
    cy.findById('firstName').type(user.firstName);
    cy.findById('lastName').type(user.lastName);
    cy.findById('userEmail').type(user.email);
    cy.contains('.custom-control-label', `${user.gender}`).click({ force: true });
    cy.findById('userNumber').type(user.number);
    cy.findById('dateOfBirthInput').type(`{selectall}${user.day} ${user.month} ${user.year}{enter}`);
    cy.get('.subjects-auto-complete__value-container')
      .type(user.subject.first + '{enter}')
      .type(user.subject.second + '{enter}');
    cy.contains('.custom-control-label', `${user.hobbie}`).click({ force: true });
    cy.findById('currentAddress').type(user.address);
    cy.contains('.css-yk16xz-control', 'Select State').type('{downArrow}{enter}');
    cy.contains('.css-yk16xz-control', 'Select City').type('{downArrow}{enter}');
    cy.findById('submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.number);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.day)
      .and('contain', user.month)
      .and('contain', user.year);
    cy.contains('tr', 'Subject')
      .should('contain', user.subject.first)
      .and('contain', user.subject.second);
    cy.contains('tr', 'Hobbie')
      .should('contain', user.hobbie);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
