/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should fill all fields in forms except "picture".', () => {
    cy.get('#firstName').type('Kate');
    cy.get('#lastName').type('Hubko');
    cy.get('#userEmail').type('kobrayan@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#userNumber').type('0969817575');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1989');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get(':nth-child(2) > .react-datepicker__day--009').click();
    cy.get('.subjects-auto-complete__value-container').type('P{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#currentAddress').type('Ukraine, Chernihiv');
    cy.get("#state").type(" {downarrow}{enter}");
    cy.get("#city").type(" {downarrow}{enter}");

    cy.get("#submit").click();

    cy.contains('tbody tr', 'Student Name').should('contain.text', 'Kate Hubko');
    cy.contains('tbody tr', 'Student Email').should('contain.text', 'kobrayan@gmail.com');
    cy.contains('tbody tr', 'Gender').should('contain.text', 'Female');
    cy.contains('tbody tr', 'Date of Birth').should('contain.text', '09 January,1989');
    cy.contains('tbody tr', 'Subjects').should('contain.text', 'Physics');
    cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Music');
    cy.contains('tbody tr', 'Address').should('contain.text', 'Ukraine, Chernihiv');
    cy.contains('tbody tr', 'State and City').should('contain.text', 'NCR Delhi');
  });
});
