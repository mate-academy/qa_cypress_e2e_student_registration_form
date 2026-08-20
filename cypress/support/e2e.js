import './commands';

Cypress.on('uncaught:exception', () => {
  return false;
});

const app = window.top;
const selector = '[data-hide-command-log-request]';

if (!app.document.head.querySelector(selector)) {
  const style = app.document.createElement('style');

  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}
