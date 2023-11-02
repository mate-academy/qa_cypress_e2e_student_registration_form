/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateStudent').then(generateStudent => {
      user = generateStudent;
    });
  });

  it('Register a new student ', () => {
    cy.get('#firstName')
      .type(user.firstName);

    cy.get('#lastName')
      .type(user.lastName);

    cy.get('#userEmail')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.get('#userNumber')
      .type(user.phoneNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectAll} 21 May 2003{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('En{enter}' + 'ci{enter}');

    cy.contains('.custom-control-label', user.hobbie)
      .click();

    cy.get('#currentAddress')
      .type(user.address);

    cy.get('#state')
      .type('{downarrow}{enter}');

    cy.get('#city')
      .type('{downarrow}{enter}');

    cy.get('.btn-primary')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .should('contain', user.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '21 May,2003');

    cy.contains('tr', 'Subjects')
      .should('contain', 'English, Computer Science');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbie);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .should('contain', 'Lucknow');

    cy.get('#closeLargeModal')
      .click();
  });
});
