/// <reference types='cypress' />

const user = {
  firstName: 'Susan',
  lastName: 'Wind',
  age: '21',
  email: 'susan.wind@mail.com',
  salary: '15000',
  department: 'Finance'
};

describe('Web tables', () => {
  beforeEach(() =>{
    cy.visit('/webtables')
  });

  it('should have all parts of pagination', () => {
    cy.get('.-previous')
      .should('contain.text', 'Previous')

    cy.get('.-next')
      .should('contain.text', 'Next')

    cy.get('.-pageInfo')
      .should('contain.text', 'Page')
      .and('contain.text', 'of')

    cy.get('[aria-label="jump to page"]')
      .should('exist')
  });

  it('should have rows count selector', () => {
    cy.get('.select-wrap')
      .should('contain.text', '5 rows')
      .and('contain.text', '10 rows')
      .and('contain.text', '20 rows')
      .and('contain.text', '25 rows')
      .and('contain.text', '50 rows')
      .and('contain.text', '100 rows')
  });

  it('should allow add new worker', () => {
    cy.get('#addNewRecordButton')
    .should('contain.text', 'Add')
    .click()

    cy.get('#registration-form-modal')
      .should('contain.text', 'Registration Form')
    
    cy.get('#firstName')
      .type(user.firstName)
      .should('contain.value', user.firstName)

    cy.get('#lastName')
      .type(user.lastName)
      .should('contain.value', user.lastName)
    
    cy.get('#userEmail')
      .type(user.email)
      .should('contain.value', user.email)

    cy.get('#age')
      .type(user.age)
      .should('contain.value', user.age)

    cy.get('#salary')
      .type(user.salary)
      .should('contain.value', user.salary)
      
    cy.get('#department')
      .type(user.department)
      .should('contain.value', user.department)

    cy.get('#submit')
      .click()
  });

  it('should allow delete worker', () => {
    cy.get('.rt-tr-group')
      .should('contain.text', 'Cierra')

    cy.get('#delete-record-1')
      .click()

    cy.get('.rt-tr-group')
      .should('not.contain.text', 'Cierra')
  });

  it('should allow delete all workers', () => {
    cy.get('.rt-tr-group')
      .should('contain.text', 'Cierra')
      .and('contain.text', 'Alden')
      .and('contain.text', 'Kierra')

    cy.get('#delete-record-1')
      .click()
    cy.get('#delete-record-2')
      .click()
    cy.get('#delete-record-3')
      .click()
      
    cy.get('.rt-tr-group')
      .should('not.contain.text', 'Cierra')
      .and('not.contain.text', 'Alden')
      .and('not.contain.text', 'Kierra')

    cy.get('.rt-noData')
      .should('contain.text', 'No rows found')
  });

  it('should allow find worker in search field and edit it', () => {
    cy.get('#searchBox')
      .type('Cierra{enter}')

    cy.get('#edit-record-1')
      .click()

      cy.get('#firstName')
      .type('{selectAll}Cierrra')
      .should('contain.value', 'Cierrra')

    cy.get('#lastName')
      .type('{selectAll}Wega')
      .should('contain.value', 'Wega')
    
    cy.get('#userEmail')
      .type('{selectAll}cierrrra@mail.com')
      .should('contain.value', 'cierrrra@mail.com')

    cy.get('#age')
      .type('{selectAll}40')
      .should('contain.value', '40')

    cy.get('#salary')
      .type('{selectAll}15000')
      .should('contain.value', '15000')
      
    cy.get('#department')
      .type('{selectAll}Marketing ')
      .should('contain.value', 'Marketing ')

    cy.get('#submit')
      .click()
  });

  it('should allow add new worker and validate rows after creating', () => {
    cy.get('#addNewRecordButton')
    .should('contain.text', 'Add')
    .click()

    cy.get('#registration-form-modal')
      .should('contain.text', 'Registration Form')
    
    cy.get('#firstName')
      .type(user.firstName)
      .should('contain.value', user.firstName)

    cy.get('#lastName')
      .type(user.lastName)
      .should('contain.value', user.lastName)
    
    cy.get('#userEmail')
      .type(user.email)
      .should('contain.value', user.email)

    cy.get('#age')
      .type(user.age)
      .should('contain.value', user.age)

    cy.get('#salary')
      .type(user.salary)
      .should('contain.value', user.salary)
      
    cy.get('#department')
      .type(user.department)
      .should('contain.value', user.department)

    cy.get('#submit')
      .click()

    cy.get('#searchBox').type(user.firstName, '{enter}')
    cy.get('.rt-td').should('contain.text', user.firstName)
      .and('contain.text', user.lastName)
      .and('contain.text', user.age)
      .and('contain.text', user.email)
      .and('contain.text', user.salary)
      .and('contain.text', user.department)


  });

  it('should allow to search by all column values', () => {
    cy.get('#searchBox').type('Cierra{enter}')
    cy.get('.rt-td').should('contain.text', 'Cierra')

    cy.get('#searchBox').type('{selectAll}Vega{enter}')
    cy.get('.rt-td').should('contain.text', 'Vega')

    cy.get('#searchBox').type('{selectAll}39{enter}')
    cy.get('.rt-td').should('contain.text', '39')

    cy.get('#searchBox').type(`{selectAll}cierra@example.com{enter}`)
    cy.get('.rt-td').should('contain.text', `cierra@example.com`)

    cy.get('#searchBox').type('{selectAll}10000{enter}')
    cy.get('.rt-td').should('contain.text', '10000')

    cy.get('#searchBox').type('{selectAll}Insurance{enter}')
    cy.get('.rt-td').should('contain.text', 'Insurance')
  });
});