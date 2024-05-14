/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new user', () => {
    cy.get('[placeholder="First Name"]').should('exist').type(user.firstName);
    cy.get('[placeholder="Last Name"]').should('exist').type(user.lastName);
    cy.get('[placeholder="name@example.com"]').should('exist').type(user.email);

    cy.contains('.custom-control-label', `${user.randomGenderIndex}`).click();
    cy.get('[placeholder="Mobile Number"]')
      .should('exist').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}');

    cy.get('.custom-control-label').contains(user.hobby).click();

    cy.get('[placeholder="Current Address"]')
      .should('exist').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.randomGenderIndex);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', `${user.birth.year}`)
      .and('contain', user.birth.month)
      .and('contain', user.birth.day);
    cy.contains('tr', 'Subjects')
      .should('contain', 'English', 'Physics');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar');
  });
});
