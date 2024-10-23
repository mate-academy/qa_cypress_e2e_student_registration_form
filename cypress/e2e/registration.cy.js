/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const email = 'john.doe@gmail.com';
  const mobileNumber = '0966313444';
  const currentAddress = 'Wilhelm-Kalle-Straße 18';

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it(`should fill all fields except "picture"`, () => {
    // Fill in the form fields
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get('.subjects-auto-complete__value-container')
      .type('Maths{enter}');
    cy.get('#currentAddress').type(currentAddress);

    // Select date of birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1986');
    cy.get('.react-datepicker__day--020').click();

    // Select hobbies
    cy.get('label[for="hobbies-checkbox-2"]').click();

    // Select state and city
    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-2').click();

    // Submit the form
    cy.get('#submit').click();

    // Assert modal window content
    cy.get('.modal-header').contains('Thanks for submitting the form');

    cy.contains('tr', 'Student Name').should('contain.text', `${firstName} ${lastName}`);
    cy.contains('tr', 'Student Email').should('contain.text', email);
    cy.contains('tr', 'Gender').should('contain.text', 'Male');
    cy.contains('tr', 'Mobile').should('contain.text', mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain.text', '20 February,1986');
    cy.contains('tr', 'Subjects').should('contain.text', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain.text', 'Reading');
    cy.contains('tr', 'Address')
      .should('contain.text', currentAddress);
    cy.contains('tr', 'State and City')
      .should('contain.text', 'Uttar Pradesh');
      cy.contains('tr', 'State and City')
      .should('contain.text', 'Merrut');

  });
});
