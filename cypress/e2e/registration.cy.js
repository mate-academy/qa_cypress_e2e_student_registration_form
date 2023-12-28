/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('it should allow to register a new user', () => {
    cy.visit('/');
    cy.get('[placeholder="First Name"]').type(user.firstName);
    cy.get('[placeholder="Last Name"]').type(user.lastName);
    cy.get('[placeholder="name@example.com"]').type(user.email);
    cy.contains('.custom-control', user.gender).click();
    cy.get('[placeholder="Mobile Number"]').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}31 Dec 1980{Enter}');
    cy.get('.subjects-auto-complete__value-container').type('S{Enter}');
    cy.get('.subjects-auto-complete__value-container').type('A{Enter}');
    cy.contains('.custom-control', user.hobby).click();
    cy.get('[placeholder="Current Address"]').type(user.adress);
    cy.get('#state').type('N{Enter}');
    cy.get('#city').type('A{Enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '31 December,1980');
    cy.contains('tr', 'Subjects')
      .should('contain', 'English')
      .and('contain', 'Maths');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.adress);
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR')
      .and('contain', 'Gurgaon');
  });
});
