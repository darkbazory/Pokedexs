<script setup>
import { onMounted } from 'vue';
import Cadena from '../components/Cadena.vue';

const props = defineProps(['id']);
const id = props.id;
const nombreStats = ["Vida", "Ataque", "Defensa", "At.Especial", "Def.Especial", "Velocidad"];
const porcentajes = [];
const stats = [];
var color = "";
var genera = "";
const tipoataque = [];
const urlmov = [];
const colorTipo = [];
const formas = [];
const poderes = [];
const poderesNombre = [];
const todopoder = [];
const urltipos = [];
const desventajatipos = [];

function cambio() {
  var carta = document.querySelector('.cardd');
  carta.classList.toggle('is-flipped');
}

// Los datos extraidos del metodo fetch se guardarán en la array detalle
const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => {
        for (let paso = 0; paso < data.types.length; paso++) {
            colorTipo.push(data.types[paso].type.name);
        }
        data.stats.forEach(stat => {
            stats.push(stat.base_stat);
        })
        for (let mov = 0; mov < 3; mov++){
            urlmov.push(data.moves[mov].move.url);
        }
        return data;
    })
    .catch((error) => (console.error(error.message)))

for(let paso=0; paso<3; paso++){
    const movimientos = await fetch(urlmov[paso])
        .then( (response) => response.json() )
        .then( (data) => {
            if(data.power == "" || data.power==null){
                poderesNombre.push(data.name);
                poderes.push("-");
                var tor = {
                    poderesNombre:poderesNombre,
                    poderes:poderes
                };
            }else{
                poderesNombre.push(data.name);
                poderes.push(data.power);
                var tor = {
                    poderesNombre:poderesNombre,
                    poderes:poderes
                };
            }
            todopoder.push(tor);
        })
    .catch((error) => (console.error(error.message)))
}

const dataEspecie = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
    .then((response) => response.json())
    .then((res) => {
      color = ("var(--" + res.color.name + ")");
      genera = res.genera[5].genus;
      if (res.varieties.length < 2) {
        for (let i = 0; i < res.varieties.length; i++) {
          formas.push(res.varieties[i].pokemon.name);
        }
      } else {
        for (let i = 0; i < 2; i++) {
          formas.push(res.varieties[i].pokemon.name);
        }

      }
      return res;
    })

const findMax = arr => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > max) {
      max = arr[i];
    }
  return max;
}

const maxStat = findMax(stats);

stats.forEach(stat => {
  porcentajes.push("width:" + (stat / maxStat) * 100 + "%");
})

const sonar = () => {
  document.getElementById("sound").disabled = true;
  if(id<=721){
    var audio = new Audio("./cries/"+id+".mp3");
  }else{
    var audio = new Audio("./cries/"+id+".wav");
  }
  audio.play();
  setTimeout(() => {
    document.getElementById("sound").disabled = false;
  }, 1500);
}

onMounted(() => {
  if(id<=802){
    document.getElementById("sound").addEventListener("click", sonar);  
  }else{
    document.getElementById("sound").style.display="none";
  }
})
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-capitalize">
        {{ detalle.name }}
        <button id="sound">
          <img src="../assets/volume-up.svg">
        </button>
      </h1>
      <div>
        <span class="text-capitalize text-white bg-color rounded-3 p-1">{{ genera }}</span>
      </div>
            <div class="col-12 col-lg-4 mt-3">
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <th class="text-end">ID</th>
                            <td>{{ id }}</td>
                        </tr>
                        <tr>
                            <th class="text-end">Altura</th>
                            <td>{{ detalle.height / 10 }}m</td>
                        </tr>
                        <tr>
                            <th class="text-end">Peso</th>
                            <td>{{ detalle.weight / 10 }}kg</td>
                        </tr>
                        <tr>
                            <th class="text-end">Habilidades</th>
                            <td v-for="habilidad in detalle.abilities" :key="id">
                                <span class="text-white bg-color rounded-3 px-4">{{ habilidad.ability.name }}</span>
                            </td>
                        </tr>
                        <tr>
                            <th class="text-end">Tipo</th>
                            <td v-for="tipo in detalle.types" :key="id">
                                <span
                                    :class="tipo.type.name"
                                    class="text-white px-4 rounded-3 text-capitalize"
                                >{{ tipo.type.name }}</span>
                            </td>
                        </tr>
                        <tr>
                            <th class="text-end">Forma</th>
                            <td v-for="forma in formas" :key="id">
                                <span>{{ forma }}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="col-12 col-lg-4 justify-content-center">
                <div class="card border-0">
                    <div class="scene">
                        <div class="cardd" @click="cambio">
                            <div id="fron" class="cardd__face cardd__face--front">
                                <div class="cardd border-0">
                                    <div class="card-body">
                                        <img
                                            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                                            :alt="'foto de ' + detalle.name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="ba" class="cardd__face cardd__face--back">
                                <div class="fs-3">Ataques especiales</div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr v-for="(movimiento, index) in todopoder" >
                                                <td>{{movimiento.poderesNombre[index]}}</td>
                                                <td>{{movimiento.poderes[index]}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4 mt-5">
                <div class="row" v-for="(stat, index) in stats" :key="index">
                    <label class="col-4 text-end pe-3">{{ nombreStats[index] }}</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            id="prueba"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            :style="porcentajes[index]"
                        >{{ stat }}</div>
                    </div>
                </div>
            </div>

            <Cadena :urlCadena="dataEspecie.evolution_chain.url" :id="id"/>
        </div>
    </div>
</template>
<style scoped>
td {
    padding-top: 0.5rem;
    padding-bottom: 0.50rem;
}

.card {
  border: solid 2px #dddddd;
  transition: 0.4s;
}

#fron {
  background-color: v-bind("color");
  color: white;
  border: 2px solid black;
}

.scene {
  width: 20em;
  height: 20em;
  margin: 0.5em auto;
  perspective: 600px;
}

.cardd__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

thead {
  width: max-content;
}

.cardd {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

#ba {
  background-color: white;
  border: 2px solid black;
  transform: rotateY(180deg);
}

.cardd.is-flipped {
  transform: rotateY(180deg);
}

.cardd img {
  width: 100%;
  max-height: auto;
}
.progress-bar,
.bg-color {
  background-color: v-bind("color") !important;
}

.row {
  --bs-gutter-x: 0rem;
}

#imgPokemon {
  width: 25rem;
}

#sound:hover {
  color: black;
}

@media (max-width: 768px) {
  #imgPokemon {
    width: 20rem;
  }
}
</style>
