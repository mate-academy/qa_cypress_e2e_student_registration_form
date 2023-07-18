/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.url().should('include', 'automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    })
  });

  it('should successfully register user', () => {
    cy.pickPlaceholder("First Name").
      type(user.firstName);

    cy.pickPlaceholder("Last Name").
      type(user.lastName);  

    cy.pickPlaceholder("name@example.com").
      type(user.email);    

    cy.contains('.custom-radio', user.gender).
      click();

    cy.pickPlaceholder("Mobile Number").
      type(user.mobileNumber);  

    cy.get('#dateOfBirthInput').
      click();
      
    cy.pickDate('month-select').
      select(user.birth.month); 

    cy.pickDate('year-select').
      select(user.birth.year);

    cy.pickDate('day').
      contains(user.birth.day).click();  

    cy.get('.subjects-auto-complete__value-container').
      click();

    cy.get('.subjects-auto-complete__value-container').
      type("en{enter}co{enter}");

    cy.contains('.custom-checkbox', user.hobby).
      click();

    cy.pickPlaceholder("Current Address").
      type(user.address);    

    cy.get('#state').
      type('{downArrow}{downArrow}{enter}');

    cy.get('#city').
      type('{downArrow}{enter}');

    cy.get('#submit').
      click();

    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name').should('contain', `${user.firstName} ${user.lastName}`);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);
    cy.contains('tr', 'Subjects').should('contain', 'English, Computer Science');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'Haryana Panipat');
  });
});
