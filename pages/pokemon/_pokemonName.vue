<template>
  <div class="mt-8">
    <div class="align-center d-flex">
      <v-btn plain @click="$router.push('/pokemon')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase">{{ pokemon.name }}</h3>
    </div>
    <div class="topBar align-center justify-center d-flex">
      <img :src="getPokemonImg" :alt="pokemon.name" class="pokemonImg" />
    </div>
    <div
      class="topBar align-end justify-center flex-column d-flex px-8"
      :class="pokemon.type.name"
    >
      <div class="d-flex align-center justify-end">
        <span class="mr-2">Type</span>
        <img
          :src="'/types/' + pokemon.type.name + '.png'"
          width="26"
          height="26"
        />
      </div>
      <div class="d-flex align-center justify-center mt-4">
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
      <SectionTitle title="Helping Stats (Base)" />
      <ul class="w-full mt-4">
        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">Berry</div>
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
          <div class="chips green">Ingredients</div>
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
          <div class="chips green">Frequency</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.baseFrequency }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">Carry limit</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.carryLimit }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">Friendship Points</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.frienshipPoints }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">Recruit XP</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.recruitXP }}
          </div>
        </li>

        <li class="d-flex align-center justify-space-between pr-8 my-4">
          <div class="chips green">Recruit Shards</div>
          <div class="d-flex align-end flex-grow-1 justify-end pr-2">
            {{ pokemon.recruitShards }}
          </div>
        </li>
      </ul>

      <SectionTitle title="Main Skill" />
      <div class="d-flex align-center justify-center w-full px-4">
        <MainSkillCard
          :title="pokemon.skill.name"
          :description="pokemon.skill.description"
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
  height: 95px;
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
</style>
