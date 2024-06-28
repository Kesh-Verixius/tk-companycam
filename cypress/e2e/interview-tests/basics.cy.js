/// <reference types='cypress' />

const { login } = require('../../support/utils/generalUtils');
const { createProject, deleteProject } = require('../../support/utils/projectUtils');

describe('basic workflow', () => {
  beforeEach(() => {
    login()
  })

  it('creates a new project, then cleans up the test data', () => {
    // A new Project is made with my address
    createProject('579 Sacandaga');

    // Since Cypress commands are asyncronous, we have to wrap the fetching of the environment
    // variable in a .then()
    cy.then(() => {
      const projectId = Cypress.env('projectId');
      deleteProject(projectId)
    });
  });
});