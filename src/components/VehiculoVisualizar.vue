<template>
  <div class="form-container">
    <h1>Visualizar Vehículo</h1>
    <div v-if="vehiculo">
      <div class="form-group">
        <label>Placa:</label>
        <input type="text" v-model="vehiculo.placa" disabled>
      </div>
      <div class="form-group">
        <label>Modelo:</label>
        <input type="text" v-model="vehiculo.modelo" disabled>
      </div>
      <div class="form-group">
        <label>Marca:</label>
        <input type="text" v-model="vehiculo.marca" disabled>
      </div>
      <div class="form-group">
        <label>Año de fabricación:</label>
        <input type="text" v-model="vehiculo.anio" disabled>
      </div>
      <div class="form-group">
        <label>País de fabricación:</label>
        <input type="text" v-model="vehiculo.paisOrigen" disabled>
      </div>
      <div class="form-group">
        <label>Cilindraje:</label>
        <input type="number" v-model="vehiculo.cilindraje" disabled>
      </div>
      <div class="form-group">
        <label>Avalúo:</label>
        <input type="number" v-model="vehiculo.avaluo" disabled>
      </div>
      <div class="form-group">
        <label>Valor por día:</label>
        <input type="number" v-model="vehiculo.valorPorDia" disabled>
      </div>
      <div class="form-group">
        <label>Fechas de Reservas:</label>
        <table>
          <thead>
            <tr>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
            </tr>
          </thead>
          <tbody>
            <!-- Aquí se agregarán las filas de reservas -->
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <p>Cargando datos del vehículo...</p>
    </div>
  </div>
</template>

<script>
import { buscarPorPlacaFachada } from '../clients/vehiculos.js'; // Ajusta la ruta según sea necesario

export default {
  data() {
    return {
      vehiculo: null,
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
      }
    },
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table, th, td {
  border: 1px solid #ccc;
}

th, td {
  padding: 8px;
  text-align: left;
}
</style>
