/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'Jan';
  const lastName = 'Kowalski';
  const email = 'jan.kowalski@example.com';
  const mobile = '1234567890';
  const address = 'Ulica Testowa 123';

  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('should fill the form and verify the modal data', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day--001:first').click();
    cy.get('#subjectsInput').type('Computer Science{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.contains('#react-select-3-option-0', 'NCR').click();
    cy.get('#city').click();
    cy.contains('#react-select-4-option-0', 'Delhi').click();
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('table').contains('Student Name').next().should('contain', `${firstName} ${lastName}`);
    cy.get('table').contains('Student Email').next().should('contain', email);
    cy.get('table').contains('Gender').next().should('contain', 'Male');
    cy.get('table').contains('Mobile').next().should('contain', mobile);
    cy
      .get('table')
      .contains('Date of Birth')
      .next().should('contain', '01 January,2000');
    cy
      .get('table')
      .contains('Subjects')
      .next().should('contain', 'Computer Science');
    cy.get('table').contains('Hobbies').next().should('contain', 'Sports');
    cy.get('table').contains('Address').next().should('contain', address);
    cy
      .get('table')
      .contains('State and City')
      .next().should('contain', 'NCR Delhi');
  });
});
