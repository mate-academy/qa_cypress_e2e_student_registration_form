/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill basic student data', () => {
    cy.get('#firstName').type('Nazar');
    cy.get('#lastName').type('Kaminskyi');
    cy.get('#userEmail').type('nazar@test.com');

    cy.contains('label', 'Male').click();
    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('April');

    cy.contains('.react-datepicker__day', '15').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.contains('label', 'Sports').click();

    cy.get('#currentAddress').type('Ternopil, Ukraine');

    cy.get('#state').click();
    cy.contains('div', 'NCR').click();

    cy.get('#city').click();
    cy.contains('div', 'Delhi').click();

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');

    cy.get('.modal-body').within(() => {
      cy.contains('td', 'Student Name')
        .next()
        .should('have.text', 'Nazar Kaminskyi');
      cy.contains('td', 'Student Email')
        .next()
        .should('have.text', 'nazar@test.com');
      cy.contains('td', 'Gender').next().should('have.text', 'Male');
      cy.contains('td', 'Mobile').next().should('have.text', '1234567890');
      cy.contains('td', 'Date of Birth')
        .next()
        .should('have.text', '15 April,1995');
      cy.contains('td', 'Subjects').next().should('have.text', 'Maths');
      cy.contains('td', 'Hobbies').next().should('have.text', 'Sports');
      cy.contains('td', 'Address')
        .next()
        .should('have.text', 'Ternopil, Ukraine');
      cy.contains('td', 'State and City')
        .next()
        .should('have.text', 'NCR Delhi');
    });
  });
});
