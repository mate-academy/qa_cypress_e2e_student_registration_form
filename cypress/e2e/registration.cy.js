/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill in form', () => {
    cy.get('iframe[id^="google_ads_iframe"]').then($iframe => {
      if ($iframe.length > 0) {
        cy.log('Closing ad iframe');
        cy.get('iframe[id^="google_ads_iframe"]').invoke('remove');
      }
    });

    cy.get('#firstName').type('Maksym');
    cy.get('#lastName').type('Rudenko');
    cy.get('#userEmail').type('maksymrudenko1@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('0952192842');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1997');
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__day--016').click();
    cy.get('.subjects-auto-complete__value-container').type('English');
    cy.get('#react-select-2-option-0').click();
    cy.contains('Sports').click();
    cy.get('#currentAddress').type('Teremkivska,12');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-3-option-3').click();
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    
    cy.get('.modal-body').should('be.visible');
    cy.get('.modal-body').within(() => {
      cy.contains('td', 'Maksym Rudenko').should('be.visible');
      cy.contains('td', 'maksymrudenko1@gmail.com').should('be.visible');
      cy.contains('td', 'Male').should('be.visible');
      cy.contains('td', '0952192842').should('be.visible');
      cy.contains('td', '16 August,1997').should('be.visible');
      cy.contains('td', 'English').should('be.visible');
      cy.contains('td', 'Sports').should('be.visible');
      cy.scrollTo('bottom');
      cy.contains('td', 'Teremkivska,12').should('be.visible');
      cy.contains('td', 'Rajasthan Jaipur').should('be.visible');
  });
});
});
