<template>
  <div class="router-container">
    <router-link to="/home">Bienvenida</router-link>
    
    <div class="dropdown">
      <button class="dropbtn">Clientes</button>
      <div class="dropdown-content">
        <router-link to="/home/cliente/buscar">Buscar Vehículos Disponibles</router-link>
        <router-link to="/home/cliente/reservacion">Reservar Vehiculo</router-link>
        <router-link to="/home/cliente/registro">Registrarse como Cliente</router-link>
        <router-link to="/home/cliente/registro">Actualizar datos Cliente</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Empleados</button>
      <div class="dropdown-content">
        <router-link to="/home/empleado/registar">Registrar Cliente</router-link>
        <router-link to="/home/empleado/buscar">Buscar Cliente</router-link>
        <div class="dropdown-submenu">
          <button class="dropbtn">Vehículos</button>
          <div class="dropdown-content">
            <router-link to="/home/empleado/vehiculo/insertar">Insertar Vehículo</router-link>
            <router-link to="/home/empleado/vehiculo/buscar">Buscar Vehículo</router-link>
            <router-link to="/home/empleado/RetirarVehiculo">Retirar Vehículo Reservado</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown">
      <router-link to="/home/empleado/reportes">Reportes</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
.router-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 30px;
  border: solid 2px black;
  background: rgb(48, 48, 48);
}

.router-container a,
.dropbtn {
  color: rgb(255, 255, 255);
  margin: 0px 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
}

.router-container a:hover,
.dropdown-content a:hover,
.dropbtn:hover {
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

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu .dropdown-content {
  top: 0;
  left: 100%;
}

.dropbtn {
  background: rgb(48, 48, 48);
  border: none; /* Para quitar el borde del botón */
  padding: 10px 20px; /* Espaciado dentro del botón */
}
</style>
