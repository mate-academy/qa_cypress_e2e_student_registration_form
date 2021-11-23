describe('Registration form fields should be filled', () => {
    
    let user;

    before(() => {
    cy.task('newUser').then((newUser) => {
        user = newUser;
    });
    });

    it('', () => {
        cy.visit(`/automation-practice-form`);
        cy.get('[placeholder="First Name"]')
            .type(user.userFirstName);
        cy.get('[placeholder="Last Name"]')
            .type(user.userLastName); 
        cy.get('#userEmail')
            .type(user.email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
            .click({ multiple: true });
        cy.get('[placeholder="Mobile Number"]')
            .type('1234567890');
 
        cy.get('#dateOfBirthInput')
            .click();
        cy.get('.react-datepicker__month-select')
            .select('March')
        
        cy.get('.react-datepicker__year-select')
            .select('1990')
    
        cy.get('.react-datepicker__day')
          .each(($el) => {
              let dayName = $el.text()
              if(dayName == '14')
              {
                  cy.wrap($el).click()
              }     
          }); 
        cy.get('#dateOfBirthInput')
          .should('have.value', '14 Mar 1990');
       
        cy.get('.subjects-auto-complete__value-container')
          .type('Administration');

        cy.get('#hobbies-checkbox-1')
          .click({force: true});
        cy.get('#hobbies-checkbox-2')
          .click({force:true});
 
        cy.get('#uploadPicture')
          .attachFile('my.json');

        cy.get('[placeholder="Current Address"]')
          .type('Rynok square, 15');

        cy.get('#state')
          .click()
          .contains('Uttar Pradesh')
          .click();
        cy.get('#city')
          .click()
          .contains('Lucknow')    
          .click();
        
        cy.get('#submit')
          .click();
          
        cy.get('.modal-header')
          .should('exist')
          .contains('Thanks for submitting the form')  
    })

    it('Table should have user inputs', () => {
        cy.get('.table')
          .contains('tr', 'Student Name').should('contain', user.userFirstName + ' ' + user.userLastName);
        cy.get('.table')
          .contains('tr', 'Student Email').should('contain', user.email);
        cy.get('.table')
          .contains('tr', 'Gender').should('contain', 'Male');
        cy.get('.table')
          .contains('tr', 'Mobile').should('contain', '1234567890'); 
        cy.get('.table')
          .contains('tr', 'Date of Birth').should('contain', '14 March,1990');
        cy.get('.table')
          .contains('tr', 'Subjects').should('contain', ''); 
        cy.get('.table')
          .contains('tr', 'Hobbies').should('contain', 'Sports, Reading'); 
        cy.get('.table')
          .contains('tr', 'Picture').should('contain', 'my.json');
        cy.get('.table')
          .contains('tr', 'Address').should('contain', 'Rynok square, 15');
        cy.get('.table')
          .contains('tr', 'State and City').should('contain', 'Uttar Pradesh Lucknow'); 
          
        cy.get('#closeLargeModal')
          .should('exist')
          .click({force: true});  
    })

    it('Should be able to add/edit/delete/search workers in workers table', () => {
        cy.visit('/webtables');

        cy.get('[aria-label="rows per page"]')
          .select('20 rows')  
        cy.get('[value="20"]')
          .contains('20 rows')
        cy.get('select')
          .should('have.value', '20')

        cy.get('#addNewRecordButton')
          .click();
        cy.get('[placeholder="First Name"]')
          .type(user.userFirstName);
        cy.get('[placeholder="Last Name"]')
          .type(user.userLastName); 
        cy.get('#userEmail')
          .type(user.email);
        cy.get('#age')
          .type('23');
        cy.get('#salary')
          .type(10000);
        cy.get('#department')
          .type('IT');  
        cy.get('#submit')
          .should('contain','Submit')
          .click({force: true});
        cy.get('.rt-table')
          .should('contain', user.userFirstName);
        cy.get('#searchBox')
          .type(user.email);  
        cy.get('.rt-td')
          .contains(user.email);
        cy.get('#edit-record-4 > svg > path')
          .click();
        cy.get('#age')
          .clear()
          .type('24');
        cy.get('#department')
          .clear()
          .type('Quality Assurance');
        cy.get('#submit')
          .click({force: true});
        cy.get('#searchBox')
          .clear();  
        cy.get('#delete-record-4 > svg')
          .click();
        cy.contains('.rt-td', user.email)
           .should('not.exist');  
    })
});

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

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