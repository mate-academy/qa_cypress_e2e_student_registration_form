/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('Should return table with entered data', () => {
    cy.viewport(550, 750);
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get(`[value="${user.gender}"]`).check( { force: true } );
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('{selectAll}03 Nov 1999{enter}');
    cy.get('.subjects-auto-complete__value-container').type('co{enter}');
    cy.contains(`${user.hobby}`).click( { force: true } );
    cy.get('[placeholder="Current Address"]').type(user.address);
    cy.get('#state').click().type('ncr{enter}');
    cy.get('#city').click().type('noi{enter}');
    cy.get('#submit').click();
    cy.get('tr:nth-child(1) > td:nth-child(2)').should('contain', `${user.firstName} ${user.lastName}`)
    cy.get('tr:nth-child(2) > td:nth-child(2)').should('contain', `${user.email}`)
    cy.get('tr:nth-child(3) > td:nth-child(2)').should('contain', `${user.gender}`)
    cy.get('tr:nth-child(4) > td:nth-child(2)').should('contain', '1234567890')
    cy.get('tr:nth-child(5) > td:nth-child(2)').should('contain', '03 November,1999')
    cy.get('tr:nth-child(6) > td:nth-child(2)').should('contain', 'Computer Science')
    cy.get('tr:nth-child(7) > td:nth-child(2)').should('contain', `${user.hobby}`)
    cy.get('tr:nth-child(9) > td:nth-child(2)').should('contain', `${user.address}`)
    cy.get('tr:nth-child(10) > td:nth-child(2)').should('contain', 'NCR Noida')
  });
});
