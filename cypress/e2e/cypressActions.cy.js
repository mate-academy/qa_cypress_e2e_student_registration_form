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

    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
    .type('Har{enter}');

    cy.get('#stateCity-wrapper > :nth-child(3)')
    .type('Kar{enter}');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
    .click()
    .type('{enter}');
  });

  it('user table', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('contain', 'Alexander Anderson');

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .should('contain', 'AlexanderAnderson@gmail.com');

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
    .should('contain', 'Male');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
    .should('contain', '8739375883');

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
    .should('contain', '13 December,2000');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
    .should('contain', 'Maths');

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
    .should('contain', 'Sports, Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
    .should('contain', 'Sweet Home Alabama');

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
    .should('contain', 'Haryana Karnal');
  });
});
