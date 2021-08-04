export default class ExibirFormCartao {
  constructor(containerCartao, inputVisualizacao, listaInputs) {
    this.container = document.querySelector(containerCartao);
    this.inputVisualizacao = document.querySelector(inputVisualizacao);
    this.listaInputs = document.querySelectorAll(listaInputs);

    console.log(this.listaInputs);

    this.mostrarCartao = this.mostrarCartao.bind(this);
    this.inputsAddEventListener();
  }

  mostrarCartao(event) {
    if (event.target.contains(this.inputVisualizacao)) {
      this.inputVisualizacao.checked = true;
      this.container.classList.add("ativo");
    } else {
      this.inputVisualizacao.checked = false;
      this.container.classList.remove("ativo");
    }
  }

  inputsAddEventListener() {
    this.listaInputs.forEach((input) => {
      input.addEventListener("click", this.mostrarCartao);
    });
  }
}
