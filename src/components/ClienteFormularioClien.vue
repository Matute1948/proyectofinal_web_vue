<template>
    
    <div class="container">

        <div class="cliente-container">
            <div>
                <label for="cedula">Cédula:</label>
                <input type="text" v-model="cliente.cedula" placeholder="Cedula" id="cedula" required />
            </div>
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" v-model="cliente.nombre" placeholder="Nombre" />
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input type="text" v-model="cliente.apellido" placeholder="Apellido" />
            </div>
            <div>
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" v-model="cliente.fechaNacimiento" placeholder="Fecha de Nacimiento" />
            </div>
            <div class="genero">
                <label for="genero">Género:</label>
                <select v-model="cliente.genero">
                    <option value="" disabled selected class="opaco">--Género--</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                </select>
            </div>
            <button type="button" @click="agregarCliente">Registrarse</button>
            <button type="button" @click="actualizarCliente">Actualizar</button>
            <div v-if="mensaje">
                <p>{{ mensaje }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { agregarFachada, actualizarFachada } from '@/clients/cliente.js';
export default {
    data() {
        return {
            cliente: {
                cedula: null,
                nombre: null,
                apellido: null,
                fechaNacimiento: null,
                genero: null
            },
            mensaje: ''
        };
    },
    methods: {
        async agregarCliente() {
            console.log(this.cliente.cedula);
            const data = await agregarFachada(this.cliente);
            console.log(data);
            this.mensaje = 'Registro de cliente exitoso';

        },
        async actualizarCliente() {
            const clienteBody =
            {
                nombre: this.cliente.nombre,
                apellido: this.cliente.apellido,
                fechaNacimiento: this.cliente.fechaNacimiento,
                genero: this.cliente.genero,
            };

            const data = await actualizarFachada(this.cliente.cedula, clienteBody);
            this.mensaje = 'Datos del cliente actualizados correctamente';
            console.log(data);

        },

    }

}
</script>

<style scoped>
.container {

    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cliente-container {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

input,
select {

    text-align-last: left;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1em;
    box-sizing: border-box;
}

input:focus,
select:focus {

    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

select {

    height: 44px;
    appearance: none;
    background: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3e%3cpath fill="%23999" d="M2 0L0 2h4zm0 5L0 3h4z"/%3e%3c/svg%3e') no-repeat right 10px center;
    background-size: 10px;
    margin: 10px 10px;
}

label {
    text-align-last: left;
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
    font-size: 1em;
    margin-top: 10px;
}

button {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    display: grid;
    margin-top: 10 px;
    grid-template-columns: repeat(0, 5px);
    grid-template-rows: 10px repeat(0, 5px);
    padding: 15px;
    border-radius: 25px;
}

button:hover {
    background-color: #0056b3;
}
</style>
