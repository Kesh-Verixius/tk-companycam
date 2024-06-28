require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    login_url: process.env.CYPRESS_LOGIN_URL,
    login_email: process.env.CYPRESS_LOGIN_EMAIL,
    login_pw: process.env.CYPRESS_LOGIN_PW
  },

  e2e: {
    supportFile: 'cypress/support/e2e.js'
  }
});
