export default class AlteraValor {
  constructor(planos, planoAtivo, valorPlano, valorVenda) {
    this.planos = document.querySelectorAll(planos);
    this.valorVenda = document.querySelector(valorVenda);
    this.planoAtivo = planoAtivo;
    this.valorPlano = valorPlano;

    this.mudarValor = this.mudarValor.bind(this);
  }

  tratarValor() {
    const planoAtivo = document.querySelector(this.planoAtivo);
    const valorPlanoAtivo = planoAtivo.querySelector(this.valorPlano);

    return `${+valorPlanoAtivo.innerText.replace(",", ".")},00`;
  }

  mudarValor() {
    const novoValor = this.tratarValor();
    this.valorVenda.innerText = novoValor;
  }

  criarObservador() {
    const observer = new MutationObserver(this.mudarValor);
    this.planos.forEach((plano) => {
      observer.observe(plano, { attributes: true });
    });
  }

  init() {
    if (this.planos && this.valorVenda) {
      this.criarObservador();
      this.mudarValor();
    }
    return this;
  }
}
