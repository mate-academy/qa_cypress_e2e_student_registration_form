/// <reference types='cypress' />
const { generateUser } = require("../support/generateUser");

describe("Student Registration page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should fill out all fields with random data and submit", () => {
    const randomData = generateUser();

    cy.get("#firstName").type(randomData.firstName);
    cy.get("#lastName").type(randomData.lastName);
    cy.get("#userEmail").type(randomData.email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get("#userNumber").type(randomData.phone);
    cy.get(
      '.react-datepicker__input-container [id="dateOfBirthInput"]'
    ).click();
    cy.get(".react-datepicker__month-select").select("December");
    cy.get(".react-datepicker__year-select").select("1998");
    cy.get(".react-datepicker__day--024").click();
    cy.get('[id="subjectsContainer"]').type("History" + `{Enter}`);
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get("#currentAddress").type(randomData.address);
    cy.get('[id="state"]').click();
    cy.get("#react-select-3-option-0").click();
    cy.get('[id="city"]').click();
    cy.get("#react-select-4-option-0").click();
    cy.get('[id="submit"]').click();
    cy.contains(".modal-content", "Thanks for submitting the form");

    cy.get(".modal-body")
      .should("contain", randomData.firstName);
    cy.get(".modal-body")
      .should("contain", randomData.lastName);
    cy.get(".modal-body")
      .should("contain", randomData.email);
    cy.contains("tr", "Gender")
      .should("contain", "Male");
    cy.get(".modal-body")
      .should("contain", randomData.phone);
    cy.contains("tr", "Date of Birth")
      .should("contain", "24 December,1998");
    cy.contains("tr", "Subjects")
      .should("contain", "History");
    cy.contains("tr", "Hobbies")
      .should("contain", "Sports");
    cy.get(".modal-body")
      .should("contain", randomData.address);
    cy.contains("tr", "State and City")
      .should("contain", "NCR Delhi");
  });

  it("Should successfully submit the registration form", () => {
    const randomData = generateUser();

    cy.get("#firstName").type(randomData.firstName);
    cy.get("#lastName").type(randomData.lastName);
    cy.get("#userEmail").type(randomData.email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get("#userNumber").type(randomData.phone);
    cy.get(
      '.react-datepicker__input-container [id="dateOfBirthInput"]'
    ).click();
    cy.get(".react-datepicker__month-select").select("December");
    cy.get(".react-datepicker__year-select").select("1998");
    cy.get(".react-datepicker__day--024").click();
    cy.get('[id="subjectsContainer"]').type("History" + `{Enter}`);
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get("#currentAddress").type(randomData.address);
    cy.get('[id="state"]').click();
    cy.get("#react-select-3-option-0").click();
    cy.get('[id="city"]').click();
    cy.get("#react-select-4-option-0").click();
    cy.get('[id="submit"]').click();

    cy.contains(".modal-content", "Thanks for submitting the form")
      .should("be.visible");
    cy.get(".modal-body")
      .should("contain", randomData.firstName);
    cy.get(".modal-body")
      .should("contain", randomData.lastName);
    cy.get(".modal-body")
      .should("contain", randomData.email);
    cy.contains("tr", "Gender")
      .should("contain", "Male");
    cy.get(".modal-body")
      .should("contain", randomData.phone);
    cy.contains("tr", "Date of Birth")
      .should("contain", "24 December,1998");
    cy.contains("tr", "Subjects")
      .should("contain", "History");
    cy.contains("tr", "Hobbies")
      .should("contain", "Sports");
    cy.get(".modal-body")
      .should("contain", randomData.address);
    cy.contains("tr", "State and City")
      .should("contain", "NCR Delhi");
  });
});
