/// <reference types='cypress' />

const { generateForm } = require('./generateForm');
const { monthsNames } = require('../support/months');
const { subjects } = require('../support/subjects');
const { getRandomLetter } = require('../support/letters');

const {
  name,
  lastName,
  email,
  gender,
  phoneNumber,
  randomYear,
  randomDaysIndex,
  day,
  randomMonthIndex,
  randomCityIndex,
  randomStateIndex,
  randomHobbiesIndex,
  currentAddress,
  states,
  cities
} = generateForm();

describe('Student Registration page', () => {
  const chosenSubjects = [];
  const chosenHobbies = [];

  const form = [
    { StudentName: `${name} ${lastName}` },
    { StudentEmail: email },
    { gender },
    { mobile: phoneNumber },
    { dateOfBirth: `${randomDaysIndex + 1} ${monthsNames[randomMonthIndex]},${randomYear}` },
    { subjects: chosenSubjects.join(', ') },
    { hobbies: chosenHobbies },
    { picture: null },
    { address: currentAddress },
    { stateAndCity: `${states[randomStateIndex]} ${cities[randomCityIndex]}` }
  ];
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('should show appropriate data in modal window', () => {
    cy.get('#firstName')
      .type(name);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.contains('.custom-control-label', gender)
      .click();
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.chooseRandomHobbies(String(randomHobbiesIndex), chosenHobbies);
    subjects.forEach((subject) => {
      cy.log(`looking for subject: ${subject}`);
      cy.get('.subjects-auto-complete__value-container')
        .type(getRandomLetter());

      cy.get('.subjects-auto-complete__value-container')
        .then(() => {
          cy.get('body').then(($body) => {
            if ($body.find('.subjects-auto-complete__menu-list').length > 0) {
              cy.get('.subjects-auto-complete__menu-list')
                .find('div')
                .first()
                .invoke('text')
                .then((optionText) => {
                  cy.log(`Option text: ${optionText}`);
                  const trimmed = optionText.trim();
                  if (!chosenSubjects.includes(trimmed)) {
                    chosenSubjects.push(trimmed);
                    cy.get('.subjects-auto-complete__menu-list')
                      .find('div')
                      .first()
                      .click();
                    cy.log(`Added unique subject: ${trimmed}`);
                  }
                });
            } else {
              cy.get('.subjects-auto-complete__value-container input')
                .type('{backspace}');
            }
          });
        });

      return chosenSubjects;
    });
    cy.get('#currentAddress')
      .type(currentAddress);
    cy.get('#state')
      .click();
    cy.get(`#react-select-3-option-${randomStateIndex}`)
      .click();
    cy.get('#city')
      .click();
    cy.get(`#react-select-4-option-${randomCityIndex}`)
      .click();
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__year-select')
      .select(String(randomYear));
    cy.get('.react-datepicker__month-select')
      .select(String(randomMonthIndex));
    cy.contains(day, randomDaysIndex + 1)
      .click();
    cy.get('button[type="submit"]')
      .click();
    form.forEach((value, i) => {
      if (Object.keys(value)[0] === 'picture') {
        return;
      }

      if (Object.keys(value)[0] === 'subjects') {
        Object.values(value)[0].split(', ').forEach((subject) => {
          cy.assertFormValues(i + 1, subject);
        });
      } else {
        cy.assertFormValues(i + 1, Object.values(value)[0]);
      }
    });
  });
});
