<template>
  <NavBarVue />
  <NavBarClienteVue />
  <NavBarEmpleadoVue />

  <div class="texto-container">

    <img src="../image/Logo.png" alt="Logo de Budget" class="logo">
    <div class="info-container">
      <h1> Bienvenidos</h1>
      <p>
        Bienvenidos a nuestro concesionario de autos. Ofrecemos una amplia variedad de vehículos para satisfacer todas
        tus
        necesidades de transporte. Nuestro sistema de reservas en línea te permite buscar, reservar y gestionar tus
        alquileres de manera fácil y rápida.
      </p>
      <p>
        Esta página ha sido desarrollada por Lugmaña Andres, Narvaez Anthony, Rivas Diego, Andrade Dennisse y Ocapana
        Josue.
      </p>
    </div>

  </div>


</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import NavBarClienteVue from '@/components/NavBarCliente.vue'
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue'
export default {
  components: {
    NavBarVue,


  }

}
</script>

<style>

.info-container {
  width: 900px;

}
h1 {
  font-size: 3rem;
  color: #2c3e50;
}

p {
  font-size: 2rem;
  color: #34495e;
}

.texto-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.4); 
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.logo {
  width: 500px;
  height: auto;
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
img {
  width: 600px; 
  height: auto;
  margin-top: 20px;
  border-radius: 5px; 
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.4); 
}
</style>