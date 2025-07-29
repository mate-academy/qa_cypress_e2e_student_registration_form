/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

describe('Student Registration Page', () => {
  const student = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile: faker.string.numeric(10),
    address: faker.location.streetAddress(),
    gender: 'Male',
    dateOfBirth: {
      day: '01',
      month: 'January',
      year: '2000',
      formatted: '01 January,2000'
    },
    subjects: 'Computer Science',
    hobbies: 'Sports',
    state: 'NCR',
    city: 'Delhi'
  };

  const expectedModalData = [
    {
      label: 'Student Name',
      value: `${student.firstName} ${student.lastName}`
    },
    { label: 'Student Email', value: student.email },
    { label: 'Gender', value: student.gender },
    { label: 'Mobile', value: student.mobile },
    { label: 'Date of Birth', value: student.dateOfBirth.formatted },
    { label: 'Subjects', value: student.subjects },
    { label: 'Hobbies', value: student.hobbies },
    { label: 'Address', value: student.address },
    { label: 'State and City', value: `${student.state} ${student.city}` }
  ];

  const selectors = {
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',
    genderMaleLabel: 'label[for="gender-radio-1"]',
    mobile: '#userNumber',
    dateOfBirthInput: '#dateOfBirthInput',
    monthSelect: '.react-datepicker__month-select',
    yearSelect: '.react-datepicker__year-select',
    subjects: '#subjectsInput',
    hobbiesSportsLabel: 'label[for="hobbies-checkbox-1"]',
    address: '#currentAddress',
    stateDropdown: '#state',
    cityDropdown: '#city',
    submit: '#submit',
    modal: '.modal-content',
    table: 'table'
  };

  const selectDateOfBirth = ({ day, month, year }) => {
    cy.get(selectors.dateOfBirthInput).click();
    cy.get(selectors.monthSelect).select(month);
    cy.get(selectors.yearSelect).select(year);
    cy.get(`.react-datepicker__day--0${day}`)
      .not('.react-datepicker__day--outside-month')
      .first()
      .click();
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form', {
      timeout: 1800000
    });
  });

  it('fills the form and verifies submitted data in modal', () => {
    cy.get(selectors.firstName).type(student.firstName);
    cy.get(selectors.lastName).type(student.lastName);
    cy.get(selectors.email).type(student.email);
    cy.get(selectors.genderMaleLabel).click();
    cy.get(selectors.mobile).type(student.mobile);

    selectDateOfBirth(student.dateOfBirth);

    cy.get(selectors.subjects).type(`${student.subjects}{enter}`);
    cy.get(selectors.hobbiesSportsLabel).click();
    cy.get(selectors.address).type(student.address);

    cy.get(selectors.stateDropdown).click();
    cy.contains('div', student.state).click();
    cy.get(selectors.cityDropdown).click();
    cy.contains('div', student.city).click();
    cy.get(selectors.submit).click();

    cy.get(selectors.modal).should('be.visible');
    expectedModalData.forEach(({ label, value }) => {
      cy.get(selectors.table).contains(label).next().should('contain', value);
    });
  });
});
