/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

describe('Registration Form Automation', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the form, submit it, and assert modal data', () => {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      gender: 'Male',
      mobile: faker.phone.number('##########'),
      dob: '10 Jan 1990',
      subjects: ['Maths', 'Physics'],
      hobbies: ['Music', 'Reading'],
      address: faker.address.streetAddress(),
      state: 'NCR',
      city: 'Delhi'
    };

    // Fill personal details
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);
    cy.get('#userEmail').type(userData.email);
    cy.get(`[name="gender"][value="${userData.gender}"]`).check();
    cy.get('#userNumber').type(userData.mobile);

    // Set date of birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get(
      '.react-datepicker__day--010:not(.react-datepicker__day--outside-month)'
    ).click();

    // Add subjects
    userData.subjects.forEach((subject) => {
      cy.get('.subjects-auto-complete__value-container').click();
      cy.get('.subjects-auto-complete__value-container').type(
        `${subject}{enter}`
      );
    });

    // Select hobbies
    userData.hobbies.forEach((hobby) => {
      cy.contains('.custom-control-label', hobby).click();
    });

    // Fill address
    cy.get('#currentAddress').type(userData.address);

    // Select state and city
    cy.get('#state').click();
    cy.contains('.css-11unzgr', userData.state).click();
    cy.get('#city').click();
    cy.contains('.css-11unzgr', userData.city).click();

    // Submit the form
    cy.get('#submit').scrollIntoView();
    cy.get('#submit').click();

    // Assert modal content
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-body').within(() => {
      cy.contains(`${userData.firstName} ${userData.lastName}`).should(
        'be.visible'
      );
      cy.contains(userData.email).should('be.visible');
      cy.contains(userData.gender).should('be.visible');
      cy.contains(userData.mobile).should('be.visible');
      cy.contains('10 January,1990').should('be.visible');
      userData.subjects.forEach((subject) => {
        cy.contains(subject).should('be.visible');
      });
      userData.hobbies.forEach((hobby) => {
        cy.contains(hobby).should('be.visible');
      });
      cy.contains(userData.address).should('be.visible');
      cy.contains(`${userData.state} ${userData.city}`).should('be.visible');
    });
  });
});
