import axios from 'axios';

//Metodos

const guardarCliente = async (clienteBody) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Concesionario/clientes/empleado`, clienteBody).then(r=>r.data);
    return data;
}

const buscarListaCliente = async (apellido) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Concesionario/clientes/${apellido}`).then(r=>r.data);
    return data;
}

const buscarIdCliente = async (id) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Concesionario/clientes/id/${id}`).then(r=>r.data);
    console.log(data);
    return data;
}

const eliminarCliente = async (id) => {
    const data = axios.delete(`http://localhost:8082/API/v1.0/Concesionario/clientes/${id}`).then(r=>r.data);
    return data;
}

const actualizarCliente = async (clienteBody, id) => {
    const data = axios.put(`http://localhost:8082/API/v1.0/Concesionario/clientes/empleado/${id}`,clienteBody).then(r=>r.data);
    return data;
} 

//Fachada

export const guardarClienteFachada = async (clienteBody) => {
    return await guardarCliente(clienteBody);
}

export const buscarListaClienteFachada = async (apellido) => {
    return await buscarListaCliente(apellido);
}

export const buscarIdClienteFachada = async (id) => {
    return await buscarIdCliente(id);
}

export const eliminarClienteFachada = async (id) => {
    return await eliminarCliente(id);
}

export const actualizarClienteFachada = async (clienteBody, id) => {
    return await actualizarCliente(clienteBody, id);
}