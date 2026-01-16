/* eslint-disable max-len */
/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />

describe('Student Registration page', () => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Franko',
    email: 'James.Jones@gmail.com',
    mobile: '1234567890',
    subjects_typed: ['math', 'chem', 'phy'],
    subjects_labels: ['Maths', 'Chemistry', 'Physics'],
    address: '1060 WELLINGTON RD MANCHESTER NH 03104-4719 USA'
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    Cypress.on('uncaught:exception', () => false);
  });

  it('default user flow should work correctly with proper input', () => {
    cy.get('h5').should('contain', 'Student Registration Form');

    cy.get('input#firstName').should('be.visible').type(user.firstName);
    cy.get('input#lastName').should('be.visible').type(user.lastName);
    cy.get('input#userEmail').should('be.visible').type(user.email);
    cy.contains('label', 'Male').click();
    cy.get('input#userNumber').should('be.visible').type(user.mobile);

    cy.get('input#dateOfBirthInput').should('be.visible').click();
    cy.get('select.react-datepicker__month-select').select('May');
    cy.get('select.react-datepicker__year-select').select('1988');
    cy.get('div.react-datepicker__day--003')
      .not('.react-datepicker__day--outside-month')
      .first()
      .click();

    user.subjects_typed.forEach((sub, i) => {
      cy.get('input#subjectsInput').click().type(sub);
      cy.get('div.subjects-auto-complete__option', { timeout: 10000 })
        .contains(user.subjects_labels[i])
        .should('be.visible')
        .click();
    });

    cy.get('label.custom-control-label').contains('Music').click();
    cy.get('label.custom-control-label').contains('Sports').click();

    cy.get('textarea#currentAddress').scrollIntoView().type(user.address);

    cy.contains('.css-1wa3eu0-placeholder', 'Select State').click();
    cy.get('.css-11unzgr').contains('NCR').click();

    cy.contains('.css-1wa3eu0-placeholder', 'Select City').click();
    cy.get('.css-11unzgr').contains('Delhi').click();

    cy.get('button#submit').scrollIntoView().click();

    cy.get('div#example-modal-sizes-title-lg').should('be.visible');

    cy.contains('td', 'Student Name').next('td').should('contain', `${user.firstName} ${user.lastName}`);
    cy.contains('td', 'Student Email').next('td').should('contain', `${user.email}`);
    cy.contains('td', 'Gender').next('td').should('contain', 'Male');
    cy.contains('td', 'Mobile').next('td').should('contain', `${user.mobile}`);
    cy.contains('td', 'Date of Birth').next('td').should('contain', '03 May,1988');

    user.subjects_labels.forEach((subject) => {
      cy.contains('td', 'Subjects').next('td').should('contain', subject);
    });

    ['Music', 'Sports'].forEach((hobby) => {
      cy.contains('td', 'Hobbies').next('td').should('contain', hobby);
    });

    cy.contains('td', 'Address').next('td').should('contain', `${user.address}`);
    cy.contains('td', 'State and City').next('td').should('contain', 'NCR Delhi');
  });
});
