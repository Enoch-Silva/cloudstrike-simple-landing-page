const button = document.querySelector("#ent-btn");
const modal = document.querySelector(".caixa-entrar");
const buttonClose = document.querySelector(".btn-close");

button.onclick = function () {
  modal.show();
};

buttonClose.onclick = function () {
  modal.close();
};
 


