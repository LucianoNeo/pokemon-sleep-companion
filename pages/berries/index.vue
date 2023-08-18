<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex align-center ">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('berriesList.berries') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('berriesList.search')"
          v-model="searchText"
        />
        <v-row class="d-flex justify-center cardsContainer">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(berry, index) in filteredBerryList"
            :key="index"
          >
            <BerryCard
              :berryName="berry.name"
              :berryImg="berry.img"
              :berryType="berry.type"
              :berryDescription="$t('berries.' + berry.description)"
            />
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import berries from '@/data/berries'

export default {
  data() {
    return {
      berryList: berries,
      searchText: '',
    }
  },
  computed: {
    filteredBerryList() {
      const searchText = this.searchText.toLowerCase().trim()
      return this.berryList.filter((berry) => {
        return berry.name.toLowerCase().includes(searchText)
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
