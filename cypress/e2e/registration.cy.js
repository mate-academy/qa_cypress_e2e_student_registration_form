/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  const rows = [
    'Vitalii Hulaievych',
    'test@gmail.com',
    'Male',
    '123456789',
    '12 February,1996',
    'Sports',
    'English',
    'Any addres',
    'Haryana Panipat'
  ];

  it('should register new user', () => {
    cy.get('#firstName').type('Vitalii');
    cy.get('#lastName').type('Hulaievych');
    cy.get('#userEmail').type('test@gmail.com');
    cy.get('[value=Male]').click();
    cy.get('#userNumber').type('123456789');
    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(1);
    cy.get('.react-datepicker__year-select').select('1996');
    cy.get('[aria-label="Choose Monday, February 12th, 1996"]').click();

    cy.get('#subjectsInput').type('s');
    cy.contains('div', 'English').click();

    cy.get('#hobbies-checkbox-1').click();

    cy.get('#currentAddress').type('Any address');

    cy.get('#react-select-3-input').click();
    cy.get('#react-select-3-option-2').click();

    cy.get('#react-select-4-input').click();
    cy.get('#react-select-4-option-1').click();

    cy.get('#submit').click();

    for (const value of rows) {
      cy.contains('td', value).should('exist');
    }
  });
});
