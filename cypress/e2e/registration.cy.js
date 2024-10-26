/// <reference types='cypress' />

const firstName = 'Anderson';
const lastName = 'Konstant';
const userEmail = 'Anderson@gmail.com';
const phonnumber = 802654594154;
const Subjects = 'dsafgasfasd';
// eslint-disable-next-line camelcase
const Current_Address = 'gafkgjkfjdasofjdsoiahgao';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type(phonnumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day--017').click();

    cy.get('.subjects-auto-complete__value-container').type(Subjects);
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#currentAddress').type(Current_Address);
    cy.get('#submit').click();
  });
});
