// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`)
})

Cypress.Commands.add('findById', (id) => {
    cy.get(`[id="${id}"]`)
})

Cypress.Commands.add('findByType', (type) => {
    cy.get(`[type="${type}"]`)
})

Cypress.Commands.add('addNewWorker', () => {
    
    cy.findById('addNewRecordButton')
  .click();

  cy.findByPlaceholder('First Name')
  .type('Test');

  cy.findByPlaceholder('Last Name')
  .type('Test1');

  cy.findByPlaceholder('name@example.com')
  .type('test@example.com');

  cy.findByPlaceholder('Age')
  .type(22);

  cy.findByPlaceholder('Salary')
  .type(1000);

  cy.findByPlaceholder('Department')
  .type('QA automation');

  cy.findById('submit')
  .click();

})

Cypress.Commands.add('deleteAllWorkers', () => {
    
    cy.findById('delete-record-1')
    .click();
  
    cy.findById('delete-record-3')
    .click();
  
    cy.findById('delete-record-4')
    .click();
    
})

Cypress.Commands.add('modalWindowContainInfo', () => {

  cy.contains('tr', 'Student Email').should('contain', 'test@test.com');
  cy.contains('tr', 'Student Name').should('contain', 'Test Test1');
  cy.contains('tr', 'Gender').should('contain', 'Male');
  cy.contains('tr', 'Mobile').should('contain', '0936945435');
  cy.contains('tr', 'Date of Birth').should('contain', '02 September,1999');
  cy.contains('tr', 'Subjects').should('contain', 'Maths, Physics');
  cy.contains('tr', 'Hobbies').should('contain', 'Sports');
  cy.contains('tr', 'Address').should('contain', 'Ukraine, Lviv');
  cy.contains('tr', 'State and City').should('contain', 'Haryana Karnal');

})

Cypress.Commands.add('fillAllFields', () => {

    cy.findByPlaceholder('First Name')
    .type('Test');
  
    cy.findByPlaceholder('Last Name')
    .type('Test1');
  
    cy.findByPlaceholder('name@example.com')
    .type('test@test.com');
  
    cy.findByType('radio')
    .first().click({force: true})
  
    cy.findByPlaceholder('Mobile Number')
    .type('0936945435');
  
    cy.findById('dateOfBirthInput')
    .type('{selectall}02 Sep 1999{enter}');
  
    cy.get('[class="subjects-auto-complete__input"]')
    .type('Ma{downArrow}{enter}').type('Ph{downArrow}{enter}');
  
    cy.findByType('checkbox')
    .first().check({force: true})
  
    cy.findByPlaceholder('Current Address')
    .type('Ukraine, Lviv');
  
    cy.findById('state')
    .type('N{downArrow}{enter}');
  
    cy.findById('city')
    .type('K{downArrow}{enter}');

})

Cypress.Commands.add('validateWorkerData', () => {

    cy.contains('[class="rt-tr -even"]', 'Test').should('contain', 'Test')

    cy.contains('[class="rt-tr -even"]', 'Test1').should('contain', 'Test1')

    cy.contains('[class="rt-tr -even"]', 'test@example.com').should('contain', 'test@example.com')

    cy.contains('[class="rt-tr -even"]', 22).should('contain', 22)

    cy.contains('[class="rt-tr -even"]', 1000).should('contain', 1000)
    
    cy.contains('[class="rt-tr -even"]', 'QA automation').should('contain', 'QA automation')
})

Cypress.Commands.add('checkSearch', () => {

    cy.findByPlaceholder('Type to search')
    .type('{selectall}Stepanenko');

    cy.contains('[class="rt-tr -odd"]', 'Stepanenko').should('contain', 'Stepanenko')

    cy.findByPlaceholder('Type to search')
    .type('{selectall}45');

    cy.contains('[class="rt-tr -odd"]', 45).should('contain', 45)

    cy.findByPlaceholder('Type to search')
    .type('{selectall}alden@example.com');

    cy.contains('[class="rt-tr -odd"]', 'alden@example.com').should('contain', 'alden@example.com')

    cy.findByPlaceholder('Type to search')
    .type('{selectall}12000');

    cy.contains('[class="rt-tr -odd"]', 12000).should('contain', 12000)

    cy.findByPlaceholder('Type to search')
    .type('{selectall}Compliance');

    cy.contains('[class="rt-tr -odd"]', 'Compliance').should('contain', 'Compliance')
})
