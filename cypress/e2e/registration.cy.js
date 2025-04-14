/// <reference types='cypress' />
import { generateStudent } from '../support/generate';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const student = generateStudent();

  it('should register new student', () => {
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);

    cy.get(`label[for="gender-radio-${student.genderId}"]`).click();

    cy.get('#userNumber').type(student.phoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(student.birth.month);
    cy.pickDate('year-select').select(student.birth.year);
    cy.pickDate('day').contains(student.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}' + 'ma{enter}');

    cy.contains('.custom-control-label', student.hobby).click();

    cy.get('#currentAddress').type(student.address);

    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', student.firstName);
    cy.contains('tr', 'Student Name').should('contain', student.lastName);
    cy.contains('tr', 'Student Email').should('contain', student.email);

    cy.get('tr').contains('td', 'Gender')
      .siblings()
      .should(($td) => {
        const genderText = $td.text().trim();
        expect(['Male', 'Female', 'Other']).to.include(genderText);
      });

    cy.contains('tr', 'Mobile').should('contain', student.phoneNumber);

    cy.contains('tr', 'Date of Birth').should('contain', student.birth.day);
    cy.contains('tr', 'Date of Birth').should('contain', student.birth.month);
    cy.contains('tr', 'Date of Birth').should('contain', student.birth.year);

    cy.contains('tr', 'Subjects').should('contain', 'English, Physics, Maths');

    cy.get('tr').contains('td', 'Hobbies')
      .siblings()
      .should(($td) => {
        const genderText = $td.text().trim();
        expect(['', 'Sports', 'Reading', 'Music']).to.include(genderText);
      });

    cy.contains('tr', 'Address').should('contain', student.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
