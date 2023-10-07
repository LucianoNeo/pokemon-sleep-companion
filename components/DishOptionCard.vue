<template>
  <v-row
    @click="$router.push('/dishes/' + dishType)"
    class="rounded-xl card primary justify-center align-center py-2"
    :class="color"
  >
    <v-col cols="5" class="d-flex justify-center align-center">
      <img :src="dishImg" width="80" />
    </v-col>
    <v-col
      cols="7"
      class="d-flex justify-center align-center"
    >
      <h2 class="font-weight-bold">{{ dishName }}</h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    dishImg: {
      type: String,
      required: true,
    },
    dishName: {
      type: String,
      required: true,
    },
    dishType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    }
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
