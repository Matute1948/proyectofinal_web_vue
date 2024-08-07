<template>
  <div class="buscar-container">
    <form @submit.prevent="buscarVehiculosModelo">
      <div class="modelo">
        <p type="Marca:"><input v-model="marca" type="text" placeholder="Marca" /></p>
        <p type="Modelo:"><input v-model="modelo" type="text" placeholder="Modelo" /></p>
        <div class="boton">
          <button type="submit">Buscar</button>
        </div>
      </div>
    </form>

    <div v-if="vehiculos.length">
      <h2>Resultados:</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Año de Fabricación</th>
            <th>Estado</th>
            <th>Valor por Día</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehiculo in vehiculos" :key="vehiculo.placa">
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.anio }}</td>
            <td>{{ vehiculo.estado }}</td>
            <td>{{ vehiculo.valorPorDia }}</td>
            <td>
              <button @click="irVisualizarVehiculo(vehiculo.placa)">Visualizar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="mensajeError" class="mensaje-error">
      <p>{{ mensajeError }}</p>
      <button @click="cerrarMensajeError">Aceptar</button>
    </div>
  </div>
</template>


<script>
import { buscarPorMarcaModeloFachada } from '../clients/vehiculos.js'; // Asegúrate de ajustar la ruta de importación

export default {
  data() {
    return {
      marca: '',
      modelo: '',
      vehiculos: [],
      mensajeError: ''
    };
  },
  methods: {
    async buscarVehiculosModelo() {
      try {
        this.vehiculos = await buscarPorMarcaModeloFachada(this.marca, this.modelo);
        if (this.vehiculos.length === 0) {
          this.mensajeError = 'No se encontraron vehículos.';
        } else {
          this.mensajeError = '';
        }
      } catch (error) {
        console.error(error);
        this.mensajeError = 'Error al buscar vehículos. Asegúrate de que la marca y modelo sean correctos.';
        this.vehiculos = [];
      }
    },
     irVisualizarVehiculo(placa) {
      this.$router.push({ path: `/vehiculo/visualizar/${placa}` });
    },
    cerrarMensajeError() {
      this.mensajeError = '';
    }
  }
};
</script>


<style scoped>

p::before{
  content: attr(type);
}
/* Estilos para el formulario */
form {
  margin-bottom: 20px;
}

/* Estilos para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

/* Estilos para los botones de la tabla */
button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos para el mensaje de error */
.mensaje-error {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid red;
  background-color: #f8d7da;
  color: #721c24;
}

.buscar-container {
  margin: 20px 40px;
}
</style>
