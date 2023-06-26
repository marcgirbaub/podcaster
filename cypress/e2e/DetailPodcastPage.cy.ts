describe("When navigating to the podcast detail page of the Caresha podcast", () => {
  it("Then it should show a heading level 2 with the number of 10 episodes", () => {
    cy.visit("/");

    cy.get('a[href*="podcast/1628914491"]').click();

    cy.contains("h2", "Episodes: 10");
  });

  it("Then it should show a span with the title of an episode", () => {
    const episodeTitle =
      "Blac Chyna Talks Turn-Ons & Offs, Kardashians, Tyga, Spiritual Journey & More | Caresha Please";

    cy.visit("/");

    cy.get('a[href*="podcast/1628914491"]').click();

    cy.contains("span", episodeTitle);
  });
});
