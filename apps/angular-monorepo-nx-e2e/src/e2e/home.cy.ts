describe('Hero Section Test', () => {
  it('Verifies home section is present', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('.hero').should('exist');
  });

  it('Verifies image is present and has correct src', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('.hero-content img')
      .should('exist')
      .should('have.attr', 'src', 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp');
  });

  it('Verifies heading is present and has correct text', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('.hero-content h1')
      .should('exist')
      .should('contain.text', 'Apresentando');
  });

  it('Verifies paragraph is present and has correct text', () => {
    cy.visit('/'); // replace "/" with the path to your page
    cy.get('.hero-content p')
      .should('exist')
      .should('contain.text', 'Portal Nx Monorepo com Angular e Tailwind CSS + DaisyUI');
  });

});
