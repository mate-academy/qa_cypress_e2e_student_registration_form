/// <reference types='cypress' />

describe('Name of the group', () => {
  const firstName = 'Rostik';
  const lastName = 'Pyliak';
  const userEmail = 'test@mail.com';
  const userPhone = '0123456789';
  const userAddress = 'Boryslav, Ukraine';

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should fill all fields on the page and login user', () => {
    cy.contains('.main-header', 'Practice Form').should('exist');
    cy.get('#firstName').type(`${firstName}`);
    cy.get('#lastName').type(`${lastName}`)
    cy.get('#userEmail').type(`${userEmail}`)
    cy.get('#gender-radio-1').click({force: true})
    cy.get('#userNumber').type(`${userPhone}`)
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('October')
    cy.get('.react-datepicker__year-select').select('1992')
    cy.get(':nth-child(1) > .react-datepicker__day--003').click()
    cy.get('.subjects-auto-complete__value-container').type('His{enter}').type('Eng{enter}')
    cy.get('#hobbies-checkbox-2').click({force: true})
    cy.get('#hobbies-checkbox-3').click({force: true})
    cy.get('#currentAddress').type(`${userAddress}`)
    cy.get('#state').type('Haryana{enter}')
    cy.get('#city').type('Karnal{enter}')
    cy.get('.btn-primary').click({force: true})
  });

  it('should validate input data in modal window', () => {
    cy.contains('.modal-title', 'Thanks for submitting the form').should('exist')
    cy.contains('tr', 'Student Name').should('contain', `${firstName} ${lastName}`)
    cy.contains('tr', 'Student Email').should('contain', `${userEmail}`)
    cy.contains('tr', 'Gender').should('contain', 'Male')
    cy.contains('tr', 'Mobile').should('contain', `${userPhone}`)
    cy.contains('tr', 'Date of Birth').should('contain', '03 October,1992')
    cy.contains('tr', 'Subjects').should('contain', 'History, English')
    cy.contains('tr', 'Hobbies').should('contain', 'Reading, Music')
    cy.contains('tr', 'Address').should('contain', `${userAddress}`)
    cy.contains('tr', 'State and City').should('contain', 'Haryana Karnal')
  });
});
