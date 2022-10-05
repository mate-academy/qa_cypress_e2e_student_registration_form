/// <reference types='cypress' />

describe('Tests of basic group', () => {
  before(() => {
    cy.visit(`https://demoqa.com/automation-practice-form`)
    cy.viewport(1000, 1200)
  });

  it('Automated test case to fill all fields', () => {
    cy.get('#firstName')
    .type('Veronika');
    
    cy.get('#lastName')
    .type('Lemon');

    cy.get('#userEmail')
    .type('lemonV@gmail.com');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)')
    .click('left');
     cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
    .click('left');

    cy.get('#userNumber')
    .type('0123456987');

    cy.get('#dateOfBirthInput')
    .click()
    .type('{selectAll} 01 Dec 1994 {enter}');

    cy.get('.subjects-auto-complete__value-container')
    .click()
    .type('Che{enter}')
    .type('bio{enter}');

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
    .click('left');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)')
    .click('left');

    cy.get('#currentAddress')
    .type('Gerassim str, 19');

    cy.get('#stateCity-wrapper > :nth-child(2)')
    .click()
    .type('raj{enter}');

    cy.get('#stateCity-wrapper > :nth-child(3)')
    .click()
    .type('ja{enter}');

    cy.get('#submit')
    .click();   
  });


  it('Checking test user data after registration', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('contain', 'Veronika Lemon');

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .should('contain', 'lemonV@gmail.com');

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
    .should('contain', 'Female');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
    .should('contain', '0123456987');

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
    .should('contain', '01 December,1994');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
    .should('contain', 'Chemistry, Biology');

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
    .should('contain', 'Sports, Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
    .should('contain', 'Gerassim str, 19');

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
    .should('contain', 'Rajasthan Jaipur');
  });
});
