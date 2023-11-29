/// <reference types='cypress' />

describe("Student Registration page", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Should fill out all fields with random data and submit", () => {
    cy.get("#firstName").type("Geralt");
    cy.get("#lastName").type("OfRivia");
    cy.get("#userEmail").type("geralt_of_rivia@gmail.com");
    cy.get('[for="gender-radio-1"]').click();
    cy.get("#userNumber").type("0123123123");
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select("1980");
    cy.get(".react-datepicker__month-select").select("October");
    cy.get(".react-datepicker__day--010").click();
    cy.get(".subjects-auto-complete__value-container").type("biology{enter}");
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get("#currentAddress").type("221b Baker Street");
    cy.get("#state").type("{downarrow}{enter}");
    cy.get("#city").type("{downarrow}{enter}");

    cy.get("#submit").click();

    cy.get(".modal-body").should("contain", "Geralt");
    cy.get(".modal-body").should("contain", "OfRivia");
    cy.get(".modal-body").should("contain", "geralt_of_rivia@gmail.com");
    cy.get(".modal-body").should("contain", "Male");
    cy.get(".modal-body").should("contain", "0123123123");
    cy.get(".modal-body").should("contain", "10 October,1980");
    cy.get(".modal-body").should("contain", "221b Baker Street");
  });
});
