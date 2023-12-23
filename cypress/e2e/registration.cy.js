/// <reference types='cypress' />

describe('Student Registration page', () => {
  const ULR = 'https://demoqa.com/automation-practice-form';

  const user = {
    firstName: 'Lionel',
    lastName: 'Messi',
    userEmail: 'leo10messi@mail.com',
    userNumber: '1234567890',
    monthOfBirth: 'June',
    yearOfBirth: '1987',
    dayOfBirth: '24',
    currentAddress: 'Miami, Florida'
  };

  it('should fill out all the fields', () => {
    cy.visit(ULR);

    cy.get('form').should('exist');

    cy.get('input[id=firstName]').type(user.firstName);
    cy.get('input[id=lastName]').type(user.lastName);
    cy.get('input[id=userEmail]').type(user.userEmail);
    cy.get('label[for=gender-radio-1]').click();
    cy.get('input[id=userNumber]').type(user.userNumber);
    cy.get('input[id=dateOfBirthInput]').click();
    cy.get('.react-datepicker__month-select').select(user.monthOfBirth);
    cy.get('.react-datepicker__year-select').select(user.yearOfBirth);
    cy.get('.react-datepicker__day').contains(user.dayOfBirth).click();
    cy.get('#subjectsInput').type('comp{enter}');
    cy.get('label[for=hobbies-checkbox-1]').click();
    cy.get('label[for=hobbies-checkbox-2]').click();
    cy.get('label[for=hobbies-checkbox-3]').click();
    cy.get('textarea[id=currentAddress]').type(user.currentAddress);
    cy.get('#stateCity-wrapper')
      .contains('Select State')
      .type('Haryana{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Karnal{enter}');
    cy.get('#submit').click();

    cy.get('td').should('contain.text', user.firstName);
    cy.get('td').should('contain.text', user.lastName);
    cy.get('td').should('contain.text', user.userEmail);
    cy.get('td').should('contain.text', +user.userNumber);
    cy.get('td').should('contain.text', 'Computer Science');
    cy.get('td').should('contain.text', 'Sports');
    cy.get('td').should('contain.text', 'Reading');
    cy.get('td').should('contain.text', 'Music');
    cy.get('td').should('contain.text', user.currentAddress);
    cy.get('td').should('contain.text', 'Haryana');
    cy.get('td').should('contain.text', 'Karnal');
  });
});
