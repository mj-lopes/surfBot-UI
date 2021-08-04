export default class FetchCep {
  constructor(idForm) {
    this.elementosFormulario = document.getElementById(idForm)
      ? document.getElementById(idForm).elements
      : "";
    this.cep = this.elementosFormulario.cep;

    this.chamarApi = this.chamarApi.bind(this);
  }

  preencherCampos(cep, uf, logradoudo, cidade) {
    this.elementosFormulario.cep.value = cep;
    this.elementosFormulario.estado.value = uf;
    this.elementosFormulario.endereco.value = logradoudo;
    this.elementosFormulario.cidade.value = cidade;
  }

  async fetchApiCep(cep) {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then((resp) => {
        this.preencherCampos(cep, resp.uf, resp.logradouro, resp.localidade);
      });
  }

  chamarApi() {
    this.fetchApiCep(this.cep.value);
  }

  cepAddEventListener() {
    this.cep.addEventListener("change", this.chamarApi);
  }

  init() {
    if (this.elementosFormulario) {
      this.cepAddEventListener();
    }
  }
}
