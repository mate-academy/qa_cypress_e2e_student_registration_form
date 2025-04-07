/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Demoqa tests', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('Registration form tests', () => {
    const user = generateUser();

    const subject = 'Maths';
    const firstLastName = user.fullName.split(' ');
    const firstName = firstLastName[0];
    const lastName = firstLastName[1];
    const birthdate = '10 Oct 1999';

    cy.get('input[placeholder="First Name"]')
      .type(firstName);

    cy.get('input[placeholder="Last Name"]')
      .type(lastName);

    cy.get('input[id="userEmail"]')
      .type(user.email);

    cy.get('input[id="gender-radio-1"]')
      .click({force: true});

    cy.get('input[id="userNumber"]')
      .type(user.mobileNumber);

    cy.get('input[id="dateOfBirthInput"]')
      .type('{selectall}')
      .type(`${birthdate}{enter}`);

    cy.get('#subjectsContainer')
      .type(subject + '{enter}');

    cy.get('input[id="hobbies-checkbox-1"]')
      .click({force: true});

    cy.get('textarea[id="currentAddress"]')
      .type(user.adress);

    cy.get('#state')
      .type('NCR' + '{enter}');

    cy.get('#city')
      .type('Noida' + '{enter}');

    cy.get('button[id="submit"]')
      .click({force: true});

    cy.get('div[id="example-modal-sizes-title-lg"]')
      .should('contain.text', 'Thanks for submitting the form');

    cy.contains('td', firstName + ' ' + lastName)
      .should('contain.text', firstName + ' ' + lastName);

    cy.contains('td', user.email)
      .should('contain.text', user.email);

    cy.contains('td', 'Male')
      .should('contain.text', 'Male');
    
    cy.contains('td', user.mobileNumber)
      .should('contain.text', user.mobileNumber);

    cy.contains('td', '10 October,1999')
      .should('contain.text', '10 October,1999');

    cy.contains('td', subject)
      .should('contain.text', subject);

    cy.contains('td', subject)
      .should('contain.text', subject);

    cy.contains('td', 'Sports')
      .should('contain.text', 'Sports');

    cy.contains('td', user.adress)
      .should('contain.text', user.adress);

    cy.contains('td', 'NCR Noida')
      .should('contain.text', 'NCR Noida');
  });
});
