/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should write correct values in form', () => {
    cy.get('[placeholder="First Name"]')
      .type('John');
    cy.get('[placeholder="Last Name"]')
      .type('Smith');

    cy.get('[placeholder="name@example.com"]')
      .type('JohnSmith@google.com');

    cy.get('label[for="gender-radio-1"]')
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type('1234567890');

    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('November');
    cy.get('.react-datepicker__year-select')
      .select('2025');
    cy.contains('.react-datepicker__day', '22')
      .click();

    cy.get('[id="subjectsContainer"]')
      .type(`History{enter}`);

    cy.get('label[for="hobbies-checkbox-1"]')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type('Dubno');

    cy.get('#state')
      .type('NCR{enter}');
    cy.get('#city')
      .type('Delhi{enter}');

    cy.get('#submit')
      .should('be.visible');
    cy.get('#submit')
      .click();

    cy.contains('div', 'Thanks for submitting the form')
      .should('be.visible');

    cy.contains('.modal-body', 'John')
      .should('be.visible');

    cy.contains('.modal-body', 'Smith')
      .should('be.visible');

    cy.contains('.modal-body', 'JohnSmith@google.com')
      .should('be.visible');

    cy.contains('.modal-body', 'Male')
      .should('be.visible');

    cy.contains('.modal-body', '1234567890')
      .should('be.visible');

    cy.contains('.modal-body', '22 November,2025')
      .should('be.visible');

    cy.contains('.modal-body', 'History')
      .should('be.visible');

    cy.contains('.modal-body', 'Sports')
      .should('be.visible');

    cy.contains('.modal-body', 'Dubno')
      .should('be.visible');

    cy.contains('.modal-body', 'NCR Delhi')
      .should('be.visible');
  });
});
