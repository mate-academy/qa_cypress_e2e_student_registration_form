/// <reference types='cypress' />

//basic task

describe('User should be able to', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('register', () => {
    cy.get('#firstName').type('Ivan');
    cy.get('#lastName').type('Ivanov');
    cy.get('#userEmail').type('test@test.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('1111111111');
    cy.get('#dateOfBirthInput').type('{selectall}05.04.1985');
    cy.get('#subjects-label').click();
    cy.get('.subjects-auto-complete__value-container').type('m');
    cy.get('#react-select-2-option-0').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#currentAddress').type('Washington St.');
    cy.contains('[class=" css-1hwfws3"]', 'Select State').click();
    cy.get('#react-select-3-option-2').click();
    cy.get('.css-1wa3eu0-placeholder').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();
    cy.get('.modal-body').
      should('contain', 'Ivan Ivanov').
      should('contain', 'test@test.com').
      should('contain', '1111111111').
      should('contain', 'Male').
      should('contain', '04 May,1985').
      should('contain', 'Math').
      should('contain', 'Reading').
      should('contain', 'Washington St.').
      should('contain', 'Haryana Panipat');
  });
});

//advanced task

describe('User should be able to', () => {
  before(function () {
    cy.visit('https://demoqa.com/webtables');
  });

  it('find pagination and rows counter', () => {
    cy.get('.-pageInfo').should('contain', 'Page');
    cy.get('select').should('contain', '10 rows');
  });

  it('add new worker', () => {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Ivan');
    cy.get('#lastName').type('{enter}Ivanov');
    cy.get('#userEmail').type('test@test.com');
    cy.get('#age').type('35');
    cy.get('#salary').type('1000');
    cy.get('#department').type('IT');
    cy.get('#submit').click();
    cy.get('.col-md-6').should('contain', 'Ivan')
      .and('contain', 'Ivanov')
      .and('contain', '35');
  });

  it('search by all column values', () => {
    cy.get('#searchBox').type('Cierra');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega')
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('#searchBox').type('Vega');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega');
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('#searchBox').type('39');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega');
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('#searchBox').type('cierra@example.com');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega');
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('#searchBox').type('10000');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega');
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('#searchBox').type('Insurance');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega');
    cy.get('#searchBox').type('{selectall}{backspace}');

  });

  it('find worker using search and edit worker', () => {
    cy.get('#searchBox').type('Vega')
    cy.get('#edit-record-1 > svg > path').click();
    cy.get('#salary').type('{selectall}20000').should('have.value', '20000');
    cy.get('#submit').click();
    cy.get('#searchBox').type('{selectall}{backspace}');
    cy.get('[class="rt-tr-group"]').should('contain', 'Vega').and('contain', '20000');
  });

  it('delete worker', () => {
    cy.get('#searchBox').type('Ivanov')
    cy.get('[title="Delete"]').click();
    cy.get('.ReactTable').should('contain', 'No rows found');
    cy.get('#searchBox').type('{selectall}{backspace}');
  });

  it('delete all workers', () => {
    cy.get('[class="rt-tbody"]')
    cy.get('[title="Delete"]').first().click();
    cy.get('[title="Delete"]').first().click();
    cy.get('[title="Delete"]').first().click();
    cy.get('.ReactTable').should('contain', 'No rows found');
  });
})