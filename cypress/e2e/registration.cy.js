/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Student Registration Form', () => {
    cy.debug('[crossorigin="CORS"]');
    cy.get('form').get('input[placeholder="First Name"]').type('testName');
    cy.get('form').get('input[placeholder="Last Name"]').type('testLastName');
    cy.get('form').get('input[id="userEmail"]').type('test@test.pl');
    cy.get('form').get('input[id=userNumber]').type('500000100');
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
    cy.get('input[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('2024');
    cy.get('.react-datepicker__day--015').click();

    // Current Address
    cy.get('textarea[placeholder="Current Address"]').type('Testowa 15, Test');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('ncr{enter}');
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('Delhi{enter}');

    // CLick Button
    cy.get('button[id="submit"]').contains('Submit').click();

    // Assert Name
    cy.get('.modal-body').contains('Student Name').next()
      .should('have.text', 'testName testLastName');

    // Assert Email
    cy.get('.modal-body').contains('Student Email').next()
      .should('have.text', 'test@test.pl');

    // Assert Gender
    cy.get('.modal-body').contains('Gender').next()
      .should('have.text', 'Male');

    // Assert Mobile
    cy.get('.modal-body').contains('Mobile').next()
      .should('have.text', '500000100');

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
      .should('have.text', 'Testowa 15, Test');

    // Assert State & City
    cy.get('.modal-body').contains('State and City').next()
      .should('have.text', 'NCR Delhi');

    // Close Modal Window
    cy.get('button[id="closeLargeModal"]').click();
  });
});
