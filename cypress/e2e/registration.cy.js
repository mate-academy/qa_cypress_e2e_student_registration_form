/// <reference types="cypress" />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the form, submit and verify modal', () => {
    const firstName = 'Jan';
    const lastName = 'Kowalski';
    const email = 'jan.kowalski@example.com';
    const gender = 'Male';
    const mobile = '1234567890';
    const birthDay = '15 May,1990';
    const subjects = ['Maths', 'Physics'];
    const hobbies = ['Sports', 'Reading'];
    const address = 'ul. Testowa 1, 00-001 Warszawa';
    const state = 'NCR';
    const city = 'Delhi';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();

    cy.get('#subjectsInput').type(`${subjects[0]}{enter}`);
    cy.get('#subjectsInput').type(`${subjects[1]}{enter}`);

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('#currentAddress').type(address);

    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();

    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('#example-modal-sizes-title-lg')
      .should('have.text', 'Thanks for submitting the form');

    cy.get('td').contains('Student Name').next().should('have.text', `${firstName} ${lastName}`);
    cy.get('td').contains('Student Email').next().should('have.text', email);
    cy.get('td').contains('Gender').next().should('have.text', gender);
    cy.get('td').contains('Mobile').next().should('have.text', mobile);
    cy.get('td').contains('Date of Birth').next().should('have.text', birthDay);
    cy.get('td').contains('Subjects').next()
      .should('have.text', subjects.join(', '));
    cy.get('td').contains('Hobbies').next()
      .should('have.text', hobbies.join(', '));
    cy.get('td').contains('Address').next().should('have.text', address);
    cy.get('td').contains('State and City').next().should('have.text', `${state} ${city}`);
  });
});
