/// <reference types='cypress' />

import { generateUser } from '../support/generate_user';

describe('Student Registration page', () => {
  const {
    firstName,
    lastName,
    email,
    randomIndex,
    gender,
    phoneNumber,
    birthDate,
    street,
    subject} = generateUser();

  before(() => {
    cy.visit('/')
  });

  it('should open modal window with credentials after registration', () => {
    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get(`[for="gender-radio-${randomIndex}"]`).click();

    cy.get('#userNumber').type(phoneNumber);

    cy.get('#dateOfBirthInput').type(`{selectall}${birthDate}{enter}`)

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get(`[for="hobbies-checkbox-${randomIndex}"]`).click();

    cy.get('#currentAddress').type(street);

    cy.get('#state').click().type('{downArrow}{enter}');

    cy.get('#city').click().type('{downArrow}{enter}');

    cy.get('#submit').click({force: true});

    cy.contains('tr', 'Student Name').should('contain', `${firstName} ${lastName}`);
    cy.contains('tr', 'Student Email').should('contain', email);
    cy.contains('tr', 'Gender').should('contain', `${gender[randomIndex - 1]}`);
    cy.contains('tr', 'Mobile').should('contain', phoneNumber);
    // cy.contains('tr', 'Date of Birth').should('contain.text', birthDate);
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain', `${subject[randomIndex - 1]}`);
    cy.contains('tr', 'Address').should('contain', street);
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});
