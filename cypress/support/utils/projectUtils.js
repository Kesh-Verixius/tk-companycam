// This function creates a Project after a user is logged in
function createProject(projectAddress) {
  // The datatestid attribute has a hyphen when a Project already exists
  // so we use an if/else statement to continue with the test in either case
  cy.get('body').then(($body) => {
    if ($body.find('[datatestid="project-feed__create-project"]').length > 0) {
      cy.get('[datatestid="project-feed__create-project"]').click();
    } else {
      cy.get('[data-testid="project-feed__create-project"]').click();
    }
  });  

  cy.get('[name="project_address"]').type(projectAddress);
  cy.get('[class="pac-item"]').eq(0).click();
  cy.get('[type="submit"]').eq(1).click();

  // Once the Project is made, we check that the URL is expected and the
  // page contains the Project Address
  cy.url().should('match', /projects\/\d+\/photos/);
  cy.contains(projectAddress);
  cy.url().then((url) => {
    // Split the URL by '/' and extract the path segments
    const pathSegments = url.split('/');
      
    // Assign the Project ID in a Cypress environment variable for later use
    const projectIdIndex = pathSegments.indexOf('projects') + 1;
    const projectId = pathSegments[projectIdIndex];
    Cypress.env('projectId', projectId);
  });
};

// This function deletes a Project after a user is logged in
function deleteProject(projectId) {
  // Using the projectId argument, we navigate to the exact Project to be deleted
  cy.visit(`https://app.companycam.com/projects/${projectId}/photos`);
  cy.get('[data-testid="projects__actions__manage"]').click();
  cy.get('[data-testid="projects__actions__delete-project-link"]').click();
  cy.get('[data-testid="confirmation-modal__accept"]').click();

  // After deleting the Project, we navigate back to its Details page to confirm that it's gone
  cy.visit(`https://app.companycam.com/projects/${projectId}/photos`);
  cy.get('[class="no-results__message"]')
};

module.exports = {
  createProject,
  deleteProject
};

