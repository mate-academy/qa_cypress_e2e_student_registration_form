/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    it('should register', () => {
      const firstName = 'Max';
      const lastName = 'Mate';
      const email = 'usermax@mail.com';
      const mobileNumber = '0979797977';
      const address = 'Ukraine, Kharkiv';
      const subject = 'QA';

      cy.get('[placeholder="First Name"]').type(firstName);
      cy.get('[placeholder="Last Name"]').type(lastName);
      cy.get('[placeholder="name@example.com"]').type(email);
      cy.get('[for="gender-radio-1"]').click();
      cy.get('[placeholder="Mobile Number"]').type(mobileNumber);
      cy.get('[id="dateOfBirthInput"]').click();
      cy.get('.react-datepicker__month-select').select('July');
      cy.get('.react-datepicker__year-select').select('2000');
      cy.get(':nth-child(2) > .react-datepicker__day--006').click();
      cy.get('.subjects-auto-complete__value-container').type(subject);
      cy.get('[for="hobbies-checkbox-3"]').click();
      cy.get('[placeholder="Current Address"]').type(address);
      cy.get('#state').type('NCR{enter}');
      cy.get('#city').type('Delhi{enter}');
      cy.get('#submit').click();

      cy.get('.modal-content').should('exist');
      cy.get('.modal-header').should('contain',
        'Thanks for submitting the form');
      cy.get('.modal-body').should('contain', firstName);
      cy.get('.modal-body').should('contain', lastName);
      cy.get('.modal-body').should('contain', email);
      cy.get('.modal-body').should('contain', 'Male');
      cy.get('.modal-body').should('contain', mobileNumber);
      cy.get('.modal-body').should('contain', '6 July,2000');
      cy.get('.modal-body').should('contain', 'Music');
      cy.get('.modal-body').should('contain', address);
      cy.get('.modal-body').should('contain', 'NCR Delhi');
    });
  });
});
