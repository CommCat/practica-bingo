import "../css/style.css";

import { shuffle } from "./utils";

const cartonJugador1 = [];
const cartonJugador2 = [];

const numerosEnElBombo = [];
const numerosQueHanSalido = [];

function crearCarton() {
  const allNums = Array(90)
    .fill(0)
    .map((x, i) => i + 1);

  return shuffle(allNums).slice(0, 15);
}

function pintarCartonEnDOM(arrayDeNumeros) {
  // aqui gestionamos la logica de pintar el HTML en el DOM
}

function pintarNumeroEnDOM(numero) {}

function sacarNumeroDelBombo() {}

function comprobarGanador(cartonJugador, numerosQueHanSalido) {}

