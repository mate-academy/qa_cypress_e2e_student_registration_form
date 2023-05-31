/// <reference types='cypress' />

describe("Student Registration page", () => {
  let user;

  before(() => {
    cy.visit("/");
    cy.task("generateUser").then((generateUser) => {
      user = generateUser;
    });
  });

  it("should register a new student", () => {
    cy.findByPlaceholder("First Name").type(user.firstName);
    cy.findByPlaceholder("Last Name").type(user.lastName);
    cy.findByPlaceholder("Last Name").type(user.lastName);
    cy.get("#userEmail").type(user.email);
    cy.contains(".custom-control-label", user.gender).click();
    cy.findByPlaceholder("Mobile Number").type(user.mobileNumber);
    cy.get("#dateOfBirthInput").click();
    cy.datePick("year-select").select(`${user.birth.year}`);
    cy.datePick("month-select").select(`${user.birth.month}`);
    cy.datePick("day").contains(user.birth.day).click();
    cy.get('.subjects-auto-complete__value-container').type(user.subject + '{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.contains('Select State').type('{downArrow}{enter}');
    cy.contains('Select City').type('{downArrow}{enter}');
    cy.get('#submit').click();
    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);
    cy.contains('tr', 'Subjects').should('contain', user.subject);
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
  });
});
