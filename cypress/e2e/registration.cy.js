/// <reference types='cypress' />

const faker = require('faker');

const rfirstName = faker.name.firstName();
const rlastName = faker.name.lastName();
const remail = faker.internet.email();
const rnumber = faker.phone.phoneNumber('1#########');

describe('Student Registration page', () => {
  before(() => {
cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('shold be succesfully registered', () => {
    cy.get('#firstName').type(rfirstName);
    cy.get('#lastName').type(rlastName);
    cy.get('#userEmail').type(remail);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get('#userNumber').type(rnumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__day--019').click();

    cy.get('.subjects-auto-complete__value-container').type('Maths');
    cy.get('#react-select-2-option-0').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();;
    cy.get('#currentAddress').type('qwertystreet1');

    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click({ force:true });
    cy.get('#react-select-3-option-0').click({ force: true });
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click({ force:true });
    cy.get('#react-select-4-option-0').click({ force: true });

    cy.get('#submit').click({ force:true });

    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', rfirstName, rlastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', remail);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Other');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', rnumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '19 April,2000');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', 'Maths');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Reading');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', 'qwertystreet1');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'NCR Delhi');













  });
});
