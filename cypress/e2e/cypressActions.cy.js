/// <reference types='cypress' />

describe('Practice Form', () => {

  before(() => {

    cy.visit('/')

  });

  it('should register a student filling the required fields', () => {
    
    cy.get('[placeholder="First Name"]')
      .type('Jhon');

    cy.get('[placeholder="Last Name"]')
      .type('Black');  

    cy.get('[placeholder="name@example.com"]')
      .type('black1985@ukr.net');  

    cy.get('#gender-radio-1')
      .click({force: true}); 
   
    cy.get('[placeholder="Mobile Number"]')
      .type('0684563217');   
          
    cy.get('#dateOfBirthInput')
      .click();   

    cy.get('[class="react-datepicker__month-select"]')
      .select('December');

    cy.get('[class="react-datepicker__year-select"]')
      .select('1984');

    cy.get(':nth-child(5) > .react-datepicker__day--026')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type(`Math{enter}`); 

    cy.get('.subjects-auto-complete__value-container')
      .type(`Biology{enter}`);   

    cy.get('#hobbies-checkbox-1')
      .click({force: true}); 
      
    cy.get('#hobbies-checkbox-2')
      .click({force: true});     
    
    cy.get('[placeholder="Current Address"]')
      .type('USA, California');

    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')  
      .click({force: true});

    cy.get('#react-select-3-option-3')
    .click({force: true});

    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
      .click({force: true});

    cy.get('#react-select-4-option-1')
      .click({force: true});
      
    cy.get('[class="btn btn-primary"]')
      .click({force: true});

    cy.get('[class="modal-title h4"]')
      .should('contain.text', 'Thanks for submitting the form');

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', 'Jhon Black');
    
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', 'black1985@ukr.net');  

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', 'Male'); 

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', '0684563217');  

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '26 December,1984'); 
      
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'Maths, Biology'); 
      
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain.text', 'Sports, Reading');
      
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', 'USA, California');
      
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain.text', 'Rajasthan Jaiselmer');  
      
    cy.get('#closeLargeModal')
      .click();  

  });
});
