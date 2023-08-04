<template>
  <button @click="$router.push('/pokemon/' + pokemonName)" class="font-weight-bold rounded-xl card my-2 mx-2 py-2 px-6" :class="pokemonType">
  <v-row >
    <v-col cols="8" class="d-flex flex-column justify-space-between card align-start">
      <span>#{{ pokemonNumber }}</span>
      <h2 class="text-uppercase">{{ pokemonName }}</h2>
    </v-col>
    <v-col cols="4" class="container">
      <img :src="pokemonImg" class="pokeImg" />
      <img :src="'/types/' + pokemonType + '.png'" class="typeImg" />
    </v-col>
  </v-row>
</button>
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
  }
}
</script>
<style scoped>
.pokeImg {
  object-fit: cover;
  width: 80px;
  height: 100px;
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
  width: 100%;
}

.card:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
</style>
