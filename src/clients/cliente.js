import axios from "axios";

const agregar = async (clienteBody) => {
    const data = await axios.post(`http://localhost:8082/API/v1.0/Concesionario/clientes/cliente`, clienteBody)
        .then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (cedula, clienteBody) => {
    const data = await axios.put(`http://localhost:8082/API/v1.0/Concesionario/clientes/${cedula}`, clienteBody)
        .then(r => r.data);
    console.log(data);
    return data;
}

const obtenerDetalleReserva = async (numReserva) => {
    const data = await axios.get(`http://localhost:8082/API/v1.0/Concesionario/reservaciones/${numReserva}`)
        .then(r => r.data);
    console.log(data);
    return data;
}

const retirarVehiculo = async (numReserva) => {
    const data = await axios.post(`http://localhost:8082/API/v1.0/Concesionario/reservaciones/${numReserva}`)
        .then(r => r.data);
    console.log(data);
    return data;
}




//-------------------------------

export const agregarFachada = async (clienteBody) => {
    return await agregar(clienteBody);
}

export const actualizarFachada = async (cedula, clienteBody) => {
    return await actualizar(cedula, clienteBody);
}

export const obtenerDetalleReservaFachada = async (numReserva) => {
    return await obtenerDetalleReserva(numReserva);
}

export const retirarVehiculoFachada = async (numReserva) => {
    return await retirarVehiculo(numReserva);
}

