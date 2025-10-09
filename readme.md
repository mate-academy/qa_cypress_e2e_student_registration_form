# Cypress: Student Registration Form
Mam takie zadanie.
## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run the command `npm i`.
1. Create a new branch `git checkout -b testing`.
1. Resolve tasks in the `cypress`/`e2e`/`registration.cy.js`.
1. Check yourself before submitting the task with a [Cypress checklist](https://mate-academy.github.io/qa-program/checklists/cypress.html).
1. Create a pull request.
1. Do not forget to click on `Re-request review` if you submit the homework after previous review.

## Task

App for testing: `https://demoqa.com/automation-practice-form`

**Your task** is to automate the next flow:

1. Fill all fields in forms except "picture".
1. Click on [Submit] button.
1. Assert inputed data in modal window.
weiz pod uwage ze w support masz do dyspozycji plik e2e.js oraz command.js
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => {
  return false;
});

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
};

w w katalogu e2e jest plik registration.cy.js:/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {

  });

  it('', () => {

  });
});
