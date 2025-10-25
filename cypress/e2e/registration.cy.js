/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');

    cy.get('#fixedban').invoke('remove');
  });

  it('should fill in and submit the form', () => {
    const user = generateUser();

    cy.get('h1').should('contain.text', 'Practice Form');

    cy.fillInInput('#firstName', user.firstName);

    cy.fillInInput('#lastName', user.lastName);

    cy.fillInInput('#userEmail', user.email);

    cy.contains('label', user.gender).click();

    cy.fillInInput('#userNumber', user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(user.birthDate.birthYear);
    cy.get('.react-datepicker__month-select').select(user.birthDate.birthMonth);
    cy.get('.react-datepicker__day')
      .not('.react-datepicker__day--outside-month')
      .contains(new RegExp(`^${user.birthDate.birthDay}$`))
      .click();

    user.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject + '{Enter}');
    });

    user.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    cy.fillInInput('#currentAddress', user.currentAddress);

    cy.get('#state').click();
    cy.contains('div', user.state).click();
    cy.get('#city').click();
    cy.contains('div', user.city).click();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

    cy.checkTableValue('Student Name', `${user.firstName} ${user.lastName}`);
    cy.checkTableValue('Student Email', user.email);
    cy.checkTableValue('Gender', user.gender);
    cy.checkTableValue('Mobile', user.mobileNumber);
    cy.checkTableValue(
      'Date of Birth',
      user.birthDate.birthDay.padStart(2, '0') + ' ' +
      user.birthDate.birthMonth + ',' + user.birthDate.birthYear
    );
    cy.checkTableValue('Subjects', user.subjects.join(', '));
    cy.checkTableValue('Hobbies', user.hobbies.join(', '));
    cy.checkTableValue('Picture', user.picture);
    cy.checkTableValue('Address', user.currentAddress);
    cy.checkTableValue('State and City', user.state + ' ' + user.city);

    cy.get('#closeLargeModal').click();
  });
});
