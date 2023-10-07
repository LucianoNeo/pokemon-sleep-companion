<template>
  <v-row
    @click="$router.push('/dishes/' + dishName)"
    class="rounded-xl card primary justify-center align-center py-2"
    :class="dishType"
  >
    <v-col cols="3" class="d-flex justify-center align-center">
      <img :src="dishImg" width="80" />
    </v-col>
    <v-col
      cols="9"
      class="d-flex flex-column justify-space-between align-start pr-8"
    >
      <h4 class="font-weight-bold">{{ dishName }}</h4>
      <span>{{ dishDescription }}</span>
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
    dishDescription: {
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
