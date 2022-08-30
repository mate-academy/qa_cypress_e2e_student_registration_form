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

    cy.get('[class="react-datepicker__day react-datepicker__day--026"]')
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

    cy.get('#state')  
      .type(`NCR{enter}`);

    cy.get('#city')
      .type(`Delhi{enter}`);
  
    cy.get('[class="btn btn-primary"]')
      .click({force: true});

    cy.get('[class="modal-title h4"]')
      .should('contain.text', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', 'Jhon Black');  

    cy.contains('tr', 'Student Email')
      .should('contain', 'black1985@ukr.net');  

    cy.contains('tr', 'Gender')
      .should('contain', 'Male');  
    
    cy.contains('tr', 'Mobile')
      .should('contain', '0684563217');  

    cy.contains('tr', 'Date of Birth')
      .should('contain', '26 December,1984'); 

    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths, Biology');  

    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports, Reading');
      
    cy.contains('tr', 'Address')
      .should('contain', 'USA, California');

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');  
    
    cy.get('#closeLargeModal')
      .click();  

  });
});
