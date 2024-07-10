// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "fillForm",
  ({
    firstName,
    lastName,
    userEmail,
    userSex,
    userNumber,
    dateOfBirth,
    subject,
    hobbies,
    address,
    state,
    city,
  }) => {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#userEmail").type(userEmail);
    cy.get(`label[for="gender-radio-${userSex}"]`).click();
    cy.get("#userNumber").type(userNumber);
    cy.get("#dateOfBirthInput").invoke("val", dateOfBirth);
    cy.get("#subjectsInput").type(subject);
    hobbies.forEach((hobbie) => {
      cy.get(`label[for="hobbies-checkbox-${hobbie}"]`).click();
    });
    cy.get("#currentAddress").type(address);

    cy.get("#state").click();
    cy.contains("div", state).click();

    cy.get("#city").click();
    cy.contains("div", city).click();
  }
);

Cypress.Commands.add(
  "checkUser",
  ({
    firstName,
    lastName,
    userEmail,
    userSex,
    userNumber,
    dateOfBirth,
    subject,
    hobbies,
    address,
    state,
    city,
  }) => {
    cy.get(".modal-dialog").within(() => {
      cy.get("table")
        .should("contain.text", firstName)
        .should("contain.text", lastName)
        .should("contain.text", userEmail)
        .should("contain.text", userNumber)
        .should("contain.text", subject)
        .should("contain.text", address)
        .should("contain.text", state)
        .should("contain.text", city);
    });
  }
);
