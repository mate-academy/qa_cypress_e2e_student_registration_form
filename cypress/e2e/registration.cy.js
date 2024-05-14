/// <reference types='cypress' />



describe('Student Registration page', () => {
  let user;
  const subject = `English`

   before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.task(`generateNew`).then((generateNew)=>{
      user=generateNew
    })
    


  });

  it('should successfully register the user with valid credentials', () => {
    
    cy.get('[placeholder="First Name"]').type(user.firstname);
    cy.get('[placeholder="Last Name"]').type(user.firstname);
    cy.get('[placeholder="name@example.com"]').type(user.email);
    cy.get('.custom-control-label').contains(user.gender).click();
    cy.get('[placeholder="Mobile Number"]').type(user.mobile);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--016').click();
    cy.get('.subjects-auto-complete__value-container').type(subject + '{enter}')// cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('[placeholder="Current Address"]').type(user.adress);
    cy.get('#state').type('nc{enter}');
    cy.get('#city').type('del{enter}');
    cy.get('[id="submit"]').click();
    
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', user.firstname);
    cy.get('.modal-body').should('contain', user.firstname);
    cy.get('.modal-body').should('contain', user.email);
    cy.get('.modal-body').should('contain', 'Gender', user.gender);
    cy.get('.modal-body').should('contain', 'Mobile', user.mobile);
    cy.get('.modal-body').should('contain', 'Date of Birth', '16 May');
    cy.get('.modal-body').should('contain', 'Hobbies', 'Music');
    //cy.get('.modal-body').should('contain', 'Address', user.adress);
    cy.get('.modal-body').should('contain', 'State', 'NCR');
    cy.get('.modal-body').should('contain', 'City', 'Delhi');
    //cy.get('[id="closeLargeModal"]').click();

  });
});
