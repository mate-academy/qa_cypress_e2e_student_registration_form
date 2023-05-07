/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser.js');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should allow to register a new user', () => {
    const {
      firstName,
      lastName,
      email,
      gender,
      birthday,
      phoneNumber,
      address,
      hobby,
      subjects,
      state,
      city,
    } = generateUser();

    cy.findByPlaceholder('First Name').type(firstName);
    cy.findByPlaceholder('Last Name').type(lastName);
    cy.findByPlaceholder('name@example.com').type(email);

    cy.findByType('radio').check(gender, {force: true});

    cy.findByPlaceholder('Mobile Number').type(phoneNumber);
  
    cy.get('#dateOfBirthInput').type('{selectall}' + birthday + '{enter}');

    cy.get('.subjects-auto-complete__value-container').type(subjects + '{enter}');

    cy.findByType('checkbox').check('2', {force: true});

    cy.findByPlaceholder('Current Address').type(address);

    cy.get('#state').type('{downArrow}{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');

    cy.contains('button', 'Submit').click({force: true});

    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form');

    cy.get('.modal-body')
      .should('contain.text', `${firstName} ${lastName}`)
      .should('contain.text', email)
      .should('contain.text', gender)
      .should('contain.text', gender)
      .should('contain.text', phoneNumber)
      .should('contain.text', '15 September,1996')
      .should('contain.text', subjects)
      .should('contain.text', hobby)
      .should('contain.text', address)
      .should('contain.text', `${state} ${city}`);
  });
});
