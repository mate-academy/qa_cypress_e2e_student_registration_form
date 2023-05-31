/// <reference types='cypress' />

describe('Students Registration page', () => {
  let user;
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      })
  });

  it('should fill in the form and assert inputted data', () => {
    // Fill in the  first name field
    cy.get('#firstName').type(user.firstName);

     // Fill in the last name field
    cy.get('#lastName').type(user.lastName);

    // Fill in the email field
    cy.get('#userEmail').type(user.email);

    // Select gender
    cy.get(`[value = ${user.gender}]`)
    .click({ force: true });

    cy.contains('.custom-control-label', user.gender)
    .click();

    // Fill in the mobile number field
    cy.get('#userNumber').type(user.mobileNumber);

    // Fill in the date of birth field
    cy.get('#dateOfBirthInput')
    .click();

    cy.pickDate('year-select')
    .select(`${user.birth.year}`);

    cy.pickDate('month-select')
    .select(`${user.birth.month}`);

    cy.pickDate('day')
    .contains(user.birth.day)
    .click();

    // Select subjects
    cy.get('#subjectsInput').type(user.subject).type('{enter}');

    // Select hobbies
    cy.contains('.custom-control-label', user.hobby)
    .click()

    // Fill in the current address field
    cy.get('#currentAddress').type(user.address);

    // Select state and city
    cy.contains('Select State').type('{downArrow}{enter}');
    cy.contains('Select City').type('{downArrow}{enter}');
  

    // Submit the form
    cy.get('#submit').click();

    // Assert inputted data in the modal window
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
    .should('contain', user.birth.day)
    .and('contain', user.birth.year);

    cy.contains('tr', 'Subjects')
    .should('contain', user.subject);

    cy.contains('tr', 'Hobbies')
    .should('contain', user.hobby);

    cy.contains('tr', 'Address')
    .should('contain', user.address);
    
    cy.contains('tr', 'State and City')
    .should('contain.text', 'Uttar Pradesh Lucknow');
    
  });
});
