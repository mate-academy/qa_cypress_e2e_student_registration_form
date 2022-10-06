    
Cypress.Commands.add('login', () => {    
    cy.get('#firstName')
      .type('Donald');

    cy.get('#lastName')
      .type('Mc Ronald');

    cy.get('#userEmail')
      .type('aReqlMail@gmail.com');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click('topRight');

    cy.get('#userNumber')
      .type('1234567890');

    cy.get('[class$="i css-1hwfws3"]')
      .type('Eng{enter}');

    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('20 May 1995 {enter}');
    
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click('left');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('[id="currentAddress"]')
      .type('The Real Street 47');

    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .type('NCR{enter}');
  
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .type('del{enter}');

    cy.get('[id="userForm"]')
      .submit();
});