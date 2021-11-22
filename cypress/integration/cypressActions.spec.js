describe('Homework 35', () => {
    let user;
    
        before(function () {
            cy.task("freshUser").then((freshUser) => {
                user = freshUser;
            });
        });
        
        it('Basic', () => {
            cy.visit('/automation-practice-form');
            cy.get('[placeholder="First Name"]').type(user.firstName);
            cy.get('[placeholder="Last Name"]').type(user.lastName);
            cy.get('[placeholder="name@example.com"]').type(user.email);
            cy.get('[for="gender-radio-1"]').click();
            cy.get('[placeholder="Mobile Number"]').type(user.phone);
            cy.get('#dateOfBirthInput').type('{selectall}').type('23 Dec 2013{enter}');
            cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').type('Maths{enter}');
            cy.get('[for="hobbies-checkbox-1"]').click();
            cy.get('[for="hobbies-checkbox-3"]').click();
            cy.get('#currentAddress').type(user.currentAdress);
            cy.get('#state').type('NCR{enter}');
            cy.get('#city>').type('Delhi{enter}'); 
            cy.get('[class="btn btn-primary"]').click();
            cy.contains('tr', 'Student Name').should('contain', user.firstName + ' ' + user.lastName);   
          })

          it('Advanced', () => {
            cy.visit('/webtables');
            cy.get('[aria-label="rows per page"]').should('exist');
            cy.get('[class="-pageJump"]').should('exist');
            cy.get('#addNewRecordButton').click();
            cy.get('#firstName').type(user.firstName);
            cy.get('#lastName').type(user.lastName);
            cy.get('#userEmail').type(user.email);
            cy.get('#age').type(user.age)
            cy.get('#salary').type(user.salary);
            cy.get('#department').type(user.department);
            cy.get('#submit').click();
            cy.get('[class="rt-td"]').contains(user.firstName).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.firstName);
            cy.get('[class="rt-td"]').contains(user.firstName).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.lastName);
            cy.get('[class="rt-td"]').contains(user.lastName).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.age);
            cy.get('[class="rt-td"]').contains(user.age).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.email);
            cy.get('[class="rt-td"]').contains(user.email).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.salary);
            cy.get('[class="rt-td"]').contains(user.salary).should('exist');
            cy.get('#searchBox').type('{selectall}').type(user.department);
            cy.get('[class="rt-td"]').contains(user.department).should('exist');
            cy.get('#edit-record-4').click();
            cy.get('#department').type('{selectall}').type('QA Manual');
            cy.get('#submit').click();
            cy.get('[class="rt-td"]').contains('QA Manual').should('exist');
            cy.get('#searchBox').type('{selectall}').clear();
            cy.get('#delete-record-1').click({delay: 1000});
            cy.get('#delete-record-2').click({delay: 1000});
            cy.get('#delete-record-3').click({delay: 1000});
            cy.get('#delete-record-4').click({delay: 1000});
            }) 
        })

       