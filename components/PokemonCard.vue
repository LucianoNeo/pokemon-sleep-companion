<template>
  <v-row class="px-3 font-weight-bold rounded-xl card my-2 mx-2" :class="pokemonType">
    <v-col cols="8" class="d-flex flex-column justify-space-between card">
      <span>#{{ pokemonNumber }}</span>
      <h2 class="text-uppercase">{{ pokemonName }}</h2>
    </v-col>
    <v-col cols="4" class="container">
      <img :src="pokemonImg" class="pokeImg" />
      <img :src="'/types/' + pokemonType + '.png'" class="typeImg" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    pokemonImg: {
      type: String,
      required: true,
    },
    pokemonNumber: {
      type: String,
      required: true,
    },
    pokemonName: {
      type: String,
      required: true,
    },
    pokemonType: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.pokeImg {
  object-fit: cover;
  width: 80px;
  height: 100px;
  transform: translateY(-20px);
}
.typeImg {
  object-fit: cover;
  width: 24px;
  height: 24px;
}
.container {
  display: flex;
  justify-content: center;
}

.card {
  height: 96px !important;
}

.card:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
</style>
