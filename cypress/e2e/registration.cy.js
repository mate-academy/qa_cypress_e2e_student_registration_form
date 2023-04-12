/// <reference types='cypress' />
import { faker } from "@faker-js/faker";
import Form from "./PageObject/formPage";
import setGender from "../support/setGender";
import setHobby from "../support/setHobby";
import setStateAndCity from "../support/setStateAndCity";
import setDateOfBirth from "../support/setDateOfBirth";
import setSubject from "../support/setSubjects";

describe("Student Registration page", () => {
  const { day, month, shortMonth, year } = setDateOfBirth();
  const gender = setGender();
  const hobby = setHobby();
  const { state, city } = setStateAndCity();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobilePhone = faker.phone.number("##########");
  const dob = `${day} ${shortMonth} ${year}`;
  const randomSubject = setSubject();
  const address = faker.address.streetAddress(true);
  const form = new Form();
  before(() => {
    cy.visit("/");
    form.typeFName(firstName);
    form.typeLName(lastName);
    form.typeEmail(email);
    form.selectGender(gender);
    form.typePhone(mobilePhone);
    form.typeDOB(dob);
    // form.selectDOB();
    // Type 'Civics'
    form.typeSubjests("v{enter}");
    // Type 'Maths'
    form.typeSubjests(`${randomSubject}{enter}`);
    // Type 'Computer Science'
    form.typeSubjests("Comp{enter}");
    form.selectHobbies(hobby);
    form.typeAddress(address);
    form.typeState(state);
    form.typeCity(city);
    form.submitForm();
  });

  it("Assert data in modal window", () => {
    cy.getTableData("Student Name", `${firstName} ${lastName}`);
    cy.getTableData("Student Email", email);
    cy.getTableData("Gender", gender);
    cy.getTableData("Mobile", mobilePhone);
    cy.getTableData("Date of Birth", `${day} ${month},${year}`);
    cy.getTableData("Subjects", `Civics, ${randomSubject}, Computer Science`);
    cy.getTableData("Hobbies", hobby);
    cy.getTableData("Address", address);
    cy.getTableData("State and City", `${state} ${city}`);
  });
});
