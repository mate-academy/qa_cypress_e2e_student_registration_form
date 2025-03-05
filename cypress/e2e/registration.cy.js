describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName', { timeout: 10000 }).should('be.visible');
  });

  const { faker } = require('@faker-js/faker');

  const generatedData = {
    randomName: faker.person.firstName(),
    randomSurname: faker.person.lastName(),
    randomEmail: faker.internet.email(),
    randomPhoneNumber: faker.string.numeric(10),
    randomAddress: `${faker.location.streetAddress()}, ${faker.location.zipCode()}`
  };

  it('Fills the form with random data and submits it', () => {
    cy.get('#firstName').then(($input) => {
      cy.wrap($input).type(generatedData.randomName);
      cy.wrap($input).should('have.value', generatedData.randomName);
    });

    cy.get('#lastName').then(($input) => {
      cy.wrap($input).type(generatedData.randomSurname);
      cy.wrap($input).should('have.value', generatedData.randomSurname);
    });

    cy.get('#userEmail').then(($input) => {
      cy.wrap($input).type(generatedData.randomEmail);
      cy.wrap($input).should('have.value', generatedData.randomEmail);
    });

    cy.get('#userNumber').then(($input) => {
      cy.wrap($input).type(generatedData.randomPhoneNumber);
      cy.wrap($input).should('have.value', generatedData.randomPhoneNumber);
    });

    cy.get('#currentAddress').then(($input) => {
      cy.wrap($input).type(generatedData.randomAddress);
      cy.wrap($input).should('have.value', generatedData.randomAddress);
    });

    cy.get('[name="gender"]').then(($radioButtons) => {
      const randomIndex = Cypress._.random(0, $radioButtons.length - 1);
      const radioButton = $radioButtons[randomIndex];

      cy.get(`label[for="${radioButton.id}"]`).click();
      cy.wrap(radioButton).should('be.checked');
    });

    cy.get('.custom-control-label').then(($checkboxes) => {
      if ($checkboxes.length > 0) {
        const numberOfCheckboxesToCheck = Cypress._.random(
          1,
          $checkboxes.length
        );

        Cypress._.sampleSize(
          $checkboxes.toArray(),
          numberOfCheckboxesToCheck
        ).forEach(($checkbox) => {
          cy.wrap($checkbox).click();
        });
      }
    });

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu div').then(($options) => {
      const randomState = Cypress._.sample($options);
      cy.wrap(randomState).click();
    });

    cy.get('#city').click();
    cy.get('.css-26l3qy-menu div').then(($options) => {
      if ($options.length > 0) {
        const randomCity = Cypress._.sample($options.toArray());
        cy.wrap(randomCity).click();
      }
    });

    cy.get('#submit').click();

    cy.get('.modal-body')
      .should('be.visible')
      .within(() => {
        cy.contains('Student Name')
          .next()
          .should(
            'contain',
            `${generatedData.randomName} ${generatedData.randomSurname}`
          );

        cy.contains('Student Email')
          .next()
          .should('contain', generatedData.randomEmail);

        cy.contains('Mobile')
          .next()
          .should('contain', generatedData.randomPhoneNumber);

        cy.contains('Address')
          .next()
          .should('contain', generatedData.randomAddress);
      });

    cy.get('body')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
