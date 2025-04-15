/// <reference types="cypress" />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
      cy.visit('/');
    });
  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);

    // eslint-disable-next-line cypress/no-force
    cy.get(`#gender-radio-${user.randomGenderIndex}`).check({ force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);

    cy.get('.react-datepicker__day').contains(new RegExp(`^0?${user.birth.day}$`)).click();

    // eslint-disable-next-line max-len
    cy.get('.subjects-auto-complete__value-container').type('en{enter}' + 'ph{enter}');
    cy.get('.custom-control-label').contains(user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');
    cy.get('#submit').click();

    // Assert inputted data in the modal window
    // eslint-disable-next-line max-len
    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);
    cy.contains('tr', 'Subjects').should('contain', 'English, Physics');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', `${user.state} ${user.city}`);
  });
});


