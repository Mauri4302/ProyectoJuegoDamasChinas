const fondo = document.getElementById('container');

let disponibles = [];
console.log(disponibles,"Global1");
let campo = [];
console.log(campo,"Global2");
function mostarTablero() {
    let cont = 8;
    let cont2 = 8;
    let tag = '';
    tag +='<div id="tablero">';
    tag += '<div class="n">';
    for (let k = cont; k >= 1; k--) {
        tag += '<span class="num">'+k+'</span>'     
    }
    tag += '</div>';
    tag +='<div class="arriba">';
    tag +='<span class="letras">H</span>';
    tag +='<span class="letras">G</span>';
    tag +='<span class="letras">F</span>';
    tag +='<span class="letras">E</span>';
    tag +='<span class="letras">D</span>';
    tag +='<span class="letras">C</span>';
    tag +='<span class="letras">B</span>';
    tag +='<span class="letras">A</span>';
    tag +='</div>';
    tag +='<div class="marco">';
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i]) {
            if (tablero[i].fichaColor === 1) {
                // tag += '<span id="hola" class="letra1" onclick="evento(this)"><img src="/imagenes/'+tablero[i].fichaColor+'.png" alt=""></span>';//'+tablero[i]+'  
                tag += `<span id="${tablero[i].fila}-${tablero[i].columna}" class="letra1" onclick="evento(this)"><img src="/imagenes/${tablero[i].fichaColor}.png" alt=""></span>`;//'+tablero[i]+'  
            }
            if (tablero[i].fichaColor === 2) {
                tag += `<span id="${tablero[i].fila}-${tablero[i].columna}" class="letra1" onclick="evento(this)"><img src="/imagenes/${tablero[i].fichaColor}.png" alt=""></span>`; //'+tablero[i]+' 
            }
            if (tablero[i].campo === "disponible") {
                let temp =3;
                tablero[i].fichaColor=temp;
                tag += `<span id="${tablero[i].fila}-${tablero[i].columna}" class="letra1" onclick="evento(this)"><img src="/imagenes/${tablero[i].fichaColor}.png" alt=""></img></span>`;  //<img src="/imagenes/3.png" alt=""></img>

            } 
        }
        else {
            tag += '<span class="letra2"><img src="/imagenes/4.png" alt="">'+tablero[i]+'</span>';
        }                
    }
    tag +='</div>';
    tag += '<div class="abajo">';
    tag +='<span class="l">A</span>';
    tag +='<span class="l">B</span>';
    tag +='<span class="l">C</span>';
    tag +='<span class="l">D</span>';
    tag +='<span class="l">E</span>';
    tag +='<span class="l">F</span>';
    tag +='<span class="l">G</span>';
    tag +='<span class="l">H</span>';
    tag +='</div>';
    tag += '<div class="m">';
    for (let j = 1; j <= cont2; j++) {
        tag += '<span class="ta">'+j+'</span>'     
    }
    tag += '</div>';
    tag += '</div>';
    return tag;
}

  function evento(comp) {
      let [fila,columna]=comp.id.split('-');
      fondo.innerHTML = '';
      fondo.innerHTML += mostarTablero();
    //comillas especiales ``
     disponibles = buscarCampos(parseInt(fila),parseInt(columna));
    for (let i = 0; i < disponibles.length; i++) {
        let element = document.getElementById(`${disponibles[i].i}-${disponibles[i].j}`);
        element.classList.add('border-red');
        console.log(element,"AT");
    }
  }

  function buscarCampos(fila,columna) {
      let disponible = [];
      console.log(disponible,'K');
      campo = matriz[fila][columna];
     console.log(campo,'H');
      if (campo.fichaColor == 1) {
         let diagonalDerecha = matriz[fila+1][columna+1];
         if (diagonalDerecha.campo === 'disponible') {
                 disponible.push({i:diagonalDerecha.fila,j:diagonalDerecha.columna});
                 console.log(disponible[0],"MJ"); 
                }
                else if(diagonalDerecha <tablero.length-1){ 
                    disponible.push({i:diagonalDerecha.fila-1,j:diagonalDerecha.columna-1});
                    console.log(disponible,"else");
         }
         let diagonalIzquierda = matriz[fila+1][columna-1];
         console.log(diagonalIzquierda,"DI");
         if (diagonalIzquierda.campo === "disponible") {
                 disponible.push({i:diagonalIzquierda.fila,j:diagonalIzquierda.columna}); 
                }
                else{
             disponible.push({i:diagonalIzquierda.fila-1,j:diagonalIzquierda.columna+1}); 

         }

      }
      else if (campo.fichaColor == 2) {
        let diagonalDerechaInversa = matriz[fila-1][columna-1];
         console.log(diagonalDerechaInversa);
         if (diagonalDerechaInversa.campo === 'disponible') {
            disponible.push({i:diagonalDerechaInversa.fila,j:diagonalDerechaInversa.columna}); 
         }
         let diagonalIzquierdaInversa = matriz[fila-1][columna+1];
         if (diagonalIzquierdaInversa.campo === "disponible") {
            disponible.push({i:diagonalIzquierdaInversa.fila,j:diagonalIzquierdaInversa.columna}); 
         }  
      }
    return disponible;
  }

  fondo.innerHTML += mostarTablero();