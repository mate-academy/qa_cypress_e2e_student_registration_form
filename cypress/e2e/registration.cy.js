/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(1280, 1280);
  });

  const user = {
    firstName: "Sergii",
    lastName: "Jonhsonyuk",
    email: "test_sergii2022@com.ua",
    number: "0671234567",
    date: "01 January,2001",
    subject: "Maths", 
    address: "Pitampur",
    state: "NCR",
    city: "Delhi",
  };

  it('Registration with filling by valid data".', () => {
    
    cy.get('[placeholder="First Name"]').type(user.firstName);
    cy.get('[placeholder="Last Name"]').type(user.lastName);
    cy.get('[placeholder="name@example.com"]').type(user.email);
    cy.get('[id="gender-radio-1"]').click({force: true});
    cy.get('[placeholder="Mobile Number"]').type(user.number);
    cy.get('[id="dateOfBirthInput"]')
    .type("{selectAll}")
    .type(`${user.date}{enter}`);
    cy.get('[id="subjectsInput"]').type(`${user.subject}{enter}`);
    cy.get('[id="hobbies-checkbox-1"]').click({force:true});
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
    cy.contains("tr", "Hobbies").should("contain", "Sports");
    cy.contains("tr", "Address").should("contain", user.address);
    cy.contains("tr", "State and City").should(
      "contain",
      `${user.state} ${user.city}`);
  });
});
