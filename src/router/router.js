
import { createRouter, createWebHashHistory } from 'vue-router';

import MenuInicio from '@/pages/MenuInicio.vue'

import BienvenidaEmpleadoPage from '@/pages/BienvenidaEmpleadoPage.vue';
import BienvenidaClientePage from '@/pages/BienvenidaClientePage.vue'
import NotFoundPage from '@/pages/NotFOundPage.vue';
import EmpleadoInsertarEmpleadoPage from '@/pages/EmpleadoInsertarEmpleadoPage.vue';
import EmpleadoListasClientesPage from '@/pages/EmpleadoListasClientesPage.vue';
import EmpleadoVerClientePage from '@/pages/EmpleadoVerClientePage.vue';
import EmpleadoActualizarClientePage from '@/pages/EmpleadoActualizarClientePage.vue';
import RetirarVehiculo from '@/pages/RetirarVehiculo.vue';
import ReporteReservas from '@/pages/ReporteReservas.vue';
import EmpleadoInsertarVehiculoPage from '@/pages/EmpleadoInsertarVehiculoPage.vue';
import EmpleadoBuscarVehiculoPage from '@/pages/EmpleadoBuscarVehiculoPage.vue';
import EmpleadoVisualizarVehiculoPage from '@/pages/EmpleadoVisualizarVehiculoPage.vue';
import EmpleadoActualizarVehiculoPage from '@/pages/EmpleadoActualizarVehiculoPage.vue';
import ClienteActualizarPage from '@/pages/ClienteActualizarPage.vue';
import ClienteRegistroPage from '@/pages/ClienteRegistroPage.vue';
import BuscarVehiculosPage from '@/pages/BuscarVehiculosPage.vue';

import ReservaPage from '@/pages/ReservaPage.vue'
import PagoPage from '@/pages/PagoPage.vue'

const routes = [
  {
    path: '/',
    name: 'Bienvenida',
    component: MenuInicio, 
  },
    {
        path: '/home/empleado',
        component: BienvenidaEmpleadoPage
    },
    {
        path: '/home/cliente',
        component: BienvenidaClientePage,
    },
    {
        path: '/home/empleado/registar',
        component: EmpleadoInsertarEmpleadoPage
    },
    {
        path: '/home/empleado/buscar',
        component: EmpleadoListasClientesPage
    },
    {
        path: '/home/empleado/ver/:id',
        name:'verClienteE',
        component: EmpleadoVerClientePage
    },
    {
        path: '/home/empleado/actualizar/:id',
        name: 'actualizarClienteE',
        component: EmpleadoActualizarClientePage
    },
    {
        path: '/home/empleado/RetirarVehiculo',
        component: RetirarVehiculo,
    },
    {
        path: '/home/empleado/reportes',
        component: ReporteReservas,
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFoundPage
    },
    ,
    { 
        path: '/home/empleado/vehiculo/insertar', 
        component: EmpleadoInsertarVehiculoPage
        
    },
    { 
        path: '/home/empleado/vehiculo/buscar', 
        component: EmpleadoBuscarVehiculoPage

    },
    { 
        path: '/home/empleado/vehiculo/visualizar/:placa', 
        component: EmpleadoVisualizarVehiculoPage
    },
    { 
        path: '/home/empleado/vehiculo/actualizar/:placa', 
        component: EmpleadoActualizarVehiculoPage 
    },
    {
        path: '/home/cliente/registro',
        name: 'ClienteRegistro',
        component: ClienteRegistroPage,
      },
      {
        path: '/home/cliente/actualizar',
        name: 'ClienteActualizar',
        component: ClienteActualizarPage,
      },
      {
        path: '/home/cliente/buscar',
        component: BuscarVehiculosPage,
      },
      
      {
        path: '/home/cliente/reservacion',
        component: ReservaPage
      },
      {
        path: '/home/cliente/pago',
        component: PagoPage
      },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router




//--------------------------------
