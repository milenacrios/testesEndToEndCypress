describe("Login user", () => {
  beforeEach(() => {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");

    cy.intercept(
      "POST",
      "https://3076-cypress-alurapic-front.vercel.app/#/home",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });
  it("Preencher os campos obrigatórios para login de um usuário", () => {
    cy.login("kamskmkamskamskmaskmas", "123abc123");
  });
  it("Verificar mensagens de campos obrigatórios", () => {
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });
  it("deve falhar mesmo que os campos sejam preenchidos corretamente", () => {
    cy.login("kamskmkamskamskmaskmas", "123abc123");
    cy.wait("@stubPost");
  });
});
