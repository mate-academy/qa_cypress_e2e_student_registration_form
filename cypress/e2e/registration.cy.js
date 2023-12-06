/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should allow to register new user', () => {
    const randomNumber = Math.random().toString().slice(2);
    const userName = `tes_tuser-${randomNumber}`;

    cy.get('#firstName')
      .type(userName);

    cy.get('#lastName')
      .type(userName);

    cy.get('#userEmail')
      .type(`${userName}@email.com`);
    cy.get('.custom-control-label')
      .contains('Female')
      .click();
    cy.get('#userNumber')
      .type('123456789');
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('9');
    cy.get('.react-datepicker__year-select')
      .select('1978');
    cy.get('.react-datepicker__day--008')
      .contains('8')
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type('about me');
    cy.get('.custom-control-label')
      .contains('Sport')
      .click();
    cy.get('.custom-control-label')
      .contains('Music')
      .click();
    cy.get('.custom-control-label')
      .contains('Reading')
      .click();
    cy.get('#uploadPicture')
      .click();
    // current address text area cy.get('#currentAddress')
    // select state i select city cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
    cy.get('#submit')
      .should('be.visible')
      .click();

    // cy.url()
    //    .should('include', '/user/login');
  });
});
