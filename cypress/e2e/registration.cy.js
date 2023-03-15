/// <reference types='cypress' />

const { generateNewUser } = require('../support/genereateNewUser');

describe('Registration form', () => {
  beforeEach(() => {
    cy.viewport(550, 750) // viewport to 550px x 750px because the page does not scroll
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Check the ability successful registration with using all field', () => {
    const {
      firstname,
      lastname,
      email,
      currentAddress,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.findById('userEmail').type(email);
    cy.get('label[for="gender-radio-2"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('2010');
    cy.get('[aria-label="Choose Friday, February 12th, 2010"]').click();
    cy.findById('subjectsInput').type('English{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.findById('currentAddress').type(currentAddress);
    cy.findById('stateCity-wrapper').scrollIntoView();
    cy.findById('state').click().type('NCR{enter}');
    cy.findById('city').click().type('Delhi{enter}');
    cy.findById('submit').should('be.visible').click();

    cy.get('.modal-content').should('exist');
    cy.contains('Thanks for submitting the form').should('exist');

    cy.get('.modal-content')
      .should('contain',`${firstname} ${lastname}`)
      .should('contain', email)
      .should('contain',phoneNumber)
      .should('contain', 'English')
      .should('contain', currentAddress);
  });

    it(`Check the ability successful registration using only required fields `, () => {
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('2010');
    cy.get('[aria-label="Choose Friday, February 12th, 2010"]').click();
    cy.findById('submit').click();
    cy.contains('Thanks for submitting the form').should('exist');
    cy.get('.modal-content')
      .should('contain', `${firstname} ${lastname}`)
      .should('contain', 'Male')
      .should('contain', '12 February,2010')
      .should('contain', phoneNumber);
  });

  it(`Empty 'First Name' field is highlighted
    in red after clicking on the [Submit] button`, () => {
    cy.get('#submit').click();

    cy.findById('firstName')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it(`Empty 'Last Name' field is highlighted
  in red after clicking on the [Submit] button`, () => {
    cy.get('#submit').click();

    cy.findById('lastName')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it(`Empty 'Gender' field is highlighted
  in red after clicking on the [Submit] button`, () => {
    cy.get('#submit').click();

    cy.get('label[for="gender-radio-1"]')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('label[for="gender-radio-2"]')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('label[for="gender-radio-3"]')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it(`Empty 'Mobile' field is highlighted
  in red after clicking on the [Submit] button`, () => {
    cy.get('#submit').click();

    cy.findById('userNumber')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it(`Check the ability to choose two or more elements using radio-buttons`, () => {
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('label[for="gender-radio-2"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('submit').click();
    cy.get('.modal-content')
      .should('contain', 'Female')
      .should('not.visible', 'Male')
  });

  it('Check the ability to choose date of birth selection', () => {  
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('2010');
    cy.get('[aria-label="Choose Friday, February 12th, 2010"]').click();
    cy.get('#submit').click();
    cy.get('.modal-body').should('contain', '12 February,2010');
  });

  it('Check the ability requires valid email', () => {
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    const invalidEmail = firstname;

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('userEmail').type(invalidEmail);
    cy.findById('dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('2010');
    cy.get('[aria-label="Choose Friday, February 12th, 2010"]').click();
    cy.findById('submit').click();
    cy.findById('userEmail')
    .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

  it('Check the ability selecting multiple subjects', () => {
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.findById('subjectsInput').type('Math{enter}');
    cy.findById('subjectsInput').type('Computer Science{enter}');
    cy.findById('subjectsInput').type('English{enter}');
    cy.findById('submit').click();
    cy.contains('Thanks for submitting the form').should('exist')
    cy.get('.modal-body').should('contain', 'Math');
    cy.get('.modal-body').should('contain', 'Computer Science');
    cy.get('.modal-body').should('contain', 'English');
  });

  it('Check the ability selecting multiple hobbies', () => {
    const {
      firstname,
      lastname,
      phoneNumber
    } = generateNewUser();

    cy.findById('firstName').type(firstname);
    cy.findById('lastName').type(lastname);
    cy.get('label[for="gender-radio-1"]').click();
    cy.findById('userNumber').type(phoneNumber);
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('label[for="hobbies-checkbox-3"]').click()
    cy.get('#submit').click();
    cy.contains('Thanks for submitting the form').should('exist')
    cy.get('.modal-body').should('contain', 'Sports');
    cy.get('.modal-body').should('contain', 'Music');
  });
});
