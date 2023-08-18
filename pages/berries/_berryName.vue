<template>
  <section class="mt-8">
    <div class="align-center d-flex justify-space-between">
      <div class="d-flex justify-center align-center">
        <v-btn plain @click="$router.push('/berries')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3 class="text-uppercase zindex">{{ berry.name }}</h3>
      </div>
    </div>
    <div class="topBar align-center justify-center d-flex"></div>
    <div
      class="flex-column d-flex px-8 justify-center py-2"
      :class="berry.type"
    >
      <div class="d-flex align-center justify-space-between">
        <img :src="berry.img" :alt="berry.name" width="80" />
        <div class="d-flex align-center justify-center">
          <span class="mr-2">{{ $t('pokemonDetails.type') }}</span>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <img
                :src="'/types/' + berry.type + '.png'"
                width="26"
                height="26"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <span>{{ $t('types.' + berry.type) }}</span>
          </v-tooltip>
        </div>
      </div>
    </div>

    <div >
      <SectionTitle title="Força Base" />
      <div class="d-flex align-center justify-center rounded">
        <v-data-table
          :headers="headers"
          :items="berry.strength"
          item-key="level"
          class="table"
          :items-per-page="5"
        >
        </v-data-table>
      </div>
    </div>
    <SectionTitle title="Pokémon que fornecem" />
    <div class="mons-container mt-10">
      <div
        v-for="(pokemon, index) in filteredPokemonList"
        :key="index"
        class="align-center justify-center d-flex flex-column mx-3"
      >
        <div class="mon-img-container" :class="pokemon.type.name">
          <img :src="pokemon.img" :alt="pokemon.name" class="pokemonImg"
          @click="$router.push('/pokemon/' + pokemon.name)"
          />
        </div>
        <span>{{ capitalizeFirstLetter(pokemon.name) }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import berriesList from '@/data/berries.js'
import pokemonList from '@/data/pokemon'
export default {
  async asyncData({ params }) {
    const berryName = params.berryName
    const berry = berriesList.find((berry) => berry.name === berryName)
    return {
      berry,
      pokemonList: pokemonList,
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Nível do Pokémon',
          value: 'level',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Força Base por Fruta',
          value: 'strength',
          sortable: false,
          align: 'center',
        },
      ],
    }
  },
  computed: {
    filteredPokemonList() {
      return this.pokemonList.filter((pokemon) => {
        return pokemon.type.name.toLowerCase().includes(this.berry.type)
      })
    },
    capitalizeFirstLetter() {
      return (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
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
  width: 150px;
  transform: translate(15px, -15px);
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
.table {
  width: 30vw;
  margin: 16px;
}

.mons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.mon-img-container {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@media (max-width: 767px) {
  .cardsContainer {
    max-width: 100%;
    height: 70vh;
    overflow-y: auto;
  }

  .table {
    width: 100vw;
    margin: 16px 0 16px 0;
  }
}
</style>
