<template>
  <section class="mt-8">
    <div class="align-center d-flex justify-space-between">
      <div class="d-flex justify-center align-center">
        <v-btn plain @click="$router.push('/dishes')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3 class="text-uppercase zindex">{{ dish.name }}</h3>
      </div>
    </div>
    <div class="topBar align-center justify-center d-flex"></div>
    <div class="flex-column d-flex px-8 justify-center py-2" :class="dish.type">
      <div class="d-flex align-center justify-center">
        <img :src="dish.img" :alt="dish.name" width="80" />
      </div>
    </div>
    <div>
      <SectionTitle title="Lista de ingredientes" />
      <li class="d-flex align-center justify-space-between pr-8 my-4">
        <div class="chips green">{{ $t('pokemonDetails.ingredients') }}</div>
        <div
          class="d-flex align-center"
          v-for="(item, index) in dish.ingredients"
          :key="index"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div
                class="d-flex align-center justify-center text-center"
                v-if="item.ingredient != null"
              >
                <h2>{{ item.quantity }}</h2>
                <img
                  :src="item.ingredient.img"
                  alt=""
                  srcset=""
                  width="46"
                  height="46"
                  v-bind="attrs"
                  v-on="on"
                />
              </div>
              <div v-if="item.ingredient == null">
                <span
                  >Qualquer combinação que não combine com nenhuma receita</span
                >
              </div>
            </template>
            <span>{{ item.quantity }}x {{ item.ingredient.name }}</span>
          </v-tooltip>
        </div>
      </li>
    </div>
    <div>
      <SectionTitle title="Força Base" />
      <div class="d-flex align-center justify-center rounded">
        <v-data-table
          :headers="headers"
          :items="dish.stats"
          item-key="level"
          class="table"
          hide-default-footer
        >
        </v-data-table>
      </div>
    </div>
  </section>
</template>

<script>
import dishesList from '@/data/dishes.js'
export default {
  async asyncData({ params }) {
    const dishName = params.dishName
    const dish = Object.values(dishesList).find((dish) => {
      return dish.name.toLowerCase() === dishName.toLowerCase()
    })
    return {
      dish,
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Level',
          value: 'level',
          sortable: false,
          align: 'center',
        },
        {
          text: 'XP',
          value: 'xp',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Valor',
          value: 'value',
          sortable: false,
          align: 'center',
        },
      ],
    }
  },
  computed: {
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
