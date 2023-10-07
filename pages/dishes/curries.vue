<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('dishesList.curries') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('dishesList.search')"
          v-model="searchText"
        />
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(dish, index) in filteredDishList"
            :key="index"
          >
            <DishCard
              :dishName="dish.name"
              :dishImg="dish.img"
              :dishDescription="$t('dishes.' + dish.description)"
              :dishType="dish.type"
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
      return this.dishes
      .filter((dish) => {
        return dish.type.toLowerCase().includes('curry')
      })
      .filter((dish) => {
        return dish.name.toLowerCase().includes(searchText)
      })
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
