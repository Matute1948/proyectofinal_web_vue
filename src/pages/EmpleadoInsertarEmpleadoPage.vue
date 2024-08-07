<template>
    <div class="contenedor-principal">
        <div class="titulo">
            <h1>Agregar Cliente</h1>
            <p>Ingrese los datos del cliente</p>
        </div>
        <div class="formulario-container">
            
            <ClienteFormularioEmpl ref="clienteFormulario" v-model:apellido="cliente.apellido" v-model:nombre="cliente.nombre"
                v-model:cedula="cliente.cedula" v-model:fechaNacimiento="cliente.fechaNacimiento"
                v-model:genero="cliente.genero" />
            <div class="boton-container">
                <Boton @click="insertarCliente" textoBoton="Insertar" />
            </div>

            <p v-if="mensaje" class="success-message">{{ mensaje }}</p>
        </div>
    </div>
</template>

<script>

import ClienteFormularioEmpl from '../components/ClienteFormularioEmpl.vue';
import Boton from '../components/Boton.vue';

import { guardarClienteFachada } from '../clients/ClienteEmpleado.js';

export default {
    data() {
        return {

            cliente: {
                apellido: '',
                nombre: '',
                cedula: '',
                fechaNacimiento: '',
                genero: ''
            },
            mensaje: ''

        }
    },
    components: {
        ClienteFormularioEmpl,
        Boton
    },
    methods: {
        async insertarCliente() {
            this.cliente.registro = 'E'
            console.log('Insertar cliente');
            const data = await guardarClienteFachada(this.cliente);

            this.mensaje = '¡Felicitaciones! Se ingresó correctamente el usuario.';

            setTimeout(() => {
                this.mensaje = '';
                // Emitir el evento para reiniciar el formulario
                this.$refs.clienteFormulario.reinicio();
            }, 3000);
        },


    }

}
</script>

<style scoped>
.contenedor-principal {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.titulo h1 {
    font-size: 2em;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
}

.titulo p {
    font-size: 1.2em;
    margin-bottom: 20px;
    text-align: center;
    color: #777;
}

.formulario-container {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.boton-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.success-message {
    margin-top: 20px;
    padding: 10px;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    border-radius: 5px;
    text-align: center;
}
</style>
