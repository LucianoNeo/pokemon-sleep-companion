<template>
  <v-container flat transparent class="mt-4">
    <v-row>
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>Pokémon</h2>
    </v-row>
    <v-row class="mt-4" align="center" justify="center">
      <v-col cols="11">
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
              :pokemonType="pokemon.type"
              :pokemonImg="pokemon.img"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
