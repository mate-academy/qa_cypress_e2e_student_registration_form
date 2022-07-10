/// <reference types='cypress' />

describe('Basic level', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate data in modal window', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('test@qa.team');
    cy.get('#gender-radio-1').check({ force: true }); 
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1977');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__day').contains('12').click();
    // cy.get('.subjects-auto-complete__value-container').then($el => { 
    //   let data = cy.wrap($el);
    //   data.type('a');
    //   data.type('{downarrow}');
    //   data.type('{downarrow}').click();
    // })
    cy.get('#subjectsInput').type('a').wait(1000).type('{enter}'); 
    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#hobbies-checkbox-2').check({ force: true });
    cy.get('#hobbies-checkbox-3').check({ force: true });
    cy.get('#currentAddress').type('Test address'); 
    cy.get('.css-yk16xz-control').eq(1).click();
    cy.contains('Haryana').click({ force: true });
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click({force: true});
    cy.contains('Panipat').click({ force: true });
    cy.get('button[type="submit"]').click({ force: true });
    //
    //
    cy.contains('tr', 'Student Name').should('contain', 'John Doe');
    cy.contains('tr', 'Student Email').should('contain', 'test@qa.team');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', '1234567890');
    cy.contains('tr', 'Date of Birth').should('contain', '2 January,1977');
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports, Reading, Music');
    cy.contains('tr', 'Address').should('contain', 'Test address'); 
    cy.contains('tr', 'State and City').should('contain', 'Haryana Panipat');
  });
});
