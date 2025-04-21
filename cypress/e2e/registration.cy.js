/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.intercept('https://*.google-analytics.com/**', { statusCode: 200 });
    cy.intercept('https://*.ads.com/**', { statusCode: 200 });
    cy.visit('https://demoqa.com/automation-practice-form');
    // Prevent form submission by intercepting the request
    cy.intercept('POST', '**', (req) => {
      req.reply({ statusCode: 200 }); // Stub the response to prevent navigation
    });
  });

  it('should fill out the form and submit it successfully', () => {
    cy.get('input[id="firstName"]').type('John');
    cy.get('input[id="firstName"]').should('have.value', 'John');

    cy.get('input[id="lastName"]').type('Doe');
    cy.get('input[id="lastName"]').should('have.value', 'Doe');

    cy.get('input[id="userEmail"]').type('john@doe.com');
    cy.get('input[id="userEmail"]').should('have.value', 'john@doe.com');

    // eslint-disable-next-line cypress/no-force
    cy.get('input[id="gender-radio-1"]').check({ force: true });
    cy.get('input[id="gender-radio-1"]').should('be.checked');

    cy.get('input[id="userNumber"]').type('5551234567');
    cy.get('input[id="userNumber"]').should('have.value', '5551234567');

    cy.get('input[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__month-select').type('April');
    cy.get('.react-datepicker__year-select').select('2025');
    cy.get('.react-datepicker__day--016').click();
    cy.get('input[id="dateOfBirthInput"]').should('have.value', '16 Apr 2025');
    cy.get('#subjectsInput').type('Maths');
    cy.get('.subjects-auto-complete__menu').contains('Maths').click();
    cy.get('.subjects-auto-complete__multi-value').should('contain', 'Maths');

    // eslint-disable-next-line cypress/no-force
    cy.get('input[id="hobbies-checkbox-1"]').check({ force: true });
    cy.get('input[id="hobbies-checkbox-1"]').should('be.checked');

    cy.get('textarea[id="currentAddress"]')
      .type('123 Main Street, Springfield');
    cy.get('textarea[id="currentAddress"]')
      .should('have.value', '123 Main Street, Springfield');

    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-3-input').type('NCR', { force: true });
    cy.get('.css-26l3qy-menu').contains('NCR').click();
    cy.get('#state').should('contain', 'NCR');

    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-4-input').type('Delhi', { force: true });
    cy.get('.css-26l3qy-menu').contains('Delhi').click();
    cy.get('#city').should('contain', 'Delhi');

    cy.get('button[type="submit"]').click();
    cy.get('.modal-title.h4')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');

    cy.get('.modal-title.h4')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');

    cy.get('table').within(() => {
      cy.contains('td', 'John Doe').should('be.visible');
      cy.contains('td', 'john@doe.com').should('be.visible');
      cy.contains('td', 'Male').should('be.visible');
      cy.contains('td', '5551234567').should('be.visible');
      cy.contains('td', '16 Apr 2025').should('be.visible');
      cy.contains('td', 'Maths').should('be.visible');
      cy.contains('td', 'Sports').should('be.visible');
      cy.contains('td', '123 Main Street, Springfield').should('be.visible');
      cy.contains('td', 'NCR Delhi').should('be.visible');
    });
  });
});
