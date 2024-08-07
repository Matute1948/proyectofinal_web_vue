<template>
  <div>
    <h1>Reporte de Reservas</h1>
    <form @submit.prevent="fetchReporteReservas">
      <label for="fechaInicio">Fecha de Inicio:</label>
      <input type="date" v-model="fechaInicio" required>
      <label for="fechaFin">Fecha de Fin:</label>
      <input type="date" v-model="fechaFin" required>
      <button type="submit">Consultar</button>
    </form>
    <div >
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
              <td>{{ reserva.valorTotalAPagar }}</td>
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
/* Estilo general para centrar el contenido */
div {
  text-align: center;
}

form {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: #f9f9f9;
}

th, td {
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
}

thead {
  background-color: #003366;
  color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #e6e6e6;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

thead th {
  font-weight: bold;
}

button {
  margin-left: 20px;
  background-color: #003366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #002244;
}
</style>