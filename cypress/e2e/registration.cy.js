/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  
  before(() => {

    cy.visit('');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('Should register a new user', () => {

    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
        .click({force: true});

    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);

    cy.get('#dateOfBirthInput').type('{selectAll}' + `${user.birth.day} `+`${user.birth.month } `+`${user.birth.year}`+ '{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('En{enter}' + 'Ch{enter}' );

    cy.contains('.custom-control-label', user.hobby)
      .click({force: true});

    cy.get('#currentAddress').type(user.address);

    cy.get('#state')
      .type('{downArrow}{enter}');

    cy.get('#city')
      .type('{downArrow}{enter}');

    cy.get('#submit')
      .click();
    // Testing 
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
      .and('contain', user.birth.month)
      .and('contain', user.birth.year);

    cy.contains('tr', 'Subjects')
      .should('contain', 'English')
      .and('contain', 'Chemistry');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow');

  })
});
