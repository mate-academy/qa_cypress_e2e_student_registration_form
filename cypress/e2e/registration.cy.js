/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('Student should register on the page', () => {
    // Fill student data
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#userNumber').type(user.number);

    // Gender
    cy.get('.custom-control-label')
      .contains(user.gender, { matchCase: false }).click();

    // Subjects
    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('Arts{enter}');

    // Select Gender
    cy.get('input[type="radio"]')
      .get('.custom-control-label').contains('Male').click();

    // Select Hobbies
    cy.get('input[type="checkbox"]')
      .get('.custom-control-label').contains('Sports').click();
    cy.get('input[type="checkbox"]')
      .get('.custom-control-label').contains('Music').click();

    // Set DateOfBirthday
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('2024');
    cy.get('.react-datepicker__day--015').click();

    // Current Address
    cy.get('#currentAddress').type(user.address);
    cy.get('#stateCity-wrapper').contains('Select State').type('ncr{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Delhi{enter}');

    // CLick Button & assert
    cy.get('#submit').contains('Submit').click();
    cy.get('.modal-header')
      .should('have.text', 'Thanks for submitting the form');

    // Assert Name
    cy.get('.modal-body').contains('Student Name').next()
      .should('have.text', `${user.firstName} ${user.lastName}`);

    // Assert Email
    cy.get('.modal-body').contains('Student Email').next()
      .should('have.text', `${user.email}`);

    // Assert Gender
    cy.get('.modal-body').contains('Gender').next()
      .should('have.text', 'Male');

    // Assert Mobile
    cy.get('.modal-body').contains('Mobile').next()
      .should('have.text', `${user.number}`);

    // Assert Date
    cy.get('.modal-body').contains('Date of Birth').next()
      .should('have.text', '15 April,2024');

    // Assert Subjects
    cy.get('.modal-body').contains('Subjects').next()
      .should('have.text', 'English, Arts');

    // Assert Hobbies
    cy.get('.modal-body').contains('Hobbies').next()
      .should('have.text', 'Sports, Music');

    // Assert Address
    cy.get('.modal-body').contains('Address').next()
      .should('have.text', `${user.address}`);

    // Assert State & City
    cy.get('.modal-body').contains('State and City').next()
      .should('have.text', 'NCR Delhi');

    // Close Modal Window
    cy.get('#closeLargeModal').click();
  });
});
