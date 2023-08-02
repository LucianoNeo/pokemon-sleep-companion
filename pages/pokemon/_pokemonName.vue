<template>
  <div class="mt-8">
    <v-row class="align-center">
      <v-btn plain @click="$router.push('/pokemon')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase">{{ pokemon.name }}</h3>
    </v-row>
    <v-row class="topBg align-center justify-center">
      <img :src="pokemon.img" :alt="pokemon.name" class="pokemonImg" />
    </v-row>
    <v-row class="topBg align-end justify-center flex-column pr-8" :class="pokemon.type">
      <div class="d-flex align-center justify-end">
        <span class="mr-2">Type</span>
        <img :src="'/types/' + pokemon.type + '.png'" width="26" height="26" />
      </div>
      <div class="d-flex align-center justify-end mt-2">
        <span class="mr-2">Shiny</span>
        <img src="/types/shiny.png" width="26" height="26" class="shinyMarker"/>
      </div>
    </v-row>
  </div>
</template>

<script>
import pokemonList from '@/data/pokemon.js'

export default {
  async asyncData({ params }) {
    const pokemonName = params.pokemonName
    const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName)
    return {
      pokemon,
    }
  },
}
</script>
<style>
.topBg {
  height: 75px;
}
.pokemonImg {
  object-fit: cover;
  width: 240px;
  height: 160px;
  transform: translateY(-40px);
}
.shinyMarker {
  filter: grayscale();
}
</style>
