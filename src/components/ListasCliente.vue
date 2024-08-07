<template>
    <div class="contenedor-principal">
        <div class="busqueda-container">
            <input v-model="buscarApellido" type="text" placeholder="Buscar por apellido" class="input-busqueda">
            <Boton @click="buscarCliente" :disabled="isLoading" textoBoton="Buscar" class="boton-busqueda" />
        </div>

        <p v-if="mensaje" class="error-message">{{ mensaje }}</p>

        <div class="tabla-container">
            <table class="tabla-clientes">
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Nombre</th>
                        <th>Cédula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="cliente in this.clientes" :key="cliente.id">
                        <td>{{ cliente.apellido }}</td>
                        <td>{{ cliente.nombre }}</td>
                        <td>{{ cliente.cedula }}</td>
                        <td class="espacio-botones-container">
                            <div class="botones-container">
                                <Boton @click="ver(cliente.id)" textoBoton="Ver" />
                                <Boton @click="actualizar(cliente.id)" textoBoton="Actualizar" />
                                <Boton @click="eliminarCliente(cliente.id)" class="borrar" textoBoton="Eliminar" />
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
        <div>
            <Boton @click="regresar" textoBoton="Regresar" />
        </div>
    </div>
</template>

<script>

import Boton from './Boton.vue';
import { buscarListaClienteFachada, eliminarClienteFachada } from '../clients/ClienteEmpleado.js';

export default {
    components: {
        Boton
    },

    data() {
        return {
            buscarApellido: '',
            clientes: [],
            cedula: '',
            mensaje: '',
        };
    },

    methods: {
        async buscarCliente() {
            this.mensaje = '';
            if (!this.buscarApellido) {
                this.mensaje = 'Por favor, ingrese un apellido para buscar.';
                this.clientes = [];
                return;
            }
            const data = await buscarListaClienteFachada(this.buscarApellido);

            if (data.length === 0) {
                this.mensaje = 'No se encontraron clientes con ese apellido.';
                this.clientes = [];
            } else {
                this.clientes = data;
            }
        },

        async eliminarCliente(id) {
            this.mensaje = 'Se eliminó correctamente el cliente.';
            console.log(id);
            const data = await eliminarClienteFachada(id);
            setTimeout(() => {
                this.buscarCliente();
            }, 750);
            
        },

        ver(idC) {
            console.log("ver cliente");
            this.$router.push({ name: 'verClienteE', params: { id: idC } });
        },

        actualizar(idC) {
            console.log("ACTUALIZAR cliente");
            this.$router.push({ name: 'actualizarClienteE', params: { id: idC } });
        },
        regresar() {
            console.log('Regresar ***************************');
            this.$router.go(-1);
        }
    }
}

</script>

<style scoped>
.error-message {
    color: #d9534f;
    /* Color rojo para el mensaje */
    background-color: #f2dede;
    /* Fondo claro para el mensaje */
    border: 1px solid #ebccd1;
    /* Borde color claro */
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    margin: 10px 0;
    font-weight: bold;
    /* Negrita para resaltar el texto */
}

.contenedor-principal {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fcfcfc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.busqueda-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.input-busqueda {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    margin-right: 10px;
}

input {
    margin: 5px 0px;
    padding: 10px 20px;
    border-radius: 5px;
    border: solid 1px black;
}

.tabla-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: center;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2
}

th {
    background-color: #464646;
    color: white;
}

.botones-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.espacio-botones-container {
    width: 400px;
}
</style>