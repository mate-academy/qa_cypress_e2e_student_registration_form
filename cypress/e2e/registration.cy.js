/// <reference types='cypress' />

describe("Student Registration page", () => {
  const firstName = ["John", "Emma", "William", "Sophia", "Michael"][
    Math.floor(Math.random() * 5)
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `user${Math.floor(Math.random() * 10000)}@example.com`;
  const phoneNumber =
    "0" +
    Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
  const subjects = ["Math", "Science", "English", "History", "Art"];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

  before(() => {
    cy.visit("/");
  });

  it("Registration", () => {
    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(randomLastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    const genderList = cy.get(
      "#genterWrapper > .col-md-9 > :nth-child(1), #genterWrapper > .col-md-9 > :nth-child(2), #genterWrapper > .col-md-9 > :nth-child(3)"
    );
    const randomIndex = Math.floor(Math.random() * 3);
    genderList.eq(randomIndex).click();
    cy.get('[placeholder="Mobile Number"]').type(phoneNumber);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get(".react-datepicker__day.react-datepicker__day--020").click();
    cy.get(".subjects-auto-complete__value-container").type(
      `${randomSubject}{enter}`
    );
    const randomHobby = Math.floor(Math.random() * 3) + 1;
    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${randomHobby})`).click();
    cy.get('[placeholder="Current Address"]').type("Nishinska 29 a");
    cy.get("#state > .css-yk16xz-control")
      .click()
      .get("#react-select-3-option-2")
      .click();

    cy.get("#city > .css-yk16xz-control")
      .click()
      .get("#react-select-4-option-0")
      .click();

    cy.focused().type("{enter}");

    cy.get("#closeLargeModal").click();
  });

  //it("Registration", () => {
  //
  // });
});
