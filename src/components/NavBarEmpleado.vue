<template>
    <div class="router-container">
      <router-link to="/home/empleado">Bienvenida</router-link>
  
      <div class="dropdown">
        <button class="dropbtn">Empleados</button>
        <div class="dropdown-content">
          <router-link to="/home/empleado/registar">Registrar Cliente</router-link>
          <router-link to="/home/empleado/buscar">Buscar Cliente</router-link>
        </div>
      </div>
  
      <div class="dropdown">
        <button class="dropbtn">Vehículo</button>
        <div class="dropdown-content">
          <router-link to="/home/empleado/vehiculo/insertar">Insertar Vehículo</router-link>
          <router-link to="/home/empleado/vehiculo/buscar">Buscar Vehículo</router-link>
          <router-link to="/home/empleado/RetirarVehiculo">Retirar Vehículo</router-link>
        </div>
      </div>
  
      <router-link to="/home/empleado/reportes">Reporte de Reservas</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBarEmpelado'
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
    padding: 5px 10px;
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
  