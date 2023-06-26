describe("When navigating to the episode detail page of the Song Explorer podcast", () => {
  it("Then it should show an audio tag with the episode to listen", () => {
    cy.visit("/");

    cy.get('a[href*="podcast/788236947"]').click();

    cy.get('a[href*="podcast/788236947/episode/1000617037974"]').click();

    cy.get("audio");
  });
});
