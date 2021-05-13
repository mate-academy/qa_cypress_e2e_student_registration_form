

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('User must be able to register', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('Tanya').should('have.value', 'Tanya');
    cy.get('#lastName').type('Boiko').should('have.value', 'Boiko');
    cy.get('#userEmail').type('test@email.com').should('have.value', 'test@email.com');
    
    cy.contains('Female').click();
    
    cy.get('#userNumber').type('1234567890').should('have.value', '1234567890');
    cy.get('#dateOfBirthInput').type('{selectall}').type('30 Jan 1999').should('have.value', '30 Jan 1999');
    cy.get('#subjectsContainer').click('right');
    cy.get('#subjectsContainer').type('Computer{downarrow}{enter}').should('contain', 'Computer Science');
    
    cy.get('#hobbiesWrapper').contains('Sports').click();
    
    cy.get('#currentAddress').type('test Adress').should('have.value', 'test Adress');
    cy.get('#state').type('Uttar{downarrow}{enter}').should('contain', 'Uttar Pradesh');
    cy.get('#city').type('{downarrow}{downarrow}{enter}').should('contain', 'Merrut');
    
    cy.get('#submit').click();
    
    cy.get('.modal-header').contains('Thanks for submitting the form').should('exist');

// Validate inputed data in modal window
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', 'Tanya Boiko');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', 'test@email.com');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Female');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', '1234567890');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '30 January,1999');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', 'Computer Science');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Sports');
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('contain', '');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', 'test Adress');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'Uttar Pradesh Merrut');
    cy.get('#closeLargeModal').click();
    cy.get('.container').contains('Student Registration Form').should('exist');
});

// Advanced level:
// Check next test cases:
// 1. Pagination 
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables