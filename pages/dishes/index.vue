<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('dishesList.dishes') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
          >
            <DishOptionCard
              dishName="Curries"
              dishImg="/dishes/mixedcurry.png"
              color="fire"
              dishType="curries"
            />
          </v-col>
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
          >
            <DishOptionCard
              dishName="Saladas"
              dishImg="/dishes/mixedcurry.png"
              color="grass"
              dishType="salads"
            />
          </v-col>
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
          >
            <DishOptionCard
              dishName="Sobremesas"
              dishImg="/dishes/mixedcurry.png"
              color="water"
              dishType="deserts"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import dishes from '@/data/dishes'

export default {
  data() {
    return {
      dishes: dishes,
      searchText: '',
    }
  },
  computed: {
    filteredDishList() {
      const searchText = this.searchText.toLowerCase().trim()
      return this.dishes.filter((dish) => {
        return dish.name.toLowerCase().includes(searchText)
      })
    },
  },
  methods: {
    getImg(name) {
      return '/dishes/' + name.toLowerCase().replace(/ /g, '') + '.png'
    },
  },
}
</script>
<style scoped>
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
