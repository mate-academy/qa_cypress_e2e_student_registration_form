/// <reference types='cypress' />

const fillInput = (id, typedValue) => {
  cy.get(`#${id}`).should("be.visible");
  cy.get(`#${id}`).type(typedValue);
  cy.get(`#${id}`).should("have.value", typedValue);
};

const clickLabelFor = (forAttr) => {
  cy.get(`label[for="${forAttr}"]`).should("be.visible").click();
  cy.get(`#${forAttr}`).should("be.checked");
};

describe("Student Registration page", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("should allow to fill first name input", () => {
    fillInput("firstName", "mykhailo");
  });

  it("should allow to fill last name input", () => {
    fillInput("lastName", "oilj");
  });

  it("should allow to fill email input", () => {
    fillInput("userEmail", "mykhailo@gmail.com");
  });

  it("should allow to fill current address textarea", () => {
    fillInput("currentAddress", "Berliner Strasse");
  });

  it("should allow to fill subjects input", () => {
    cy.get("#subjectsInput").type("Maths{enter}");
    cy.get("#subjectsInput").type("Physics{enter}");
  });

  it("should allow to fill phone number input", () => {
    fillInput("userNumber", "1234567890");
  });

  it("should allow to choose gender input", () => {
    clickLabelFor("gender-radio-1");
  });

  describe("Gender radios", () => {
    it("should allow to choose male variant", () => {
      clickLabelFor("gender-radio-1");
    });

    it("should allow to choose female variant", () => {
      clickLabelFor("gender-radio-2");
    });

    it("should allow to choose other variant", () => {
      clickLabelFor("gender-radio-3");
    });
  });

  describe("Hobbies checkboxes", () => {
    it("should allow to choose sports checkbox", () => {
      clickLabelFor("hobbies-checkbox-1");
    });

    it("should allow to choose reading checkbox", () => {
      clickLabelFor("hobbies-checkbox-2");
    });

    it("should allow to choose music checkbox", () => {
      clickLabelFor("hobbies-checkbox-3");
    });

    it("should allow to choose some checkboxes", () => {
      clickLabelFor("hobbies-checkbox-1");
      clickLabelFor("hobbies-checkbox-2");
    });
  });

  it("should allow to choose state and city", () => {
    cy.get("#state").click();
    cy.get(".css-26l3qy-menu").contains("NCR").click();

    cy.get("#city").click();
    cy.get(".css-26l3qy-menu").contains("Delhi").click();
  });

  it("should allow to submit form with correctly filled data", () => {
    cy.get("#submit").scrollIntoView();
    cy.get("#submit").should("be.visible").click();
    cy.get(".modal-content", { timeout: 10000 }).should("be.visible");
  });
});
