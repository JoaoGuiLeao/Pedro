// Variaveis
let n1 = 0;
let n2 = 0;
let n3 = 0;
let resposta = "nada";
let respostaC = "nada";
let verificar = false;
let h1t = document.querySelector(".acertos");
let foto = document.querySelector(".img");
let perg = document.querySelector("#bt");
let menu = document.querySelector("#menu");
let acertos = 0;
h1t.innerHTML = `Pontos:${acertos}`;
// Pergunta
function pergunta() {
  n1 = Math.random() * 10;
  n2 = Math.random() * 10;
  n3 = Math.random() * 10;
  n1 = Math.round(n1);
  n2 = Math.round(n2);
  n3 = Math.round(n3);
  if (n1 === 0) {
    n1++;
  }
  if (n2 === 0) {
    n2++;
  }
  if (n3 === 0) {
    n3++;
  }
  resposta = prompt(`${n1} + ${n2} + ${n3}`);
  respostaC = n1 + n2 + n3;
  verificar = respostaC == resposta;
  if (verificar === true && resposta != "") {
    certo();
    foto.style.height = "350px";
    foto.style.width = "350px";
    foto.style.border = "solid black 4px";
    foto.style.backgroundColor = "rgb(109, 250, 139)";
    foto.src = "acerto.png";
    acertos++;
    h1t.innerHTML = `Pontos:${acertos}`;
  } else if (verificar === false && resposta != "") {
    errado();
    foto.style.height = "350px";
    foto.style.width = "350px";
    foto.style.border = "solid black 4px";
    foto.style.backgroundColor = "rgb(255, 150, 127)";
    foto.src = "erro.png";
    acertos--;
    h1t.innerHTML = `Pontos:${acertos}`;
  } else {
    falta();
    foto.style.height = "350px";
    foto.style.width = "350px";
    foto.style.border = "solid black 4px";
    foto.style.backgroundColor = "rgb(251, 255, 127)";
    foto.src = "falta.png";
  }
}
function certo() {
  document.body.style.backgroundColor = "rgb(121, 252, 150)";
  menu.style.backgroundColor = "rgb(109, 250, 139)";
  h1t.style.backgroundColor = "rgb(101, 250, 133)";
  perg.style.backgroundColor = "rgb(101, 250, 133)";
}
function errado() {
  document.body.style.backgroundColor = "rgb(255, 179, 159)";
  menu.style.backgroundColor = "rgb(255, 150, 127)";
  h1t.style.backgroundColor = "#f38067";
  perg.style.backgroundColor = "#f38067";
}
function falta() {
  document.body.style.backgroundColor = "rgb(248, 251, 158)";
  menu.style.backgroundColor = "rgb(251, 255, 127)";
  h1t.style.backgroundColor = "#faff5c";
  perg.style.backgroundColor = "#faff5c";
}
