<template>
  <div class="router-container">
    <router-link to="/" class="nav-link">Bienvenida</router-link>
 
    <div class="dropdown">
      <router-link to="/home/cliente" class="dropdown-link">Clientes</router-link>
    </div>
 
    <div class="dropdown">
      <router-link to="/home/empleado" class="dropdown-link">Empleados</router-link>
    </div>
 
    <router-link to="/home/empleado/reportes" class="nav-link">Reportes</router-link>
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
  border: solid 2px #333;
  background: #303030;
}
 
.nav-link,
.dropdown-link {
  color: #fff;
  margin: 0px 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
 
.nav-link:hover,
.dropdown-link:hover {
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
 
.dropdown-submenu {
  position: relative;
}
 
.dropdown-submenu .dropdown-content {
  top: 0;
  left: 100%;
}
 
.dropbtn {
  background: #303030;
  border: none;
  padding: 10px 20px;
  outline: none;
}
</style>