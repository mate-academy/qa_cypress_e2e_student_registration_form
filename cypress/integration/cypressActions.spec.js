/// <reference types='cypress' />

describe('', () => {

  before(() => {
    
  });

  it('modal window should show the inputed info', () => {
    
  cy.visit('https://demoqa.com/automation-practice-form');
  
  cy.fillAllFields();

  cy.findById('submit')
  .click();

  cy.modalWindowContainInfo();

  });
});


it.only('workers table should works correctly', () => {

  cy.visit('https://demoqa.com/webtables');

  cy.get('[class="-pageInfo"]')
  .should('contain', 1)

  cy.get('select')
  .select('5 rows').should('have.value', '5');

  cy.addNewWorker();

  cy.validateWorkerData();

  cy.findById('delete-record-2')
  .click();
  
  cy.get('[class="rt-tr -even"]')
  .should('not.contain', 'Compliance');

  cy.deleteAllWorkers();

  cy.get('[class="rt-noData"]')
  .should('contain', 'No rows found');

  cy.reload();

  cy.findByPlaceholder('Type to search')
  .type('Alden');

  cy.findById('edit-record-2')
  .click();

  cy.findByPlaceholder('Last Name')
  .type('{selectall}Stepanenko{enter}')

  cy.get('[class="rt-tr -odd"]').should('contain', 'Stepanenko')

  cy.checkSearch();

});
