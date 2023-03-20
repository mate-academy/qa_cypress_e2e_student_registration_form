describe('DemoQA Form Automation', () => {
  it('fills out form, submits, and verifies input', () => {
    // visit form page
    cy.visit('https://demoqa.com/automation-practice-form')

    // enter first name
    cy.get('#firstName').type('John')

    // enter last name
    cy.get('#lastName').type('Doe')

    // enter email
    cy.get('#userEmail').type('johndoe@example.com')

    // enter mobile number
    cy.get('#userNumber').type('1234567890')

    cy.get('#dateOfBirthInput').click()
cy.get('.react-datepicker__month-select').select('June')
cy.get('.react-datepicker__year-select').select('1980')
cy.wait(1000) // Add a wait command to ensure the element is fully loaded
cy.get('.react-datepicker__day--015').click()
  
  
    
    // select subjects
    cy.get('#subjectsInput').type('Maths{enter}')

    // select hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('label[for="hobbies-checkbox-2"]').click()

    // upload picture (skipped for this test)

    // enter address
    cy.get('#currentAddress').type('123 Main St')

    // select state
    cy.get('#state').click()
    cy.get('#react-select-3-option-0').click()

    // select city
    cy.get('#city').click()
    cy.get('#react-select-4-option-0').click()
        
    // select gender
    cy.get('label[for="gender-radio-1"]').click()

    // submit form
    cy.get('#submit').then(($button) => {
      cy.get(':visible').not($button).debug();
      cy.get('#submit').click({force: true});
    });
    
// Ждем, пока появится модальное окно
cy.get('.modal-content', { timeout: 10000 }).should('be.visible')

    // verify inputted data in modal window
    cy.get('.modal-body').should('contain', 'John Doe')
    cy.get('.modal-body').should('contain', 'johndoe@example.com')
    cy.get('.modal-body').should('contain', '1234567890')
    cy.get('.modal-body').should('contain', '15 June,1980')
    cy.get('.modal-body').should('contain', 'Maths')
    cy.get('.modal-body').should('contain', 'Sports, Reading')
    cy.get('.modal-body').should('contain', '123 Main St')
    cy.get('.modal-body').should('contain', 'NCR Delhi')
    cy.get('.modal-body').should('contain', 'Male')
  })
})