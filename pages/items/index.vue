<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('itemList.items') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('itemList.search')"
          v-model="searchText"
        />
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(item, index) in filteredItemList"
            :key="index"
          >
            <ItemCard
              :itemName="item.name"
              :itemImg="item.img"
              :itemDescription="$t('items.' + item.description)"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import items from '@/data/items'

export default {
  data() {
    return {
      itemList: items,
      searchText: '',
    }
  },
  computed: {
    filteredItemList() {
      const searchText = this.searchText.toLowerCase().trim()
      return this.itemList.filter((item) => {
        return item.name.toLowerCase().includes(searchText)
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
