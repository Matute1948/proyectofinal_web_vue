<template>
  <div class="container">
    <div class="datos">
      <p type="Cédula:"><input v-model="cedula" type="text"></p>
      <p type="Placa:"><input v-model="placa" type="text"></p>
      <p type="Fecha de Inicio:"><input v-model="fechaDeInicio" type="date"></p>
      <p type="Fecha de Finalización:"><input v-model="fechaDeFin" type="date"></p>
    </div>
    <div class="boton">
      <button @click="guardar">Reservar</button>
    </div>
  </div>
</template>

<script>
import { agregarReservaFachada } from '@/clients/clienteReserva.js'

export default {
  data() {
    return {
      placa: '',
      cedula: '',
      fechaDeInicio: null,
      fechaDeFin: null,
    }
  },
  methods: {
    async guardar() {
      const bodyReserva = {
        placaVehiculo: this.placa,
        cedulaCliente: this.cedula,
        fechaDeInicio: this.fechaDeInicio,
        fechaDeFin: this.fechaDeFin
      }

      try {
        const response = await agregarReservaFachada(bodyReserva);
        console.log('Reserva creada con éxito:', response);

        if (response.exito) {
          // Guardar la placa en el almacenamiento local
          localStorage.setItem('placa', this.placa);

          // Mostrar mensaje de éxito
          alert(`Reserva creada con éxito: ${JSON.stringify(response)}`);
          
          // Redirigir a la página de pago
          this.$router.push('/home/cliente/pago');
        } else {
          // Mostrar mensaje de error con la fecha disponible
          alert(`Reserva no creada: ${response.mensaje}. Fecha disponible: ${response.fechaDisponible}`);
        }
      } catch (error) {
        console.error('Error al agregar reserva:', error);
        
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data.message}`);
        } else {
          alert('Error al crear la reserva. Por favor, inténtelo de nuevo.');
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.datos p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

p::before {
  content: attr(type);
  font-weight: bold;
  margin-right: 1rem;
}

input[type="text"], input[type="date"] {
  width: calc(100% - 120px);
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input[type="text"]:focus, input[type="date"]:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
}

.boton {
  text-align: center;
}

button {
  margin: 5px 10px;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  border: solid 1px black;
  background-color: black;
  color: white;
  cursor: pointer;
}

button:hover {
  background: rgb(82, 82, 82);
  color: rgb(255, 255, 255);
}
</style>
