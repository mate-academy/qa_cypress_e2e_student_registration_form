/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register new user', () => {
    const FirstName = 'Oleksa';
    const LastName = 'Dovbush';
    const Email = 'oleksadowbush19@gmail.com';
    const MobileNumber = '0967897897';
    const CurrentAddress = 'Ukraine, Dovbush rocks';
    const Subject = 'QA';

    cy.get('[placeholder="First Name"]').type(FirstName);
    cy.get('[placeholder="Last Name"]').type(LastName);
    cy.get('[placeholder="name@example.com"]').type(Email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[placeholder="Mobile Number"]').type(MobileNumber);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__month-select').select('July');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get(':nth-child(2) > .react-datepicker__day--011').click();
    cy.get('.subjects-auto-complete__value-container').type(Subject);
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[placeholder="Current Address"]').type(CurrentAddress);
    cy.get('#state').type('Haryana{enter}');
    cy.get('#city').type('Panipat{enter}');
    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', FirstName);
    cy.get('.modal-body').should('contain', LastName);
    cy.get('.modal-body').should('contain', Email);
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', MobileNumber);
    cy.get('.modal-body').should('contain', '11 July,1990');
    cy.get('.modal-body').should('contain', 'Sport');
    cy.get('.modal-body').should('contain', CurrentAddress);
    cy.get('.modal-body').should('contain', 'Haryana Panipat');
  });
});
