/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to register a new student', () => {
    const subject = 'English, Physics';
    const stateAndCity = 'Uttar Pradesh Lucknow';
    cy.findByPlaceholder('First Name').type(user.FirstName);
    cy.findByPlaceholder('Last Name').type(user.LastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container').type(
      'english{enter}' + 'physics{enter}'
    );
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();
    cy.contains('tr', 'Student Name').should('contain', user.FirstName);
    cy.contains('tr', user.LastName).should('contain', user.LastName);
    cy.contains('tr', user.email).should('contain', user.email);
    cy.contains('tr', user.gender).should('contain', user.gender);
    cy.contains('tr', user.mobile).should('contain', user.mobile);
    cy.contains('tr', user.birth.day).should('contain', user.birth.day);
    cy.contains('tr', user.birth.year).should('contain', user.birth.year);
    cy.contains('tr', user.hobby).should('contain', user.hobby);
    cy.contains('tr', user.address).should('contain', user.address);
    cy.contains('tr', stateAndCity).should('contain', stateAndCity);
    cy.get('.table').should('contain', subject);
  });
});
