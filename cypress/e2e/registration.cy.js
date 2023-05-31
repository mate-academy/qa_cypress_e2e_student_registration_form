 /// <reference types='cypress' />
describe('Student Registration page', () => {
  let user;
  beforeEach(() => {
     cy.visit('https://demoqa.com/automation-practice-form');
     cy.task('generateUser')
       .then(generateUser => {
      user = generateUser;
    });
  });

  it('should register a new student', () => {
     cy.findbyPlaceholder('First Name')
       .type(user.firstName);
     cy.findbyPlaceholder('Last Name')
       .type(user.lastName);
     cy.get('#userEmail')
       .type(user.email);
     cy.contains('.custom-control-label', user.gender)
       .click();
     cy.findbyPlaceholder('Mobile Number')
       .type(user.mobileNumber);
     cy.get('#dateOfBirthInput')
       .click();
     cy.pickDate('year-select')
       .select(`${user.birthDate.year}`);
     cy.pickDate('month-select')
       .select(`${user.birthDate.month}`);
     cy.pickDate('day')
       .contains(user.birthDate.day)
       .click();
     cy.get('.subjects-auto-complete__value-container')
       .type(user.subject + '{enter}');
     cy.contains('.custom-control-label',user.hobby)
       .click()
     cy.findbyPlaceholder('Current Address')
       .type(user.address);
     cy.contains('Select State')
       .type('NCR {enter}');
     cy.contains('Select City')
       .type('Delhi {enter}');
     cy.get('#submit')
       .click({ force: true });
     cy.get('#example-modal-sizes-title-lg')
       .should('contain.text', 'Thanks for submitting the form');
     cy.contains('tr', 'Student Name')
       .should('contain', user.firstName)
       .and('contain', user.lastName);
     cy.contains('tr', 'Student Email')
       .should('contain', user.email);
     cy.contains('tr', 'Gender')
       .should('contain', user.gender);
     cy.contains('tr', 'Mobile')
       .should('contain', user.mobileNumber);
     cy.contains('tr', 'Date of Birth')
       .should('contain', user.birthDate.day)
       .and('contain', user.birthDate.month)
       .and('contain', user.birthDate.year);
     cy.contains('tr', 'Subjects')
       .should('contain', user.subject);
     cy.contains('tr', 'Hobbies')
       .should('contain', user.hobby);
     cy.contains('tr', 'Address')
       .should('contain', user.address);
     cy.contains('tr', 'State and City')
       .should('contain', 'NCR Delhi');
  });
});
