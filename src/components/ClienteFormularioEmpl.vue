<template>
    <div class="formulario-container">
        <p><input type="text" v-model="apellido" placeholder="Apellido"></p>
        <p><input type="text" v-model="nombre" placeholder="Nombre"></p>
        <p><input type="text" v-model="cedula" placeholder="Cédula"></p>
        <p><label for="">Fecha de nacimiento</label></p>
        <p><input type="date" v-model="fechaNacimiento" name="" id=""></p>
        <p>{{ fecha }}</p>
        <p>
            <select id="genero" v-model="genero">
                <option value="" disabled selected class="opaco">--Género--</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
            </select>
        </p>

    </div>
</template>

<script>
export default {

    data() {
        return {

            apellido: '',
            nombre: '',
            cedula: '',
            fechaNacimiento: '',
            genero: '',
            registro:''

        };
    },
    watch: {
        // Emitir cambios cuando los datos cambian
        apellido(newVal) {
            this.$emit('update:apellido', newVal);
        },
        nombre(newVal) {
            this.$emit('update:nombre', newVal);
        },
        cedula(newVal) {
            this.$emit('update:cedula', newVal);
        },
        fechaNacimiento(newVal) {
            this.$emit('update:fechaNacimiento', newVal);
        },
        genero(newVal) {
            this.$emit('update:genero', newVal);
        }
    },
    methods: {
        reinicio() {
            this.apellido = '';
            this.nombre = '';
            this.cedula = '';
            this.fechaNacimiento = '';
            this.genero = '';
        },
        ponerDatos(cliente) {
            this.apellido = cliente.apellido;
            this.nombre = cliente.nombre;
            this.cedula = cliente.cedula;
            this.fechaNacimiento = cliente.fechaNacimiento;
            this.genero = cliente.genero;
        }
    }
}
</script>

<style scoped>
.formulario-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.formulario-container p {
    margin: 10px 0;
}

input,
select {
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
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
    font-size: 1em;
}
</style>
