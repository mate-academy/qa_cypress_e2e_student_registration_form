/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    cy.get('[id="firstName"]')
      .type('Tom');

    cy.get('[id="lastName"]')
      .type('Smith');

    cy.get('[id="userEmail"]')
      .type('tomsmith@example.com');

    cy.get('#genterWrapper')
      .contains('Male')
      .click();

    cy.get('[id="userNumber"]')
      .type('1234567890');

    cy.get('[id="dateOfBirthInput"]')
      .click();

    cy.get('.react-datepicker__year-select')
      .select('2023');

    cy.get('.react-datepicker__month-select')
      .select('December');

    cy.get('.react-datepicker__day--016')
      .click();

    cy.get('#subjectsInput')
      .type('Arts{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.get('#currentAddress')
      .type('currentAddress');

    cy.get('#stateCity-wrapper')
      .contains('Select State')
      .type('Rajasthan{enter}');

    cy.get('#stateCity-wrapper')
      .contains('Select City')
      .type('Jaiselmer{enter}');

    cy.get('#submit')
      .click();

    cy.get('.modal-body')
      .contains('Student Name')
      .next('td')
      .should('have.text', 'Tom Smith');

    cy.get('.modal-body')
      .contains('Student Email')
      .next('td')
      .should('have.text', 'tomsmith@example.com');

    cy.get('.modal-body')
      .contains('Student Email')
      .next('td')
      .should('have.text', 'tomsmith@example.com');

    cy.get('.modal-body')
      .contains('Gender')
      .next('td')
      .should('have.text', 'Male');

    cy.get('.modal-body')
      .contains('Mobile')
      .next('td')
      .should('have.text', '1234567890');

    cy.get('.modal-body')
      .contains('Date of Birth')
      .next('td')
      .should('have.text', '16 December,2023');

    cy.get('.modal-body')
      .contains('Subjects')
      .next('td')
      .should('have.text', 'Arts');

    cy.get('.modal-body')
      .contains('Hobbies')
      .next('td')
      .should('have.text', 'Sports');

    cy.get('.modal-body')
      .contains('Address')
      .next('td')
      .should('have.text', 'currentAddress');

    cy.get('.modal-body')
      .contains('State and City')
      .next('td')
      .should('have.text', 'Rajasthan Jaiselmer');
  });
});
