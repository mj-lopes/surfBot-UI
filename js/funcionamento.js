export default class Funcionamento {
  constructor(dia, horario, elemento) {
    this.dias = document.querySelector(dia);
    this.horario = document.querySelector(horario);
    this.elemento = document.querySelector(elemento);
    this.agora = new Date();
  }

  funcionandoNoDia() {
    // verifica se o dia atual na semana está presente no atributo data-dia (5 - sex ou 6 - sab)
    return this.horario.dataset.dia.includes(this.agora.getDay());
  }

  funcionandoNoHorario() {
    const horario = this.horario.dataset.horario.split(",");
    return (
      this.agora.getHours() >= +horario[0] &&
      this.agora.getHours() < +horario[1]
    );
  }

  estaAberto() {
    if (this.funcionandoNoDia() && this.funcionandoNoHorario()) {
      this.elemento.classList.add("aberto");
    } else {
      this.elemento.classList.remove("aberto");
    }
  }

  init() {
    this.estaAberto();
  }
}
