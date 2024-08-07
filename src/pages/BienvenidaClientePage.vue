<template>
    <div class="welcome-container">
      <div class="content">
        <h1>Bienvenidos Clientes</h1>
        <p>En esta aplicación podrás registrar, actualizar tu usuario, buscar y reservar autos.</p>
        <img src="../image/clientes.png" alt="Clientes">
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
    height: 85vh;
  }
  
  .content {
    background: rgba(112, 112, 112, 0.1);
    padding: 20px;
    border-radius: 10px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  img {
    width: 600px; 
    height: auto;
    margin-top: 20px;
    border-radius: 5px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); 
  }
  </style>
  