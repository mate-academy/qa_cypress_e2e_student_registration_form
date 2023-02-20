/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should register a new student', () => {
    cy.registerNewUser().then(user => {
      cy.findById('firstName').type(user.firstName);
      cy.findById('lastName').type(user.lastName);
      cy.findById('userEmail').type(user.email);
      cy.contains('.custom-control-label', user.gender).click();
      cy.findById('userNumber').type(user.phoneNumber);
      cy.findById('dateOfBirthInput').type(`{selectAll}${user.dateOfBirth}{enter}`);
      cy.findById('subjectsInput').type('eng{enter}');
      cy.contains('.custom-control-label', user.hobby).click();
      cy.findById('currentAddress').type(user.address);
      cy.findById('state').type('{downArrow}{enter}');
      cy.findById('city').type('{downArrow}{enter}');
      cy.findById('submit').click();

      cy.get('.modal-title')
        .should('contain.text', 'Thanks for submitting the form');

      cy.contains('tr', 'Student Name')
        .should('contain.text', `${user.firstName} ${user.lastName}`);

      cy.contains('tr', 'Student Email')
        .should('contain.text', `${user.email}`);

      cy.contains('tr', 'Gender')
        .should('contain.text', `${user.gender}`);

      cy.contains('tr', 'Mobile')
        .should('contain.text', `${user.phoneNumber}`);

      cy.contains('tr', 'Date of Birth')
        .should('contain.text', `${user.dayOfBirth} ${user.monthOfBirth},${user.yearOfBirth}`);

      cy.contains('tr', 'Subjects')
        .should('contain.text', `English`);

      cy.contains('tr', 'Hobbies')
        .should('contain.text', `${user.hobby}`);

      cy.contains('tr', 'Address')
        .should('contain.text', `${user.address}`);

      cy.contains('tr', 'State and City')
        .should('contain.text', `Uttar Pradesh Lucknow`);
    });
  });
});
