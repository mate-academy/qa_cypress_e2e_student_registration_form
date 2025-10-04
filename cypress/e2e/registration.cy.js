/// <reference types='cypress' />

const {
  generateUser
} = require('../support/generateuser.js');

const {
  firstName,
  lastName,
  email,
  mobileNumber,
  currentAddress
} = generateUser();

describe('student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form/');
  });

  it(`assert inputed data in window after filling required fields and clicking submit button`, () => {
    cy.get('[placeholder="First Name"]')
      .type(firstName);

    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(email);

    cy.get('label[for="gender-radio-1"]')
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type(mobileNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__year-select')
      .select('1997');

    cy.get('.react-datepicker__month-select')
      .select('May');

    cy.get(`.react-datepicker__day--006:not(.react-datepicker__day--outside-month)`)
      .click();

    cy.get('#subjectsInput')
      .type(`History{enter}`);

    cy.get('label[for="hobbies-checkbox-1"]')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type(currentAddress);

    cy.get('#state')
      .type('NCR{enter}');

    cy.get('#city')
      .type(`Delhi{enter}`);

    cy.get('[id="uploadPicture"]')
      .should('have.value', '');

    cy.get('button[id="submit"]')
      .should('be.enabled');

    cy.get('button[id="submit"]')
      .click();

    cy.contains('div', 'Thanks for submitting the form')
      .should('be.visible');

    cy.contains('tr', 'Student Name')
      .find('td')
      .eq(1)
      .should('have.text', `${firstName} ${lastName}`);

    cy.contains('tr', 'Student Email')
      .find('td')
      .eq(1)
      .should('have.text', email);

    cy.contains('tr', 'Gender')
      .find('td')
      .eq(1)
      .should('have.text', 'Male');

    cy.contains('tr', 'Mobile')
      .find('td')
      .eq(1)
      .should('have.text', mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .find('td')
      .eq(1)
      .should('have.text', '06 May,1997');

    cy.contains('tr', 'Subjects')
      .find('td')
      .eq(1)
      .should('have.text', 'History');

    cy.contains('tr', 'Hobbies')
      .find('td')
      .eq(1)
      .should('have.text', 'Sports');

    cy.contains('tr', 'Address')
      .find('td')
      .eq(1)
      .should('have.text', 'Parzęczewo');

    cy.contains('tr', 'State and City')
      .find('td')
      .eq(1)
      .should('have.text', `NCR Delhi`);
  });
});
