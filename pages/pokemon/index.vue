<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>Pokémon</h2>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center" >
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          placeholder="Digite para filtrar"
        />
        <v-row class="justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(pokemon, index) in pokemonList"
            :key="index"
          >
            <PokemonCard
              :pokemonName="pokemon.name"
              :pokemonNumber="pokemon.number"
              :pokemonType="pokemon.type.name"
              :pokemonImg="pokemon.img"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import pokemonList from '@/data/pokemon'
export default {
  data() {
    return {
      pokemonList: pokemonList,
    }
  },
}
</script>
<style scoped>
.gap {
  gap: 1px;
}

.cardsContainer {
  height: 100%;
}

@media (max-width: 767px) {
  .cardsContainer {
    height: 70vh;
    overflow-y: auto;
  }
}
</style>
