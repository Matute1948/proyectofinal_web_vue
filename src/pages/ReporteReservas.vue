<template>
  <div class="formulario-container">
    <h1>Reporte de Reservas</h1>
    <form @submit.prevent="fetchReporteReservas" class="form-horizontal">
      <div class="form-group">
        <label for="fechaInicio">Fecha de Inicio:</label>
        <input type="date" v-model="fechaInicio" required>
      </div>
      <div class="form-group">
        <label for="fechaFin">Fecha de Fin:</label>
        <input type="date" v-model="fechaFin" required>
      </div>
      <button type="submit">Consultar</button>
    </form>
    <div v-if="mostrarTabla" class="tabla-container">
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Estado</th>
            <th>Placa del Vehículo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Nombre del Cliente</th>
            <th>Cédula del Cliente</th>
            <th>Valor Subtotal</th>
            <th>Valor IVA</th>
            <th>Valor Total a Pagar</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="reservas.length > 0">
            <tr v-for="reserva in reservas" :key="reserva.id">
              <td>{{ reserva.id }}</td>
              <td>{{ reserva.fechaDeInicio }}</td>
              <td>{{ reserva.fechaDeFin }}</td>
              <td>{{ reserva.estado }}</td>
              <td>{{ reserva.placaVehiculo }}</td>
              <td>{{ reserva.marca }}</td>
              <td>{{ reserva.modelo }}</td>
              <td>{{ reserva.nombreCliente }}</td>
              <td>{{ reserva.cedulaCliente }}</td>
              <td>{{ reserva.valorSubtotal }}</td>
              <td>{{ reserva.valorIVA }}</td>
              <td class="valor-total">{{ reserva.valorTotalAPagar }}</td>
            </tr>
          </template>
          <template v-if="reservas.length === 0">
            <tr>
              <td colspan="12">No se encontraron reservas para la fecha solicitada</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { obtenerReporteReservasFachada } from '@/clients/reservas';

export default {
  data() {
    return {
      fechaInicio: '',
      fechaFin: '',
      reservas: [],
      mostrarTabla: false
    };
  },
  methods: {
    async fetchReporteReservas() {
      try {
        const formattedFechaInicio = this.formatDate(this.fechaInicio);
        const formattedFechaFin = this.formatDate(this.fechaFin);

        console.log('Fecha de Inicio:', formattedFechaInicio);
        console.log('Fecha de Fin:', formattedFechaFin);

        const response = await obtenerReporteReservasFachada(formattedFechaInicio, formattedFechaFin);

        if (response && Array.isArray(response)) {
          this.reservas = response;
        } else {
          this.reservas = [];
        }

        this.mostrarTabla = true;
        console.log('Datos de reservas:', this.reservas);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
      }
      return '';
    }
  }
};
</script>

<style scoped>
.formulario-container {
  max-width: 800px;
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

.form-horizontal {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  flex: 1;
}

form button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  background-color: #003366;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #002244;
}

form button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 1em;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.tabla-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: #f9f9f9;
}

th, td {
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
}

thead {
  background-color: #003366;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: #e6e6e6;
}

tbody tr:nth-child(odd) {
  background-color: white;
}

thead th {
  font-weight: bold;
}

.valor-total {
  color: red;
}
</style>
