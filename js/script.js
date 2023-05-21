// PÁGINA DE JUEGOS

/* resultados y rondas */
let partidasGanadasJugador = 0;
let partidasGanadasComputadora = 0;
let i = 1

// PIEDRA, PAPEL O TIJERA

let juegoPPT = (nombreJugador) => {

    const nombreComputadora = "Computadora";

    for (i; ; i++) {
        let eleccionJugador = prompt(`${nombreJugador}, elige alguna de estas opciones: \n\n-Piedra \n-Papel \n-Tijera`).toLowerCase();
        

        while (eleccionJugador !== "piedra" && eleccionJugador !== "papel" && eleccionJugador !== "tijera") {
            eleccionJugador = prompt("Elige una opción válida:\n\n-Piedra \n-Papel \n-Tijera").toLowerCase();  
        }

        const opciones = ['piedra', 'papel', 'tijera'];
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];


        alert(`¡Haz elegido ${eleccionJugador}! \n
            La ${nombreComputadora} eligió ${eleccionComputadora}`);

        let resultado;

        if (eleccionJugador === eleccionComputadora) {
            resultado = 'Empataron';
        } else if ((eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
                    (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
                    (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')) {
            resultado = 'Ganaste';
            partidasGanadasJugador++;
        } else {
            resultado = 'Perdiste';
            partidasGanadasComputadora++;
        }

        if (partidasGanadasJugador === 3 || partidasGanadasComputadora === 3) {
            break;
        }

        alert(`${resultado} esta ronda!`);
            alert(`Ronda ${i + 1} \n\n
                ${nombreJugador}: ${partidasGanadasJugador} \n
                ${nombreComputadora}: ${partidasGanadasComputadora}`);

    }
    

    if (partidasGanadasJugador > partidasGanadasComputadora) {
        alert(`${nombreJugador} ganó el juego en ${i} rondas!!`);
    } else if (partidasGanadasJugador < partidasGanadasComputadora) {
        alert(`La ${nombreComputadora} ganó el juego en ${i} rondas!!`);
    };

}

// AHORCADO

let juegoA = (nombreJugador) => {

    let palabras = ["javascript", "codigo", "desarrolloweb", "programacion", "computadora"];

    let ronda = {
        palabra: "",
        ocultarPalabra: "",
        intentos: 10,
        letrasJugadas: [],
        estado: "jugando"
    }

    let adivinarPalabra = () => {
        let posicion = Math.floor(Math.random() * palabras.length);
        ronda.palabra = palabras[posicion];
        ronda.ocultarPalabra = "_ ".repeat(ronda.palabra.length).trim();
    }

    let actualizarPalabra = (letra) => {
        let nuevaPalabra = "";
        for (let i = 0; i < ronda.palabra.length; i++) {
          if (ronda.palabra[i] === letra) {
            nuevaPalabra += letra;
          } else {
            nuevaPalabra += ronda.ocultarPalabra[i];
          }
        }
        ronda.ocultarPalabra = nuevaPalabra;
      }

    let iniciar = () => {
        let palabra = adivinarPalabra();

        while (ronda.intentos > 0 && ronda.ocultarPalabra.includes("_")) {
            alert(`Palabra: ${ronda.ocultarPalabra}\nIntentos restantes: ${ronda.intentos}`);

            let letra = prompt("Ingresa una letra:").toLowerCase();

            while (!letra.match(/^[a-z]$/) || ronda.letrasJugadas.includes(letra)) {
                letra = prompt("Ingresa una letra válida sin repetirla").toLowerCase();
            }

            ronda.letrasJugadas.push(letra);
  
            if (ronda.palabra.includes(letra)) {
            actualizarPalabra(letra);
            } else {
            ronda.intentos--;
            }
        }

        if (ronda.intentos > 0) {
            ronda.estado = "ganado";
            alert(`¡Ganaste ${nombreJugador}! Has adivinado la palabra "${ronda.palabra}"`);
          } else {
            ronda.estado = "perdido";
            alert(`¡Perdiste ${nombreJugador}! La palabra correcta era "${ronda.palabra}"`);
          }
    }

    iniciar();
}


// INTRODUCCION

let juegos = ["Piedra, Papel o Tijera", "Ahorcado"]


let eleccionJuego = parseInt(prompt("Bienvenid@! \nElige alguno de los siguientes juegos: \n\n1. Piedra, Papel o Tijera  \n2. Ahorcado"));

while (eleccionJuego !== 1 && eleccionJuego !== 2) {
    eleccionJuego = parseInt(prompt("Elige una opción válida:\n\n1. Piedra, Papel o Tijera  \n2. Ahorcado")); 
}


let bienvenidaJuego = (eleccionJuego) => {
    alert(`Haz elegido jugar ${juegos[eleccionJuego - 1]} \n¡Suerte!`);

    let nombreJugador = "";
    while (nombreJugador === "") {
        nombreJugador = prompt("¿Cómo es tu nombre?");
        if (nombreJugador === "") {
            alert("Por favor, ingresa un nombre válido");
        }
    }

    if (eleccionJuego === 1){
        juegoPPT(nombreJugador);
    } else if (eleccionJuego === 2){
        juegoA(nombreJugador);
    }
}

bienvenidaJuego(eleccionJuego);

