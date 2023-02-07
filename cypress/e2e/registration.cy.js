/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should provide an ability to field registration form', () => {
    const testWord = 'Tester';
    const testNumber = 1987567898;

    cy.get('#firstName').type(testWord);

    cy.get('#lastName').type(testWord);

    cy.get('#userEmail').type(testWord.toLowerCase() + '@test.com');

    cy.get('#gender-radio-3').click({ force: true });

    cy.get('#userNumber').type(testNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + '01 Dec ' + testNumber.toString().slice(0, 4));

    cy.get('.subjects-auto-complete__value-container').click({ force: true })
      .type(testWord.slice(0, 2) + '{enter}');

    cy.get('#hobbies-checkbox-2').click({ force: true });

    cy.get('#currentAddress').type(testWord);

    cy.get('#state').click().type('N' + '{enter}');

    cy.get('#city').click().type('a' + '{enter}');

    cy.get('#submit').click( {force: true} );

    cy.get('#example-modal-sizes-title-lg').should('exist');

    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');

      cy.get('tbody > :nth-child(1) > :nth-child(2)')
        .should('contain', `${testWord} ${testWord}`);

      cy.get('tbody > :nth-child(2) > :nth-child(2)')
        .should('contain', testWord.toLowerCase() + '@test.com');

      cy.get('tbody > :nth-child(3) > :nth-child(2)')
        .should('contain', 'Other');

      cy.get('tbody > :nth-child(4) > :nth-child(2)')
        .should('contain', testNumber);

      cy.get('tbody > :nth-child(5) > :nth-child(2)')
        .should('contain','01 December,' + testNumber.toString().slice(0, 4));

      cy.get('tbody > :nth-child(6) > :nth-child(2)')
        .should('contain','Computer Science');

      cy.get('tbody > :nth-child(7) > :nth-child(2)')
        .should('contain','Reading');

      cy.get('tbody > :nth-child(9) > :nth-child(2)')
        .should('contain', testWord);

      cy.get('tbody > :nth-child(10) > :nth-child(2)')
        .should('contain', 'NCR Gurgaon');

      cy.get('#closeLargeModal').click()
  });
});
