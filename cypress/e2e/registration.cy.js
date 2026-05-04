/// <reference types='cypress' />

describe("Student Registration page", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("should fill basic student data", () => {
    cy.get("#firstName").type("Aakash");
    cy.get("#lastName").type("Sadhu");
    cy.get("#userEmail").type("aakashsadhu@hotmail.com");

    cy.contains("label", "Male").click();
    cy.get("#userNumber").type("1234567890");

    cy.get(".react-datepicker__input-container input").click();
    cy.get(".react-datepicker").should("be.visible");

    cy.get(".react-datepicker__year-select").select("2026");
    cy.get(".react-datepicker__month-select").select("May");

    cy.get(".react-datepicker__day--004")
      .not(".react-datepicker__day--outside-month")
      .click();

    cy.get("#subjectsInput").type("Computer Science{enter}");

    cy.contains("label", "Sports").click();

    cy.get("#currentAddress").type("The Pier, WSM, Bristol");

    cy.get("#state").click();
    cy.contains("div", "NCR").click();

    cy.get("#city").click();
    cy.contains("div", "Delhi").click();

    cy.get("#submit").click();

    cy.contains("Thanks for submitting the form").should("be.visible");

    cy.get(".modal-body").within(() => {
      cy.contains("td", "Student Name")
        .next()
        .should("have.text", "Aakash Sadhu");
      cy.contains("td", "Student Email")
        .next()
        .should("have.text", "aakashsadhu@hotmail.com");
      cy.contains("td", "Gender").next().should("have.text", "Male");
      cy.contains("td", "Mobile").next().should("have.text", "1234567890");
      cy.contains("td", "Date of Birth")
        .next()
        .should("have.text", "04 May,2026");
      cy.contains("td", "Subjects")
        .next()
        .should("have.text", "Computer Science");
      cy.contains("td", "Hobbies").next().should("have.text", "Sports");
      cy.contains("td", "State and City")
        .next()
        .should("have.text", "NCR Delhi");
    });
  });
});
