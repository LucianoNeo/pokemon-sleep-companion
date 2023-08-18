<template>
  <v-row class="rounded-xl card primary justify-center align-center py-2">
    <v-col cols="3">
      <img :src="itemImg" width="80" />
    </v-col>
    <v-col
      cols="9"
      class="d-flex flex-column justify-space-between align-start"
    >
      <h4 class="font-weight-bold">{{ itemName }}</h4>
      <span>{{ itemDescription }}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    itemImg: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>


.card {
  width: 100%;
  min-height: 120px;
  margin: 10px;
}

span {
    font-size: 0.9rem;
  }


</style>
