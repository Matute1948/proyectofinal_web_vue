<template>

    <div class="contenedor-principal">
        <h1>Actualizar datos</h1>

        <div class="formulario-container">
            <ClienteFormularioEmpl
                ref="clienteFormulario"
                v-model:apellido="cliente.apellido" 
                v-model:nombre="cliente.nombre"
                v-model:cedula="cliente.cedula" 
                v-model:fechaNacimiento="cliente.fechaNacimiento"
                v-model:genero="cliente.genero" 
            />
            <div class="boton-container">
                <Boton textoBoton="Actualizar" @click="actualizarCliente(this.$route.params.id)" />
                <Boton textoBoton="Regresar" @click="regresar" />
            </div>
            <p v-if="mensaje" class="success-message">{{ mensaje }}</p>
        </div>
    </div>
</template>

<script>

import ClienteFormularioEmpl from '../components/ClienteFormularioEmpl.vue';
import Boton from '../components/Boton.vue';

import { actualizarClienteFachada, buscarIdClienteFachada } from '../clients/ClienteEmpleado.js';

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
        async actualizarCliente(id) {

            const data = await actualizarClienteFachada(this.cliente, id);
            console.log(data);
            this.mensaje = '¡Felicitaciones! Se actualizó correctamente el usuario.';
            setTimeout(() => {
                this.mensaje = '';
                this.regresar();
            }, 4000);
        },
        regresar() {
            console.log('Regresar ***************************');
            this.$router.go(-1);
        }
    },
    async created() {
        // Obtener el ID del cliente de los parámetros de la ruta
        const clienteId = this.$route.params.id;
        console.log(clienteId);
        // Obtener los datos del cliente (puedes adaptar esta función según tu API)
        this.cliente = await buscarIdClienteFachada(clienteId);
        //Colocar datos en el formulario
        this.$refs.clienteFormulario.ponerDatos(this.cliente);

    },

}

</script>

<style scoped>
.contenedor-principal {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    margin: 20px;
}

.success-message {
    margin-top: 20px;
    padding: 10px;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    border: 1px solid #c3e6cb; /* Agregado para mejorar visibilidad */
}

h1 {
    text-align: center;
    color: #333;
}
</style>