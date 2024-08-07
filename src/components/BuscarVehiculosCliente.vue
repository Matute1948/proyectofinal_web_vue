<template>
    <div class="buscar-container">
      <form @submit.prevent="buscarVehiculos">
        <div>
          <label>Marca:</label>
          <input type="text" v-model="marca" required>
        </div>
        <div>
          <label>Modelo:</label>
          <input type="text" v-model="modelo" required>
        </div>
        <button type="submit">Buscar</button>
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
  import { buscarPorMarcaYModeloFachada} from '../clients/vehiculos.js';
  
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
      async buscarVehiculos() {
        try {
          this.vehiculos = await buscarPorMarcaYModeloFachada(this.marca, this.modelo);
        } catch (error) {
          //console.error(error);
          this.mensajeError = 'Error al buscar vehículos. Asegúrate de que la marca y el modelo sean correctos.';
        }
      },
      cerrarMensajeError() {
        this.mensajeError = '';
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px 10px;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    border: solid 1px black;
    background-color: black;
    color: white;
  }
  
  button:hover {
    background: rgb(82, 82, 82);
    color: rgb(255, 255, 255);
  }
  
  /* Estilos generales del contenedor */
  .buscar-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f9fafb;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos del formulario */
  .buscar-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input[type="text"]:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
  }
  
  /* Estilos de la tabla */
  .resultados-container {
    margin-top: 2rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  /* Estilos del mensaje de error */
  .mensaje-error {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid red;
    background-color: #f8d7da;
    color: #721c24;
    border-radius: 4px;
  }
  
  .mensaje-error p {
    margin: 0;
  }
  </style>
  