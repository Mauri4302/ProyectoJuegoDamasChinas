<?php

$conexion = mysqli_connect('localhost', 'root','','juegodamas')
or die(mysql_error($mysqli));

borrarFichas($conexion);

if (isset($_POST['tablero'])) {
  $tablero = $_POST['tablero'];
  echo $tablero."KM";
  insertar($conexion,$tablero);
}

function insertar($cnx,$array){
  for ($i=0; $i < sizeof($array); $i++) {
    $cajaColor = $array[$i]['cajaColor'];
    $fichaColor = $array[$i]['fichaColor'];
    $campo = $array[$i]['campo'];
    $fila = $array[$i]['fila'];
    $columna = $array[$i]['columna'];
    
    $consulta = "INSERT INTO fichas
      VALUES ('$cajaColor','$fichaColor','$campo','$fila','$columna')";
      mysqli_query($cnx, $consulta);
  
  }

}

insertar($conexion);
function borrarFichas($cnx){
  $consulta = "DELETE FROM fichas";
  mysqli_query($cnx, $consulta);
}

echo 'done';
// echo json_encode($tablero);

?>