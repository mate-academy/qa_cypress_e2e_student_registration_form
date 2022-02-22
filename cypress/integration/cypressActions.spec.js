/// <reference types='cypress' />

const { type } = require("os");

describe('automation-practice-form', () => {
  before(() => {
    cy.visit('/automation-practice-form')
  });

  it('fill form', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Smith');
    cy.get('#userEmail').type('JohnSmith@mail.com');
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0677777777');
    cy.get('#dateOfBirthInput')
      .type('{selectall}' + '02 Sep 1992' + '{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('english' + '{downarrow}' + '{enter}');

    cy.get('#hobbies-checkbox-2').check({"force": true});
    cy.get('#currentAddress').type('Baker str. 10');

    cy.get('#stateCity-wrapper > :nth-child(2)')
      .type('u' + '{downarrow}' + '{enter}');

    cy.get('#stateCity-wrapper > :nth-child(3)')
      .type('a' + '{downarrow}' + '{enter}');

    cy.get('#submit').click();
  });

  it('check name', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', 'John Smith');
  });

  it('check email', () => {
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', 'JohnSmith@mail.com');
  });

  it('check gender', () => {
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', 'Male');
  });
  
  it('check mobile', () => {
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', '0677777777');
  });

  it('check date of birth', () => {
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '02 September,1992');
  });

  it('check subject', () => {
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'English');
  });

  it('check hobbies', () => {
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', 'Reading');
  });

  it('check address', () => {
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', 'Baker str. 10');
  });

  it('check state and city', () => {
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'Uttar Pradesh Agra');
  });
});

describe('webtables', () => {
  before(() => {
    cy.visit('/webtables')
  });

  it('pagination', () => {
    cy.get('.-pageInfo').should('contain', 1)
  });
  
  it('rows count selection', () => {
    cy.get('select').select('5').should('have.value', '5')
  });

  it('add new worker and validate', () => {
    cy.get('#addNewRecordButton').click();
    cy.addOrEditWorker();
    cy.validateWorker();
  });

  it('delete worker', () => {
    cy.reload();
    cy.get('#delete-record-1 > svg > path').click()
    cy.get('.rt-tr').should('not.contain.text', 'Cierra')
  });

  it('delete workers', () => {
    cy.reload();
    cy.get('#delete-record-1 > svg > path').click()
    cy.get('#delete-record-2 > svg > path').click()
    cy.get('#delete-record-3 > svg > path').click()
    cy.get('.rt-noData').should('contain', 'No rows found');
  });

  it('find worker', () => {
    cy.reload();
    cy.get('#searchBox').type('kierra' + '{enter}')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
      .should('contain.text', 'Kierra')
  });

  it('edit worker', () => {
    cy.reload();
    cy.get('#edit-record-1').click();
    cy.addOrEditWorker();
    cy.validateWorker();
  });
});
