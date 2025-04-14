/// <reference types='cypress' />

describe('Student Registration page', () => {


  const firstName = 'Tester';
  const lastName = 'Test';
  const userEmail = 'test@gmail.com';
  const phoneNumber = '1234567890';
  const currentAddress = '123, Green Nobel Parkway';
  
  
  before(() => {
cy.visit('/')
  });

  it('should register new user', () => {
    cy.get('[id="firstName"]').type(firstName);
    cy.get('[id="lastName"]').type(lastName);
    cy.get('[id="userEmail"]').type(userEmail);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[id="userNumber"]').type(phoneNumber);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__month-select').select('October');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day--029').click()
    cy.get('.subjects-auto-complete__value-container').type('Ma{enter}');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[id="currentAddress"]').type(currentAddress);
    cy.get('#state').type('Harya{enter}');
    cy.get('#city').type('K{enter}');
    cy.contains('#submit', 'Submit').click();
    cy.contains('.modal-content', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
      .should('contain', firstName);
    cy.contains('tr', 'Student Name')
      .should('contain', lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', userEmail);
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.contains('tr', 'Mobile')
      .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '29 October,2000');
    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths');
    cy.contains('[id="closeLargeModal"]', 'Close').click();
  });
});

