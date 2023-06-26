describe("When nagivating to the home page and clicking in the Joe Budden podcast", () => {
  it("Then the url should contain the `podcast` endpoint", () => {
    const urlEndpoint = "podcast/1535809341";

    cy.visit("/");

    cy.get('a[href*="podcast/1535809341"]').click();

    cy.url().should("include", urlEndpoint);
  });

  describe("And clicking in the 638 episode", () => {
    it("Then the url should contain the `episode` endpoint", () => {
      const urlEndpoint = "podcast/1535809341/episode/1000618165790";

      cy.visit("/");

      cy.get('a[href*="podcast/1535809341"]').click();

      cy.get('a[href*="podcast/1535809341/episode/1000618165790"]').click();

      cy.url().should("include", urlEndpoint);
    });
  });
});
