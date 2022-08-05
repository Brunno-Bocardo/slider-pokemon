const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  //remove o .selecionado do cartão anterior
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function () {
  //condição de segurança
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();
  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function () {
  //condição de segurança
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();
  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");
});
