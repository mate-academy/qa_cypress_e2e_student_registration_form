/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill all fields except "picture"', () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    const firstName = `test${randomNumber}`;
    const lastName = `test1${randomNumber}`;
    const email = `${firstName}@gmail.com`;
    const number = '1234567890';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#genterWrapper > div.col-md-9.col-sm-12').click();
    cy.get('#userNumber').type(number);
    cy.get('#dateOfBirthInput')
      .invoke('val', '28 Aug 2024');
    cy.get('.subjects-auto-complete__value-container').type('M{enter}');
    cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12').click();
    cy.get('#currentAddress').type('Warszawa, Sandomierska 20');
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
