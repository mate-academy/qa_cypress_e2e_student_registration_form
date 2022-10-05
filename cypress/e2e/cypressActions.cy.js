/// <reference types='cypress' />

describe('Name of the group', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');        
  });

  it('Fill all fields in form', () => {
    cy.get(`[id="firstName"]`)
      .type('Max');
    cy.get(`[id="lastName"]`)
      .type('Verstappen');
    cy.get(`[id="userEmail"]`)
      .type('supermax@test.com');
      cy.get('#gender-radio-1')
      .click({force: true});
    cy.get(`[id="userNumber"]`)
      .type('2134858890');
    cy.get(`[id="dateOfBirthInput"]`)
      .type('{selectall}')
      .type('30 SEP 1997{enter}');
    cy.get(`[id="subjectsInput"]`)
      .type('Math{enter}')
      .type('comp{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();
    cy.get(`[id="currentAddress"]`)
      .type('6 Rue Plati, 98000 Monaco');
    cy.get(`[id="state"]`)
      .click()
      .type('Rajas{enter}');
    cy.get(`[id="city"]`)
      .click()
      .type('Jaip{enter}');    
    cy.contains('Widgets')
      .click();
    cy.get(`[id="submit"]`)
      .click();    
  });

  it('Table validation', () => {
    cy.contains('tr', 'Student Name')
      .should('contain', 'Max Verstappen');
    cy.contains('tr', 'Student Email')
      .should('contain', 'supermax@test.com');
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.contains('tr', 'Mobile')
      .should('contain', '2134858890');
    cy.contains('tr', 'Date of Birth')
      .should('contain', '30 September,1997');
    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths, Computer Science');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports, Music');
    cy.contains('tr', 'Address')
      .should('contain', '6 Rue Plati, 98000 Monaco')
    cy.contains('tr', 'State and City')
      .should('contain', 'Rajasthan Jaipur');
    cy.get(`[id="closeLargeModal"]`)
      .click();
  });  
});
