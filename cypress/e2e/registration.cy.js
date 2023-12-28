/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('shoud allow to register a new student', () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      randomDay,
      randomMonth,
      randomYear,
      randomSubject,
      randomGender,
      randomHobbie
    } = generateUser();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);

    cy.get('#genterWrapper').contains(randomGender).click();

    cy.get('#userNumber').type(phoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(randomYear.toString());
    cy.get('.react-datepicker__month-select').select(randomMonth);
    cy.get('.react-datepicker__day').contains(randomDay).click();

    cy.get('.subjects-auto-complete__value-container').type(randomSubject);
    cy.get('.subjects-auto-complete__menu').click();

    cy.get('#hobbiesWrapper').contains(randomHobbie).click();

    cy.get('#currentAddress').type('Independent street 15');

    cy.get('#state').type('N{enter}');
    cy.get('#city').type('D{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');

    cy.contains('tr', 'Student Name').should('contain', `${firstName} ${lastName}`);
    cy.contains('tr', 'Student Email').should('contain', `${email}`);
    cy.contains('tr', 'Gender').should('contain', `${randomGender}`);
    cy.contains('tr', 'Mobile').should('contain', `${phoneNumber}`);
    cy.contains('tr', 'Date of Birth').should('contain', `${randomDay} ${randomMonth},${randomYear}`);
    cy.contains('tr', 'Subjects').should('contain', `${randomSubject}`);
    cy.contains('tr', 'Hobbies').should('contain', `${randomHobbie}`);
    cy.contains('tr', 'Address').should('contain', 'Independent street 15');
    cy.contains('tr', 'State and City').should('contain', `NCR Delhi`);
  });
});
