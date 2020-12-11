it('loads examples', () => {
  cy.visit('/');
  cy.get('app-root app-header header #headerTitle').should('contain', 'kasaharu.web');
});
