describe("Asuransi Jiwa List Product Page", () => {
  const route = "/asuransi/jiwa/info/produk";
  it("it have path `asuransi/jiwa/info/produk`", () => {
    cy.visit(route);
    cy.url().should("include", route);
  });
  it("it will displays no data if the data is not match with the filter", () => {
    cy.visit(`${route}?birthdate=2023-10-12&gender=MALE`);
    cy.findByTestId("data-not-found", { timeout: 10000 }).should("be.visible");
  });
  it("it will displays error if the backend of api error or connection error", () => {
    cy.visit(route);
    cy.findByTestId("display-error", { timeout: 10000 }).should("be.visible");
  });
  it("it will display list of product insurances of asuransi jiwa tanpa pengembalian premi with requried params of birth of date and gender from user", () => {
    cy.visit(`${route}?birthdate=1997-10-12&gender=MALE`);
    cy.findAllByTestId("product-insurance", { timeout: 10000 }).should(
      "be.visible"
    );
  });
  it("the list can be sort with menu sort button", () => {
    cy.visit(`${route}?birthdate=1997-10-12&gender=MALE`);
    cy.findAllByTestId("product-insurance", { timeout: 10000 }).should(
      "be.visible"
    );
    // find button by testId and click
    cy.findByTestId("sort-button").click();
    cy.get("#lowest").click();
    cy.findByTestId("apply-sort").click();
    cy.findAllByTestId("product-insurance", { timeout: 10000 }).should(
      "be.visible"
    );
  });
  it(" the list can be filter by Fitur with menu filter button", () => {
    cy.visit(`${route}?birthdate=1997-10-12&gender=MALE`);
    cy.findAllByTestId("product-insurance", { timeout: 10000 }).should(
      "be.visible"
    );
    // find button by testId and click
    cy.findByTestId("filter-button").click();
    cy.findByTestId("Santunan Meninggal < 100 juta").click();
    cy.findByTestId("apply-filter").click();
    cy.findAllByTestId("product-insurance", { timeout: 10000 }).should(
      "be.visible"
    );
  });
  it(" i can click detail of product item by click button detail and it will navigate me to page _Asuransi Jiwa Detail Produk_", () => {
    cy.visit(`${route}?birthdate=1997-10-12&gender=MALE`);
    // find a button in list and click
    cy.findByTestId("btn-detail-LIFE-SIMASJIWA-04", { timeout: 10000 }).click();
    // match the route
    cy.url().should(
      "include",
      "http://localhost:3000/asuransi/jiwa/info/produk/LIFE-SIMASJIWA-04?birthdate=1997-10-12&gender=MALE"
    );
  });
});
