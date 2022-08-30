/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student registration form', () => {
  before(() => {
    cy.visit('/')
    cy.viewport(1600, 1200);
    
  });
  
  it('The respose table should contain the exact entered data', () => {
    const { userFirstName, userLastName, email, mobileNumber,
      birthDate, subject, adress, state, city, gender, hobby } = generateUser();
    cy.get('#firstName')
     .type(userFirstName);

    cy.get('#lastName')
     .type(userLastName);

    cy.get('#userEmail')
     .type(email);

    cy.get(`[value="${gender}"]`)
     .click({force: true});

    cy.get('#userNumber')
     .type(mobileNumber);

    cy.get('#dateOfBirthInput')
     .type('{selectAll}').type(birthDate).type('{Enter}');
    
    cy.get('#subjectsContainer')
     .type(`${subject}{Enter}`);

    cy.get('label').contains(hobby)
     .click({force: true});

    cy.get('#currentAddress')
     .type(adress);

    cy.get('#state')
     .type(`${state}{Enter}`);

    cy.get('#city')
     .type(`${city}{Enter}`);

    cy.get('#submit')
     .click({force: true});

// here start the checkeng

    cy.get('.modal-body')
     .contains(userFirstName)
     .contains(userLastName);
    
    cy.get('.modal-body')
     .contains(email);

    cy.get('.modal-body')
     .contains(gender);

    cy.get('.modal-body')
     .contains(mobileNumber);
    
    cy.get('.modal-body')
     .contains(hobby);

    cy.get('.modal-body')
     .contains(subject);

    cy.get('.modal-body')
     .contains(adress);
    
    cy.get('.modal-body')
     .contains(state)
     .contains(city);
    
    cy.get('#closeLargeModal')
     .click();
  });
});
