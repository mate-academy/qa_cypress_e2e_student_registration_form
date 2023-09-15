/// <reference types='cypress' />
import {
  baseUrl,
  name,
  lastName,
  email,
  mobile,
  subject,
  currentAddress,
  randomGender,
  randomHobbie
} from '../support/userVars.js';

cy.faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.visit(baseUrl);
  });

  it('should allow the user to register with valid credentials', () => {
    cy.viewport(1920, 1080);
    cy.get('[placeholder="First Name"]').type(name);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get(`[for="gender-radio-${randomGender}"]`).click();
    cy.get('[placeholder="Mobile Number"]').type(mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__day--015').click();
    cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[id="subjectsContainer"]').click();
    cy.get(`.custom-checkbox [for="hobbies-checkbox-${randomHobbie}"]`).click();
    cy.get('[placeholder="Current Address"]').type(currentAddress);
    cy.get('#state').type('Raja{enter}');
    cy.get('#city').type('Jaipur{enter}');
    cy.get('#submit').click();
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', email);
    cy.get('[id="closeLargeModal"]').click();
  });
});
