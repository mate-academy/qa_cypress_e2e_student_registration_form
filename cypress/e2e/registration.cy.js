/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should fill all fields in forms except "picture".', () => {
    cy.get('#firstName').type('Oleksandr');
    cy.get('#lastName').type('Prytula');
    cy.get('#userEmail').type('liga5872@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('0938664813');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('October');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get(':nth-child(1) > .react-datepicker__day--006').click();
    cy.get('.subjects-auto-complete__value-container').type('M{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Com{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#currentAddress').type('Boryspil, Kyiv obl');
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', 'Oleksandr')
      .and('contain', 'Prytula');
    cy.contains('tr', 'Student Email').should('contain', 'liga5872@gmail.com');
    cy.contains('tr', 'Gender').should('contain', 'Male');
  });
});
