/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: "Male",
    mobile: faker.random.number({ min: 1000000000, max: 9999999999, precision: 1 }),
    hobby: "Music",
    address: faker.address.streetAddress(),
    birthDate: {
      day: faker.random.number({ min: 10, max: 28 }),
      month: faker.date.month(),
      year: faker.random.number({ min: 1950, max: 2005 }),
    }
  };

  
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("should fill the form, submit, and assert inputed data in modal window", () => {
    cy.get("#firstName").type(user.firstName);
    cy.get("#lastName").type(user.lastName);
    cy.get("#userEmail").type(user.email);

    cy.get("#gender-radio-1").check({ force: true });

    cy.get("#userNumber").type(user.mobile);

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select(user.birthDate.month);
    cy.get(".react-datepicker__year-select").select(user.birthDate.year.toString());
    cy.contains(".react-datepicker__day:not(.react-datepicker__day--outside-month)", user.birthDate.day.toString()).click();

    cy.get("#hobbies-checkbox-3").check({ force: true });

    cy.get("#currentAddress").type(user.address);

    cy.get("#submit").click({ force: true });

    cy.get(".modal-content")
    .should("contain", "Thanks for submitting the form")
    .and("contain", user.firstName + " " + user.lastName)
    .and("contain", user.email)
    .and("contain", user.gender)
    .and("contain", user.mobile)
    .and("contain", user.hobby)
    .and("contain", user.address)
    .should(($modalContent) => {
      const text = $modalContent.text();
      expect(text).to.include(user.birthDate.day.toString());
    });
  });
});
