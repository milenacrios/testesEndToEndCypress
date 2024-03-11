import Register from "../support/pages/register/register-page";

describe("Página de cadastro", () => {
  beforeEach(() => {
    Register.accessRegisterPage();
  });

  const users = require("../fixtures/users.json");
  users.forEach((user) => {
    it("Preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
      Register.fillInForm();
      Register.sendForm();
    });
  });

  it("Preencher os campos do formulário de forma incorreta", () => {
    cy.contains("a", "Register now").click();
    cy.get('[data-test="btnRegister"]').click();
    cy.get('[data-test="btnRegister"]').click();

    cy.contains("Email is required!").should("be.visible");
    cy.contains("Full name is required!").should("be.visible");
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });
});
