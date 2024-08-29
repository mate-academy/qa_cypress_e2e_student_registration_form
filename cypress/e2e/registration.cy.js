/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill all fields except photo', () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    const firstName = `test${randomNumber}`;
    const lastName = `test1${randomNumber}`;
    const userEmail = `test2${randomNumber}`;
    const phoneNumber = Math.floor(Math.random() * 10000000000)
      .toString()
      .padStart(10, '0');

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail + '@example.com');
    cy.get('#genterWrapper > div.col-md-9.col-sm-12').click();
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').invoke('val', '29 Aug 2024');
    cy.get('#subjectsInput').type(`H{enter}`);
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type('Opole, Opolska 15');
    cy.get('#state').type(`{downarrow}{enter}`);
    cy.get('#city').type(`{downarrow}{enter}`);
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should(
      'contain.text',
      'Thanks for submitting the form'
    );
  });
});
