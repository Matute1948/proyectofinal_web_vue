<template>
  <div class="router-container">
    <router-link to="/home/cliente" class="nav-link">Bienvenida</router-link>
    <router-link to="/home/cliente/registro" class="nav-link">Registrar</router-link>
    <router-link to="/home/cliente/buscar" class="nav-link">Buscar Vehículos</router-link>
    <router-link to="/home/cliente/reservacion" class="nav-link">Reservar Vehículo</router-link>
    <router-link to="/" class="nav-link">Home</router-link>
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
  border: solid 2px #333;
  background: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}
 
.nav-link,
.dropbtn {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
 
.nav-link:hover,
.dropbtn:hover {
  color: #303030;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: underline;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
 
.dropdown {
  position: relative;
  display: inline-block;
}
 
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #303030;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}
 
.dropdown:hover .dropdown-content {
  display: block;
}
 
.dropdown-content .dropdown-link {
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  font-size: 16px;
  transition: background 0.3s ease;
}
 
.dropdown-content .dropdown-link:hover {
  background: #fff;
  color: #303030;
  border-radius: 5px;
  text-decoration: underline;
}
 
.dropbtn {
  background: #303030;
  border: none;
  outline: none;
}
</style>