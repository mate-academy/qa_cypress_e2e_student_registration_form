/// <reference types='cypress' />

// import { should } from "chai";
// import { it } from "mocha";

describe('Student Registration page', () => {
  const url = `https://demoqa.com/automation-practice-form`;
  const randomNumber = Math.random().toString().slice(2);
  const firstName = `test_first_${randomNumber}`;
  const lastName = `test_last_${randomNumber}`;
  const email = `test_${randomNumber}@example.com`;

  beforeEach(() => {
    cy.visit(url);
  });

  it('should load the form title', () => {
    cy.get('h5').should('contain.text', 'Student Registration Form');
  });

  it('should fill in First Name and Last Name', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
  });

  it('should fill in Email', () => {
    cy.get('#userEmail').type(email);
  });

  it('should select Gender', () => {
    cy.contains('label', 'Female').click();
  });

  it('should fill in Mobile', () => {
    const validPhone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    cy.get('#userNumber').type(validPhone);
  });

  it('should fill in Date of Birth', () => {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2020');
    cy.get('.react-datepicker__month-select').select('June');
    cy.get(
      '.react-datepicker__day--012' +
      ':not(.react-datepicker__day--outside-month)'
    ).click();
  });

  it('should fill in Subjects', () => {
    cy.get('#subjectsInput').type('Maths{enter}');
  });

  it('should select Hobbies', () => {
    cy.contains('label', 'Reading').click();
  });

  it('should fill in Current Address', () => {
    cy.get('#currentAddress').type('Holovna str., Chernivtsi');
  });

  it('should fill in State and City', () => {
    cy.get('#state').click();
    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-3-input').type('NCR{enter}', { force: true });

    cy.get('#city').click();
    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-4-input').type('Delhi{enter}', { force: true });
  });

  it('should submit form', () => {
    cy.get('#submit').click();
  });
});
