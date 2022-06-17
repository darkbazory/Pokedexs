<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <!-- <Navbar></Navbar> -->
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component"></component>
        <template #fallback>
          <h1>Cargando Pokemons...</h1>
        </template>
      </Suspense>
    </template>
  </router-view>

</template>

<style>
@import "./assets/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
