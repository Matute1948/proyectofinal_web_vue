import axios from "axios";

const agregarReserva = async (reservaBody) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Concesionario/reservas`, reservaBody);
        console.log('Reserva creada con éxito:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error al agregar reserva:", error);
        throw error;
    }
};

const registrarPago = async (pagoBody) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Concesionario/reservas/pago`, pagoBody);
        console.log('Pago registrado con éxito:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error al registrar pago:", error);
        throw error;
    }
};

const obtenerResumenPorPlaca = async (placaVehiculo) => {
    try {
        const response = await axios.get(`http://localhost:8082/API/v1.0/Concesionario/reservas/detalle/${placaVehiculo}`);
        console.log('Resumen de reserva obtenido con éxito:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener resumen de reserva:", error);
        throw error;
    }
};

export const agregarReservaFachada = async (reservaBody) => {
    const reserva = await agregarReserva(reservaBody);
    return reserva;
};

export const registrarPagoFachada = async (pagoBody) => {
    const pago = await registrarPago(pagoBody);
    return pago;
};

export const obtenerResumenPorPlacaFachada = async (placaVehiculo) => {
    return await obtenerResumenPorPlaca(placaVehiculo);
};

// Función para manejar la secuencia de generar una reserva y luego registrar el pago
export const manejarReservaYPago = async (reservaBody, pagoBody) => {
    try {
        const reserva = await agregarReservaFachada(reservaBody);

        // Actualizar el ID de reserva en el objeto de pago
        pagoBody.id = reserva.id;

        const pago = await registrarPagoFachada(pagoBody);
        return { reserva, pago };
    } catch (error) {
        console.error("Error al manejar reserva y pago:", error);
        throw error;
    }
};
