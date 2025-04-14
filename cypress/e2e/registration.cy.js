/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should fill the form with random data and submit', () => {
    cy.generateRandomData().then((data) => {
      const {
        firstName,
        lastName,
        email,
        mobileNumber,
        dateOfBirth,
        subject,
        currentAddress,
        state,
        city,
        gender,
        hobby
      } = data;

      cy.get('#firstName')
        .type(firstName);
      cy.get('#lastName')
        .type(lastName);
      cy.get('#userEmail')
        .type(email);
      cy.contains('.custom-control-label', gender)
        .click();
      cy.get('#userNumber')
        .type(mobileNumber);
      cy.get('#dateOfBirthInput')
        .type('{selectAll}');
      cy.get('#dateOfBirthInput')
        .type(`${dateOfBirth}{enter}`);
      cy.get('.subjects-auto-complete__value-container').type(`${subject}{enter}`);
      cy.contains('.custom-control-label', hobby)
        .click();
      cy.get('#currentAddress')
        .type(currentAddress);

      cy.get('#state')
        .type(`${state}{enter}`);
      cy.get('#city')
        .type(`${city}{enter}`);

      cy.get('#submit')
        .click();

      cy.get('.table-responsive')
        .should('contain', firstName);
      cy.get('.table-responsive')
        .should('contain', lastName);
      cy.get('.table-responsive')
        .should('contain', email);
      cy.get('.table-responsive')
        .should('contain', mobileNumber);
      cy.get('.table-responsive')
        .should('contain', dateOfBirth);
      cy.get('.table-responsive')
        .should('contain', subject);
      cy.get('.table-responsive')
        .should('contain', hobby);
      cy.get('.table-responsive')
        .should('contain', currentAddress);
      cy.get('.table-responsive')
        .should('contain', state);
      cy.get('.table-responsive')
        .should('contain', city);
    });
  });
});
