/// <reference types='cypress' />
import { generateUser, gender } from '../support/generateUser';

describe('Student Registration page', () => {
  before(() => {
    cy.visit(`https://demoqa.com/automation-practice-form`);
  });

  it('Should register user sucesfully', () => {
    const {
      firstName,
      lastName,
      email,
      genderId,
      mobile,
      day,
      month,
      year,
      subjects,
      hobbies,
      address,
      state,
      city
    } = generateUser();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get(`label[for="gender-radio-${genderId}"]`).click();
    cy.get('#userNumber').type(mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-select').select(year);
    cy.get(`.react-datepicker__day--0${day}`)
      .not('.react-datepicker__day--outside-month')
      .click();
    subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject + '{enter}');
    });
    hobbies.forEach((hobby, index) => {
      cy.get(`label[for='hobbies-checkbox-${index + 1}']`).click();
    });
    cy.get('#currentAddress').type(address);
    cy.get('#state').type(state + `{enter}`);
    cy.get('#city').type(city + `{enter}`);

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-dialog').within(() => {
      cy.get('table')
        .should('contain', firstName)
        .should('contain', lastName)
        .should('contain', email)
        .should('contain', gender[genderId])
        .should('contain', mobile)
        .should('contain', `${day} ${month},${year}`)
        .should('contain', subjects.join(', '))
        .should('contain', hobbies.join(', '))
        .should('contain', address)
        .should('contain', state)
        .should('contain', city);
    });
  });
});
