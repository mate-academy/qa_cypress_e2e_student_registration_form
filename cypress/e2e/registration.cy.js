import { generateUser } from '../support/generate.js';

/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {

  });

  it('Should successfully confirm valid data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    const user = generateUser();
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.get(`#genterWrapper > .col-md-9 > :nth-child(${user.genda[0]})`)
      .click();
    cy.get('#userNumber')
      .type(user.mobile);
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select').select(`${user.date.month}`);
    cy.pickDate('year-select').select(`${user.date.year}`);
    cy.pickDate('day').contains(`${user.date.day}`).click();
    cy.get('.subjects-auto-complete__value-container').type(`${user.subjects.abbreviatedNames}`);

    const randomNumber1 = Math.floor(Math.random() * 2);
    const randomNumber2 = Math.floor(Math.random() * 2);
    const randomNumber3 = Math.floor(Math.random() * 2);
    const hobbies = [];

    if (randomNumber1 === 1) {
      cy.get(
        '#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
        .click();
      hobbies.push('Sports');
    }

    if (randomNumber2 === 1) {
      cy.get(
        '#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
        .click();
      hobbies.push('Reading');
    }

    if (randomNumber3 === 1) {
      cy.get(
        '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
        .click();
      hobbies.push('Music');
    }

    const hobbiesStr = hobbies.join(', ');

    cy.get('#currentAddress').type(user.adres);
    cy.get('#state').type(user.state[0]);
    cy.get('#city').type(user.city[0]);

    cy.get('#submit').click();

    const compareArray = [
      `${user.firstName} ${user.lastName}`,
      `${user.email}`,
      `${user.genda[1]}`,
      `${user.mobile}`,
      `${user.date.day} ${user.date.month},${user.date.year}`,
      `${user.subjects.fullNames}`,
      `${hobbiesStr}`,
      '',
      `${user.adres}`,
      `${user.state[1]} ${user.city[1]}`
    ];

    for (let i = 0; i < compareArray.length; i++) {
      cy.get(`tbody > :nth-child(${i + 1}) > :nth-child(2)`).should('contain', compareArray[i]);
    }
  });
});
