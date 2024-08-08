<template>
  <div class="welcome-container">
    <div class="content">
      <h1>Bienvenidos Clientes</h1>
      <p>En esta aplicación podrás registrar, actualizar tu usuario, buscar y reservar autos.</p>
      <img src="../image/clientes.png" alt="Clientes" class="clientes-img">
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'WelcomeClientes'
}
</script>
 
 
<style scoped>
.welcome-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 75vh;
  margin-top: 10px; /* Ajusta este valor según la altura de tus navbars */
  padding: 20px;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.4);
}
 
.content {
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  max-width: 1000px;
 
}
 
h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
}
 
p {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 20px;
}
 
.clientes-img {
  width: 100%;
  max-width: 400px; /* Tamaño más pequeño para la imagen */
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>