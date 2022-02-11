describe("Asuransi Jiwa Page", () => {
  const route = "/asuransi/jiwa";

  it("it have path /asuransi/jiwa", () => {
    cy.visit(route);
    cy.url().should("include", route);
  });

  it("I can see two types of products of asuransi jiwa, they are _tanpa pengembalian premi_ and _dengan pengembalian premi_.", () => {
    cy.visit(route);
    cy.findAllByTestId("product-title").should("have.length", 2);
    cy.findAllByTestId("product-title").each(($value, index) => {
      if (index === 0) {
        expect($value.text()).to.match(/tanpa pengembalian premi/i);
      } else if (index === 1) {
        expect($value.text()).to.match(/dengan pengembalian premi/i);
      }
    });
  });

  it("I only can choose a product _tanpa pengembalian premi_ by clicking that element but if i choose another product it will nothing happened.", () => {
    cy.visit(route);
    cy.findAllByTestId("product").each(($value, index) => {
      if (index === 0) {
        expect($value).not.to.have.css("pointer-events", "none");
      } else if (index === 1) {
        expect($value).to.have.css("pointer-events", "none");
      }
    });
  });

  it("if I choose that product I will be navigated to the page _Asuransi Jiwa Tanpa Pengembalian Premi_", () => {
    cy.visit(route);
    cy.findAllByTestId("product").each(($value, index) => {
      if (index === 0) {
        cy.wrap($value).click();
        cy.url().should("include", "/asuransi/jiwa/tanpa-pengembalian-premi");
      }
    });
  });
});
