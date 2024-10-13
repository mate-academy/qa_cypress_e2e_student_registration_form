import { generateUser } from '../support/commands';
/// <reference types='cypress' />
describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Enter valid data', () => {
    const {
      email, username, phone, lastname,
      address, gender, hobby, subject
    } = generateUser();

    cy.get('#firstName').type(username);
    cy.get('#lastName').type(lastname);
    cy.get('#userEmail').type(email);
    cy.get('#userNumber').type(phone);
    cy.get('#currentAddress').type(address);

    cy.get('#genterWrapper > .col-md-9').type(gender);
    cy.get('#hobbiesWrapper > .col-md-9').type(gender);

    cy.get('.subjects-auto-complete__value-container').type(subject);
    cy.contains('#react-select-2-option-0', subject).click();

    cy.get('#dateOfBirthInput').click();
    cy.contains('select', 'October').select('November');
    cy.contains('select', '2024').select('1990');
    cy.contains('.react-datepicker__day--009', '9')
      .click();

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', username)
      .and('contain', lastname);
    cy.contains('tr', 'Student Email').should('contain', email);
    cy.contains('tr', 'Gender').should('contain', gender);
    cy.contains('tr', 'Mobile').should('contain', phone);
    cy.contains('tr', 'Subject').should('contain', subject);
    cy.contains('tr', 'Date of Birth')
      .should('contain', 'November').and('contain', '1990');
    cy.contains('tr', 'Hobbies').should('contain', hobby);
    cy.contains('tr', 'Address').should('contain', address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
