/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    // enter basic data
    cy.get('#firstName').type('testName');
    cy.get('#lastName').type('testSurname');
    cy.get('#userEmail').type('testEmail@qa.com');
    cy.get('#userNumber').type('1234554321');

    // select date
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('November');
    cy.get('.react-datepicker__year-select').select('1991');
    // eslint-disable-next-line max-len
    cy.get('.react-datepicker__day--007:not(.react-datepicker__day--outside-month)').click();

    // select checkboxes
    cy.get('.custom-control-label').contains('Sports').click();
    cy.get('.custom-control-label').contains('Male').click();

    // select subject
    cy.get('#subjectsInput').type('Math{enter}');

    // fillout address select city and state
    cy.get('#currentAddress').type('test Address 123');
    cy.get('#stateCity-wrapper').contains('Select State').type('Raja{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Jai{enter}');

    cy.get('#submit').contains('Submit').click();

    // assert basic data
    cy.get('.modal-body').contains('Student Name').parent()
      .should('contain', 'testName');
    cy.get('.modal-body').contains('Student Name').parent()
      .should('contain', 'testSurname');
    cy.get('.modal-body').contains('Student Email').parent()
      .should('contain', 'testEmail@qa.com');
    cy.get('.modal-body').contains('Mobile').parent()
      .should('contain', '1234554321');

    // assert date
    cy.get('.modal-body').contains('Date of Birth').parent()
      .should('contain', '7 November,1991');

    // assert checkboxes
    cy.get('.modal-body').contains('Gender').parent()
      .should('contain', 'Male');
    cy.get('.modal-body').contains('Hobbies').parent()
      .should('contain', 'Sports');

    // assert subject
    cy.get('.modal-body').contains('Subjects').parent()
      .should('contain', 'Maths');

    // assert address select city and state
    cy.get('.modal-body').contains('Address').parent()
      .should('contain', 'test Address 123');
    cy.get('.modal-body').contains('State and City').parent()
      .should('contain', 'Rajasthan');
    cy.get('.modal-body').contains('State and City').parent()
      .should('contain', 'Jaipur');
  });
});
