/// <reference types='cypress' />

describe('Name of the group', () => {
  before(() => {
    cy.visit("/")
  });

  it('', () => {
    const firstname = 'John'
    const lastname = 'McClein'
    const email = `${firstname}@gmail.com`

    cy.get('#firstName')
    .type(firstname)

    cy.get('#lastName')
    .type(lastname)

    cy.get('#userEmail')
    .type(email)

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
    .click()

    cy.get('#userNumber')
    .type('380500000000')

    cy.get('#dateOfBirthInput')
    .type('{selectAll}').type('21 Nov 1993{enter}')

    cy.get('.subjects-auto-complete__value-container')
    .type('some subject')

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
    .click()

    cy.get('#currentAddress')
    .type('adress data')

    cy.wait(1000)
    
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
    .click({force: true})
    .type('{downarrow}{enter}')

    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
    .click({force: true})
    .type('{downarrow}{enter}')

    cy.scrollTo('bottom')

    cy.get('#submit')
    .click({force: true})

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('contain', `${firstname} ${lastname}`)

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .should('contain', email)
  });
});