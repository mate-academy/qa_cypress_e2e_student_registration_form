Cypress.on('uncaught:exception', (_err, runnable) => {
  return false;
});
