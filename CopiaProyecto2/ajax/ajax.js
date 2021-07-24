function registrarFichas() {
    $.ajax({
      url:'///localhost/CopiaProyecto2/php/insertarFichas.php',
      type:'post',
      dataType:'json',
      data:{
        tablero:tablero
      }
    }).done(
      function(resp) {
        console.log(resp);
      }
    );
  }
  
//   function consultarFichas() {
//     $.ajax({
//       url:'//localhost/domino/php/consultarFichas.php',
//       type:'post',
//       dataType:'json'
//     }).done(
//       function(resp) {
//         console.log(resp);//llegada de los datos
//         baraja.innerHTML += agregarFichas(cargarFichas(resp,0));
//         divMesa.innerHTML += agregarFichas(cargarFichas(resp,-1));
//       }
//     );
//   }
  
//   function cargarFichas(tabla, ubicacion) {
//     array = new Array();
//     for (var i = 0; i < tabla.length; i++) {
//       if (tabla[i][3]==ubicacion) {
//         var ficha = {
//           id: tabla[i][0],
//           arriba: tabla[i][1],
//           abajo: tabla[i][2]
//         };
//         array.push(ficha);
//       }
//     }
//     return array;
//   }
  
//   consultarFichas();
  registrarFichas();