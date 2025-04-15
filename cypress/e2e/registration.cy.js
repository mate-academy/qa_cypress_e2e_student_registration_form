/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const names = ['Alexander', 'Maria', 'James', 'Sophia', 'John', 'Emma', 'Michael', 'Olivia'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
  const randomLastName = surnames[Math.floor(Math.random() * surnames.length)];

  const numbers = [99, 98, 97, 96, 95, 68, 67, 66];
  const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  const randomDigits = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');

  const randomYear = Math.floor(Math.random() * (2005 - 1990 + 1)) + 1990;

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const randomMonthIndex = Math.floor(Math.random() * 12) + 1;

  const addresses = [
    '123 Elm St, Springfield, IL 62704',
    '456 Maple Ave, Anytown, TX 12345',
    '789 Oak Dr, Metropolis, NY 10001',
    '101 Pine Ln, Smallville, KS 67890',
    '202 Birch Blvd, Gotham City, NJ 07001'

  ];

  const randomaddresses = addresses[Math.floor(Math.random() * addresses.length)];

  it('', () => {
    cy.get('#firstName').type(randomName);
    cy.get('#lastName').type(randomLastName);

    cy.get('#userEmail').type(`${randomLastName.toLowerCase()}${'@gmail.com'}`);

    cy.get(`label[for="gender-radio-${Math.floor(Math.random() * 3) + 1}"]`).click();

    cy.get('#userNumber').type(`0${randomNumbers}${randomDigits}`);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(randomYear.toString());
    cy.get('.react-datepicker__month-select').select(randomMonthIndex.toString());
    cy.get(`.react-datepicker__day--0${Math.floor(Math.random() * (27 - 10 + 1)) + 10}`)
      .not('.react-datepicker__day--outside-month')
      .first()
      .click();

    cy.get('.subjects-auto-complete__value-container').type('eng{enter}' + 'mat{enter}' + 'ch{enter}');

    cy.get(`label[for="hobbies-checkbox-${Math.floor(Math.random() * 3) + 1}"]`).click();

    cy.get('#currentAddress').type(randomaddresses);

    cy.get('#state').type('{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', randomName);
    cy.contains('tr', 'Student Name').should('contain', randomLastName);
    cy.contains('tr', 'Student Email').should('contain', `${randomLastName.toLowerCase()}${'@gmail.com'}`);
    cy.contains('tr', 'Mobile').should('contain', `0${randomNumbers}${randomDigits}`);
    cy.contains('tr', 'Date of Birth').should('contain', randomYear.toString());
    cy.contains('tr', 'Date of Birth').should('contain', monthNames[randomMonthIndex]);
    cy.contains('tr', 'Subjects').should('contain', 'English');
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Subjects').should('contain', 'Chemistry');
    cy.contains('tr', 'Address').should('contain', randomaddresses);
    cy.contains('tr', 'State and City').should('contain', 'NCR');
    cy.contains('tr', 'State and City').should('contain', 'Gurgaon');
  });
});
