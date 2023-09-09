<template>
  <v-row
    @click="$router.push('/ingredients/' + ingredientName)"
    class="rounded-xl card primary justify-center align-center py-2 poison"
  >
    <v-col cols="3" class="d-flex justify-center align-center">
      <img :src="ingredientImg" width="50" />
    </v-col>
    <v-col
      cols="9"
      class="d-flex flex-column justify-space-between align-start pr-8"
    >
      <h4 class="font-weight-bold">{{ ingredientName }}</h4>
      <span>{{ ingredientDescription }}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    ingredientImg: {
      type: String,
      required: true,
    },
    ingredientName: {
      type: String,
      required: true,
    },
    ingredientDescription: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.card {
  width: 100vw;
  margin: 1px;
  cursor: pointer;
  min-height: 150px;
}

span {
  font-size: 0.9rem;
}

.content {
  width: 100%;
  min-height: 150px;
}
</style>
