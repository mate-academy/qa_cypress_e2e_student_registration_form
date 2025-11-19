/* eslint-disable cypress/no-force */
/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable max-len */
/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');
describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have a title', () => {
    /// cy.get('h1').should('contain.text', 'Practice Form');
  });

  it('should fill and submit the registration form', () => {
    const {
      userName,
      lastName,
      email,
      sex,
      phoneNumber,
      birthday,
      hobbies,
      address,
      state,
      city,
      subjects,
      letterSelect
    } = generateUser();

    cy.get('#firstName').type(userName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#genterWrapper')
      .contains(sex.charAt(0).toUpperCase() + sex.slice(1))
      .click();
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(
      birthday.getMonth().toString()
    );
    cy.get('.react-datepicker__year-select').select(
      birthday.getFullYear().toString()
    );

    cy.get(
      `.react-datepicker__day--0${birthday
        .getDate()
        .toString()
        .padStart(2, '0')}`
    )
      .not('.react-datepicker__day--outside-month')
      .click();

    cy.get('#subjectsInput').type(letterSelect);

    cy.get('.subjects-auto-complete__menu-list').contains(subjects).click();

    hobbies.forEach((hobby) => {
      cy.get('#hobbiesWrapper').contains(hobby).click();
    });

    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.get('#state')
      .contains(state)
      .click();
    cy.get('#city').click();
    cy.get('#city')
      .contains(city)
      .click();
    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg').should(
      'have.text',
      'Thanks for submitting the form'
    );
    cy.get('td')
      .contains('Student Name')
      .next()
      .should('have.text', `${userName} ${lastName}`);
    cy.get('td').contains('Student Email').next().should('have.text', email);
    cy.get('td')
      .contains('Gender')
      .next()
      .should('have.text', sex.charAt(0).toUpperCase() + sex.slice(1));
    cy.get('td').contains('Mobile').next().should('have.text', phoneNumber);
    const formattedDate = `${birthday
      .getDate()
      .toString()
      .padStart(2, '0')} ${birthday.toLocaleString('default', {
      month: 'long'
    })},${birthday.getFullYear()}`;
    cy.get('td')
      .contains('Date of Birth')
      .next()
      .should('have.text', formattedDate);
    cy.get('td')
      .contains('Subjects')
      .next()
      .should('have.text', subjects);
    cy.get('td')
      .contains('Hobbies')
      .next()
      .should('have.text', hobbies.join(', '));
    cy.get('td').contains('Address').next().should('have.text', address);
    cy.get('td')
      .contains('State and City')
      .next()
      .should('have.text', `${state} ${city}`);
  });
});
