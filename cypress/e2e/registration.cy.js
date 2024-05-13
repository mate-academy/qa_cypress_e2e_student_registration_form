/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  const subjects = 'English';

  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new user', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);

    cy.contains('.custom-control-label', user.randomGenderIndex)
      .click();

    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();

    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type(subjects + '{enter}');
    cy.contains('.custom-control-label', user.hobby).click();

    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName).and('contain', user.lastName);

    cy.contains('tr', 'Student Email').should('contain', user.email);

    cy.contains('tr', 'Gender').should('contain', user.randomGenderIndex);

    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.day + ' ' + user.birth.month +
      ',' + user.birth.year);

    cy.contains('tr', 'Subjects').should('contain', subjects);

    cy.contains('tr', 'Hobbies').should('contain', user.hobby);

    cy.contains('tr', 'Address').should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
