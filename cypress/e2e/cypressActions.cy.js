/// <reference types='cypress' />

describe('Create new', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('user', () => {
    cy.get('[id="firstName"]')
    .type('Alexander');

    cy.get('[id="lastName"]')
    .type('Anderson');

    cy.get('[id="userEmail"]')
    .type('AlexanderAnderson@gmail.com')

    cy.get('[id="dateOfBirthInput"]')
    .click()
    .type('{selectAll} 13 Dec 2000')
    .click('right');

    cy.get('[id="userNumber"]')
    .type('8739375883');

    cy.get('[id="currentAddress"]')
    .type('Sweet Home Alabama');

    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
    .type('Mat{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
    .click();

    cy.get('[for="hobbies-checkbox-3"]')
    .click();

    cy.get('[id="state"]')
    .type('Har{enter}');

    cy.get('[class=" css-1wa3eu0-placeholder"]')
    .type('Kar{enter}');

    cy.get('[for="gender-radio-1"]')
    .click()
    .type('{enter}');
  });

  it('user table', () => {
    cy.contains('tr', 'Student Name')
    .should('contain', 'Alexander Anderson');

    cy.contains('tr', 'Student Email')
    .should('contain', 'AlexanderAnderson@gmail.com');

    cy.contains('tr', 'Gender')
    .should('contain', 'Male');

    cy.contains('tr', 'Mobile')
    .should('contain', '8739375883');

    cy.contains('tr', 'Date of Birth')
    .should('contain', '13 December,2000');

    cy.contains('tr', 'Subjects')
    .should('contain', 'Maths');

    cy.contains('tr', 'Hobbies')
    .should('contain', 'Sports, Music');

    cy.contains('tr', 'Address')
    .should('contain', 'Sweet Home Alabama');

    cy.contains('tr', 'State and City')
    .should('contain', 'Haryana Karnal');
  });
});
