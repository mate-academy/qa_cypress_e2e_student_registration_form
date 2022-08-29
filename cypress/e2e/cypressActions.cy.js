/// <reference types='cypress' />

describe('Basic level', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate data in modal window', () => {
    cy.get('#firstName').type('Superwoman');
    cy.get('#lastName').type('Superlastname');
    cy.get('#userEmail').type('superemail@email.ua');

    cy.get('#gender-radio-2').check({ force: true });

    cy.get('#userNumber').type('0503456567');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__year-select').select('1939');
    cy.get('.react-datepicker__month-select').select('November');
    cy.get('.react-datepicker__day').contains('10').click();

    cy.get('#subjectsInput').type('History').wait(1000).type('{enter}');

    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#hobbies-checkbox-2').check({ force: true });
    cy.get('#hobbies-checkbox-3').check({ force: true });

    cy.get('#currentAddress').type('Somewhere in the world'); 
    cy.get('.css-yk16xz-control').eq(1).click();

    cy.contains('Haryana').click({ force: true });
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click({force: true});
    cy.contains('Panipat').click({ force: true });
    cy.get('button[type="submit"]').click({ force: true });
    
    cy.contains('tr', 'Student Name').should('contain', 'Superwoman Superlastname');
    cy.contains('tr', 'Student Email').should('contain', 'superemail@email.ua');
    cy.contains('tr', 'Gender').should('contain', 'Female');
    cy.contains('tr', 'Mobile').should('contain', '0503456567');
    cy.contains('tr', 'Date of Birth').should('contain', '10 November,1939');
    cy.contains('tr', 'Subjects').should('contain', 'History');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports, Reading, Music');
    cy.contains('tr', 'Address').should('contain', 'Somewhere in the world'); 
    cy.contains('tr', 'State and City').should('contain', 'Haryana Panipat');
  });
});
