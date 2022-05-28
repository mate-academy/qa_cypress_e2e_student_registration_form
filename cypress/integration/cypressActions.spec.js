/// <reference types='cypress' />

describe('Register form', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('allow to register', () => {
    cy.get('#firstName')
      .type('Modest')
      .should('have.value', 'Modest')
    
    cy.get('#lastName')
      .type('Kvazimodenko')
      .should('have.value', 'Kvazimodenko')

    cy.get('#userEmail')
      .type('userEmailTest@mail.com')
      .should('have.value', 'userEmailTest@mail.com')

    cy.get('#gender-radio-1')
      .click({ force: true })
      .should('be.checked')

    cy.get('#userNumber')
      .type('0123456789')
      .should('have.value', '0123456789');
    
    cy.get('#dateOfBirthInput')
      .type('{selectAll}24 February 2022{enter}')
      .should('have.value', '24 Feb 2022');
    
    cy.get('#subjectsInput')
      .type('co{enter}')
    
    cy.get('.subjects-auto-complete__multi-value__label')
      .should('have.text', 'Computer Science')
    
     cy.get('#hobbies-checkbox-2')
      .click({force: true})
      .should('be.checked')
      
     cy.get('#currentAddress')
      .type('m. Lviv, vul. Hendlyariv, vul. KryvaAsvaltuNema, dim Pidpertyi, nomer Zadertyi')
      .should('have.value', 'm. Lviv, vul. Hendlyariv, vul. KryvaAsvaltuNema, dim Pidpertyi, nomer Zadertyi');

    cy.get('#react-select-3-input')
      .click({ force: true })
      .type('n{enter}')
      
     cy.get('#state .css-1uccc91-singleValue')
       .should('have.text', 'NCR')
    
    cy.get('#react-select-4-input')
      .click({ force: true })
      .type('d{enter}')
    
    cy.get('#city .css-1uccc91-singleValue')
       .should('have.text', 'Delhi')

    cy.get('#submit')
      .click({ force: true })

    cy.get('tbody :first-child :last-child')
      .should('have.text', 'Modest Kvazimodenko')
    
    cy.get('tbody :nth-child(2) :last-child')
      .should('have.text', 'userEmailTest@mail.com')

    cy.get('tbody :nth-child(3) :last-child')
      .should('have.text', 'Male')

     cy.get('tbody :nth-child(4) :last-child')
      .should('have.text', '0123456789')
    
    cy.get('tbody :nth-child(5) :last-child')
      .should('have.text', '24 February,2022')
    
    cy.get('tbody :nth-child(6) :last-child')
      .should('have.text', 'Computer Science')
    
    cy.get('tbody :nth-child(7) :last-child')
      .should('have.text', 'Reading')
    
    cy.get('tbody :nth-child(9) :last-child')
      .should('have.text', 'm. Lviv, vul. Hendlyariv, vul. KryvaAsvaltuNema, dim Pidpertyi, nomer Zadertyi')
    
    cy.get('tbody :nth-child(10) :last-child')
      .should('have.text', 'NCR Delhi')
  });
});
