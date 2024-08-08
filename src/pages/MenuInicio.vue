<template>
  <div class="app-container">
    <NavBarVue />
 
    <div class="texto-container">
      <img src="../image/Logo.png" alt="Logo de Budget" class="logo">
      <div class="info-container">
        <h1> Bienvenidos</h1>
        <p>
          Bienvenidos a nuestro concesionario de autos. Ofrecemos una amplia variedad de vehículos para satisfacer todas
          tus necesidades de transporte. Nuestro sistema de reservas en línea te permite buscar, reservar y gestionar
          tus alquileres de manera fácil y rápida.
        </p>
        <p>
          Esta página ha sido desarrollada por Lugmaña Andres, Narvaez Anthony, Rivas Diego, Andrade Dennisse y Ocapana
          Josue.
        </p>
      </div>
    </div>
  </div>
</template>
 
<script>
import NavBarVue from '@/components/NavBar.vue';
export default {
  components: {
    NavBarVue,
  }
}
</script>
 
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.router-container {
  width: 100%;
}
 
.texto-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px; /* Ajusta este valor según la altura de tus navbars */
  padding: 20px;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.4);
  max-width: 800px; /* Limita el ancho máximo del contenedor */
}
 
.logo {
  width: 100%;
  max-width: 300px; /* Tamaño más pequeño para la imagen */
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.4);
}
 
.info-container {
  width: 100%;
  max-width: 700px; /* Limita el ancho máximo del contenedor */
  text-align: center; /* Centra el texto */
}
 
h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
}
 
p {
  font-size: 1.4rem;
  color: #34495e;
  margin-bottom: 10px;
}
 
p:last-of-type {
  margin-top: 30px;
  font-style: italic;
  color: #555;
}
</style>