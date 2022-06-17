<script setup>
import {defineAsyncComponent, reactive} from 'vue';
import Loading from '../components/Loading.vue'
import {onMounted} from "vue";
import axios from "axios";

onMounted(() => {
  loadFirstPokemons();
  getNextUser();
})

let url = 'https://pokeapi.co/api/v2/pokemon-species?offset=';
let numb = 0;
let allPokemons = reactive([]);

function loadFirstPokemons() {
  for (let i = 0; i < 7; i++) {
    axios.get(url + numb).then(response => {
      response.data.results.forEach(pokemon => {
        pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
        delete pokemon.url
        // url ahora es el id y pusheamos el objeto pokemon en el array
        allPokemons.push(pokemon);
      })
    })
    numb += 20;
  }
}

function getNextUser() {
  window.onscroll = () => {
    let bottomOfWindow = (document.documentElement.scrollHeight - document.documentElement.scrollTop) - 450 <= document.documentElement.clientHeight;
    if (bottomOfWindow) {
      axios.get(url + numb).then(response => {
        response.data.results.forEach(pokemon => {
          pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
          delete pokemon.url
          // url ahora es el id y pusheamos el objeto pokemon en el array
          allPokemons.push(pokemon);
        })
        numb += 20;
      })
    }
  }
}

const PokemonCard = defineAsyncComponent({
  loader: () => import("../components/PokemonCard.vue"),
  delay: 100,
})
</script>

<template>
  <div class="card-container">
    <PokemonCard v-for="pokemon in allPokemons" :id="pokemon.id" :key="pokemon.id"></PokemonCard>
  </div>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;

  width: 100%;
  gap: 1rem;
  margin: 1rem 0;
}
</style>