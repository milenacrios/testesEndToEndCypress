import { ELEMENTS as el } from "./elements";

class Register {
  accessRegisterPage() {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/");
    cy.get(el.registerNow).click();
  }
  fillInForm() {
    cy.get(el.email).type(user.email);
    cy.get(el.fullName).type(user.fullName);
    cy.get(el.registerUserName).type(user.userName);
    cy.get(el.registerPassword).type(user.password);
  }
  sendForm() {
    cy.get(el.btnRegister).click();
  }
}

export default new Register();
