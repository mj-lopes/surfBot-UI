import ScrollSuave from "./scrollSuave";
import HandleInputForm from "./handleForm";

const scrollSection = new ScrollSuave('.menu-nav a[href^="#"]');
scrollSection.init();

const scrollParaMapa = new ScrollSuave("a[href='#mapa']");
scrollParaMapa.init();

const puxaDadosFormulario = new HandleInputForm(
  'form[id="formulario-vendas"]',
  "email",
);
puxaDadosFormulario.init();
