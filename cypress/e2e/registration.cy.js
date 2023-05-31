/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    
    cy.visit('/');
    cy.get('h5')
      .should('include.text', 'Student Registration Form');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
  });

  it('should provide an ability to register', () => {

    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    
    cy.get('#userEmail')
      .type(user.email);

    cy.get(`[value = ${user.gender}]`)
      .click({ force: true });

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(user.mobile);

    cy.get('#dateOfBirthInput')
      .click();

      cy.get('#dateOfBirthInput')
      .type('{selectAll}20 Sep 1998{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type(user.subject + '{enter}');

    cy.contains('.custom-control-label', user.hobby)
      .click();
      
    cy.findByPlaceholder('Current Address')
      .type(user.address);

    cy.contains('Select State')
      .type('Uttar Pradesh {enter}');

    cy.contains('Select City')
      .type('Lucknow {enter}');

    cy.get('#submit')
      .click({force: true});

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
      .should('contain', user.mobile);

    cy.contains('tr', 'Date of Birth')
      .should('contain','20 September,1998');

    cy.contains('tr', 'Subjects')
      .should('contain', user.subject);

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
