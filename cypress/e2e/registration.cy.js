/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('Student Registration Form - autofilling', () => {
    // asercja poprawności miejsca
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    // wypełnienie formularza
    cy.get('[placeholder="First Name"]')
      .type('Donald');
    cy.get('[placeholder="Last Name"]')
      .type('Duck');
    cy.get('[placeholder="name@example.com"]')
      .type('donald@gmail.com');
    cy.get('#genterWrapper').contains('Male').click();
    cy.get('[placeholder="Mobile Number"]')
      .type('48666666666');
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + '13 June 1945' + '{enter}');
    cy.get('#subjectsInput').type('ma{enter}');
    cy.get('#hobbiesWrapper').contains('Sport').click();
    cy.findByPlaceholder('Current Address', 'textarea');
    cy.get('#react-select-4-input').should('be.disabled');
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('#stateCity-wrapper').contains('Select City').type('De{enter}');
    cy.get('button').contains('Submit').click();
    // asercja danych w popup
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', 'Donald Duck');
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', 'donald@gmail.com');
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', '4866666666');
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', '13 June,1945');
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain', 'Maths');
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', 'Sports');
    cy.get('tbody > :nth-child(8) > :nth-child(2)')
      .should('contain', '');
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', '');
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'NCR Delhi');
  });
});
