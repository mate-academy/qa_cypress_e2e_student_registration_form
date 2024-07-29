/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'Did';
  const lastName = 'Bohdan';
  const email = 'testdid@gmail.com';
  const phoneNumber = '1234567890';
  const birthYear = '1998';
  const birthMonth = 'November';
  const birthDay = '15';
  const address = '9 Nezalezhnosti Street, Ivano-Frankivsk, Ivano-Frankivsk';

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all required fields and submit the form', () => {
    // Filling required fields
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('input[name="gender"][value="Male"]').click({ force: true });
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(birthYear);
    cy.get('.react-datepicker__month-select').select(birthMonth);
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('input[type="checkbox"][value="2"]').click({ force: true });
    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    // Checking the entered data
    cy.contains('td', 'Student Name').next().should('contain', `${firstName} ${lastName}`);
    cy.contains('td', 'Student Email').next().should('contain', email);
    cy.contains('td', 'Gender').next().should('contain', 'Male');
    cy.contains('td', 'Mobile').next().should('contain', phoneNumber);
    cy.contains('td', 'Date of Birth')
      .next().should('contain', `${birthDay} ${birthMonth},${birthYear}`);
    cy.contains('td', 'Subjects').next().should('contain', 'Maths');
    cy.contains('td', 'Hobbies').next().should('contain', 'Reading');
    cy.contains('td', 'Address').next().should('contain', address);
    cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi');
  });
});