/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user; // tworzymy zmienną user dla generatora

  before(() => {
    cy.visit('/automation-practice-form');
    cy.task('generateUser').then((generatedUser) => {
      // odwołujemy się do generatora w config.js
      user = generatedUser;
    });
  });

  it('Student Registration Form - autofilling', () => {
    // asercja poprawności miejsca
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    // wypełnienie formularza
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#genterWrapper')
      .contains(user.gender, { matchCase: false })
      .click();
    cy.get('#userNumber').type(user.phoneNumber);
    // cy.get('#dateOfBirthInput').type(
    //   '{selectAll}' + user.birthDate + '{enter}'
    // );
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1989');
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('ma{enter}');
    cy.get('#hobbiesWrapper').contains('Sport').click();
    cy.findByPlaceholder('Current Address', 'textarea');
    cy.get('#react-select-4-input').should('be.disabled');
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('#stateCity-wrapper').contains('Select City').type('De{enter}');
    cy.get('button').contains('Submit').click();
    // asercja danych w popup
    cy.get('.modal-body')
      .contains('Student Name')
      .parent()
      .should('contain', user.firstName, user.lastName);
    cy.get('.modal-body')
      .contains('Student Email')
      .parent()
      .should('contain', user.email);
    cy.get('.modal-body')
      .contains('Gender')
      .parent()
      .contains(user.gender, { matchCase: false });
    cy.get('.modal-body')
      .contains('Mobile')
      .parent()
      .should('contain', user.phoneNumber);
    cy.get('.modal-body')
      .contains('Date of Birth')
      .parent()
      .should('contain', '15 August,1989');

    cy.get('.modal-body')
      .contains('Subjects')
      .parent()
      .should('contain', 'Maths');
    cy.get('.modal-body')
      .contains('Hobbies')
      .parent()
      .should('contain', 'Sports');
    cy.get('.modal-body').contains('Address').parent().should('contain', '');
    cy.get('.modal-body')
      .contains('State and City')
      .parent()
      .should('contain', 'NCR Delhi');
  });
});
