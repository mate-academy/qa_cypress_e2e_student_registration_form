/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should be fill firstName', () => {
    const name = 'Roma';
    const lastName = 'Mykytiuk';
    const email = 'mykytiuk@gmail.com';
    const curentAdres = Math.floor(Math.random() * 100);
    cy.get('#firstName').type(name);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('123456789');
    cy.get('#dateOfBirthInput').type('{enter}');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type(`Address ${curentAdres} Street`);
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();

    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${name} ${lastName}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', '123456789');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Sports');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', curentAdres);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'NCR Gurgaon');
  });
});
