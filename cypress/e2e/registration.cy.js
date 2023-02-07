/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  it('Should register the user', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    const {
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      hobbies,
      date,
      address,
    } = generateUser();

    cy.get('#firstName')
      .type(firstName);
    
    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.contains('.custom-control-label', gender)
      .click({force: true});

    cy.get('#userNumber')
      .type(phoneNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__month-select')
      .select(date.month);

    cy.get('.react-datepicker__year-select')
      .select(`${date.year}`);

    cy.get('.react-datepicker__day--' + `${date.day.toString().padStart(3, "0")}`).click();

    cy.get('.subjects-auto-complete__value-container')
      .click().type('Ma{enter}');

    for (const hobby of hobbies) {
      cy.contains('.custom-control-label', hobby)
        .click({force: true});
    }

    cy.get('#currentAddress')
    .type(address);

    cy.get('#state')
      .type('{downArrow}{enter}');

    cy.get('#city')
      .type('{downArrow}{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .and('contain', lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', email);

    cy.contains('tr', 'Gender')
      .should('contain', gender);

    cy.contains('tr', 'Mobile')
      .should('contain', phoneNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', date.day)
      .and('contain', date.month)
      .and('contain', date.year);

    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths');

    cy.contains('tr', 'Hobbies')
      .should('contain', hobbies.join(', '));

    cy.contains('tr', 'Address')
      .should('contain', address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow');
  });
});
