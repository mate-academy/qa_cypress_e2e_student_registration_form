/// <reference types='cypress' />

const { randomUser } = require("../plugins");

describe('SignUp page: user is able to', () => {
  before('is opened', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  const {firstName, lastName, email, phone, address} = randomUser();
  it('enter FirstName', () => {

    cy.get('[id=firstName]')
    .type(firstName)
  });

  it('enter LastName', () => {
    
    cy.get('[id=lastName]')
    .type(lastName)
  })

  it('enter Email', () => {

    cy.get('[id=userEmail')
    .type(email)
  })

  it('enter Phone number', () => {

    cy.get('[id=userNumber')
    .type(phone)
  })
  
  it('select Gender', () => {
  cy.get('[type=radio]')
         .eq(Math.floor(Math.random() * 3))
         .check({force: true})
  })

  it('select DateOfBirth', () => {
    cy.get('[id=dateOfBirthInput]')
    .click()

    function getRandomInt(min, max){      
    return Math.floor(Math.random() * (min - max));    
  }
    cy.get(`[class="react-datepicker__year-select"]> option`)
    .then(listing => {
      const randomNumber = getRandomInt(0, listing.length -1);
      cy.get(`[class="react-datepicker__year-select"]> option`).eq(randomNumber).then(($select) => {
        const text = $select.text()
        cy.get(`[class="react-datepicker__year-select"]`).select(text)
      })
    })
    cy.get('[class="react-datepicker__week"]')
         .eq(Math.floor(Math.random() * 6))
         .click()
  })

  it('select Subject', () => {
    cy.get('.subjects-auto-complete__value-container')
    .type('Math{enter}')
    .type('eng{enter}')
  })

  it('select Hobbies', () => {
    cy.get('[type=checkbox]')
         .eq(Math.floor(Math.random() * 3))
         .check({force: true})
  })

  it('type Address', () => {
    cy.get('#currentAddress')
    .type(address)
  })

  it('select State', () => {
    cy.get('[id="state"]')
    .click()
    .get('#react-select-3-option-1')
    .click()
  })

  it('select City', () => {
    cy.get('[id="city"]')
    .click()
    .get('#react-select-4-option-0')
    .click()
  })

  it('proceed with [Submit]', () => {
    cy.get('[id=submit]')
    .click({force: true})
  })


  it('Table validation', () => {
    cy.contains('tr', 'Student Name')
    .should('contain', (firstName));

    cy.contains('tr', 'Student Name')
    .should('contain', (lastName));

    cy.contains('tr', 'Student Email')
    .should('contain', (email));

    cy.contains('tr', 'Mobile')
      .should('contain', (phone));

    cy.contains('tr', 'Subjects')
    .should('contain', 'Maths, English');
    
    cy.contains('tr', 'Address')
    .should('contain', (address))

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Agra');
  })
})

