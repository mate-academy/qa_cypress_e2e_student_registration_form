/// <reference types='cypress' />

const { UserInfo } = require('../support/User.cy');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('register new user', () => {
    const {
      firstName,
      lastName,
      userEmail,
      userNumber,
      subject,
      addres
    } = UserInfo();

    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(userEmail);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click();

    cy.get('#userNumber')
      .type(userNumber);

    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__year-select')
      .select(99);
    cy.get('.react-datepicker__month-select')
      .select(9);
    cy.get(':nth-child(2) > .react-datepicker__day--008')
      .click();

    cy.get('#subjectsInput')
      .type(subject);
    cy.get('#subjectsInput')
      .type('{enter}');

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)')
      .click();

    cy.get('#currentAddress')
      .type(addres);

    cy.get('#submit').scrollIntoView();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', `${firstName} ${lastName}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', userEmail);
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', userNumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '08 October,1999');
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', subject);
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain.text', 'Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', addres);
  });
});
