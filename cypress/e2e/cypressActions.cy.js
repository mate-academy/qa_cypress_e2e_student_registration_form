/// <reference types='cypress' />

describe('Basic :)', () => {
  const user = {
    firstName: "Den",
    lastName: "Dread",
    email: "qqbyden@gmail.com",
    mobile: '0913221255',
    subject: 'Maths',
    address: 'qqby'
  };
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('register with valid data', () => {
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.findByPlaceholder('name@example.com')
      .type(user.email);
    cy.get('#dateOfBirthInput')
      .type('{selectall}')
      .type('01 July 1947{enter}');
    cy.get('#gender-radio-1')
      .click({force: true});
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobile);
    cy.get('[id="subjectsContainer"]')
      .type(user.subject+'{enter}');
    cy.get('#hobbies-checkbox-2')
      .click({force: true});
    cy.findByPlaceholder('Current Address')
      .type(user.address);
    cy.contains('#state', 'Select State')
      .type('Haryana'+'{enter}')
    cy.contains('#city', 'Select City')
      .type('Karnal'+'{enter}')
    cy.findByPlaceholder('First Name')
      .type(user.firstName+'{enter}');

    cy.checkValues('Student Name', `${user.firstName} ${user.lastName}`);
    cy.checkValues('Student Email', `${user.email}`);
    cy.checkValues("Gender", "Male" );
    cy.checkValues("Mobile", "0913221255");
    cy.checkValues("Date of Birth", "01 July,1947");
    cy.checkValues("Subjects", user.subject);
    cy.checkValues("Hobbies", "Reading");
    cy.checkValues("Address", user.address);
    cy.checkValues("State and City", "Haryana Karnal");
    });
});
