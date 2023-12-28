Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
  });
 
 
 describe('Automation Practice Form', () => {
    it('should fill all fields in the form with random data, submit it, and assert inputted data in the modal window', () => {
      cy.visit('https://demoqa.com/automation-practice-form')
  
      
    const user = {
      firstName: 'Oleh',
      lastName: 'Dorosh',
      userEmail: 'dorosh@example.com',
      gender: 'Male',
      userNumber: '556677889',
      monthOfBirth: 'September',
      yearOfBirth: '1990',
      dayOfBirth: '13',
      subject: 'English',
      hobbies:{
        Sports: '1',
        Reading: '2',
        Music: '3'
      },
      currentAddress: ['Main Street'],
      zipAndState: ['NCR', 'Noida'],
    };

    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.userEmail) 
    cy.get(`input[value=${user.gender}]`).check({force: true});
    cy.get('#userNumber').type(user.userNumber)
    cy.get('input[id=dateOfBirthInput]').click();
    cy.get('.react-datepicker__month-select').select(user.monthOfBirth);
    cy.get('.react-datepicker__year-select').select(user.yearOfBirth);
    cy.get('.react-datepicker__day').contains(user.dayOfBirth).click();
    cy.get('.subjects-auto-complete__value-container').type(`${user.subject}{enter}`)
    cy.get(`input[value=${user.hobbies.Reading}]`).check({force: true});
    cy.get('#currentAddress').type(user.currentAddress.join(' '));
    cy.get('#stateCity-wrapper')
      .contains('Select State')
      .type(`${user.zipAndState[0]}{enter}`);
    cy.get('#stateCity-wrapper')
      .contains('Select City')
      .type(`${user.zipAndState[1]}{enter}`);
    cy.get('#submit').click();


    cy.get('td').should('contain.text', user.firstName);
    cy.get('td').should('contain.text', user.lastName);
    cy.get('td').should('contain.text', user.userEmail);
    cy.get('td').should('contain.text', user.userNumber);
    cy.get('td').should('contain.text', user.subject);
    cy.get('td').should('contain.text', user.hobbies.Sports);
    cy.get('td').should('contain.text', user.currentAddress.join(' '));
    cy.get('td').should('contain.text', user.zipAndState[0]);
    cy.get('td').should('contain.text', user.zipAndState[1]);


  });
});
