/// <reference types="cypress" />

describe('Student Registration Form', () => {
  const student = {
    firstName: 'Ewa',
    lastName: 'Kowalska',
    email: 'ewa.kowalska@test.com',
    gender: 'Female',
    phone: '1234567890',
    birthDay: '15',
    birthMonth: 'May',
    birthYear: '1990',
    subjects: ['English', 'Maths'],
    hobbies: ['Sports', 'Reading', 'Music'],
    address: 'Testowa 10, Rybnik',
    state: 'NCR',
    city: 'Delhi'
  };

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill in the registration form and verify submitted data', () => {
    // First name and last name
    cy.get('#firstName').should('be.visible').type(student.firstName);

    cy.get('#lastName').should('be.visible').type(student.lastName);

    // Email
    cy.get('#userEmail').type(student.email);

    // Gender
    cy.contains('label', student.gender).click();

    // Phone number
    cy.get('#userNumber').type(student.phone);

    // Date of birth
    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(student.birthMonth);

    cy.get('.react-datepicker__year-select').select(student.birthYear);

    cy.get(
      `.react-datepicker__day--0${student.birthDay}:not(.react-datepicker__day--outside-month)`
    ).click();

    // Subjects
    student.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });

    // Hobbies
    student.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    // Address
    cy.get('#currentAddress').type(student.address);

    // State
    cy.get('#state').click();

    cy.get('#react-select-3-input').type(`${student.state}{enter}`);

    // City
    cy.get('#city').click();

    cy.get('#react-select-4-input').type(`${student.city}{enter}`);

    // Submit
    cy.get('#submit').scrollIntoView();
    cy.get('#submit').click();

    // Modal window
    cy.get('.modal-content').should('be.visible');

    // Assert submitted data
    assertTableRow('Student Name', `${student.firstName} ${student.lastName}`);

    assertTableRow('Student Email', student.email);

    assertTableRow('Gender', student.gender);

    assertTableRow('Mobile', student.phone);

    assertTableRow(
      'Date of Birth',
      `${student.birthDay} ${student.birthMonth},${student.birthYear}`
    );

    assertTableRow('Subjects', student.subjects.join(', '));

    assertTableRow('Hobbies', student.hobbies.join(', '));

    assertTableRow('Address', student.address);

    assertTableRow('State and City', `${student.state} ${student.city}`);

    // Close modal
    cy.get('#closeLargeModal').click();
  });
});

function assertTableRow(rowName, expectedValue) {
  cy.contains('.table-responsive td', rowName)
    .next()
    .should('have.text', expectedValue);
}
