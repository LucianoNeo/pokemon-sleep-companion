<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('ingredientList.ingredients') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('ingredientList.search')"
          v-model="searchText"
        />
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(ingredient, key) in ingredients"
            :key="key"
          >
            <IngredientCard
              :ingredientName="ingredient.name"
              :ingredientImg="ingredient.img"
              :ingredientDescription="$t('ingredients.' + ingredient.description)"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import ingredients from '@/data/ingredients'

export default {
  data() {
    return {
      ingredients: ingredients,
      searchText: '',
    }
  },
  computed: {
    filteredIngredientList() {
      const searchText = this.searchText.toLowerCase().trim();
      return Object.keys(this.ingredients).filter((key) => {
        const ingredient = this.ingredients[key];
        return ingredient.name.toLowerCase().includes(searchText);
      });
    }
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
