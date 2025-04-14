/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should provide an ability to register', () => {
    // Verify if page opens
    cy.visit('/automation-practice-form');
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    // Fill the form
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    const genderInput = user.gender;
    cy.contains('#genterWrapper', genderInput, { matchCase: false }).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + user.birthDate + '{enter}');
    cy.get('#subjectsInput').type('sc{enter}');
    cy.get('#hobbiesWrapper').contains('Reading').click();
    cy.get('#hobbiesWrapper').contains('Sport').click();
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.findByPlaceholder('Current Address').type('A{enter}');
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('De{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('exist');

    // Check if the data that is displayed after clicking "Submit" are correct
    cy.get('.table').should('contain', user.firstName);
    cy.get('.table').should('contain', user.lastName);
    cy.get('.table').should('contain', user.email);
    // eslint-disable-next-line max-len
    const genderCapitalize = genderInput.charAt(0).toUpperCase() + user.gender.slice(1);
    // eslint-disable-next-line max-len
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', genderCapitalize);
    cy.get('.table').should('contain', user.phoneNumber);
    cy.wrap(user.birthDate).should('match', /[a-zA-Z]+ \d{2} \d{4}/);
    cy.get('.table').should('contain', 'Computer Science');
    cy.get('.table').should('contain', 'Reading, Sports, Music');
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('be.empty');
    cy.get('.table').should('contain', 'NCR Delhi');
  });
});
