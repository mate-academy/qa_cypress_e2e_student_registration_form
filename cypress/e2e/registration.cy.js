/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields except picture', () => {
    const user = generateUser();

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#genterWrapper > .col-md-9').then(($gender) => {
      const index = Math.floor(Math.random() * $gender.children().length);
      cy.log($gender.children());
      cy.wrap($gender.children()[index]).click();
    });

    cy.get('#dateOfBirthInput').type(`{selectAll}` + user.DOB + `{Enter}`);
    cy.get(`#hobbiesWrapper > .col-md-9`).then(($hobby) => {
      const h = $hobby.children();
      const index = Math.floor(Math.random() * h.length);
      for (let i = 0; i <= index; i++) {
        const used = [];
        let option = Math.floor(Math.random() * h.length);
        while (used.includes(option)) {
          option = Math.floor(Math.random() * h.length);
        }
        used.push(option);
        cy.wrap(h[option]).click();
      }
    });
    cy.get('.subjects-auto-complete__value-container').then(($sub) => {
      const looper = Math.floor(Math.random() * 5);
      const arrayOfLetters = user.letter;
      for (let i = 0; i <= looper; i++) {
        cy.wrap($sub).type(arrayOfLetters[i] + `{Enter}`);
      }
    });
    cy.get('#userNumber').type(user.phone);
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').click();

    cy.get('.css-26l3qy-menu div[class*="option"]').then(($states) => {
      const index = Math.floor(Math.random() * $states.length);
      cy.wrap($states[index]).click();

      cy.get('#city').click();

      cy.get('.css-26l3qy-menu div[class*="option"]').then(($cities) => {
        const index = Math.floor(Math.random() * $cities.length);
        cy.wrap($cities[index]).click();
      });
    });

    cy.get('#submit').click();
    cy.get('tbody').should('exist');
  });
});
