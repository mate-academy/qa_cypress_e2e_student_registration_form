/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');
const {
  generateData,
  getGenderAccordingToName,
  generatedDateOfBirth,
  randomSubject,
  randomElement,
  randomState
} = require('../support/generateUserData.js');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('user should register sucessfully', () => {
    const { firstName, lastName, email, mobileNumber } = generateData();
    const gender = getGenderAccordingToName(firstName);
    const { date, month, year } = generatedDateOfBirth();
    const subjects = randomSubject();
    const checkElements = randomElement();
    const address = faker.location.streetAddress();
    const state = randomState();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.getGender(gender).click();

    cy.get('#userNumber').type(mobileNumber);

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

    cy.checkRow(0).should('contain', firstName + ' ' + lastName);

    cy.checkRow(1).should('contain', email);

    cy.checkRow(2)
      .should('contain.text', gender[0].toUpperCase() + gender.slice(1));

    cy.checkRow(3).should('contain', mobileNumber);

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

    cy.get('.modal').click();
  });
});
