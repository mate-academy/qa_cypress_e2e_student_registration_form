/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const {
  generateUser,
  getGenderAccordingName,
  generateBirthDate,
  randomSubjects,
  randomElement,
  randomState
} = require('../support/generateUserData');

describe('Student Registration page', () => {
  before(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('should send all register data', () => {
    const { firstName, lastName, email, phone } = generateUser();
    const gender = getGenderAccordingName(firstName);
    const { date, month, year } = generateBirthDate();
    const subjects = randomSubjects();
    const checkElements = randomElement();
    const address = faker.location.streetAddress();
    const state = randomState();

    cy.getGender(gender).click();
    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(`${year}`);
    cy.get('.react-datepicker__month-select').select(`${month}`);
    cy.get('.react-datepicker__week').contains(`${date}`).click();

    subjects.forEach((subject) => {
      cy.get('#subjectsContainer').type(subject + '{enter}');
      cy.get('#subjectsContainer').last().should('contain.text', subject);
    });

    checkElements.forEach((element) => {
      cy.randomCheck(element).click();
    });

    cy.get('#currentAddress').type(address);

    cy.get('#state').type(state + '{enter}');

    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
    cy.checkRow(0).should('contain', firstName + ' ' + lastName);

    cy.checkRow(1).should('contain', email);

    cy.checkRow(2)
      .should('contain.text', gender[0].toUpperCase() + gender.slice(1));

    cy.checkRow(3).should('contain', phone);

    cy.get('#dateOfBirthInput').invoke('val').then((dateOfBirth) => {
      cy.checkRow(4).should('contain.text', dateOfBirth.slice(0, 6));
    });

    cy.get('.subjects-auto-complete__multi-value', { timeout: 10000 })
      .each((element) => {
        const text = element.text();

        cy.checkRow(5).should('contain', text);
      });

    cy.checkRow(6).should('contain.text', checkElements.join(', '));

    cy.checkRow(7).should('be.empty');

    cy.checkRow(8).should('contain', address);

    cy.checkRow(9).should('include.text', state);

    // eslint-disable-next-line cypress/no-force
    cy.get('#closeLargeModal').click({ force: true });
  });
});
