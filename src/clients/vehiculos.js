import axios from "axios";

const API_URL = "http://localhost:8082/API/v1.0/Concesionario/vehiculos";

// Método para agregar un vehículo
const agregar = async (vehiculoBody) => {
    const data = await axios.post(`${API_URL}`, vehiculoBody)
        .then(r => r.data);
    console.log(data);
    return data;
}

// Método para buscar vehículos por marca
const buscarPorMarca = async (marca) => {
    const data = await axios.get(`${API_URL}/${marca}`)
        .then(r => r.data);
    console.log(data);
    return data;
}

// Método para buscar vehículos por marca
const buscarPorPlaca = async (placa) => {
    const data = await axios.get(`${API_URL}/placa/${placa}`)
        .then(r => r.data);
    console.log(data);
    return data;
}

// Método para actualizar un vehículo
const actualizar = async (vehiculoBody) => {
    const data = await axios.put(`${API_URL}`, vehiculoBody)
        .then(r => r.data);
    console.log(data);
    return data;
}

// Método para eliminar un vehículo
const eliminar = async (placa) => {
    const response = await axios.delete(`${API_URL}/${placa}`);
    return response;
}

const buscarPorMarcaYModelo = async (marca, modelo) => {
    const data = await axios.get(`${API_URL}/marca-modelo/${marca}/${modelo}`).then(r => r.data);
    return data;
}

// Métodos fachada
export const agregarFachada = async (vehiculoBody) => {
    return await agregar(vehiculoBody);
}

export const buscarPorMarcaFachada = async (marca) => {
    return await buscarPorMarca(marca);
}

export const buscarPorPlacaFachada = async (placa) => {
    return await buscarPorPlaca(placa);
}

export const actualizarFachada = async (vehiculoBody) => {
    return await actualizar(vehiculoBody);
}

export const eliminarFachada = async (placa) => {
    return await eliminar(placa);
}
export const buscarPorMarcaYModeloFachada = async (marca, modelo) => {
    return await buscarPorMarcaYModelo(marca,modelo);
};
