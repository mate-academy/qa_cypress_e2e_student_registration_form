/// <reference types='cypress' />
import userData from "../support/user_data";

describe('Registration form:', () => {
  const user = userData
  before(() => {
    cy.visit('automation-practice-form');
  });

  it('fill all field', () => {
    cy.get('#firstName')
      .type(user.userName)
      .should("have.value", user.userName);

    cy.get('#lastName')
      .type(user.lastName)
      .should("have.value", user.lastName);

    cy.get('#userEmail')
      .type(user.email)
      .should("have.value", user.email);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('#userNumber')
      .type(user.phone)
      .should("have.value", user.phone);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${user.dateBirth}`)
      .should("have.value", user.dateBirth);

    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type(`${user.subject}{enter}`);

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('#currentAddress')
      .click()
      .type(user.adress)
      .should("have.value", user.adress);

    cy.get('#state .css-1wa3eu0-placeholder')
      .click({force: true})
      .type(`${user.state}{enter}`);
    
    cy.get('#city .css-19bqh2r')
    .click({force: true})
    .type(`${user.city}{enter}`);;

    // cy.get('#city .css-1wa3eu0-placeholder')
    //   .type(`${user.city}{enter}`);

    cy.get('#submit')
      .click({force: true})
  });

  it('check user data after registration', () => {
    cy.get('#example-modal-sizes-title-lg')
      .should("have.text", "Thanks for submitting the form");
    
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('have.text', `${user.userName} ${user.lastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('have.text', user.email);

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('have.text', 'Other');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('have.text', user.phone);
    
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('have.text', user.dateBirth);

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('have.text', user.subject);

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('have.text', 'Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('have.text', user.adress);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('have.text', `${user.state} ${user.city}`);

    cy.get('#closeLargeModal')
      .click()

  });
});
