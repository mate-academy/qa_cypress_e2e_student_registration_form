/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);

    cy.contains('.custom-control-label', user.gender).click();
    
    cy.get('#userNumber').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1996');
    cy.get('.react-datepicker__month-select').select('11');
    cy.get('.react-datepicker__month').contains(26).click();

    cy.get('.subjects-auto-complete__value-container').type('English' + '{enter}');

    cy.contains('.custom-control-label', user.hobby).click();

    cy.get('[placeholder="Current Address"]').type(user.address);

    cy.contains('Select State').type('{downArrow}{enter}');
    cy.contains('Select City').type('Noida');

    cy.get('#submit').click({force: true});

    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '26 December,1996');
    cy.contains('tr', 'Subject').should('contain', 'English');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);

  });
});
