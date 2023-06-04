/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register a new user', () => {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      address,
    } = generateUser();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);
    
    cy.get('#userEmail').type(email);
    
    cy.get('.custom-control-label').contains('Male').click();
    
    cy.get('#userNumber').type(mobileNumber);

    cy.get('#dateOfBirthInput').click();
    
    cy.get('.react-datepicker__year-select').select('2000');

    cy.get('.react-datepicker__month-select').select(11);

    cy.get('.react-datepicker__day').contains(23).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('Chemistry{enter}');

    cy.get('.custom-control-label').contains('Sport').click();

    cy.get('#currentAddress').type(address);
    
    cy.get('#state').type('{downArrow}{enter}');

    cy.get('#city').type('{downArrow}{enter}');
    
    cy.get('#submit').click({force: true});
    
    cy.get('tbody')
      .should('contain', firstName)
      .and('contain', lastName)
      .and('contain', email)
      .and('contain.text', 'Male')
      .and('contain', mobileNumber)
      .and('contain', '23 December,2000')
      .and('contain', 'Chemistry')
      .and('contain', 'Sport')
      .and('contain', address)
      .and('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow');
  });
});
