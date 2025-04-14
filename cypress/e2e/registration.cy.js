/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    })

  });

  it('should allow to register a new student', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}30 Aug 1986{enter}');
    cy.get('.subjects-auto-complete__value-container').type('A{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbies).click({force: true}); 
    cy.findByPlaceholder('Current Address').type('USA, Manhattan, Ousean street 1');
    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', '30 Aug 1986');
    cy.contains('tr', 'Address').should('contain', 'USA, Manhattan, Ousean street 1');
    cy.contains('tr', 'Subjects').should('contain', 'Biology');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbies);
    cy.contains('tr', 'State and City').should('contain', 'Manhattan').and('contain', 'Merrut');
    });
  });

