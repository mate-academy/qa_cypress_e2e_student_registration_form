/// <reference types='cypress' />

const { generateUser } = require("../support/generate");
const birthDate = '15 Feb 2021';

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should allow registration', () => {
    const { name, surname, email, mobilePhone, gender, hobby, address } = generateUser();

    cy.findByPlaceholder('First Name')
      .type(name);

    cy.findByPlaceholder('Last Name')
      .type(surname);

    cy.findByPlaceholder('name@example.com')
      .type(email);

    cy.contains('.custom-control-label', gender)
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(mobilePhone);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll} ${birthDate} {enter}`);

    cy.get('.subjects-auto-complete__value-container')
      .type('p{enter}');

    cy.contains('.custom-control-label', hobby)
    .click();

    cy.findByPlaceholder('Current Address')
      .type(address);

    cy.get('#state')
      .type('{enter}');

    cy.get('#city')
    .type('{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', `${name} ${surname}`);
      
    cy.contains('tr', 'Student Email')
      .should('contain', `${email}`);

    cy.contains('tr', 'Gender')
      .should('contain', `${gender}`);

    cy.contains('tr', 'Mobile')
      .should('contain', `${mobilePhone}`);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '15 February,2021');

    cy.contains('tr', 'Subjects')
      .should('contain', 'Physics');

    cy.contains('tr', 'Hobbies')
      .should('contain', `${hobby}`);

    cy.contains('tr', 'Address')
      .should('contain', `${address}`);

    cy.contains('tr', 'State and City')
      .should('contain', `NCR Delhi`);
    
    cy.get('#closeLargeModal')
      .should('contain', 'Close');

  });
});
