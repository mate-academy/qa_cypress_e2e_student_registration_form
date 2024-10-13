/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const random = Math.floor(Math.random() * (190000 - 1 + 1)) + 1;
  const firstName = 'Testfirstname' + random;
  const lastName = 'Testlastname' + random;
  const email = `testemail${random}@MediaList.com`;
  const mobileNumber = Math.floor(1000000000 + Math.random() *
   9000000000).toString();
  const gender = Math.random() < 0.5 ? 'Male' : 'Female';
  const currentAddress = `Address ${Math.floor(Math.random() * 100)} Street`;

  it('should register a new student', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get(`label[for="gender-radio-${gender === 'Male' ? 1 : 2}"]`).click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get('#dateOfBirthInput').type('{enter}');
    cy.get('#subjectsInput').type('Math{enter}');
    cy.get('#subjectsInput').type('Science{enter}');
    cy.get(`label[for="hobbies-checkbox-${gender === 'Male' ? 1 : 2}"]`).click();
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#state').click();
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').click();
    cy.get('#city').type('{downarrow}{enter}');
    cy.get('#submit').click();

    cy.contains('td', 'Student Name').next('td').should('contain', `${firstName} ${lastName}`);
    cy.contains('td', 'Student Email').next('td').should('contain', email);
    cy.contains('td', 'Gender').next('td').should('contain', gender);
    cy.contains('td', 'Mobile').next('td').should('contain', mobileNumber);
    cy.contains('td', 'Date of Birth').next('td')
      .should('contain', '13 October,2024');
    cy.contains('td', 'Subjects').next('td')
      .should('contain', 'Maths, Computer Science');
    cy.contains('td', 'Address').next('td')
      .should('contain', currentAddress);
    cy.contains('td', 'State and City').next('td')
      .should('contain', 'NCR Delhi');
  });
});
