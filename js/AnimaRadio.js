export default class AnimaRadio {
  constructor(formularioSelecao, radioFormNome, listaPlanos) {
    this.radioNome = radioFormNome;
    this.form = document.querySelector(formularioSelecao);
    this.planos = document.querySelectorAll(listaPlanos);

    this.animarElemento = this.animarElemento.bind(this);
  }

  pegarCamposRadio() {
    return this.form.elements[this.radioNome];
  }

  handleClickRadio() {
    const camposRadio = this.pegarCamposRadio();
    camposRadio.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.animarElemento(index);
      });
    });
  }

  animarElemento(posicaoElemento) {
    const camposRadio = this.pegarCamposRadio();

    this.planos.forEach((plano) => {
      plano.classList.remove("ativo");
    });

    this.planos[posicaoElemento].classList.add("ativo");
    camposRadio[posicaoElemento].checked = "true";

    this.planoAtivo = this.planos[posicaoElemento];
  }

  init() {
    if (this.form && this.radioNome && this.planos) {
      this.animarElemento(1);
      this.handleClickRadio();
    }
    return this;
  }
}
