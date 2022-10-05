/// <reference types='cypress' />

const { user } = require ('../e2e/newUser.cy');

describe('Name of the group', () => {
  before(() => {
    cy.visit('/')
  });

  it('fill firstname', () => {
    cy.get('[placeholder="First Name"]')
      .type(user.firstName);
  });
  it('fill Lastname', () => {
    cy.get('[placeholder="Last Name"]')
      .type(user.secondName);
  });
  it('fill email', () => {
    cy.get('[id="userEmail"]')
      .type(user.email);
  });
  it('choose gender', () => {
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
    .click();
  })
  it('fill mobile', () => {
    cy.get('#userNumber')
    .type(user.mobile);
  });
  it('fill DOB', () => {
  cy.get('#dateOfBirthInput')
    .click()
    .type('{selectall}')
    .type('01 Jan 2000')
    .type('{enter}');
  });
  it('fill subject', () => {
    cy.get('.subjects-auto-complete__value-container')
    .type(user.subjects);
  });
  it('fill hobbies', () => {
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
      .click()
  });
  it('fill adress', () => {
    cy.get('#currentAddress')
      .type(user.adress)
      .get('[id="state"]').click()
      .contains('NCR').click()
      .get('[id="city"]').click()
      .type('Noida'+'{Enter}')
  });
});
describe('submit',() =>{
  it('Click "Submit"', () => {
    cy.get('[id="city"]').click()
      .get('[id="submit"]').type('{enter}')
  });
})
describe('Validate',() =>{
  it('Validation message', () => {
    cy.get('.modal-header')
      .should('contain.text','Thanks')
  });
})
