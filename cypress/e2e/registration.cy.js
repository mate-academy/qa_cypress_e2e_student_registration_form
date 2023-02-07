/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
  });
});

  it('should allow registration a new student', () => {
    
    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);  

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();
      
    cy.get('#userNumber')
      .type('1234567890');  

    cy.get('#dateOfBirthInput')
      .type('{selectAll}15 Oct 2022{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('Arts{Enter}' + 'Physics{Enter}');

    cy.contains('.custom-control-label', user.hobby)
      .click();

    cy.findByPlaceholder('Current Address')
      .type(user.address);  

    cy.get('#state')
      .type('{downArrow}{enter}');

    cy.get('#city')
      .type('{downArrow}{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr','Student Name')
      .should('contain', user.firstName)
      .and('contain', user.firstName);
  
    cy.contains('tr','Student Email')
      .should('contain', user.email);
  
    cy.contains('tr','Gender')
      .should('contain', user.gender);
  
    cy.contains('tr','Mobile')
      .should('contain', '1234567890');
  
    cy.contains('tr','Subjects')
      .should('contain', 'Arts')
      .and('contain', 'Physics');
  
    cy.contains('tr','Hobbies')
      .should('contain', user.hobby);
  
    cy.contains('tr','Address')
      .should('contain', user.address);
  
    cy.contains('tr','State and City')
      .should('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow');
  });
});



