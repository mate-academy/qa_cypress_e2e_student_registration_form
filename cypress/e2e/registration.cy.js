/// <reference types='cypress' />
let user;

describe('Student Registration page', () => {
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('can register a new user', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.genders).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}12 jan 2003{enter}');
    cy.get('#subjectsInput').type('a{upArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbies).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
      .type('a{upArrow}{enter}');
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .type('a{upArrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.genders);
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '12 January,2003');
    cy.contains('tr', 'Subjects').should('contain', 'Social Studies');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbies);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Rajasthan Jaiselmer');
  });
});
