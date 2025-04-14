/// <reference types='cypress' />

import {
  firstName,
  lastName,
  email,
  birthDay,
  birthMonth,
  birthYear,
  address,
  genderRandom,
  phoneNumber,
  hobbyRandom,
  hobbyRandom1,
  subject,
  hobbies,
  hobby,
  randomiseCity,
  stateRandom,
  cityRandom,
  state,
} from "../support/dataGeneration.js";

const { faker } = require("@faker-js/faker");
const randomCity = randomiseCity("${stateRandom}");

describe("Student Registration page", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it('should fill in all the fields but "picture"', () => {
    cy.get('input[id="firstName"]').type(firstName);

    cy.get('input[id="lastName"]').type(lastName);

    cy.get('input[id="userEmail"]').type(email);

    cy.get(".col-md-9")
      .find(`input[type="radio"][value="${genderRandom}"]`)
      .check({ force: true });

    cy.get('input[id="userNumber"]').type(phoneNumber);

    cy.get("#dateOfBirthInput").click();

    cy.get(".react-datepicker__month-select").select(`${birthMonth}`);

    cy.get(".react-datepicker__year-select").select(`${birthYear}`);

    cy.get(".react-datepicker__day").contains(`${birthDay}`).click();

    cy.get(".subjects-auto-complete__value-container").type(`${subject}`);
    cy.realPress("Tab");

    cy.get(".col-md-9")
      .find(`input[id="hobbies-checkbox-${hobbyRandom1}"]`)
      .check({ force: true });

    cy.get('textarea[id="currentAddress"]').type(address, { force: true });

    cy.get("#stateCity-wrapper > :nth-child(2)").click();

    cy.get(`#react-select-3-option-${stateRandom}`).click();

    cy.get("#stateCity-wrapper > :nth-child(3)").click();

    cy.get(`#react-select-4-option-${cityRandom}`).click();

    cy.wait(300);

    cy.get('button[id="submit"]').click();

    cy.get("table.table-bordered tr:nth-child(1) td:nth-child(2)").should(
      "contain",
      `${firstName} ${lastName}`
    );

    cy.get("table.table-bordered tr:nth-child(2) td:nth-child(2)").should(
      "contain",
      `${email}`
    );

    cy.get("table.table-bordered tr:nth-child(3) td:nth-child(2)").should(
      "contain",
      genderRandom
    );

    cy.get("table.table-bordered tr:nth-child(4) td:nth-child(2)").should(
      "contain",
      phoneNumber
    );

    cy.get("table.table-bordered tr:nth-child(5) td:nth-child(2)").should(
      "contain",
      `${birthDay} ${birthMonth},${birthYear}`
    );

    cy.get("table.table-bordered tr:nth-child(6) td:nth-child(2)").should(
      "contain",
      `${subject}`
    );

    cy.get("table.table-bordered tr:nth-child(7) td:nth-child(2)").should(
      "contain",
      `${hobby}`
    );

    cy.get("table.table-bordered tr:nth-child(9) td:nth-child(2)").should(
      "contain",
      `${address}`
    );

    cy.get("table.table-bordered tr:nth-child(10) td:nth-child(2)").should(
      "contain",
      `${state}`
    );
  });
});
