/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("should fill the form, submit, and assert inputed data in modal window", () => {
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type("johndoe@mail.com");

    cy.get("#gender-radio-1").check({ force: true });

    cy.get("#userNumber").type("1234567890");

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select("June");
    cy.get(".react-datepicker__year-select").select("1990");
    cy.get(".react-datepicker__day--009").click();

    cy.get("#hobbies-checkbox-3").check({ force: true }); 

    cy.get("#currentAddress").type("123 Street, City");

    cy.get("#submit").click({ force: true }); 

    cy.get(".modal-content").should("be.visible").within(() => {
      cy.contains("John Doe");
      cy.contains("johndoe@mail.com");
      cy.contains("Male");
      cy.contains("1234567890");
      cy.contains("9 June,1990");
      cy.contains("Music");
      cy.contains("123 Street, City");
    });
  });
});
