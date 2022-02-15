describe("Asuransi Jiwa List Product Page", () => {
  const route = "/asuransi/jiwa/info/produk/LIFE-SIMASJIWA-04";
  it("it have path `/asuransi/jiwa/info/produk/:id`", () => {
    cy.visit(route);
    cy.url().should("include", route);
  });
  it("it will displays no data if the data is not match with the filter", () => {
    cy.visit(
      `/asuransi/jiwa/info/produk/LIFE-SIMASJIWA-04c?birthdate=1997-10-12&gender=MALE`
    );
    cy.findByTestId("data-not-found", { timeout: 10000 }).should("be.visible");
  });
  it("it will displays error if the backend of api error or connection error", () => {
    cy.visit(route);
    cy.findByTestId("display-error", { timeout: 10000 }).should("be.visible");
  });
  it("it will display detail of product if the data is match with the query", () => {
    cy.visit(
      `/asuransi/jiwa/info/produk/LIFE-SIMASJIWA-04?birthdate=1997-10-12&gender=MALE`
    );
    // find text and match
    cy.findByTestId("data-not-found", { timeout: 10000 }).should("not.exist");
    cy.findByTestId("display-error", { timeout: 10000 }).should("not.exist");
  });
});
