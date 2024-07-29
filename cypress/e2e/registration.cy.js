/// <reference types='cypress' />

describe('Student Registration page', () => {
  it('Student Registration Form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    const randomNumber = Math.floor(Math.random() * 1000000);
    const firstName = `Luba${randomNumber}`;
    const lastName = `Ivanova${randomNumber}`;
    const email = `${firstName}@mail.com`;

    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click();

    cy.get('#userNumber')
      .type('0501234567');

    cy.get('#dateOfBirthInput')
      .invoke('val', '15 Jul 2024');

    cy.get('.subjects-auto-complete__value-container')
      .type('mathematics, physics, computer science');

    cy.get('label[for="hobbies-checkbox-2"]')
      .click();

    cy.get('textarea[placeholder="Current Address"]')
      .type('Odessa. Deribasovskaya street 72');

    cy.get('textarea[placeholder="Current Address"]')
      .type('Odessa. Deribasovskaya street 72');

    cy.get('.css-tlfecz-indicatorContainer').first()
      .click();

    cy.contains('NCR', { timeout: 10000 })
      .click();

    cy.get('#submit')
      .click();

    cy.get('.modal-title')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
