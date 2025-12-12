/// <reference types='cypress' />

import {
  generateRandomNumber as generateNumber,
  users,
  generateRandomEmail,
  transformNumberFormat,
  month,
  generateNumberRandomTimes
} from '../support/e2e';

describe('Student Registration page', {
  scrollBehavior: 'nearest',
  viewportHeight: 1100,
  viewportWidth: 1300
},
() => {
  beforeEach(() => {
    cy.visit('');
  });

  it(`should display modal window with all data of form ` +
      `when the form is sucussefully submit`, () => {
    const nameIndex = generateNumber(5);
    const surnameIndex = generateNumber(5);
    const addressIndex = generateNumber(5);
    const subjectToChoose = generateNumberRandomTimes(8, 11, false, 70);
    const hobbyToChoose = generateNumberRandomTimes(3, 4, true, 40); // 1-3 x times (max 3)
    const stateToChoose = generateNumber(4);
    const date = [
          `20${transformNumberFormat(generateNumber(25, true), true)}`, // 2001 - 2024
          `${generateNumber(12)}`, // 0 - 11 month index for Data
          `${generateNumber(32, true)}` // 1 - 31 day
    ];
    const number = (() => {
      let num = '';
      for (let i = 1; i <= 10; i++) {
        num += generateNumber(10);
      }

      return num;
    })();

    const user = {
      name: users.firstName[nameIndex],
      surname: users.lastName[surnameIndex],
      email: generateRandomEmail(),
      gender: generateNumber(4, true),
      number,
      birth: new Date(date[0], date[1], date[2]),
      subject: [],
      hobby: [],
      picture: null,
      address: users.address[addressIndex],
      state: '',
      city: ''
    };

    cy.get('[placeholder="First Name"]')
      .type(user.name);
    cy.get('[placeholder="Last Name"]')
      .type(user.surname);
    cy.get('[placeholder="name@example.com"]')
      .type(user.email);
    cy.get(`[for="gender-radio-${user.gender}"]`)
      .then((radio) => {
        user.gender = radio[0].textContent;
      })
      .click();
    cy.get('[placeholder="Mobile Number"]')
      .type(user.number);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-container').within((dataPicker) => {
      const transformatedDay = transformNumberFormat(user.birth.getDate());

      cy.get('select.react-datepicker__year-select')
        .select(`${user.birth.getFullYear()}`);
      cy.get('select.react-datepicker__month-select')
        .select(`${user.birth.getMonth()}`);
      cy.get(
            `div.react-datepicker__day--${transformatedDay}:not(.react-datepicker__day--outside-month)`)
        .click();
    });

    cy.get('#subjectsWrapper').within((subjectWrapper) => {
      subjectToChoose.forEach((subjectToChooseIndex) => {
        cy.get('input#subjectsInput')
          .type('i');

        cy.get(`#react-select-2-option-${subjectToChooseIndex}`)
          .then((subjectToChoose) => {
            const subjectName = subjectToChoose[0].textContent;

            user.subject.push(subjectName);
          })
          .click({ scrollBehavior: 'center' });
      });
    });
    cy.get('#hobbiesWrapper').within((hobbiesWrapper) => {
      hobbyToChoose.forEach((hobbyToChooseNumber) => {
        cy.get(`label[for="hobbies-checkbox-${hobbyToChooseNumber}"]`)
          .then((checkbox) => {
            const checkboxName = checkbox[0].textContent;

            user.hobby.push(checkboxName);
          })
          .click();
      });
    });
    cy.get('[placeholder="Current Address"]')
      .type(`${user.address}`);
    cy.get('#stateCity-wrapper').within((stateCityWrapper) => {
      cy.get(`[class*="placeholder"]`)
        .contains('Select State')
        .click();
      cy.get(`#react-select-3-option-${stateToChoose}`)
        .then((stateOption) => {
          const stateName = stateOption[0].textContent;

          user.state = stateName;
        })
        .click({ scrollBehavior: 'center' });
      cy.get('[class*="placeholder"]')
        .contains('Select City')
        .click();
      cy.get('#react-select-4-option-0')
        .then((optionZero) => {
          const howManyCity = optionZero[0].parentElement.children.length;
          const whichCityToChoose = generateNumber(howManyCity);

          cy.get(`#react-select-4-option-${whichCityToChoose}`)
            .then((city) => {
              const cityName = city[0].textContent;

              user.city = cityName;
            })
            .click();
        });
    });
    cy.get('button[type="submit"]')
      .contains('Submit')
      .click();
    cy.get('.modal-content')
      .should('be.visible')
      .within((modalWindow) => {
        cy.get('table').within((modalTable) => {
          const rows = modalTable[0].tBodies[0].rows;
          const day = transformNumberFormat(user.birth.getDate(), true);
          const monthName = month[user.birth.getMonth()];
          const year = user.birth.getFullYear();

          for (let i = 0; i < rows.length; i++) {
            const label = rows[i].cells[0].textContent;
            const value = rows[i].cells[1].textContent;

            switch (label) {
              case 'Student Name':
                expect(value, 'Student name').to.be.equal(`${user.name} ${user.surname}`);
                break;
              case 'Date of Birth':
                expect(value, 'Student birth').to.be.equal(`${day} ${monthName},${year}`);
                break;
              case 'Picture':
                expect(value, 'Student picture').to.be.equal('');
                break;
              case 'State and City':
                expect(value, 'Student state and city').to.be.equal(`${user.state} ${user.city}`);
                break;
              case 'Subjects':
                expect(value, 'Student subjects').to.be.equal(`${user.subject.join(', ')}`);
                break;
              case 'Hobbies':
                expect(value, 'Student hobbies').to.be.equal(`${user.hobby.join(', ')}`);
                break;
              case 'Student Email':
                expect(value, `Student email`).to.be.equal(user.email);
                break;
              case 'Gender':
                expect(value, `Student ${label.toLowerCase()}`).to.be.equal(user.gender);
                break;
              case 'Mobile':
                expect(value, `Student ${label.toLowerCase()}`).to.be.equal(user.number);
                break;
              case 'Address':
                expect(value, `Student ${label.toLowerCase()}`).to.be.equal(user.address);
                break;
              default:
                // eslint-disable-next-line no-console
                console.log('The table has additional rows.');
                break;
            }
          }
        });
        cy.get('#closeLargeModal')
          .contains('Close')
          .click();
      });
  });
});
