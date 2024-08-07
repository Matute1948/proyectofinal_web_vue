<template>
    <div class="router-container">
      <router-link to="/home/cliente">Bienvenida</router-link>
      <router-link to="/home/cliente/registro">Registrar</router-link>
      <router-link to="/home/cliente/buscar">Buscar Vehículos</router-link>
      <router-link to="/home/cliente/reservacion">Reservar Vehículo</router-link>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBarCliente'
  };
  </script>
  
  <style scoped>
   .router-container {
    padding: 20px 30px;
    border: solid 2px black;
    background: rgb(48, 48, 48);
    display: flex;
    flex-wrap: wrap;
  }
  
  .router-container a,
  .dropbtn {
    color: rgb(255, 255, 255);
    margin: 0px 20px;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
  }
  
  .router-container a:hover{
    color: rgb(0, 0, 0);
    background: rgb(255, 255, 255);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: underline;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgb(48, 48, 48);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: rgb(255, 255, 255);
    margin: 20px 10px;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    display: block;
  }
  
  .dropdown-content a:hover, .dropbtn:hover{
    color: rgb(0, 0, 0);
    background: rgb(255, 255, 255);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: underline;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  

  .dropbtn{
    background: rgb(48, 48, 48);
  }

  </style>
  