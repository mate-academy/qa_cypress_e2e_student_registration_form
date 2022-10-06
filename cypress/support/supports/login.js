    
Cypress.Commands.add('login', () => {    
  cy.get('#firstName')
  .type('Donald');

cy.get('#lastName')
  .type('Mc Ronald');

cy.get('#userEmail')
  .type('aReqlMail@gmail.com');

cy.get('[for="gender-radio-1"]')
  .click();

cy.get('#userNumber')
  .type('1234567890');

cy.get('[class$="i css-1hwfws3"]')
  .type('Eng{enter}');

cy.get('#dateOfBirthInput')
  .type('{selectAll}')
  .type('20 May 1995 {enter}');

cy.get('#hobbies-checkbox-1')
  .click({ force:true });
cy.get('#hobbies-checkbox-2')
  .click({ force:true });
cy.get('#hobbies-checkbox-3')
  .click({ force:true });

cy.get('[id="currentAddress"]')
  .type('The Real Street 47');

cy.get('[id="state"]')
  .click()
  .type('NCR{enter}');

cy.get('[id="city"]')
  .click()
  .type('del{enter}');

cy.get('[id="userForm"]')
  .submit();
});