<template>
  <div>
    <h1>Retirar Vehículo Reservado</h1>
    <form @submit.prevent="retirarVehiculo">
      <label for="numReserva">Número de Reserva:</label>
      <input type="text" v-model="numReserva" id="numReserva" required />
      <button type="submit">Retirar</button>
    </form>
    <div v-if="mensaje">{{ mensaje }}</div>
  </div>
</template>

<script>
import { retirarVehiculoFachada } from '@/clients/reservas.js';

export default {
  data() {
    return {
      numReserva: '',
      mensaje: ''
    }
  },
  methods: {
    async retirarVehiculo() {
      try {
        // Retirar el vehículo
        const response = await retirarVehiculoFachada(this.numReserva);

        // Verificar la respuesta del servidor
        if (response.estado === 'E') {
          this.mensaje = 'El retiro esta LISTO';
        } else {
          this.mensaje = 'Vehículo retirado con éxito';
        }
      } catch (error) {
        console.error('Error al retirar vehículo Numero de Reserva Erroneo:', error);
        this.mensaje = `Error al retirar su vehiculo, revise bien su ticket de RESERVA RES123...`;
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
}

label, input, button {
  margin-bottom: 10px;
}
</style>