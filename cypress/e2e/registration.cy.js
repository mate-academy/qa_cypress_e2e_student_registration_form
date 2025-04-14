describe('Automation Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form and submit', () => {
    cy.get('#firstName').type('Dusia');
    cy.get('#lastName').type('Dudu');
    cy.get('#userEmail').type('dusiadudu@example.com');
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('01 Jan 2000');
    cy.get('#hobbies-checkbox-1').check();
    cy.get('[placeholder="Current Address"]').type('123 Main St');

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('Dusia Dudu').should('be.visible');
    cy.contains('dusiadudu@example.com').should('be.visible');
    cy.contains('1234567890').should('be.visible');
    cy.contains('123 Main St').should('be.visible');
    cy.contains('Uttar Pradesh').should('be.visible');
    cy.contains('Lucknow').should('be.visible');
  });
});
