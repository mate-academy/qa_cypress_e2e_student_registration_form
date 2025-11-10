/// <reference types='cypress' />

describe('Student Registration page', () => {
  const form = {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: '10 November,2008',
    subjects: ['Maths', 'English'],
    hobbies: ['Sports', 'Reading', 'Music'],
    address: '123 Main St, Springfield',
    state: 'Uttar Pradesh',
    city: 'Merrut'
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should require main fields', () => {
    cy.get('input#firstName').should('have.attr', 'required');
    cy.get('input#lastName').should('have.attr', 'required');
    cy.get('input#userNumber').should('have.attr', 'required');
    cy.get('input#gender-radio-1').should('have.attr', 'required');
    cy.get('input#gender-radio-2').should('have.attr', 'required');
    cy.get('input#gender-radio-3').should('have.attr', 'required');
  });

  it('should save info from form to modal', () => {
    cy.get('input#firstName').type(form.firstName);
    cy.get('input#lastName').type(form.lastName);
    cy.get('input#userEmail').type(form.email);
    cy.contains('label', form.gender).click();
    cy.get('input#userNumber').type(form.mobile);
    cy.get('input#dateOfBirthInput').click();
    // use text input once error
    cy.get('.react-datepicker__year-select').select('2008');
    cy.get('.react-datepicker__month-select').select('November');
    cy.get('[aria-label="Choose Monday, November 10th, 2008"]').click();
    form.subjects.forEach((subject) => {
      cy.get('input#subjectsInput').type(subject + '{enter}');
    });
    form.hobbies.forEach((hobbie) => {
      cy.contains(hobbie).click();
    });

    cy.get('textarea#currentAddress').type(form.address);
    cy.contains('Select State').click();
    cy.contains('div', form.state).click();
    cy.contains('Select City').click();
    cy.contains('div', form.city).click();
    cy.get('button#submit').click();

    cy.get('.modal-body').should('contain', form.firstName);
    cy.get('.modal-body').should('contain', form.lastName);
    cy.get('.modal-body').should('contain', form.email);
    cy.get('.modal-body').should('contain', form.gender);
    cy.get('.modal-body').should('contain', form.mobile);
    cy.get('.modal-body').should('contain', form.dateOfBirth);
    cy.get('.modal-body').should('contain', form.subjects.join(', '));
    cy.get('.modal-body').should('contain', form.hobbies.join(', '));
    cy.get('.modal-body').should('contain', form.address);
    cy.get('.modal-body').should('contain', form.state + ' ' + form.city);
  });
});
