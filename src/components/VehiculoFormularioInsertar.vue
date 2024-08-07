<template>
  <div class="form-container">
    <h1>Insertar Vehículo</h1>
    <form @submit.prevent="insertarVehiculo">
      <div class="form-group">
        <label>Placa:</label>
        <input type="text" v-model="vehiculo.placa" required>
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
      <button type="submit">Insertar</button>
    </form>
    
    <div v-if="mensajeExito" class="mensaje-exito">
      <p>{{ mensajeExito }}</p>
      <button @click="cerrarMensajeExito">Aceptar</button>
    </div>
  </div>
</template>

<script>
import { agregarFachada } from '@/clients/vehiculos';

export default {
  data() {
    return {
      vehiculo: {
        placa: '',
        modelo: '',
        marca: '',
        anio: '',
        paisOrigen: '',
        cilindraje: 0,
        avaluo: 0,
        valorPorDia: 0
      },
      mensajeExito: ''  // Nuevo estado para el mensaje de éxito
    };
  },
  methods: {
    async insertarVehiculo() {
      try {
        const response = await agregarFachada(this.vehiculo);
        console.log('Vehículo insertado:', response);
        
        // Vaciar los campos del formulario
        this.vehiculo = {
          placa: '',
          modelo: '',
          marca: '',
          anio: '',
          paisOrigen: '',
          cilindraje: 0,
          avaluo: 0,
          valorPorDia: 0
        };

        // Mostrar mensaje de éxito
        this.mensajeExito = 'Vehículo insertado exitosamente.';
      } catch (error) {
        console.error('Error al insertar el vehículo:', error);
        // Aquí puedes agregar lógica adicional para manejar errores
      }
    },
    cerrarMensajeExito() {
      this.mensajeExito = '';
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
}

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
  cursor: pointer;
}

/* Estilos para el mensaje de éxito */
.mensaje-exito {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid green;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
}

.mensaje-exito p {
  margin: 0;
}

.mensaje-exito button {
  background-color: #28a745;
  margin-top: 1rem;
}
</style>
