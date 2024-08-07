import axios from "axios";


const obtenerReporteReservas = async (fechaInicio, fechaFin) => {
    const data = await axios.get(`http://localhost:8082/API/v1.0/Concesionario/reservas`, {
        params: {
            fechaInicio,
            fechaFin
        }
    }).then(r => r.data);
    return data;
}



const retirarVehiculo = async (reservaId) => {
    const response = await axios.post(`http://localhost:8082/API/v1.0/Concesionario/reservas/retirar/${reservaId}`);
    return response.data;
  };



//--------------
export const obtenerReporteReservasFachada = async (fechaInicio, fechaFin) => {
    return await obtenerReporteReservas(fechaInicio, fechaFin);
}



export const retirarVehiculoFachada = async (reservaId) => {
    return await retirarVehiculo(reservaId);
  };