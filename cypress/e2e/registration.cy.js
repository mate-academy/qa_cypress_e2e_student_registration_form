describe('Student Registration page', () => {
  let user;
  before(() => {

    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  
  it('should allow to register a user', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-radio', user.gender).click();
    cy.get('#userNumber').type(user.number);
    cy.get('#dateOfBirthInput').type('{selectAll}8 Jun 1998{enter}');
    cy.get('.subjects-auto-complete__value-container').type(user.subject + "{enter}");
    cy.contains('.custom-checkbox', user.hobby).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');
    cy.contains('#submit', 'Submit').click();

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.number);
    cy.contains('tr', 'Date of Birth').should('contain', '8 June,1998');
    cy.contains('tr', 'Subjects').should('contain', user.subject);
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh Lucknow');
  });
});
