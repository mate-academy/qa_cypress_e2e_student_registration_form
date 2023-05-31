/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1280, 960);
  });

  it('Registration with filling by valid data', () => {
    const user = {
      firstName: "Dmytro",
      lastName: "Khozieiev",
      email: "hahahahaha22@com.ua",
      number: "0963351244",
      date: "22 January,1995",
      subject: "English",
      address: "Ukraine",
      state: "NCR",
      city: "Delhi",
    };

    cy.get('[placeholder="First Name"]').type(user.firstName);
    cy.get('[placeholder="Last Name"]').type(user.lastName);
    cy.get('[placeholder="name@example.com"]').type(user.email);
    cy.get('#gender-radio-1').click({ force: true });
    cy.get('[placeholder="Mobile Number"]').type(user.number);
    cy.get('#dateOfBirthInput').type("{selectAll}").type(`${user.date}{enter}`);
    cy.get('#subjectsInput').type(`${user.subject}{enter}`);
    cy.get('#hobbies-checkbox-1').click({ force: true });
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').click().type(`${user.state}{enter}`);
    cy.get('#city').click().type(`${user.city}{enter}`);
    cy.get('#userForm').submit();

    cy.contains("tr", "Student").should("contain", `${user.firstName} ${user.lastName}`);
    cy.contains("tr", "Student Email").should("contain", user.email);
    cy.contains("tr", "Gender").should("contain", "Male");
    cy.contains("tr", "Mobile").should("contain", user.number);
    cy.contains("tr", "Date of Birth").should("contain", user.date);
    cy.contains("tr", "Subjects").should("contain", user.subject);
    cy.contains("tr", "Hobbies").should("contain", "Sports");
    cy.contains("tr", "Address").should("contain", user.address);
    cy.contains("tr", "State and City").should("contain", `${user.state} ${user.city}`);
  });
});
