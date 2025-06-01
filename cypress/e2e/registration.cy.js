/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should fill in all input fields correctly', () => {
    cy.get('h1').should('have.text', 'Practice Form');

    cy.findByPlaceholder('First Name').type('John');
    cy.findByPlaceholder('Last Name').type('Loyet');

    cy.get('label[for="gender-radio-1"]').click();

    cy.findByPlaceholder('Mobile Number').type(1234567890);

    cy.get('input[id="dateOfBirthInput"]').click();

    cy.get('select.react-datepicker__month-select').select('2');

    cy.get('select.react-datepicker__year-select').select('2001');

    cy.get('div.react-datepicker__day').contains(/^16$/).click();

    cy.get('div.subjects-auto-complete__value-container--is-multi').type(
      'Engl{enter}'
    );
    cy.get('div.subjects-auto-complete__value-container--is-multi').type(
      'Mat{enter}'
    );

    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('textarea')
      .findByPlaceholder('Current Address')
      .type('Current adress, 20D /6');

    cy.get('div[id="state"]').type('Uttar{enter}');
    cy.get('div[id="city"]').type('Luck{enter}');

    cy.get('button[id="submit"]').click();

    cy.get('div[id="example-modal-sizes-title-lg"]').should(
      'contain.text',
      'Thanks for submitting the form'
    );
  });
});
