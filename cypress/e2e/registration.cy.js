/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register', () => {
    const firstName = 'Illidan';
    const lastName = 'Stormrage';
    const email = 'illidan@hotline.com';
    const mobileNumber = '0953545657';
    const subject = 'Qashnik';
    const address = 'Berduchiv';

    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.get('[for="gender-radio-1"]')
      .click();
    cy.get('#userNumber')
      .type(mobileNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('July');
    cy.get('.react-datepicker__year-select')
      .select('2001');
    cy.get(':nth-child(2) > .react-datepicker__day--009')
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type(subject);
    cy.get('[for="hobbies-checkbox-2"]')
      .click();
    cy.get('#currentAddress')
      .type(address);
    cy.get('#state')
      .type('Haryana{enter}');
    cy.get('#city')
      .type('Karnal{enter}');
    cy.get('#submit')
      .click();

    cy.get('.modal-content')
      .should('exist');
    cy.get('.modal-header')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body')
      .should('contain', firstName);
    cy.get('.modal-body')
      .should('contain', lastName);
    cy.get('.modal-body')
      .should('contain', email);
    cy.get('.modal-body')
      .should('contain', 'Male');
    cy.get('.modal-body')
      .should('contain', mobileNumber);
    cy.get('.modal-body')
      .should('contain', '9 July,2001');
    cy.get('.modal-body')
      .should('contain', 'Reading');
    cy.get('.modal-body')
      .should('contain', address);
    cy.get('.modal-body')
      .should('contain', 'Haryana Karnal');
  });
});
