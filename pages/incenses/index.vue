<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex align-center ">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('incenseList.incenses') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('incenseList.search')"
          v-model="searchText"
        />
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(incense, index) in filteredIncenseList"
            :key="index"
          >
          <IncenseCard
              :incenseName="incense.name"
              :incenseImg="incense.img"
              :incenseType="incense.type"
              :incenseDescription="$t('incenses.' + incense.description)"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import incenses from '@/data/incenses'

export default {
  data() {
    return {
      incenseList: incenses,
      searchText: '',
    }
  },
  computed: {
    filteredIncenseList() {
      const searchText = this.searchText.toLowerCase().trim()
      return this.incenseList.filter((incense) => {
        return incense.name.toLowerCase().includes(searchText)
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
