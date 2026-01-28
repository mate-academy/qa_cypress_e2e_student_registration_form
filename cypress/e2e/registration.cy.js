/// <reference types='cypress' />

const { formatValue } = require('../support/formatValue');
const { generateStudent } = require('../support/generateStudent');
const { getStableKey } = require('../support/getStableKey');

describe('Student Registration page', () => {
  const student = generateStudent();

  const {
    studentName,
    studentEmail,
    gender,
    mobile,
    dateOfBirth,
    subjects,
    hobbies,
    address,
    stateAndCity
  } = student;

  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should fill Student Registration Form', () => {
    const arrFullName = studentName.split(' ');
    const arrStateAndCity = stateAndCity.split(' ');
    cy.get('#firstName').type(arrFullName[0]);
    cy.get('#lastName').type(arrFullName[1]);
    cy.get('#userEmail').type(studentEmail);

    cy.get('#genterWrapper').contains(gender).click();

    cy.get('#userNumber').type(mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(
      dateOfBirth.getFullYear().toString()
    );
    cy.get('.react-datepicker__month-select').select(dateOfBirth.getMonth());

    const day = dateOfBirth.getDate().toString().padStart(3, '0');
    cy.get(
      `.react-datepicker__day--${day}:not(.react-datepicker__day--outside-month)`
    ).click();

    subjects.forEach((el) => cy.get('#subjectsInput').type(`${el}{enter}`));

    hobbies.forEach((el) => cy.get('#hobbiesWrapper').contains(el).click());

    cy.get('#currentAddress').type(address);

    cy.get('#state').click();
    cy.get('#state input').type(`${arrStateAndCity[0]}{enter}`);

    cy.get('#city').click();
    cy.get('#city input').type(`${arrStateAndCity[1]}{enter}`);

    cy.get('#submit').click();

    Object.entries(student).forEach(([key, value]) => {
      cy.contains('tbody tr td:first-child', getStableKey(key))
        .parent('tr')
        .find('td').eq(1)
        .should('contain.text', formatValue(value));
    });
  });
});
