/// <reference types='cypress' />

describe('webtables', () => {
  before(() => {
    cy.visit('/webtables')
  });

  it('should pagination', () => {
    cy.get('.-pageInfo').should('contain', 1)
  });
  
  it('should rows count selection', () => {
    cy.get('select').select('5').should('have.value', '5')
  });

  it('should add new worker and validate', () => {
    cy.get('#addNewRecordButton').click();
    cy.addOrEditWorker();
    cy.validateWorker();
  });

  it('should delete worker', () => {
    cy.reload();
    cy.get('#delete-record-1 > svg > path').click()
    cy.get('.rt-tr').should('not.contain.text', 'Cierra')
  });

  it('should delete workers', () => {
    cy.reload();
    cy.get('#delete-record-1 > svg > path').click()
    cy.get('#delete-record-2 > svg > path').click()
    cy.get('#delete-record-3 > svg > path').click()
    cy.get('.rt-noData').should('contain', 'No rows found');
  });

  it('should find worker', () => {
    cy.reload();
    cy.get('#searchBox').type('kierra' + '{enter}')
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
      .should('contain.text', 'Kierra')
  });

  it('should edit worker', () => {
    cy.reload();
    cy.get('#edit-record-1').click();
    cy.addOrEditWorker();
    cy.validateWorker();
  });
});
