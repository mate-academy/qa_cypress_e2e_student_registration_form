/// <reference types='cypress' />
const { generateWorker } = require("../support/generate");

describe('Advanced level', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/webtables');
  });

  it('Pagination', () => {
    cy.get('.-next > .-btn').click()
    cy.get('.-previous > .-btn').click()
  });

  it('Rows count selection', () => {
    cy.get('select').select('5 rows')
    cy.get('select').select('10 rows')
    cy.get('select').select('20 rows')
    cy.get('select').select('25 rows')
    cy.get('select').select('50 rows')
    cy.get('select').select('100 rows')
  });

  it('Add new worker', () => {
    const { workerFirstName, workerLastName, 
      email, age, salary, department } = generateWorker();

    cy.get('#addNewRecordButton').click()

    cy.get('#firstName').type(workerFirstName)

    cy.get('#lastName').type(workerLastName)

    cy.get('#userEmail').type(email)
    
    cy.get('#age').type(age)
    
    cy.get('#salary').type(salary)

    cy.get('#department').type(department)

    cy.get('#submit').click()

    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)')
      .should('contain.text', email)
  });

  it('Delete worker', () => {
    cy.get('#delete-record-3 > svg > path').click()
  });

  it('Delete all worker', () => {
    cy.get('#delete-record-1 > svg > path').click()
    cy.get('#delete-record-2 > svg > path').click()
    cy.get('#delete-record-3 > svg > path').click()
  });

  it('Find worker in search field and edit it', () => {
    cy.get('#searchBox').type('Cierra')

    cy.get('#edit-record-1 > svg > path').click()

    const { salary } = generateWorker();

    cy.get('#salary').clear()

    cy.get('#salary').type(salary)

    cy.get('#submit').click()
  });

  it('Validate data in worker row after creating worker', () => {
    const { workerFirstName, workerLastName, 
      email, age, salary, department } = generateWorker();

    cy.get('#addNewRecordButton').click()

    cy.get('#firstName').type(workerFirstName)

    cy.get('#lastName').type(workerLastName)

    cy.get('#userEmail').type(email)
    
    cy.get('#age').type(age)
    
    cy.get('#salary').type(salary)

    cy.get('#department').type(department)

    cy.get('#submit').click()

    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)')
      .should('contain.text', workerFirstName)

    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)')
      .should('contain.text', workerLastName)

    cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]')
      .should('contain.text', age)

    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)')
      .should('contain.text', email)

    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)')
      .should('contain.text', salary)

    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)')
      .should('contain.text', department)  
  });

  it('Check search by all column values', () => {
    cy.get('#searchBox').type('Cierra')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
      .should('contain.text', 'Cierra')

    cy.get('#searchBox').clear()
    
    cy.get('#searchBox').type('Cantrell')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)') 
      .should('contain.text', 'Cantrell')

    cy.get('#searchBox').clear()

    cy.get('#searchBox').type('29')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]')
      .should('contain.text', '29')

    cy.get('#searchBox').clear()

    cy.get('#searchBox').type('kierra@example.com')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
      .should('contain.text', 'kierra@example.com')

    cy.get('#searchBox').clear()

    cy.get('#searchBox').type('10000')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)')
      .should('contain.text', '10000')

    cy.get('#searchBox').clear()
      
    cy.get('#searchBox').type('Legal')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(6)')
      .should('contain.text', 'Legal')
  });
});
