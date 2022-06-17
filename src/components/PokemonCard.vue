<script setup>
const props = defineProps(['id'])
const id = props.id
const tipos = []

const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => {
      // Poner la primera letra del nombre en mayus
      data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
      for (let paso = 0; paso < data.types.length; paso++) {
        tipos.push("./Tipos/" + data.types[paso].type.name +".svg")
      }
      return data
    })
    .catch((error) => (console.error(error.message)))
</script>

<template>
  <div class="card">
    <a :href="$router.resolve({name: 'Detalle', params: {id: id}}).href">
      <div class="card-header">
        <span>{{ id }}</span>
        <h1>{{ detalle.name }}</h1>
      </div>
      <div class="card-body">
        <img class="pokemon"
             :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'"
             :alt="'foto de '+detalle.name">
        <div class="cajatipos">
          <img class="tipos" v-for="tipo in tipos" :key="tipo.slot" :src="tipo" alt="">
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  user-select: none;
  display: flex;
  flex-flow: column nowrap;
}

.card {
  border: solid 2px #dddddd;
  outline: none;
  width: 20rem;
  margin: 2em auto;
  transition: 0.1s;
  user-select: none;
}

.card:hover {
  outline: solid 2px #dddddd;
}

.card:active {
  outline: solid 4px #bbbbbb;
  box-shadow: 0px 0px 10px 0px #aaaaaa;
}

.card-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0;
}

span {
  background-color: silver;
  color: white;
  font-size: 3rem;
  width: 25%;
  border-bottom-right-radius: 50%;
}

.pokemon {
  width: 100%;
  max-height: auto;
  transition: all .15s ease;
}

.cajatipos {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

}

.tipos:hover {
  background-color: silver;
  border-radius: 50%;
  filter: brightness(1.20);
}

a:hover .pokemon {
  transform: scale(1.15);
}

.tipos {
  transition: box-shadow 1s;
  width: 25%;
  max-height: auto;
}
</style>