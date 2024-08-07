<template>
    <div class="cliente-container">
        <h1 class="cliente-titulo">Datos del cliente {{ cliente.apellido }} {{ cliente.nombre }}</h1>
        <div class="informacion-container">
            <p>Apellido: {{ cliente.apellido }}</p>
            <p>Nombre: {{ cliente.nombre }}</p>
            <p>Cédula: {{ cliente.cedula }}</p>
            <p>Fecha de nacimiento: {{ cliente.fechaNacimiento }}</p>
            <p>Género: {{ cliente.genero }}</p>
        </div>
    </div>
    <div class="boton-container">
        <Boton textoBoton="Volver" @click="regresar" />
    </div>
</template>

<script>

import Boton from '../components/Boton.vue';
import ClienteFormularioEmpl from '../components/ClienteFormularioEmpl.vue';
import { buscarIdClienteFachada } from '../clients/ClienteEmpleado.js';

export default {
    components: {
        Boton,
        ClienteFormularioEmpl
    },
    data() {
        return {
            cliente: {
                apellido: '',
                nombre: '',
                cedula: '',
                fechaNacimiento: '',
                genero: ''
            }
        }
    },
    async created() {
        // Obtener el ID del cliente de los parámetros de la ruta
        const clienteId = this.$route.params.id;

        // Obtener los datos del cliente (puedes adaptar esta función según tu API)
        this.cliente = await buscarIdClienteFachada(clienteId);
    },

    methods: {
        regresar() {
            console.log('Regresar ***************************');
            this.$router.go(-1);
        }
    }
}

</script>
<style scoped>
.cliente-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.cliente-titulo {
    font-size: 1.8em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.informacion-container {
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.informacion-container p {
    margin: 10px 0;
    font-size: 1.1em;
    color: #555;
}

.informacion-container p strong {
    color: #000;
}

.boton-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>
