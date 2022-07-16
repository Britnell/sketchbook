describe("sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("header").should("be.visible");
  });
});
