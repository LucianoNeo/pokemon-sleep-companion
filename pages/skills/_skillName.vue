<template>
  <section class="mt-8">
    <div class="align-center d-flex justify-space-between">
      <div class="d-flex justify-center align-center">
        <v-btn plain @click="$router.push('/skills')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3 class="text-uppercase zindex">{{ skill.name }}</h3>
      </div>
    </div>
    <div class="topBar align-center justify-center d-flex"></div>
    <div class="flex-column d-flex px-8 justify-center py-2 poison">
      <div class="d-flex align-center justify-center">
        <img :src="skill.img" :alt="skill.name" width="80" />
      </div>
    </div>

    <div>
      <SectionTitle title="Força Base" />
      <div class="d-flex align-center justify-center rounded">
        <v-data-table
          :headers="headers"
          :items="skill.level"
          item-key="skillLevel"
          class="table"
          hide-default-footer
        >
        </v-data-table>
      </div>
    </div>
    <SectionTitle title="Pokémon que possuem" />
    <div class="mons-container my-10">
      <div
        v-for="(pokemon, index) in filteredPokemonList"
        :key="index"
        class="align-center justify-center d-flex flex-column mx-3"
      >
        <div class="mon-img-container" :class="pokemon.type.name">
          <img
            :src="pokemon.img"
            :alt="pokemon.name"
            class="pokemonImg"
            @click="$router.push('/pokemon/' + pokemon.name)"
          />
        </div>
        <span>{{ capitalizeFirstLetter(pokemon.name) }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import skillsList from '@/data/skills.js'
import pokemonList from '@/data/pokemon'
export default {
  async asyncData({ params }) {
    const skillName = params.skillName
    const skill = Object.values(skillsList).find((skill) => {
      return skill.name.toLowerCase() === skillName.toLowerCase()
    })
    return {
      skill,
      pokemonList: pokemonList,
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Nível da Skill',
          value: 'skillLevel',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Força Base',
          value: 'baseStrength',
          sortable: false,
          align: 'center',
        },
      ],
    }
  },
  computed: {
    filteredPokemonList() {
      return this.pokemonList.filter((pokemon) => {
        return pokemon.skill.name
          .toLowerCase()
          .includes(this.skill.name.toLowerCase())
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
  transform: translate(5px, -5px);
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
  max-width: 100%;
  overflow-y: auto;
  flex-wrap: wrap;
}

.mon-img-container {
  width: 90px;
  height: 90px;
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
