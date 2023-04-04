/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("should fill in form and assert inputted data in modal window", () => {
     // Fill in the form fields
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type("johndoe@example.com");

    cy.get("label[for='gender-radio-1']").click();
    cy.get("#userNumber").type("1234567890");

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select("January");
    cy.get(".react-datepicker__year-select").select("2000");
    cy.get(':nth-child(1) > .react-datepicker__day--001').click();

    cy.get("#subjectsInput").type("Maths").type("{enter}");
    cy.get("label[for='hobbies-checkbox-1']").click();
    cy.get("#currentAddress").type("123 Main St");
    cy.get("#state").click();
    cy.get("#react-select-3-option-0").click();
    cy.get("#city").click();
    cy.get("#react-select-4-option-0").click();
 

    //  Submit
    cy.get("#firstName").type("{enter}");

    // Assert the inputted data in modal window
      cy.get(".modal-content")
      .should("contain", "John")
      .should("contain", "Doe")
      .should("contain", "johndoe@example.com")
      .should("contain", "Male")
      .should("contain", "1234567890")
      .should("contain", "01 January,2000")
      .should("contain", "Maths")
      .should("contain", "Sports")
      .should("contain", "123 Main St")
      .should("contain", "NCR Delhi");
  });
});
