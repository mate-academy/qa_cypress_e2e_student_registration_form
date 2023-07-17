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
    cy.findByPlaceholder('First Name').type(user.firstName);

    cy.findByPlaceholder('Last Name').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.contains('.custom-control-label', user.gender).click();

    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectall}23 Oct 2003{enter}');

    cy.get('.subjects-auto-complete__value-container').type('e' + '{enter}');

    cy.contains('.custom-control-label', user.hobby).click();

    cy.findByPlaceholder('Current Address').type(user.address);

    cy.get('#state').type('sh' + '{enter}');

    cy.get('#city').type('a' + '{enter}');

    cy.contains('#submit', 'Submit').click();

    cy.get('.modal-content')
      .should('contain.text', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email').should('contain.text', user.email);

    cy.contains('tr', 'Gender').should('contain.text', user.gender);

    cy.contains('tr', 'Mobile').should('contain.text', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '23 October,2003');

    cy.contains('tr', 'Subject').should('contain.text', 'English');

    cy.contains('tr', 'Hobbies').should('contain.text', user.hobby);

    cy.contains('tr', 'Picture').should('contain.text', '');

    cy.contains('tr', 'Address').should('contain.text', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Agra');
  });
});
