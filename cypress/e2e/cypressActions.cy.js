/// <reference types='cypress' />

const {generateStudent} = require('../support/generate');

describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should accept filling all fields in form except "picture"', () => {
    const {firstName, lastName, email, mobileNumber, birthDate, currentAdress} = generateStudent ();

    cy.get('[id="firstName"]')
      .type(firstName);
    cy.get('[id=lastName]')
      .type(lastName);
    cy.get('[id="userEmail"]')
      .type(email);
    cy.get('[id="genterWrapper"]')
      .contains('.custom-control-label', 'Male')
      .click();
    cy.get('[id="userNumber"]')
      .type(mobileNumber);

    cy.get('[id="dateOfBirthInput"]')
      .click();
    cy.get('[class="react-datepicker__year-select"]')
      .select('1994');
    cy.get('[class="react-datepicker__day react-datepicker__day--003"]')
      .click();

    cy.get('[id="subjectsContainer"]')
      .type('C');
    cy.get('[id="react-select-2-option-0"]')
      .click();

      
    cy.contains('label', 'Sports')
      .click();
    cy.contains('label', 'Reading')
      .click();
    cy.contains('label', 'Music')
      .click();

    cy.get('[id="currentAddress"]')
      .type(currentAdress);
    cy.get('[id="state"]')
      .click();
    cy.get('[id="react-select-3-option-0"]')
      .click();
    cy.contains('div', 'Select City')
      .click();
    cy.get('[class=" css-26l3qy-menu"]')
      .click();

    cy.contains('button', 'Submit')
      .click({force: true});

    cy.get('[class="modal-content"]')
      .should('contain.text', 'Thanks for submitting the form')
  });

});
