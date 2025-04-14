/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1320, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should allow to register user', () => {
    // eslint-disable-next-line cypress/no-assigning-return-values
    cy.task('generateUser').then((user) => {
      cy.get('#firstName').type(user.firstName);
      cy.get('#lastName').type(user.lastName);
      cy.get('#userEmail').type(user.email);
      // cy.get(user.gender[randomIndex]).click();
      cy.contains('.custom-control-label', user.gender).click();
      cy.get('#userNumber').type(user.phone);
      cy.get('#dateOfBirthInput').type('{selectAll}');
      cy.get('#dateOfBirthInput').type(user.birthDate);
      cy.get('#dateOfBirthInput').type('{enter}');
      cy.get('.subjects-auto-complete__value-container').type(user.subject);
      cy.get('#react-select-2-option-0').click();
      cy.contains('.custom-control-label', user.hobbie).click();
      cy.get('#currentAddress').type(user.address);
      cy.get('#state').type('{downArrow}{enter}');
      cy.get('#city').type('{downArrow}{enter}');
      cy.get('#submit').click();

      cy.contains('tr', 'Student Name').should('contain', user.firstName)
        .and('contain', user.lastName);
      cy.contains('tr', 'Email').should('contain', user.email);
      cy.contains('tr', 'Gender').should('contain', user.gender);
      cy.contains('tr', 'Mobile').should('contain', user.phone);
      cy.contains('tr', 'Date of Birth').should('contain', user.birthDate);
      cy.contains('tr', 'Subjects').should('contain', user.subject);
      cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
      cy.contains('tr', 'Address').should('contain', user.address);
      cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh')
        .and('contain', 'Lucknow');
    });
  });
});
