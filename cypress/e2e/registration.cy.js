/// <reference types='cypress' />
describe("Student Registration page", () => {
  let user;
  before(() => {
    cy.visit("/");
    cy.task("generateUser").then((generatedUser) => {
      user = generatedUser;
    });
  });

  it("should provide the ability to register", () => {
    cy.findById("firstName").type(user.firstName);
    cy.findById("lastName").type(user.lastName);
    cy.findById("userEmail").type(user.email);
    cy.get(".custom-control-label").contains(user.gender).click();
    cy.findById("userNumber").type(user.phoneNumber);

    cy.findById("dateOfBirthInput").click();
    cy.selectMonth(user.birth.month);
    cy.selectYear(user.birth.year);
    cy.selectDay(user.birth.day);

    cy.findById("subjectsContainer").type(`E{enter}`);
    cy.get(".custom-control-label").contains(user.hobbies).click();
    cy.findById("currentAddress").type(user.adress);
    cy.findById("state").type("{downarrow}{enter}");
    cy.findById("city").type("{downarrow}{enter}");
    cy.findById("submit").click();

    cy.findByTag("Student Name")
      .should("contain", user.firstName)
      .and("contain", user.lastName);
    cy.findByTag("Student Email").should("contain", user.email);
    cy.findByTag("Gender").should("contain", user.gender);
    cy.findByTag("Mobile").should("contain", user.phoneNumber);
    cy.findByTag("Date of Birth").should("contain", user.birthDate);
    cy.findByTag("Subjects").should("contain", "English");
    cy.findByTag("Hobbies").should("contain", user.hobbies);
    cy.findByTag("Address").should("contain", user.adress);
    cy.findByTag("Student Name").should("contain", user.firstName);
    cy.findByTag("State and City")
      .should("contain", "Uttar Pradesh")
      .and("contain", "Lucknow");
  });
});
