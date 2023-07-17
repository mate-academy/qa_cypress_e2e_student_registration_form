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
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', user.firstName);
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', user.lastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', user.gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', user.number);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '8 June,1998');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', user.subject);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', user.hobby);
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'Uttar Pradesh Lucknow');
  });
});
