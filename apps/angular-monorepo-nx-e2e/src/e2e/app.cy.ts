describe('angular-monorepo-nx-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('Verifies lib-header component is present', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('lib-header').should('exist');
  });

  it('Verifies lib-footer component is present', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('lib-footer').should('exist');
  });

  it('Verifies router-outlet component is present', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('router-outlet').should('exist');
  })
});
