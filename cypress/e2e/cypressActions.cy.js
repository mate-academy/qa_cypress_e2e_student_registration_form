/// <reference types='cypress' />

describe('Basic level', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill fields in forms and check inputed data in window', () => {
    
    cy.get('#firstName').type('Serhiy')

    cy.get('#lastName').type('Breslavskiy')

    cy.get('#userEmail').type('emailpost@mail.com')

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()

    cy.get('#userNumber').type('0939309309')

    cy.get('.subjects-auto-complete__value-container').type('ac')

    cy.get('#react-select-2-option-0').click()

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

    cy.get('#currentAddress').type('Ukraine, city Lviv')

    cy.get('#state').scrollIntoView()

    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
      .click('top')
    
    cy.get('#react-select-3-option-1').click()

    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
      .click()

    cy.get('#react-select-4-option-1').type('{enter}')

    cy.get('.subjects-auto-complete__value-container').type('{enter}')

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', 'Serhiy Breslavskiy')

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', 'emailpost@mail.com')

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', 'Male')

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', '0939309309')

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '17 August,2022')

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'Accounting')

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain.text', 'Sports')

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', 'Ukraine, city Lviv')

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain.text', 'Uttar Pradesh Lucknow')
  });
});
