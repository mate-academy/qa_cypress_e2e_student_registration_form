/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it ('Awesome test', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('[value="Male"]').click({ force: true });
    cy.get('[id="hobbies-checkbox-1"]').click({ force: true });
    cy.get('[id="hobbies-checkbox-2"]').click({ force: true });
    cy.get('[id="hobbies-checkbox-3"]').click({ force: true });
    cy.get('[id="firstName"]').type('Bohdan').tab().type('Sventuh').tab()
    .type('sventuhcorp@gmail.com').tab().tab().tab().tab().type('0989475441')
    .tab().type('{selectall}').type ('14 Aug 2000{enter}').tab()
    .type('En{enter}Ph{enter}').tab().tab().tab().tab().tab().type('Kyiv Ukraine 04074')
    .tab().type('U{enter}').tab().type('U{enter}').tab().type('{enter}')
});   
   
it ('Nice test', () => {
    cy.get('tbody').should('contain', 'Bohdan Sventuh');
    cy.get('tbody').should('contain', 'Male');
    cy.get('tbody').should('contain', 'English, Physics');
    cy.get('tbody').should('contain', '14 August,2000');
    cy.get('tbody').should('contain', 'Sports, Reading, Music');
    cy.get('tbody').should('contain', '0989475441');
    cy.get('tbody').should('contain', 'Uttar Pradesh Lucknow');
});


