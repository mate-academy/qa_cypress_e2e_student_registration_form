/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Submits filled form and asserts the data', () => {
    cy.get('#firstName')
      .type('Macius');
    cy.get('#lastName')
      .type('Maciusiewicz');
    cy.get('#userEmail')
      .type('macius@mail.com');
    cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label')
      .click();
    cy.get('#userNumber')
      .type('0123456789');
    cy.get('#dateOfBirthInput')
      .rightclick();
    cy.get('#dateOfBirthInput')
      .type('{selectall}');
    cy.get('#dateOfBirthInput')
      .type('23 May 2002 {enter}');
    // I had to do it like this - if you try to clear above field,
    // the site crashes

    cy.get('#subjectsContainer')
      .find('.subjects-auto-complete__value-container')
      .type('Random');
    cy.get('#hobbiesWrapper')
      .find('.col-md-9.col-sm-12 > div:nth-child(3) > label')
      .click();
    cy.get('#currentAddress').type('Randomowo 25');
    cy.get('#state')
      .find('.css-1wa3eu0-placeholder')
      .type('Uttar Pradesh{enter}');
    cy.get('#city')
      .find('.css-1wa3eu0-placeholder')
      .type('Merrut{enter}');
    cy.get('#submit')
      .click();
    cy.get('body > div.fade.modal.show')
      .find('.modal-body > div > table')
      .should('contain', 'Macius Maciusiewicz')
      .and('contain', 'macius@mail.com')
      .and('contain', 'Male')
      .and('contain', '0123456789')
      .and('contain', '23 May,2002')
      .and('contain', 'Music')
      .and('contain', 'Randomowo 25')
      .and('contain', 'Uttar Pradesh Merrut');
  });
});
