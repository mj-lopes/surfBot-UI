export default class HandleInputForm {
  constructor(formulario, campo) {
    this.formulario = document.querySelector(formulario);
    this.email = window.location.search;
    this.campo = campo;
  }

  tratamentoFormDado() {
    // pega o dado de window search e realiza os devidos tratamento para tornar um
    // valor de campo de email válido
    let dado = this.email;
    dado = dado.split("=")[1].replace("%40", "@");
    return dado;
  }

  colocarDadoForm() {
    // seleciona o campo correspondente no formulario passado
    const campoFormulario = this.formulario.elements[this.campo];
    // Seta no campo o dado tratado de window search
    campoFormulario.value = this.tratamentoFormDado();
  }

  init() {
    // verifica se existe um formulario com o valor e se o valor de
    // windows search não é vazio
    if (this.formulario && this.email) {
      this.colocarDadoForm();
    }
    return this;
  }
}
