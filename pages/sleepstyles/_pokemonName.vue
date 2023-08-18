<template>
  <section class="mt-8">
    <div class="align-center d-flex justify-space-between">
      <div class="d-flex justify-center align-center">
        <v-btn plain @click="$router.push('/sleepstyles')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3 class="text-uppercase zindex">{{ pokemon.name }}</h3>
      </div>
      <div class="d-flex flex-column justify-end align-end pr-6">
        <span class="pr-2">{{ $t('pokemonDetails.sleepType') }}</span>
        <div class="sleepType" :class="pokemon.sleepType">
          {{ $t('sleepTypes.' + pokemon.sleepType) }}
        </div>
      </div>
    </div>
    <div class="topBar align-center justify-center d-flex">
      <img :src="getPokemonImg" :alt="pokemon.name" class="pokemonImg" />
    </div>
    <div
      class="flex-column d-flex px-8 justify-center py-2"
      :class="pokemon.type.name"
    >
      <div class="d-flex align-center justify-end">
        <span class="mr-2">{{ $t('pokemonDetails.type') }}</span>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <img
              :src="'/types/' + pokemon.type.name + '.png'"
              width="26"
              height="26"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <span>{{ $t('types.' + pokemon.type.name) }}</span>
        </v-tooltip>
      </div>
      <div class="d-flex align-center justify-end mt-4">
        <span class="mr-2">Shiny</span>
        <button @click="toogleShiny">
          <img
            src="/types/shiny.png"
            width="28"
            height="28"
            :class="getShinyClass"
          />
        </button>
      </div>
    </div>

    <div class="mb-4">
      <SectionTitle :title="$t('sleepStyle.styles')" />
      <v-row class="d-flex justify-center cardsContainer">
        <v-col
          lg="4"
          sm="12"
          md="4"
          class="d-flex justify-center align-center"
          v-for="(item, index) in sleepStyles"
          :key="index"
        >
          <SleepStyleCard
            :name="item.name"
            :location="item.location"
            :rewards="item.rewards"
            :pokemonImg="'/styles/' + item.img"
          />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import pokemonList from '@/data/pokemon.js'

export default {
  async asyncData({ params }) {
    const pokemonName = params.pokemonName
    const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName)
    const sleepStyles = pokemon.sleepStyles
    return {
      pokemon,
      sleepStyles
    }
  },
  data() {
    return {
      shinyActive: false,
    }
  },
  methods: {
    toogleShiny() {
      this.shinyActive = !this.shinyActive
    },
  },
  computed: {
    getShinyClass() {
      return this.shinyActive == true ? 'shinyMarkerActive' : 'shinyMarker'
    },
    getPokemonImg() {
      return this.shinyActive == true ? this.pokemon.shiny : this.pokemon.img
    },
  },
}
</script>
<style>
.topBar {
  height: 30px;
}
.pokemonImg {
  object-fit: cover;
  width: 240px;
  height: 160px;
}
.shinyMarker {
  filter: grayscale();
}
.shinyMarkerActive {
  filter: none;
}
.w-full {
  width: 100%;
}

.chips {
  display: flex;
  min-height: 50px;
  min-width: 180px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 1.2rem;
}

.sleepType {
  display: flex;
  min-width: 100px;
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 1rem;
}

.zindex {
  z-index: 100;
}

.cardsContainer {
  height: 100%;
  margin: 0 !important;
}

@media (max-width: 767px) {
  .cardsContainer {
    max-width: 100%;
    height: 70vh;
    overflow-y: auto;
  }
}
</style>
