/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe("Student Registration page", () => {
  const {
    sex,
    firstname,
    lastname,
    email,
    phonenumber,
    birth,
    subject,
    hobbies,
    adress,
  } = generateUser();

  before(() => {
    cy.visit("/automation-practice-form");
  });

  it("should fill all fields and assert data", () => {
    cy.findById("firstName")
      .type(firstname);

    cy.findById("lastName")
      .type(lastname);

    cy.findById("userEmail")
      .type(email);

    cy.contains(sex)
      .click({ force: true });

    cy.findById("userNumber")
      .type(phonenumber);

    cy.findById("dateOfBirthInput")
      .click();

    cy.pickDate("year-select")
      .select(birth.year);

    cy.pickDate("month-select")
      .select(birth.month);

    cy.pickDate("day")
      .contains(birth.day)
      .click();

    cy.get(".subjects-auto-complete__value-container")
      .type(subject + "{enter}");

    cy.contains(".custom-control-label", hobbies)
      .click();

    cy.findById("currentAddress")
      .type(adress);

    cy.contains("Select State")
      .type("{downArrow}{enter}");
    const myState = "";
    cy.get(".css-1uccc91-singleValue")
      .invoke("text")
      .as("myState");

    cy.contains("Select City")
      .type("{downArrow}{enter}");
    const myCity = "";
    cy.get(".css-1uccc91-singleValue")
      .invoke("text")
      .as("myCity");

    cy.findById("submit")
      .click();

    cy.contains("tr", "Student Name")
      .should("contain", firstname)
      .and("contain", lastname);

    cy.checkTable("Student Email", email);
    cy.checkTable("Gender", sex);
    cy.checkTable("Mobile", phonenumber);
    cy.checkTable("Date of Birth", `${birth.day} ${birth.month},${birth.year}`);
    cy.checkTable("Subjects", subject);
    cy.checkTable("Hobbies", hobbies);
    cy.checkTable("Address", adress);
    cy.checkTable("State and City", `${myState} ${myCity}`);
  });
});
