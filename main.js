(()=>{"use strict";class t{constructor(t){this.linksInternos=document.querySelectorAll(t),this.scrollarAteASessao=this.scrollarAteASessao.bind(this)}scrollarAteASessao(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}adicionarEventos(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollarAteASessao)}))}init(){this.adicionarEventos()}}new t('.menu-nav a[href^="#"]').init(),new t("a[href='#mapa']").init(),new class{constructor(t,e){this.formulario=document.querySelector(t),this.email=window.location.search,this.campo=e}tratamentoFormDado(){let t=this.email;return t=t.split("=")[1].replace("%40","@"),t}colocarDadoForm(){this.formulario.elements[this.campo].value=this.tratamentoFormDado()}init(){return this.formulario&&this.email&&this.colocarDadoForm(),this}}('form[id="formulario-vendas"]',"email").init()})();