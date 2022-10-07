/// <reference types='cypress' />

const {generateStudent} = require('../support/generate');

describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should accept filling all fields in form except "picture"', () => {
    const {firstName, lastName, email, mobileNumber, currentAdress} = generateStudent ();

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
    cy.get('[class="react-datepicker__year-select"]')
      .select('1994');
    cy.get('[class="react-datepicker__day react-datepicker__day--003"]')
      .click();

    cy.get('#subjectsContainer')
      .type('Chemistry'+'{enter}');

    cy.get('#hobbies-checkbox-1')
      .click({force: true});
    cy.get('#hobbies-checkbox-2')
      .click({force: true});
    cy.get('#hobbies-checkbox-3')
      .click({force: true});

    cy.get('[id="currentAddress"]')
      .type(currentAdress);
    cy.get('#state')
      .type('NCR'+'{enter}');
    cy.get('#city')
      .type('Delhi'+'{enter}');

    cy.contains('button', 'Submit')
      .click({force: true});

    cy.contains('.modal-header', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', firstName + ' ' + lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', email);

    cy.contains('tr', 'Gender')
      .should('contain', 'Male');

    cy.contains('tr', 'Mobile')
      .should('contain', mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '03 October,1994');

    cy.contains('tr', 'Subjects')
      .should('contain', 'Chemistry');

    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports, Reading, Music');

    cy.contains('tr', 'Address')
      .should('contain', currentAdress);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });

});
