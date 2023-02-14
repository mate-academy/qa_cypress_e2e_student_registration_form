/// <reference types='cypress' />


describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('')
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
   
  });
  
  it('Should register a new student', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

      cy.findByPlaceholder('Mobile Number')
      .type(user.phoneNumber);

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.get('[id=dateOfBirthInput]')
      .click();

    cy.pickDate('month-select')
      .select(user.birth.month);

    cy.pickDate('year-select')
      .select(`${user.birth.year}`);

    cy.pickDate('day')
      .contains(`${user.birth.day}`) 
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type('english{enter}');

      cy.contains('.custom-control-label', user.hobbies)
      .click();

      cy.findByPlaceholder('Current Address')
        .type(user.address);
      
        cy.get('[id=state]')
        .click()
        .type('{downArrow}{enter}');
      
        cy.get('[id=city]')
        .click()
        .type('{downArrow}{enter}');
      
        cy.get('[id=submit]')
        .click();
      
      cy.contains('tr', 'Student Name')
        .should('contain', user.firstName)
        .and('contain', user.lastName)
  });
});
