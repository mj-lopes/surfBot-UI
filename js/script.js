import ScrollSuave from "./scrollSuave";
import HandleInputForm from "./handleForm";
import Funcionamento from "./funcionamento";
import AnimaRadio from "./AnimaRadio";

const scrollSection = new ScrollSuave('.menu-nav a[href^="#"]');
scrollSection.init();

const scrollParaMapa = new ScrollSuave("a[href='#mapa']");
scrollParaMapa.init();

const puxaDadosFormulario = new HandleInputForm(
  'form[id="formulario-vendas"]',
  "email",
);
puxaDadosFormulario.init();

const funcionamento = new Funcionamento(
  "[data-dia]",
  "[data-horario]",
  ".funcionamento",
);

funcionamento.init();

const animacaoFormulario = new AnimaRadio(
  'form[id="form-tipo-plano"]',
  "plano",
  ".item-plano",
);
animacaoFormulario.init();
