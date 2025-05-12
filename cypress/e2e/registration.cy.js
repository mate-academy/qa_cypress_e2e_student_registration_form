/// <reference types='cypress' />

describe('Student Registration page', () => {
  it('should register with valid credentials', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Dawid');
    cy.get('#lastName').type('Kogut');
    cy.get('#userEmail').type('dawid.kogut@gmail.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0123456789');
    cy.get('#dateOfBirthInput').type('2025-05-12{enter}');
    cy.get('#subjectsContainer').type('Socer');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get('#currentAddress').type('ABC \n DCE \n BTY');
    cy.get('#state').click();
    cy.contains('div', 'NCR').click();
    cy.get('#city').click();
    cy.contains('div', 'Delhi').click();
    cy.get('button[type="submit"]').click();

    cy.contains('Dawid Kogut').should('be.visible');
    cy.contains('dawid.kogut@gmail.com').should('be.visible');
    cy.contains('male').should('be.visible');
    cy.contains('0123456789').should('be.visible');
    cy.contains('12 May,2025').should('be.visible');
    cy.contains('Sports').should('be.visible');
    cy.contains('Music').should('be.visible');
    cy.contains('ABC').should('be.visible');
    cy.contains('NCR').should('be.visible');
    cy.contains('Delhi').should('be.visible');
  });
});
