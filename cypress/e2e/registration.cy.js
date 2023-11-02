/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('Automation registration form', () => {
    const firstName = 'Tanjiro';
    const lastName = 'Kamado';
    const email = 'tanjirokamado213@gmail.com';
    const phoneNumber = '0997548712';
    const subject = 'English';
    const adress = 'Japan, Kutomori';
    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.get('[for="gender-radio-1"]')
      .click();
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('July');
    cy.get('.react-datepicker__year-select')
      .select('2008');
    cy.get('.react-datepicker__day--014')
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type(subject + `{Enter}`);
    cy.get('[for="hobbies-checkbox-1"]')
      .click();
    cy.get('[placeholder="Current Address"]')
      .type(adress);
    cy.get('#state')
      .click();
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('#city')
      .click();
    cy.get('#react-select-4-option-0')
      .click();
    cy.get('#submit')
      .click();

    cy.get('.modal-content')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body')
      .should('contain', firstName);
    cy.get('.modal-body')
      .should('contain', lastName);
    cy.get('.modal-body')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.get('.modal-body')
      .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '14 July,2008');
    cy.contains('tr', 'Subject')
      .should('contain', 'English');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports');
    cy.get('.modal-body')
      .should('contain', adress);
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });
});
