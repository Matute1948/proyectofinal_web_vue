<template>
  <div class="formulario-container">
    <h1>Retirar Vehículo Reservado</h1>
    <form @submit.prevent="retirarVehiculo">
      <p><label for="numReserva">Número de Reserva:</label></p>
      <p><input type="text" v-model="numReserva" id="numReserva" required /></p>
      <p><button type="submit">Retirar</button></p>
    </form>
    <div v-if="mensaje">{{ mensaje }}</div>
    <div v-if="vehiculo">
      <h2>Detalles del Vehículo</h2>
      <p><strong>Marca:</strong> {{ vehiculo.marca }}</p>
      <p><strong>Modelo:</strong> {{ vehiculo.modelo }}</p>
      <p><strong>Placa:</strong> {{ vehiculo.placaVehiculo }}</p>
      <p><strong>Estado:</strong> {{ vehiculo.estado }}</p>
    </div>
  </div>
</template>

<script>
import { retirarVehiculoFachada } from '@/clients/reservas.js';

export default {
  data() {
    return {
      numReserva: '',
      mensaje: '',
      vehiculo: null
    };
  },
  methods: {
    async retirarVehiculo() {
      try {
        // Retirar el vehículo
        const response = await retirarVehiculoFachada(this.numReserva);

        // Verificar la respuesta del servidor
        if (response.estado === 'E') {
          this.mensaje = 'El retiro está LISTO';
        } else {
          this.mensaje = 'Vehículo retirado con éxito';
        }

        // Almacenar los detalles del vehículo en el estado
        this.vehiculo = {
          marca: response.marca,
          modelo: response.modelo,
          placaVehiculo: response.placaVehiculo,
          estado: response.estado
        };
      } catch (error) {
        console.error('Error al retirar vehículo Numero de Reserva Erroneo:', error);
        this.mensaje = `Error al retirar su vehículo, revise bien su ticket de RESERVA RES123...`;
      }
    }
  }
};
</script>

<style scoped>
.formulario-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.formulario-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.formulario-container p {
  margin: 10px 0;
}

input,
button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button:hover {
  background-color: #0056b3;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 1em;
}

div {
  margin-top: 20px;
  text-align: center;
  color: red;
}
</style>
