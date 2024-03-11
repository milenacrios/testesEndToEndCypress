describe("API Alura PIC", () => {
  /**
   * it("Dados da API", () => {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/");
    cy.request({
      method: "POST",
      url: "https://3076-cypress-alurapic-front.vercel.app/#/home",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("id");
      expect(res.body.id).to.be.equal(4);
    });
     });
   */
  it("Fotos do usuário", () => {
    const tempoEsperado = Math.random() * 50;
    cy.request({
      method: "GET",
      url: "https://alurapic-api.onrender.com/gamora/photos?page=1",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("description");
      //expect(res.body[0].desciption).to.be.equal("print");
      expect(res.duration).to.be.lte(tempoEsperado);
    });
  });
});
