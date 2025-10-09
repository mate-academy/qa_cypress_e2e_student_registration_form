/// <reference types='cypress' />

describe('Student Registration page', () => {
  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.com',
    gender: 'Male',
    mobile: '1234567890',
    birthDay: '15',
    birthMonth: 'May',
    birthYear: '1995',
    subject: 'Maths',
    hobbies: ['Sports', 'Reading'],
    address: '123 Main Street, Springfield',
    state: 'NCR',
    city: 'Delhi'
  };

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill and submit the form successfully', () => {
    cy.fillForm(student);

    cy.get('#submit').click({ force: true });

    cy.assertSubmittedData(student);
  });
});

