Cypress.Commands.add('fillForm', (user) => {
  cy.get('input[id="firstName"]').type(user.firstName);
  cy.get('input[id="lastName"]').type(user.lastName);
  cy.get('input[id="userEmail"]').type(user.email);
  cy.get('.custom-control-label').contains(user.gender).click();
  cy.get('input[id="userNumber"]').type(user.mobileNumber);
  cy.get('#dateOfBirthInput').type(`{selectAll}${user.birthday}{enter}`);
  cy.contains('.custom-control-label', user.hobby).click();
  cy.get('#currentAddress').type(user.address);
  cy.get('.css-1wa3eu0-placeholder').contains('Select State')
    .type('{enter}');
  cy.get('#city').type('{enter}');
});

Cypress.Commands.add('checkValuesInTable', (user) => {
  cy.get('tbody').should('contain.text', `${user.firstName} ${user.lastName}`);
  cy.get('tbody').should('contain.text', user.email);
  cy.get('tbody').should('contain.text', user.gender);
  cy.get('tbody').should('contain.text', user.mobileNumber);
  cy.get('tbody').should('contain.text', user.birthday);
  cy.get('tbody').should('contain.text', user.hobby);
  cy.get('tbody').should('contain.text', user.address);
  cy.get('tbody').should('contain.text', 'NCR Delhi');
});
