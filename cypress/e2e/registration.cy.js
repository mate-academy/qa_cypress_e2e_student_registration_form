/// <reference types='cypress' />

describe('Student Registration page', () => {
  // eslint-disable-next-line no-unused-vars
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should to register user', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}11 Feb 2011{enter}');
    cy.get('#subjectsContainer').type('L{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbies).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('E{enter}');
    cy.get('#city').type('E{enter}');
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
      .should('contain.text', '11 February,2011');

    cy.contains('tr', 'Subjects')
      .should('contain', 'Biology');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbies);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .and('contain', 'Merrut');
  });
});
