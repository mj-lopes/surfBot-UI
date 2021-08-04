export default class ExibirContent {
  constructor(containerContent, inputVisualizacao, listaInputs) {
    this.container = document.querySelector(containerContent);
    this.inputVisualizacao = document.querySelector(inputVisualizacao);
    this.listaInputs = document.querySelectorAll(listaInputs);

    this.mostrarContent = this.mostrarContent.bind(this);
  }

  mostrarContent() {
    if (this.inputVisualizacao.checked === true) {
      this.container.classList.add("ativo");
    } else {
      this.container.classList.remove("ativo");
    }
  }

  inputsAddEventListener() {
    this.listaInputs.forEach((input) => {
      input.addEventListener("click", this.mostrarContent);
    });
  }

  init() {
    if (this.container && this.inputVisualizacao && this.listaInputs) {
      this.inputsAddEventListener();
    }
  }
}
