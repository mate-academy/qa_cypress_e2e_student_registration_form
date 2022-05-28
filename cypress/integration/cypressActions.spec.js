/// <reference types='cypress' />

// Create variable for test
const userName = "Franco";
const userLastName = "Dior";
const userEmail = `${userName}@mail.com`;
const userPhone = "1234567891";
const userDateBirth = "22 March,1999"
const userSubject = "Maths"
const userAdress = "Evergreen Teras 747"
const userState = "Haryana"
const userCity = "Karnal"

describe('Registration form:', () => {
  it('fill all field', () => {

    cy.visit('automation-practice-form');
    
    cy.get('#firstName')
      .type(userName)
      .should("have.value", userName);

    cy.get('#lastName')
      .type(userLastName)
      .should("have.value", userLastName);

    cy.get('#userEmail')
      .type(userEmail)
      .should("have.value", userEmail);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('#userNumber')
      .type(userPhone)
      .should("have.value", userPhone);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${userDateBirth}`)
      .should("have.value", userDateBirth);

    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type(`${userSubject}{enter}`);

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('#currentAddress')
      .click()
      .type(userAdress)
      .should("have.value", userAdress);

    cy.get('#state .css-1wa3eu0-placeholder')
      .click({force: true})
      .type(`${userState}{enter}`);
    
    cy.get('#city .css-19bqh2r')
    .click({force: true});

    cy.get('#city .css-1wa3eu0-placeholder')
      .type(`${userCity}{enter}`);

    cy.get('#submit')
      .click({ force: true })
  });

  it('check user data after registration', () => {
    cy.get('#example-modal-sizes-title-lg')
      .should("have.text", "Thanks for submitting the form");
    
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('have.text', `${userName} ${userLastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('have.text', userEmail);

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('have.text', 'Other');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('have.text', userPhone);
    
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('have.text', userDateBirth);

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('have.text', userSubject);

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('have.text', 'Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('have.text', userAdress);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('have.text', `${userState} ${userCity}`);

    cy.get('#closeLargeModal')
      .click()

  });
});
