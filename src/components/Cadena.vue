<script setup>
    import PokemonCard from './PokemonCard.vue'

    const prop = defineProps(['urlCadena','id'])
    let id = 0
    const cadena = []

    await fetch(prop.urlCadena)
        .then((response) => response.json())
        .then((data) => {
            id = data.chain.species.url.split('/').slice(-2, -1).pop()
            cadena.push(id)

            if (data.chain.evolves_to.length) {
                id = data.chain.evolves_to[0].species.url.split('/').slice(-2, -1).pop()
                cadena.push(id)

                if (data.chain.evolves_to[0].evolves_to.length) {
                    id = data.chain.evolves_to[0].evolves_to[0].species.url.split('/').slice(-2, -1).pop()
                    cadena.push(id)
                }
            }
        }).catch((error) => (console.error(error.message)))
</script>

<template>
    <h1>Cadena evolutiva</h1>
    <div class="cadena container-sm">
        <PokemonCard v-for="id in cadena" :key="id" :id="id"/>
    </div>
</template>

<style scoped>
    .cadena {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    h1{
        margin-top: 1em;
    }
</style>