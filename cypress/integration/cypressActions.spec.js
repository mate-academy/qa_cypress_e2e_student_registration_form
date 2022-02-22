/// <reference types='cypress' />
const { usersRandoms } = require("../support/generate");
const {firstName, lastName, email, address, phoneNumber, department, age, salary} = usersRandoms();

describe('Practice Form', () => {
  it('Should accept valid data', () => {
    cy.visit("automation-practice-form");
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#userEmail').type(email)
    cy.contains('Male').click()
    cy.get('#userNumber').type(phoneNumber)
    cy.get('#dateOfBirthInput').type('{enter}')
    cy.get('.subjects-auto-complete__value-container').type('e')
    cy.contains('Computer Science').click()
    cy.focused().type('s')
    cy.contains('Math').click();
    cy.focused().type('a')
    cy.contains('Arts').click()
    cy.contains('Reading').click()
    cy.get('#currentAddress').type(address)
    cy.contains('Select State').click()
    cy.contains('Haryana').click()
    cy.contains('Select City').click()
    cy.focused().type('{enter}')
    cy.get('#userForm').submit()

    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form')
    cy.get('.modal-body').should('contain.text', firstName)
    cy.get('.modal-body').should('contain.text', lastName)
    cy.get('.modal-body').should('contain.text', email)
    cy.get('.modal-body').should('contain.text', phoneNumber)
    cy.get('.modal-body').should('contain.text', address)

  });
});

describe('Web Tables', () => {
  beforeEach(() => {
    cy.viewport(1400, 800)
    cy.visit("webtables");
  });

  function addWorker() {
    cy.contains('#addNewRecordButton', 'Add').click()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#userEmail').type(email)
    cy.get('#age').type(age)
    cy.get('#salary').type(salary)
    cy.get('#department').type(department)
    cy.get('#userForm').submit()
}
  it('Task #1, #2, #3, #6, #7', () => {
    cy.scrollTo('bottom')
    cy.get('[aria-label="rows per page"]').select('5 rows')
    addWorker();
    cy.get('#searchBox').type(firstName)
    cy.get('[title="Edit"]').click()
    cy.get('#userEmail').clear().type(firstName + '@gmail.com')
    cy.get('#userForm').submit()
    cy.contains(firstName).should('exist')
    cy.contains(lastName).should('exist')
    cy.contains(age).should('exist')
    cy.contains(salary).should('exist')
    cy.contains(department).should('exist')

    for (let i = 0; i < 5; i++) {
      addWorker()
    }

    cy.contains('[type="button"]', 'Next').click()
    cy.scrollTo('top')
  });

  it('Should delete worker (Task #4)', () => {
    cy.get('#delete-record-3').click()
  })

  it('Should delete all workers (Task #5)', () => {
    cy.get('#delete-record-3').click()
    cy.get('#delete-record-2').click()
    cy.get('#delete-record-1').click()
  })

  it('Should search by all column values(Task #8)', () => {
    addWorker()
    cy.get('#searchBox').type(firstName.slice(0, 3))
    cy.contains('div.rt-td', firstName).should('exist')
    cy.get('#searchBox').clear()
    cy.get('#searchBox').type(lastName.slice(0, 3))
    cy.contains('div.rt-td', lastName).should('exist')
    cy.get('#searchBox').clear()
    cy.get('#searchBox').type(age)
    cy.contains('div.rt-td', age).should('exist')
    cy.get('#searchBox').clear()
    cy.get('#searchBox').type(email.slice(0, 4))
    cy.contains('div.rt-td', email).should('exist')
    cy.get('#searchBox').clear()
    cy.get('#searchBox').type(salary)
    cy.contains('div.rt-td', salary).should('exist')
    cy.get('#searchBox').clear()
    cy.get('#searchBox').type(department.slice(0, 3))
    cy.contains('div.rt-td', department).should('exist')
    cy.get('#searchBox').clear()
  })

});