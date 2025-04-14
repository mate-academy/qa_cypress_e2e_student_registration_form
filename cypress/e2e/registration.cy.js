/// <reference types='cypress' />

describe('Student Registration page', () => {
  
    const user = {
      firstName: 'Tarik',
      lastName: 'Ellison',
      userEmail: 'wojagy@mailinator.com',
      gender: 'Male',
      userNumber: '1234567890',
      monthOfBirth: 'June',
      yearOfBirth: '1995',
      dayOfBirth: '24',
      subject: 'Chemistry',
      hobbies:{
        Sports: '1',
        Reading: '2',
        Music: '3'
      },
      currentAddress: ['UA', 'IF'],
      zipAndState: ['Haryana', 'Karnal'],
    };
 

  it('should register student', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#userForm').should('exist')
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
    cy.get(`input[value=${user.hobbies.Sports}]`).check({force: true});
    cy.get('#currentAddress').type(user.currentAddress.join(', '));
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
    cy.get('td').should('contain.text', user.currentAddress.join(', '));
    cy.get('td').should('contain.text', user.zipAndState[0]);
    cy.get('td').should('contain.text', user.zipAndState[1]);
    


  });
});
