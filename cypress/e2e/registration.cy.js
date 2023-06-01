/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  
  before(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then(generateUser =>{
        user = generateUser
      });
  });

  it('should register a new user', () => {

    cy.get('#firstName')
    .type(user.firstName);

    cy.get('#lastName')
    .type(user.lastName);

    cy.get('#userEmail')
    .type(user.email);

    cy.contains('.custom-control-label', user.gender)
    .click();

    cy.get('[placeholder="Mobile Number"]')
    .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
    .click();

    cy.get('.react-datepicker__year-select')
    .select(`${user.birth.year}`);

    cy.get('.react-datepicker__month-select')
    .select(`${user.birth.month}`);

    cy.get('.react-datepicker__day')
    .contains(user.birth.day)
    .click();

    cy.get('.subjects-auto-complete__value-container')
    .type(user.subject + '{enter}');

    cy.contains('.custom-control.custom-checkbox', user.hobby)
    .click();

    cy.get('[placeholder="Current Address"]')
    .type(user.address);

    cy.contains('Select State')
    .type('{downArrow}{enter}');

    cy.contains('Select City')
    .type('{downArrow}{enter}');

    cy.get('.btn.btn-primary')
    .click();

    cy.contains('tr', 'Student Name')
    .should('contain', user.firstName)
    .and('contain', user.lastName);

    cy.contains('tr', 'Student Email')
    .should('contain', user.email);

    cy.contains('tr', 'Gender')
    .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
    .should('contain', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
    .should('contain', user.birth.day)
    .and('contain', `${user.birth.month}`)
    .and('contain', `${user.birth.year}`);

    cy.contains('tr', 'Subjects')
    .should('contain', user.subject);

    cy.contains('tr', 'Hobbies')
    .should('contain', user.hobby);

    cy.contains('tr', 'Address')
    .should('contain', user.address);

    cy.contains('tr', 'State and City')
    .should('contain', 'Uttar Pradesh')
    .and('contain', 'Lucknow');
  });
});
