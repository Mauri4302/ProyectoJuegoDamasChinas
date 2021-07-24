var filas = 8;
var columnas = 8;
var matriz = new Array(filas);
var tablero = new Array();
var jugadores = new Array();
var jugador = new Array();

//CREA LA MATRIZ PARA PODER USARLA
function crearMatriz() {
  for (var i = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
  }
}

//ME GENERA LA MATRIZ DE LOS JSON
function generarMatriz() {
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (i % 2 == 0) {
        if (j % 2 == 1) {
          // matriz[i][j]=2;
          var contenido = {
            cajaColor: 2,
            fichaColor: null,
            campo: "disponible",
            fila:i,
            columna:j
          };
          matriz[i][j] = contenido;
          // matriz[i][j].push(contenido);
        }
        else {
          matriz[i][j] = ''; //Se puede agregar un cero
        }
      } else if (i % 2 == 1) {
        if (j % 2 == 0) {
          // matriz[i][j]=2;
          var contenido = {
            cajaColor: 2,
            fichaColor: null,
            campo: "disponible",
            fila:i,
            columna:j
          };
          matriz[i][j] = contenido;
          
        }
         else {
          matriz[i][j] = '';//Se puede agregar un cero
        }
      }
    }
  }
}


//CREA LAS FICHAS BLANCAS
function crearFichasWhite() {
  var cont = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (cont < 12) {
        if (matriz[i][j].campo == 'disponible') {
          var contenido = {
            cajaColor: 2,
            fichaColor: 1,
            campo: "ocupado",
            fila:i,
            columna:j
          };
          matriz[i][j] = contenido;
          cont++;
        }
      } else {
        break;
      }
    }
  }
}


//CREA LAS FICHAS NEGRAS
function crearFichasBlack() {
  var cont = 0;
  for (let i = matriz.length - 1; i >= 0; i--) {
    for (let j = matriz[i].length - 1; j >= 0; j--) {
      if (cont < 12) {
        if (matriz[i][j].campo === 'disponible') {
          var contenido = {
            cajaColor: 2,
            fichaColor: 2,
            campo: "ocupado",
            fila:i,
            columna:j
          };
          matriz[i][j] = contenido;
          cont++; 
        }
          
      } else {
        break;
      }
    }
  }
}


//IMPRIME LA MATRIZ
function llenarTablero() {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      tablero.push(matriz[i][j]); 
    }
  }
  console.log(tablero);
}

crearMatriz();
generarMatriz();
crearFichasWhite();
crearFichasBlack();
llenarTablero();