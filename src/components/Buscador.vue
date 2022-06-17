 <script setup>
import {reactive, ref} from 'vue';
import {onMounted} from "vue";
import axios from "axios";
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




function searchPokemon(inputName) {
  for (const pokemon in pokemonsName) {
    if (pokemonsName[pokemon].name === inputName) {
      location.replace(`/${pokemonsName[pokemon].id}`);
    }

  }

}

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
 
 </script>
 

 
 
 <template>
     <div class="input-group border-3">
         <input type="text" @keyup="buscar" v-model="state.buscartxt" placeholder="Buscar..." aria-label="Search"
             class="form-control border-0" id="buscador" list="datalistOptions" />
         <datalist id="datalistOptions">
             <option v-for="pokemon in pokemonsName">{{ pokemon.name }}</option>
         </datalist>
         <span @click="lupa" class="input-group-text border-0" id="basic-addon1">
             <i class="fa-solid fa-magnifying-glass"></i>
         </span>
     </div>
 </template>
 