import tableResults from '../support/tableResults';
import generateUser from '../support/generateUser';
import stateAndCity from '../support/stateAndCity';

/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it(`should correct fill all fields exept 'picture'`, () => {
    const {
      firstName,
      lastName,
      email,
      gender,
      phone,
      birthDate,
      subjects,
      hobby,
      address
    } = generateUser();

    const { stateIndex, cityIndex, state, city } = stateAndCity();

    let [year, month, day] = birthDate.split('-');

    if (day < 10) {
      day = day.slice(1);
    }

    const result = tableResults(
      firstName,
      lastName,
      email,
      gender,
      phone,
      year, month, day,
      subjects,
      hobby,
      address,
      state, city
    );

    cy.get('h1').should('contain.text', 'Practice Form');
    cy.get('h5').should('contain.text', 'Student Registration Form');

    cy.typeData('firstName', firstName);
    cy.typeData('lastName', lastName);
    cy.typeData('userEmail', email);
    cy.contains('label', `${gender}`).click();
    cy.typeData('userNumber', phone);

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select((month - 1));
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__day').contains(day).click();

    subjects.forEach((subject) => {
      cy.get(`#subjectsInput`).type(`${subject}{Enter}`);
    });

    cy.get('#hobbiesWrapper').contains(hobby[0]).click();

    cy.typeData('currentAddress', address);

    cy.get('#state').click();
    cy.get(`#react-select-3-option-${stateIndex}`).click();

    cy.get('#city').click();
    cy.get(`#react-select-4-option-${cityIndex}`).click();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

    Object.entries(result).forEach(([key, value], i) => {
      cy.get('tbody').find('tr').eq(i).should('contain.text', key);
      cy.get('tbody').find('tr').eq(i).should('contain.text', value);
    });
  });
});
