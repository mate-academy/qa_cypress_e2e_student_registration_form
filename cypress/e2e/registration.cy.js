/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register after inputting valid information', () => {
    cy.get('#firstName').click().type('Eka');
    cy.get('#lastName').click().type('One');
    cy.get('#userEmail').click().type('test@i.ua');
    cy.get('#gender-radio-2').click({force: true});
    cy.get('#userNumber').click().type('0637959971');
    cy.get('#dateOfBirthInput').click().type('{selectAll}').type('11 Nov 2022').type('{enter}');
    cy.get('.subjects-auto-complete__value-container').click().type('Math'+ '{enter}');
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').click().type('Kyiv');
    cy.get('#state').type('raj'+ '{enter}');
    cy.get('#city').type('jai' + '{enter}');
    cy.contains('#submit', 'Submit').click({force:true});
    cy.contains('[class="modal-title h4"]', 'Thanks for submitting the form');
    cy.get('[class = modal-body]').contains('Eka');
    cy.contains('0637959971');
    cy.contains('test@i.ua');
  });
});
