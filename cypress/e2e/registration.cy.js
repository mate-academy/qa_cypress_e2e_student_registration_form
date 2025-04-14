/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register a student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);

    cy.get(`label[for="gender-radio-${user.genderId}"]`).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').contains(user.birth.year);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container').type('ch{enter}');
    cy.contains('.custom-control-label', user.hobby).click();

    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);

    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Gender')
      .should('contain', user.genderId === 1 ? 'Male' : 'Female');
    cy.contains('tr', 'Date of Birth')
      .should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);

    cy.contains('tr', 'Subjects')
      .should('contain', 'Chemistry');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby === 1 ? 'Sports' : 'Reading');

    cy.contains('tr', 'Address').should('contain', user.adress);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
