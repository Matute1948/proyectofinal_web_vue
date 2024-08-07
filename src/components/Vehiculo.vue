<template>
  <div class="vehiculo-page">
    <h1>Detalles del Vehículo</h1>
    <div v-if="vehiculo">
      <p><strong>Placa:</strong> {{ vehiculo.placa }}</p>
      <p><strong>Marca:</strong> {{ vehiculo.marca }}</p>
      <p><strong>Modelo:</strong> {{ vehiculo.modelo }}</p>
      <p><strong>Año:</strong> {{ vehiculo.anio }}</p>
      <p><strong>Avaluo:</strong> {{ vehiculo.avaluo }}</p>
      <p><strong>Cilindraje:</strong> {{ vehiculo.cilindraje }}</p>
      <p><strong>Estado:</strong> {{ vehiculo.estado }}</p>
      <p><strong>Pais de Origen:</strong> {{ vehiculo.paisOrigen }}</p>
      <p><strong>Precio por Dia:</strong> {{ vehiculo.valorPorDia }}</p>
    </div>
    <p v-else>No se encontraron detalles del vehículo.</p>

    <div>
      <router-link class="boton" to="/buscarVehiculos">Regresar</router-link>
    </div>
  </div>
</template>

<script>
import { buscarPorPlacaFachada } from "@/clients/clienteVehiculo.js";

export default {
  props: {
    placa: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      vehiculo: null,
      buscar: false,
    };
  },
  mounted() {
    this.obtenerDetallesVehiculo();
  },
  methods: {
    async obtenerDetallesVehiculo() {
      try {
        const respuesta = await buscarPorPlacaFachada(this.placa);
        this.vehiculo = respuesta.length ? respuesta[0] : null;
        this.buscar = true;
      } catch (error) {
        console.error("Error al obtener los detalles del vehículo:", error);
        this.vehiculo = null;
        this.buscar = true;
      }
    },
  },
};
</script>

<style scoped>
.vehiculo-page {
  padding: 20px;
}

.vehiculo-page p {
  font-size: 16px;
  margin-bottom: 10px;
}

.boton{
  border: solid 1 px black;
  border-radius: 4px;
  background: bisque;
}
</style>
