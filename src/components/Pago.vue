<template>
  <div class="container">
    <div class="factura">
      <h2>Factura</h2>
      <table class="tabla">
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td>{{ subtotal | currency }}</td>
          </tr>
          <tr>
            <td>IVA:</td>
            <td>{{ iva | currency }}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{{ total | currency }}</td>
          </tr>
          <tr>
            <td>Fecha de Cobro:</td>
            <td>{{ fechaCobro }}</td>
          </tr>
        </tbody>
      </table>
      <p>
        Número de tarjeta:
        <input type="text" v-model="numeroTarjeta">
      </p>
      <button @click="generarPago">Registrar Pago</button>
    </div>
  </div>
</template>

<script>
import { obtenerResumenPorPlacaFachada, registrarPagoFachada } from '@/clients/clienteReserva.js'

export default {
  data() {
    return {
      fechaCobro: this.obtenerFechaActual(),
      placa: localStorage.getItem('placa') || '', // Obtener la placa del almacenamiento local
      subtotal: null,
      iva: null,
      total: null,
      numeroTarjeta: '',
      idReserva: null // Agregar esta propiedad
    }
  },
  methods: {
    async cargarDatos() {
      try {
        const resumen = await obtenerResumenPorPlacaFachada(this.placa);
        this.subtotal = resumen.valorSubtotal;
        this.iva = resumen.valorIVA;
        this.total = resumen.valorTotalAPagar;
        this.idReserva = resumen.id; // Asignar el ID de la reserva
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    },
    obtenerFechaActual() {
      const hoy = new Date();
      const año = hoy.getFullYear();
      const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // +1 porque los meses comienzan en 0
      const día = hoy.getDate().toString().padStart(2, '0'); // `padStart` para asegurar dos dígitos
      return `${año}-${mes}-${día}`; // Formato YYYY-MM-DD
    },
    async generarPago() {
      const bodyPago = {
        numeroTarjeta: this.numeroTarjeta,
        fechaCobro: this.fechaCobro,
        idReserva: this.idReserva // Usar el ID de la reserva
      }

      try {
        const response = await registrarPagoFachada(bodyPago);
        console.log('Pago registrado con éxito:', response);
        alert('Reserva realizada con éxito. Número de reserva: ' + response.idReserva);
      } catch (error) {
        console.error('Error al registrar el pago:', error);
        if (error.response && error.response.data) {
          alert(`Error al registrar el pago: ${error.response.data.message}`);
        } else {
          alert('Error al registrar el pago. Por favor, inténtelo de nuevo.');
        }
      }
    }
  },
  mounted() {
    this.cargarDatos();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.factura {
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.factura h2 {
  text-align: center;
  margin-bottom: 20px;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
}

.tabla td {
  padding: 10px;
  border: 1px solid #ddd;
}

.tabla td:first-child {
  font-weight: bold;
}

.tabla td:last-child {
  text-align: right;
}

.currency {
  font-weight: bold;
}
</style>
