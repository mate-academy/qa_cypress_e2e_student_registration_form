/// <reference types='cypress' />

const username = 'John';
const surname = 'Johnson';
const email = 'johnjohnson@gmail.com';
const gender = 'Male';
const mobile = '5345985433';
const address = '6200 Winner street, New-York, USA';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be success registration', () => {
    cy.get('#firstName').type(username);

    cy.get('#lastName').type(surname);

    cy.get('#userEmail').type(email);

    cy.get('.custom-control-label').contains(gender).click();

    cy.get('#userNumber').type(mobile);

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__day--001').contains('1').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get('.custom-control-label').contains('Sports').click();

    cy.get('#currentAddress').type(address);

    cy.get('#state').click();
    cy.contains('div', 'NCR').click();

    cy.get('#city').click();
    cy.contains('div', 'Delhi').click();

    cy.get('#submit').click();

    cy.get('.modal-title').should(
      'contain.text',
      'Thanks for submitting the form'
    );

    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
      'contain.text',
      `${username} ${surname}`
    );

    cy.get('tbody > :nth-child(2) > :nth-child(2)').should(
      'contain.text',
      email
    );

    cy.get('tbody > :nth-child(3) > :nth-child(2)').should(
      'contain.text',
      gender
    );

    cy.get('tbody > :nth-child(4) > :nth-child(2)').should(
      'contain.text',
      mobile
    );

    cy.get('tbody > :nth-child(5) > :nth-child(2)').should(
      'contain.text',
      '01 April,2025'
    );

    cy.get('tbody > :nth-child(6) > :nth-child(2)').should(
      'contain.text',
      'Maths'
    );

    cy.get('tbody > :nth-child(7) > :nth-child(2)').should(
      'contain.text',
      'Sports'
    );

    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('contain.text', '');

    cy.get('tbody > :nth-child(9) > :nth-child(2)').should(
      'contain.text',
      address
    );

    cy.get('tbody > :nth-child(10) > :nth-child(2)').should(
      'contain.text',
      'NCR Delhi'
    );
  });
});
