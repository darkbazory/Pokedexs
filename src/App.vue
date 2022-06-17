<script setup>
import {reactive, ref} from 'vue';
import {computed} from "vue";
import axios from "axios";
import {onMounted} from "vue";
import router from "./router";

let pokemonsName = [];


onMounted(() => {
  axios.get('allPokemon.json')
      .then((res) => {
        for (const re of res.data) {
          pokemonsName.push(
              re)
        }
      })
      .catch(err => console.log(err));

})

const state = reactive({
  buscartxt: ""
});

const selected = reactive({
  text: ""
});


function buscar(e) {
  if (e.keyCode === 13) {
    let searchInput = state.buscartxt.toLowerCase();
    if (searchInput.length >= 1 && searchInput !== "") {
      var arraycontainsturtles = pokemonsName.some(item => item.name === searchInput);
      if (arraycontainsturtles) {
        searchPokemon(searchInput);

      }
    }
  }
}


function lupa() {
  let searchInput = state.buscartxt.toLowerCase();
  if (searchInput.length >= 1 && searchInput !== "") {
    var arraycontainsturtles = pokemonsName.some(item => item.name === searchInput);
    if (arraycontainsturtles) {
      searchPokemon(searchInput);

    }
  }
}

function searchPokemon(inputName) {
  for (const pokemon in pokemonsName) {
    if (pokemonsName[pokemon].name === inputName) {
      location.replace(`/${pokemonsName[pokemon].id}`);
    }

  }

}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'Home'}">
        <img alt="Vue logo" src="/logo_black.png" id="logo"/>
      </router-link>
      <div class="input-group border-3">
        <input type="text" @keyup="buscar" v-model="state.buscartxt" placeholder="Buscar..." aria-label="Search"
               class="form-control border-0" id="buscador" list="datalistOptions"/>
        <datalist id="datalistOptions">
          <option v-for="pokemon in pokemonsName">{{ pokemon.name }}</option>
        </datalist>
        <span @click="lupa" class="input-group-text border-0" id="basic-addon1">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  </nav>

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

span:hover {
  cursor: pointer;
}

.nav {
  width: auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #f1f1f1;
}

#logo {
  width: 20rem;
  max-height: auto;
}

#buscador,
#basic-addon1 {
  background-color: #f6f6f6;
}

.form-control {
  border-radius: 0.75rem;
}

</style>
