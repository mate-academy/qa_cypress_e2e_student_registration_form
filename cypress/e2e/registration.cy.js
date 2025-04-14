/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    let user;

    before(() => {
      cy.visit('/');
      cy.task('generateUser')
        .then((generateUser) => {
          user = generateUser;
        });
    });

    it('', () => {
      it('Should allow to register a new user', () => {
        cy.get('#firstName')
          .type(user.firstName);
        cy.get('#lastName')
          .type(user.lastName);
        cy.get('#userEmail')
          .type(user.email);
        cy.contains('.custom-control-label', user.gender)
          .click();
        cy.get('#userNumber')
          .type(user.phone);
        cy.get('#dateOfBirthInput')
          .type('{selectAll}31 Dec 1980{enter}');
        cy.get('#subjectsContainer')
          .type('E{downArrow}{enter}');
        cy.contains('.custom-control-label', user.hobby)
          .click();
        cy.get('#currentAddress')
          .type(user.address);
        cy.get('#state')
          .type('{downArrow}{enter}');
        cy.get('#city')
          .type('{downArrow}{enter}');
        cy.get('#submit')
          .click();

        cy.contains('tr', 'Student Name')
          .should('contain', user.firstName);
        cy.contains('tr', 'Student Email')
          .should('contain', user.email);
        cy.contains('tr', 'Gender')
          .should('contain', user.gender);
        cy.contains('tr', 'Mobile')
          .should('contain', user.phone);
        cy.contains('tr', 'Date of Birth')
          .should('contain', '31 December,1980');
        cy.contains('tr', 'Subjects')
          .should('contain', 'Chemistry');
        cy.contains('tr', 'Hobbies')
          .should('contain', user.hobby);
        cy.contains('tr', 'Address')
          .should('contain', user.address);
        cy.contains('tr', 'State and City')
          .should('contain', 'Uttar Pradesh Lucknow');
      });
    });
  });
});
