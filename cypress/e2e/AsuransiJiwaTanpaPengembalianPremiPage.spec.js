describe("Asuransi Jiwa Tanpa Pengembalian Premi Page", () => {
  const route = "/asuransi/jiwa/tanpa-pengembalian-premi";

  it("it have path /asuransi/jiwa/tanpa-pengembalian-premi", () => {
    cy.visit(route);
    cy.url().should("include", route);
  });

  it("I can see a form of cari produk", () => {
    cy.get("#cari-produk").should("be.visible");
  });

  it("It have a required field of birth of date with typeof date with label tanggal lahir", () => {
    cy.get("#birthDate").should("be.visible");
    cy.get("#birthDate").should("have.attr", "type", "date");
    cy.get("#birthDate").should("have.attr", "required");
    cy.get("#birthDate")
      .parent()
      .parent()
      .find("label")
      .should("have.text", "Tanggal Lahir");
  });

  it("It have two buttons with values PRIA and WANITA", () => {
    cy.findAllByTestId("gender").should("have.length", 2);
    cy.findAllByTestId("gender").each(($value, index) => {
      if (index === 0) {
        expect($value.text()).to.match(/PRIA/i);
      } else if (index === 1) {
        expect($value.text()).to.match(/WANITA/i);
      }
    });
  });
  it("it have button cari produk with label cari produk", () => {
    cy.findByRole("button", { name: /Cari Produk/i }).should("be.visible");
  });

  it("if i not fill the form the button will be disabled", () => {
    cy.findByRole("button", { name: /Cari Produk/i }).should(
      "have.class",
      "btn-disabled"
    );
  });

  it("if i fill the form and i click the button will be navigate to the route '/asuransi/jiwa/info/produk' ", () => {
    cy.get("#birthDate").type("1997-10-12");
    cy.findByRole("button", { name: /PRIA/i }).click();
    cy.findByRole("button", { name: /Cari Produk/i }).should(
      "not.have.class",
      "btn-disabled"
    );
    cy.findByRole("button", { name: /Cari Produk/i }).click();
    cy.url().should(
      "include",
      "asuransi/jiwa/info/produk?birthdate=1997-10-12&gender=MALE"
    );
  });
});
