/// <reference types='cypress' />

const { name } = require("faker/lib/locales/az");

const randomEmail = `user_${Math.floor(Math.random() * 1000000)}@gmail.com`;
const firstName = "Mykhailo";
const lastName = "Rozmaznin";
const phoneNumber = "0984641309"; //with + don`t aceept, i don`t know why
const birth_year = "2004";
const birth_month = "April";
const address = "Kyiv, Ushinskogo 29";
const gender = "Male";
const hobbies = "Music";
const subject = "Maths";
describe("Student Registration page", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });
  it("should fill in form fields and assert inputted data", () => {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#userEmail").type(randomEmail);

    cy.get(".custom-control-label").contains(gender).click();

    cy.get("#userNumber").type(phoneNumber);
    cy.get(".custom-control-label").contains(hobbies).click();
    cy.get("#currentAddress").type(address);

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select(birth_year);
    cy.get(".react-datepicker__month-select").select(birth_month);
    cy.get(".react-datepicker__day--021").click();

    cy.get(
      ".subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3"
    ).type(subject);
    cy.get("#react-select-2-option-0").click();

    cy.get(
      ".css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer"
    ).click({ force: true });
    cy.get("#react-select-3-option-0").click({ force: true });
    cy.get(
      "#city>.css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer"
    ).click({ force: true });
    cy.get("#react-select-4-option-0").click({ force: true });

    cy.get('button[type="submit"]').click({ force: true });

    cy.get(".modal").should("be.visible");
    cy.get(".modal").should("contain", firstName, lastName);
    cy.get(".modal").should("contain", randomEmail);
    cy.get(".modal").should("contain", phoneNumber);
    cy.get(".modal").should("contain", address);
    cy.get(".modal").should("contain", birth_month, birth_year);
    cy.get(".modal").should("contain", subject);
    cy.get(".modal").should("contain", hobbies);
    cy.get(".modal").should("contain", gender);
  });
});
