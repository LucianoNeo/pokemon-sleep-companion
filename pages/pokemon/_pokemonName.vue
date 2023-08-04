<template>
  <div class="mt-8">
    <div class="align-center d-flex justify-space-between">
      <div class="d-flex justify-center align-center">
        <v-btn plain @click="$router.push('/pokemon')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3 class="text-uppercase zindex">{{ pokemon.name }}</h3>
      </div>
      <div class="d-flex flex-column justify-end align-end pr-6">
        <span class="pr-2">{{
          $t('pokemonDetails.sleepType')
        }}</span>
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
      <SectionTitle :title="$t('pokemonDetails.helpingStats')" />
      <ul class="w-full mt-4">
        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">{{ $t('pokemonDetails.berry') }}</div>
          <div class="d-flex align-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  :src="pokemon.berry.img"
                  alt=""
                  srcset=""
                  width="38"
                  height="38"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>{{ pokemon.berry.name }}</span>
            </v-tooltip>
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">{{ $t('pokemonDetails.ingredients') }}</div>
          <div
            class="d-flex align-center"
            v-for="(item, index) in pokemon.ingredients"
            :key="index"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  :src="item.img"
                  alt=""
                  srcset=""
                  width="46"
                  height="46"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>{{ item.name }}</span>
            </v-tooltip>
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">{{ $t('pokemonDetails.frequency') }}</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.baseFrequency }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">{{ $t('pokemonDetails.carryLimit') }}</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.carryLimit }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">
            {{ $t('pokemonDetails.friendshipPoints') }}
          </div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.frienshipPoints }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">{{ $t('pokemonDetails.recruitXP') }}</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.recruitXP }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">
            {{ $t('pokemonDetails.recruitShards') }}
          </div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.recruitShards }}
          </div>
        </li>
      </ul>

      <SectionTitle :title="$t('pokemonDetails.mainSkill')" />
      <div class="d-flex align-center justify-center w-full px-4">
        <MainSkillCard
          :title="pokemon.skill.name"
          :description="$t('skills.' + pokemon.skill.description)"
        />
      </div>
    </div>
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
</style>
