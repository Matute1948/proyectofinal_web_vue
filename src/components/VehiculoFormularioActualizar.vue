<template>
  <div class="form-container">
    <h1>Actualizar Vehículo</h1>
    <div v-if="vehiculo">
      <form @submit.prevent="actualizarVehiculo">
        <div class="form-group">
          <label>Placa:</label>
          <input type="text" v-model="vehiculo.placa" disabled>
        </div>
        <div class="form-group">
          <label>Modelo:</label>
          <input type="text" v-model="vehiculo.modelo" required>
        </div>
        <div class="form-group">
          <label>Marca:</label>
          <input type="text" v-model="vehiculo.marca" required>
        </div>
        <div class="form-group">
          <label>Año de fabricación:</label>
          <input type="text" v-model="vehiculo.anio" required>
        </div>
        <div class="form-group">
          <label>País de fabricación:</label>
          <input type="text" v-model="vehiculo.paisOrigen" required>
        </div>
        <div class="form-group">
          <label>Cilindraje:</label>
          <input type="number" v-model="vehiculo.cilindraje" required>
        </div>
        <div class="form-group">
          <label>Avalúo:</label>
          <input type="number" v-model="vehiculo.avaluo" required>
        </div>
        <div class="form-group">
          <label>Valor por día:</label>
          <input type="number" v-model="vehiculo.valorPorDia" required>
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
    <div v-else>
      <p>Cargando datos del vehículo...</p>
    </div>
    <div v-if="mensajeError" class="mensaje-error">
      <p>{{ mensajeError }}</p>
      <button @click="cerrarMensajeError">Aceptar</button>
    </div>
  </div>
</template>

<script>
import { buscarPorPlacaFachada, actualizarFachada } from '../clients/vehiculos.js'; // Ajusta la ruta según sea necesario

export default {
  data() {
    return {
      vehiculo: null,
      mensajeError: ''
    };
  },
  async created() {
    const placa = this.$route.params.placa;
    if (placa) {
      await this.buscarVehiculo(placa);
    }
  },
  methods: {
    async buscarVehiculo(placa) {
      try {
        this.vehiculo = await buscarPorPlacaFachada(placa);
      } catch (error) {
        console.error(error);
        this.mensajeError = `Error al buscar el vehículo con placa ${placa}.`;
      }
    },
    async actualizarVehiculo() {
      try {
        await actualizarFachada(this.vehiculo);
        this.$router.push({ path: `/home/empleado` }); // Redirigir después de la actualización
      } catch (error) {
        console.error(error);
        this.mensajeError = `Error al actualizar el vehículo con placa ${this.vehiculo.placa}.`;
      }
    },
    cerrarMensajeError() {
      this.mensajeError = '';
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"] {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.mensaje-error {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid red;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
}
</style>
