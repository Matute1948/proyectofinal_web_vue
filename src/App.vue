<template>
  <div>
    <NavBarEmpleado v-if="isEmpleado"/>
    <NavBarCliente v-else-if="isCliente"/>
    <router-view/>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBarEmpleado from './components/NavBarEmpleado.vue'
import NavBarCliente from './components/NavBarCliente.vue';

export default {
  name: 'App',
  components: {
    NavBarEmpleado,
    NavBarCliente
  },
  setup() {
    const route = useRoute();
    const isEmpleado = computed(() => route.path.startsWith('/home/empleado'));
    const isCliente = computed(() => route.path.startsWith('/home/cliente'));

    return {
      isEmpleado,
      isCliente
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
