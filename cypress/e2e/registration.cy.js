/// <reference types='cypress' />
const { generateRegistration } = require("../support/generation");
const getSellector = require("../support/classClick");

describe('Student Registration page', () => {
  it('Assert all inputed data in modal window of registration page', () => {
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
   
    getSellector.fillField('#firstName',firstName)
    getSellector.fillField('#lastName',lastName)
    getSellector.fillField('#userEmail-wrapper',email)
    getSellector.fillField('#userNumber-wrapper',phoneNumber)
  

    cy.get('#dateOfBirthInput').click().wait(500)
    cy.get('.react-datepicker__month-select').select('September')
    cy.get('.react-datepicker__year-select').select('1918')
    cy.get (`div[aria-label='Choose Sunday, September 1st, 1918']`).click()

    cy.get('#subjectsContainer').click().type(`${subject1}`+'{enter}').wait(500)
          .type(`${subject2}`+'{enter}');  
   
    cy.get(`input#hobbies-checkbox-${randomNumber}`).check({force:true});

    cy.get(`input[value='${sex1}']`).check({force:true});  

    getSellector.fillField('#currentAddress-wrapper',address)  
    getSellector.click1(`:nth-child(4) > .group-header > .header-wrapper`) //clickSideBar

    cy.get('#state').click().type(`${state}`+'{enter}');  
    cy.get('#city').click().type(`${city1}`+'{enter}');

    getSellector.scrollimg('#submit');
    cy.get('#submit').click({force:true}); 

    getSellector.getTwoInputs(1,firstName, lastName);

    getSellector.getInput(2,email);
    getSellector.getInput(3,sex1);
    getSellector.getInput(4,phoneNumber);

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
        .should('contain.text',`01 September,1918`);

    getSellector.getTwoInputs1(6,subject1, subject2);

    getSellector.getInput(7,hobbi);
    getSellector.getInput(9,address);
    getSellector.getTwoInputs(10,state, city1);
 
  });
});




