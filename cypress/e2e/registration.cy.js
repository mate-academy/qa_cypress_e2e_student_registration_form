/// <reference types='cypress' />
const { generateUser} = require('../support/generate');
const user = generateUser();
const successMessage = 'Thanks for submitting the form';
const birthDate = user.birth;
const months = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December'
};
const formattedDate = `${birthDate.day} ${months[birthDate.month]},${birthDate.year}`;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should provide an opportunity to fill out the form ', () => {
    cy.findById('firstName').type(user.firstName);
    cy.findById('lastName').type(user.lastName);
    cy.findById('userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findById('userNumber').type(user.mobile);
    cy.findById('dateOfBirthInput').type(`{selectAll}${user.birth.day} ${user.birth.month} ${user.birth.year}{enter}`);
    cy.findById('subjectsContainer').type(`${user.subjectRandom}{enter}`);
    cy.contains('.custom-control-label', user.hobby).click({force: true});
    cy.findById('currentAddress').type(user.address);
    cy.findById('state').type(`${user.state}{enter}`);
    cy.findById('city').type(`${user.city}{enter}`);
    cy.findById('submit').click();
    cy.findById('example-modal-sizes-title-lg').contains(successMessage).should('be.visible');
    cy.contains('Student Name').next('td').should('have.text', `${user.firstName} ${user.lastName}`);
    cy.contains('Student Email').next('td').should('have.text', `${user.email}`);
    cy.contains('td', `${user.gender}`, { timeout: 10000 }).should('exist');
    cy.contains('td', `${user.mobile}`).should('exist');
    cy.contains('td', `${formattedDate}`).should('exist');
    cy.contains('td', `${user.subjectRandom}`).should('exist');
    cy.contains('td', `${user.hobby}`).should('exist');
    cy.contains('td', `${user.address}`).should('exist');
    cy.contains('td', `${user.state} ${user.city}`).should('exist');
    });
  });
