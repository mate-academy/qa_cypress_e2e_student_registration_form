/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to register', () => {
    cy.url().should('include', '/automation-practice-form');
    cy.get('h1').should('contain.text', 'Practice Form');

    cy.findByPlaseholder('First Name').type(user.firstName);
    cy.findByPlaseholder('Last Name').type(user.lastName);
    cy.findByPlaseholder('name@example.com').type(user.email);

    // eslint-disable-next-line cypress/no-force
    cy.contains('.custom-control-label', user.randomGenderIndex)
      .click({ force: true });
    cy.findByPlaseholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}');

    cy.get('.custom-control-label').contains(user.hobby).click();

    cy.findByPlaseholder('Current Address').type(user.address);
    cy.get('#state').type('Ut{enter}');
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
      .should('contain', user.birth.month)
      .and('contain', `${user.birth.year}`)
      .and('contain', user.birth.day);

    cy.contains('tr', 'Subjects')
      .should('contain', 'English').and('contain', 'Physics');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'State and City').should('contain', 'Uttar');

    cy.contains('tr', 'Address')
      .should('contain', user.address);
  });
});
