/// <reference types='cypress' />

describe('User should be able to', () => {
  let user;
  
    before(function () {
      cy.task("freshUser").then((freshUser) => {
          user = freshUser;
      });
    
  });

  it('submit registration form', () => {
    cy.visit('/');
    cy.get('#firstName')
      .type(user.firstname)
        .should('have.value', user.firstname);
    cy.get('#lastName')
      .type(user.lastname)
        .should('have.value', user.lastname);
    cy.get('#userEmail')
      .type(user.email)
        .should('have.value', user.email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber')
      .type(user.mobile)
        .should('have.value', user.mobile);
    cy.get('#dateOfBirthInput')
      .type('{selectall}')
        .type('16 Dec 1982{enter}');
    cy.get('#subjectsInput')
      .type('His{enter}');
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('#currentAddress')
      .type(user.address)
        .should('have.value', user.address);
    cy.get('#state').click().contains('Haryana').click();
    cy.get('#city').click().contains('Panipat').click();
    cy.get('#submit').click();
    
    cy.contains('tbody tr', 'Student Name')
    .should('contain.text', `${user.firstname} ${user.lastname}`);
    cy.contains('tbody tr', 'Student Email')
    .should('contain.text', `${user.email}`);
    cy.contains('tbody tr', 'Gender')
    .should('contain.text', 'Female');
    cy.contains('tbody tr', 'Mobile')
    .should('contain.text', `${user.mobile}`);
    cy.contains('tbody tr', 'Date of Birth')
    .should('contain.text', '16 December,1982');
    cy.contains('tbody tr', 'Subjects')
    .should('contain.text', 'History');
    cy.contains('tbody tr', 'Hobbies')
    .should('contain.text', 'Music');
    cy.contains('tbody tr', 'Address')
    .should('contain.text', `${user.address}`);
    cy.contains('tbody tr', 'State and City')
    .should('contain.text', 'Haryana Panipat');
  });
});