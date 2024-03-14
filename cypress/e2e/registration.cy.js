/// <reference types='cypress' />

const { generateDate } = require('../support/generate');

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/automation-practice-form');
  });

  it('should allow register student', () => {
    const date = generateDate();

    // Fill all fields in forms except "picture"
    cy.getAndTypeText('#firstName', user.firstName);
    cy.getAndTypeText('#lastName', user.lastName);
    cy.getAndTypeText('#userEmail', user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.getAndTypeText('#userNumber', user.mobileNumber);
    cy.getAndTypeText('.react-datepicker-wrapper', `{selectall}${date}{enter}`);
    cy.getAndTypeText('#subjectsContainer', 'a{enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.getAndTypeText('#currentAddress', user.address);
    cy.getAndTypeText('#state', 'h{enter}');
    cy.getAndTypeText('#city', 'a{enter}');
    // Click on [Submit] button
    cy.get('#submit').click();
    // Assert inputed data in modal window
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
    cy.checkTableDataByValue(`${user.firstName} ${user.lastName}`);
    cy.checkTableDataByValue(user.email);
    cy.checkTableDataByValue(user.gender);
    cy.checkTableDataByValue(user.mobileNumber);
    cy.checkBirthDate();
    cy.checkTableDataBySelector('.css-12jo7m5');
    cy.checkTableDataByValue(user.hobbie);
    cy.checkTableDataByValue(user.address);
    cy.checkTableDataBySelector('#state');
    cy.checkTableDataBySelector('#city');
  });
});
