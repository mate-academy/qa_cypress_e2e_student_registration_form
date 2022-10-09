/// <reference types='cypress' />

describe("Student Registration Form", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.viewport(1280, 1280);
  });
  const user = {
    firstName: "Taras",
    lastName: "Shevchenko",
    email: "taras321@gmail.com",
    number: "0991234567",
    date: "01 June,1999",
    subject: "Maths",
    image: "image.jpeg",
    address: "Doroshenka",
    state: "NCR",
    city: "Delhi",
  };

  it("should register new user with valid data", () => {
    cy.get('[id="firstName"]').type(user.firstName);
    cy.get('[id="lastName"]').type(user.lastName);
    cy.get('[id="userEmail"]').type(user.email);
    cy.get('[id="gender-radio-1"]').click({ force: true });
    cy.get('[id="userNumber"]').type(user.number);
    cy.get('[id="dateOfBirthInput"]')
      .type("{selectAll}")
      .type(`${user.date}{enter}`);
    cy.get('[id="subjectsInput"]').type(`${user.subject}{enter}`);
    cy.get('[id="hobbies-checkbox-2"]').click({ force: true });
    cy.fixture(user.image).then((fileContent) => {
      cy.get('[id = "uploadPicture"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: user.image,
        mimeType: "image/jpeg",
      });
    });
    cy.get('[id="currentAddress"]').type(user.address);
    cy.get('[id="state"]').click().type(`${user.state}{enter}`);
    cy.get('[id="city"]').click().type(`${user.city}{enter}`);
    cy.get('[id="userForm"]').submit();
    cy.contains("tr", "Student").should(
      "contain",
      `${user.firstName} ${user.lastName}`
    );
    cy.contains("tr", "Student Email").should("contain", user.email);
    cy.contains("tr", "Gender").should("contain", "Male");
    cy.contains("tr", "Mobile").should("contain", user.number);
    cy.contains("tr", "Date of Birth").should("contain", user.date);
    cy.contains("tr", "Subjects").should("contain", user.subject);
    cy.contains("tr", "Hobbies").should("contain", "Reading");
    cy.contains("tr", "Picture").should("contain", user.image);
    cy.contains("tr", "Address").should("contain", user.address);
    cy.contains("tr", "State and City").should(
      "contain",
      `${user.state} ${user.city}`
    );
  });
});
