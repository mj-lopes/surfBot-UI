export default class ScrollSuave {
  constructor(linksInternos) {
    this.linksInternos = document.querySelectorAll(linksInternos);

    this.scrollarAteASessao = this.scrollarAteASessao.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  scrollarAteASessao(event) {
    event.preventDefault();
    const hrefSessao = event.currentTarget.getAttribute("href");
    const sessao = document.querySelector(hrefSessao);

    sessao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  adicionarEventos() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollarAteASessao);
    });
  }

  init() {
    this.adicionarEventos();
  }
}
