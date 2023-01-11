/// <reference types='cypress' />
const { generateRegistration } = require("../support/generation");

describe('Student Registration page', () => {
  it('Test', () => {
    cy.visit('/');
    const { firstName,
      lastName, 
      email,
      phoneNumber,
      address,
      randomNumber,
      state,
      subject1,
      subject2,
      city1,
      sex1, 
      hobbi 
    } = generateRegistration();
   

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);

    cy.get('#userEmail-wrapper').type(email);
    
    cy.get('#userNumber-wrapper').type(phoneNumber);

    cy.get('#dateOfBirthInput').click().wait(500)
    cy.get('.react-datepicker__month-select').select('September')
    cy.get('.react-datepicker__year-select').select('1918')
    cy.get (`div[aria-label='Choose Sunday, September 1st, 1918']`).click()


    cy.get('#subjectsContainer').click().type(`${subject1}`+'{enter}').wait(500)
          .type(`${subject2}`+'{enter}');  
   

    // I dont know which selector i should use for this checkboxe and radiobuttom to dont user{force... i have also tried 2 differets selectors like:
    //cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${randomNumber1}) > .custom-control-label`).check()
    //cy.get(`label[for='hobbies-checkbox-${randomNumber}']`).check();  
    //but it's not work; so i user Force   
    cy.get(`input#hobbies-checkbox-${randomNumber}`).check({force:true});

    cy.get(`input[value='${sex1}']`).check({force:true});  

    cy.get('#currentAddress-wrapper').type(address);

    cy.get(':nth-child(4) > .group-header > .header-wrapper').click() //click left sidebar

    cy.get('#state').click().type(`${state}`+'{enter}');  
    cy.get('#city').click().type(`${city1}`+'{enter}');

    cy.get('#submit').scrollIntoView();  
    cy.get('#submit').click(); 

    //TEST
    
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('contain.text',`${firstName} ${lastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
        .should('contain.text',`${email}`);

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
        .should('contain.text',`${sex1}`);
    
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
        .should('contain.text',`${phoneNumber}`);

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
        .should('contain.text',`01 September,1918`);

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
        .should('contain.text',`${subject1}, ${subject2}`);

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
        .should('contain.text',`${hobbi}`); 

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
        .should('contain.text',`${address}`);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
        .should('contain.text',`${state} ${city1}`);  
  });
});




