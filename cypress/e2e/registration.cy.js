/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should registrate after filling all reqired fields', () => {
    cy.get('#firstName').type('Vlad');
    cy.get('#lastName').type('Makohon');
    cy.get('#userEmail').type('mako@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type(380978767845);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2004');
    cy.get('.react-datepicker__month-select').select('April');
    cy.get(':nth-child(1) > .react-datepicker__day--002').click();
    cy.get('.subjects-auto-complete__value-container').type('maths{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#currentAddress').type('sara 59');
    cy.get('#stateCity-wrapper > :nth-child(2)').click().type('NCR{enter}');
    cy.get('#stateCity-wrapper > :nth-child(3)').click().type('DELHI{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  });
});
