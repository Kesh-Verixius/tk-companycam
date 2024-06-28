// This function logs into the app
function login() {
  // Credentials are variablized instead of being injected directly into the code so as
  // to make future modifications easier, e.g. different test accounts with different login credentials
  const loginUrl = Cypress.env('login_url');
  const loginEmail = Cypress.env('login_email');
  const loginPassword = Cypress.env('login_pw');

  cy.visit(loginUrl);
  cy.get('input[id=user_email_address]').type(loginEmail);
  cy.get('input[id=user_password]').type(loginPassword);
  cy.get('input[type=submit]').click();
}

module.exports = {
  login
};