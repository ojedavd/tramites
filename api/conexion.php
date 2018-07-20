<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","tramites");
  return $con;
}
?>