/// <reference types='cypress' />

Cypress.Commands.add('fillAllFIelds', (firstName, lastName, email, mobile, adress) => {

    cy.get('[placeholder="First Name"]')
      .type(firstName);

    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(email);

    cy.contains('Other')
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type(mobile);

    cy.get('[class="subjects-auto-complete__indicators css-1wy0on6"]')
      .type('Math{enter}');

    cy.get('[id="dateOfBirthInput"]')
      .click();

    cy.get('[class="react-datepicker__month-select"]')
      .select('October');

    cy.get('[class="react-datepicker__year-select"]')
      .select('1995');

    cy.get('[class="react-datepicker__day react-datepicker__day--016"]')
      .click();

    cy.contains('Reading')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type(adress);

    cy.get('[id="state"]')
      .type('Haryana{enter}');

    cy.get('[id="city"]')
      .type('Karnal{enter}');

    cy.contains('button','Submit')
      .click();

});
