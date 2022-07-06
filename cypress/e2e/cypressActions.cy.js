/// <reference types='cypress' />

describe('User should be able', () => {
  const user = {
    firstName: "Maksym",
    lastName: "Hukovskyi",
    email: "gukovskijmaksim64@gmail.com",
    mobile: '0686810264',
    subject: 'Physics',
    address: 'UA'
  };
  before(() => {
    
  });

  it('register with valid data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
      cy.findByPlaceholder('name@example.com')
      .type(user.email);
      cy.get('#dateOfBirthInput')
        .type('{selectall}')
        .type('09 July 1997{enter}');
      cy.get('#gender-radio-1')
        .click({force: true});
      cy.findByPlaceholder('Mobile Number')
        .type(user.mobile);
      cy.get('[id="subjectsContainer"]')
        .type(user.subject+'{enter}');
      cy.get('#hobbies-checkbox-1')
      .click({force: true});
      cy.findByPlaceholder('Current Address')
      .type(user.address);
      cy.contains('#state', 'Select State')
        .type('NCR'+'{enter}')
      cy.contains('#city', 'Select City')
        .type('Delhi'+'{enter}')
      // cy.get('#submit')
      //   .click()
      cy.findByPlaceholder('First Name')
      .type(user.firstName+'{enter}');        
  });
  it('see data that he input', () => {

    cy.checkValues('Student Name', `${user.firstName} ${user.lastName}`);
    cy.checkValues('Student Email', `${user.email}`);
    cy.checkValues("Gender", "Male" );
    cy.checkValues("Mobile", "0686810264");
    cy.checkValues("Date of Birth", "09 July,1997");
    cy.checkValues("Subjects", user.subject);
    cy.checkValues("Hobbies", "Sports");
    cy.checkValues("Address", user.address);
    cy.checkValues("State and City", "NCR Delhi");




  });
});
