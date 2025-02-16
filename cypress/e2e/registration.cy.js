/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show first name field', () => {
    cy.get('#firstName').should('exist');
  });

  it('should show last name field', () => {
    cy.get('#lastName').should('exist');
  });

  it('should show email field', () => {
    cy.get('#userEmail').should('exist');
  });

  it('should show gender field', () => {
    cy.get('#genterWrapper').should('exist');
  });

  it('should have gender field with options: male, female and other', () => {
    cy.get('#genterWrapper').within(() => {
      cy.get('#gender-radio-1').should('contain.value', 'Male');
      cy.get('#gender-radio-2').should('contain.value', 'Female');
      cy.get('#gender-radio-3').should('contain.value', 'Other');
    });
  });

  it('should show phone number field', () => {
    cy.get('#userNumber').should('exist');
  });

  it('should show birth date field', () => {
    cy.get('#dateOfBirthInput').should('exist');
  });

  it('should show subjects field', () => {
    cy.get('#subjectsContainer').should('exist');
  });

  it('should show hobbies field', () => {
    cy.get('#hobbiesWrapper').should('exist');
  });

  it('should have hobbies field with options: ' +
        'Sports, Reading and Music', () => {
    cy.get('#hobbiesWrapper').within(() => {
      cy.get('[for="hobbies-checkbox-1"]').should('contain.text', 'Sports');
      cy.get('[for="hobbies-checkbox-2"]').should('contain.text', 'Reading');
      cy.get('[for="hobbies-checkbox-3"]').should('contain.text', 'Music');
    });
  });

  it('should show current address field', () => {
    cy.get('#currentAddress').should('exist');
  });

  it('should show state field', () => {
    cy.get('#state').should('exist');
  });

  it('should show city field', () => {
    cy.get('#city').should('exist');
  });

  it('should have submit button', () => {
    cy.get('#submit').should('exist');
  });

  it('should fill, submit and verify the form', () => {
    const firstName = 'James';
    const lastName = 'Bond';
    const email = 'jamesbond007@gmail.com';
    const phoneNumber = '0123456789';
    const month = '4';
    const year = '1998';
    const subjectOne = 'Computer Science';
    const subjectTwo = 'Math';
    const currentAddress = '100 Parnavaz Mepe St';
    const state = 'Haryana';
    const city = 'Panipat';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('[for="gender-radio-3"]').click();
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-dropdown-container--select').click();
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-dropdown-container--select').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('[aria-label="Choose Thursday, May 7th, 1998"]').click();
    cy.get('#subjectsContainer').type(subjectOne + '{Enter}');
    cy.get('#subjectsContainer').type(subjectTwo + '{Enter}');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#state').type(state + '{Enter}');
    cy.get('#city').type(city + '{Enter}');
    cy.get('#submit').click();
    cy.get('.modal-content').within(() => {
      cy.get('.modal-header')
        .should('contain.text', 'Thanks for submitting the form');
    });

    cy.get('.modal-body').within(() => {
      cy.get('.table tbody tr:nth-child(1) > :last-child')
        .should('contain.text', firstName + ' ' + lastName);
      cy.get('.table tbody tr:nth-child(2) > :last-child')
        .should('contain.text', email);
      cy.get('.table tbody tr:nth-child(3) > :last-child')
        .should('contain.text', 'Other');
      cy.get('.table tbody tr:nth-child(4) > :last-child')
        .should('contain.text', phoneNumber);
      cy.get('.table tbody tr:nth-child(5) > :last-child')
        .should('contain.text', '7 May,1998');
      cy.get('.table tbody tr:nth-child(6) > :last-child')
        .should('contain.text', subjectOne + ', ' + subjectTwo);
      cy.get('.table tbody tr:nth-child(7) > :last-child')
        .should('contain.text', 'Sports, Music');
      cy.get('.table tbody tr:nth-child(9) > :last-child')
        .should('contain.text', currentAddress);
      cy.get('.table tbody tr:nth-child(10) > :last-child')
        .should('contain.text', state + ' ' + city);
    });
  });
});
