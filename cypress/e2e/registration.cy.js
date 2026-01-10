/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

const AVAILABLE_SUBJECTS = [
  'Maths',
  'Accounting',
  'Arts',
  'Biology',
  'Chemistry',
  'Computer Science',
  'Economics',
  'English',
  'Physics',
  'Social Studies',
  'History',
  'Civics'
];

const STATE_CITY_MAP = {
  NCR: ['Delhi', 'Gurgaon', 'Noida'],
  'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
  Haryana: ['Karnal', 'Panipat'],
  Rajasthan: ['Jaipur', 'Jaiselmer']
};

describe('Student Registration page', () => {
  const birthDate = faker.date.birthdate({
    min: 18,
    max: 60,
    mode: 'age'
  });

  const state = faker.helpers.objectKey(STATE_CITY_MAP);
  const city = faker.helpers.arrayElement(STATE_CITY_MAP[state]);

  const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    phone: faker.string.numeric(10),
    birth: {
      day: birthDate.getDate(),
      month: birthDate.toLocaleString('en-US', { month: 'long' }),
      year: birthDate.getFullYear().toString()
    },
    subjects: faker.helpers.arrayElements(
      AVAILABLE_SUBJECTS,
      faker.number.int({ min: 1, max: 3 })
    ),
    hobbies: faker.helpers.arrayElements(
      ['Sports', 'Reading', 'Music'],
      faker.number.int({ min: 1, max: 2 })
    ),
    address: faker.location.streetAddress(),
    state,
    city
  };

  const birthFormatted = `${userData.birth.day.toString().padStart(2, '0')} ${userData.birth.month},${userData.birth.year}`;

  const expectedData = {
    'Student Name': `${userData.firstName} ${userData.lastName}`,
    'Student Email': userData.email,
    Gender: userData.gender,
    Mobile: userData.phone,
    'Date of Birth': birthFormatted,
    Subjects: userData.subjects.join(', '),
    Hobbies: userData.hobbies.join(', '),
    Address: userData.address,
    'State and City': `${userData.state} ${userData.city}`
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form'
      , { timeout: 2000000 }
    );
  });

  it('should submit form and validate modal data', () => {
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);
    cy.get('#userEmail').type(userData.email);
    cy.contains('label', userData.gender).click();
    cy.get('#userNumber').type(userData.phone);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select')
      .select(userData.birth.month);
    cy.get('.react-datepicker__year-select')
      .select(userData.birth.year);

    const day = userData.birth.day.toString().padStart(2, '0');

    cy.get(`.react-datepicker__day--0${day}`)
      .not('.react-datepicker__day--outside-month')
      .click();

    userData.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject + `{enter}`);
    });

    userData.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    cy.get('#currentAddress').type(userData.address);

    cy.get('#state').type(userData.state + `{enter}`);
    cy.get('#city').type(userData.city + `{enter}`);

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.table-responsive').within(() => {
      Object.entries(expectedData).forEach(([field, value]) => {
        cy.contains('td', field)
          .next()
          .should('have.text', value);
      });
    });
  });
});
