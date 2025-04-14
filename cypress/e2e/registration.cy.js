/// <reference types='cypress' />

import { CITY, HOBBIES, SEX, STATE } from "../support/constant";

describe("Student Registration page", () => {
  const user = {
    firstName: "TestName",
    lastName: "TestSurName",
    userEmail: "email@mail.com",
    userSex: SEX.male,
    userNumber: "0123456789",
    dateOfBirth: "09 Jul 2004",
    subject: "Subjects",
    hobbies: [HOBBIES.sport, HOBBIES.music],
    address: "Ukraine",
    state: STATE.NCR,
    city: CITY.Noida,
  };
  beforeEach(() => {
    cy.visit("");
  });

  it("should have h1 item", () => {
    cy.get("h1").should("contain.text", "Practice Form");
  });

  it("should have h5 item", () => {
    cy.get("h5").should("contain.text", "Student Registration Form");
  });

  it("should fill and submit form", () => {
    cy.fillForm(user);
    cy.get("#submit").click();
    cy.get(".modal-dialog").should(
      "contain.text",
      "Thanks for submitting the form"
    );
  });

  it(
    "should open modal window with inputed data" + "after submitting the form",
    () => {
      cy.fillForm(user).then(() => {
        cy.get("#submit").click();

        cy.checkUser(user);
      });
    }
  );
});
