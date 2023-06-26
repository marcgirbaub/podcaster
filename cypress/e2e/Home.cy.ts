describe("When navigating to the home page", () => {
  it("Then it should show a heading level 1", () => {
    cy.visit("/");

    cy.get("h1");
  });

  it("Then it should show an input with placeholder `Filter podcasts...`", () => {
    const expectedPlaceholder = "Filter podcasts...";

    cy.visit("/");

    cy.get("input")
      .invoke("attr", "placeholder")
      .should("contain", expectedPlaceholder);
  });
});
