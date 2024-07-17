/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register the user', () => {
    cy.get('.text-center')
      .should('contain', 'Practice Form');

    cy.get('#firstName')
      .type('Ryan');

    cy.get('#lastName')
      .type('Gosling');

    cy.get('#userEmail')
      .type('fallguy24@gmail.com');

    cy.get('label[for="gender-radio-1"]').click();

    cy.get('#userNumber')
      .type('0987654321');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select('November');

    cy.get('.react-datepicker__year-select').select('1980');

    cy.get(':nth-child(3) > .react-datepicker__day--012').click();

    cy.get('.subjects-auto-complete__value-container')
      .type('comp{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress').type('My address');

    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .click();

    cy.get('#react-select-3-option-1').click();

    cy.get('.css-1wa3eu0-placeholder').click();

    cy.get('#react-select-4-option-1').click();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
