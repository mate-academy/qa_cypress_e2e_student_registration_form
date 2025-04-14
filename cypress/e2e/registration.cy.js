/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('Should fill all fields except "picture" and submit the form', () => {
    cy.get('#firstName').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);

    cy.get('#userEmail').type(user.email);
    cy.get(`label[for="gender-radio-${user.genderId}"]`).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(user.birth.year);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('#subjectsContainer').type('ac{enter}');
    cy.get(`label[for="hobbies-checkbox-${user.hobby}"]`).click();

    cy.get('#currentAddress').type(user.adress);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);

    cy.contains('tr', 'Student Email').should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.genderId === 1 ? 'Male' : 'Female');
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);

    cy.contains('tr', 'Subjects')
      .should('contain', 'Accounting');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby === 1 ? 'Sports' : 'Reading');

    cy.contains('tr', 'Address').should('contain', user.adress);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
