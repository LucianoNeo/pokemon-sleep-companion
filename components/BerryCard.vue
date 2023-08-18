<template>
  <v-row
    class="rounded-xl card primary justify-center align-center py-2"
    :class="berryType"
  >
    <v-col cols="2" class="d-flex justify-center align-center">
      <img :src="berryImg" width="50" />
    </v-col>
    <v-col
      cols="10"
      class="d-flex flex-column justify-space-between align-start"
    >
      <v-row class="justify-space-between content">
        <v-col cols="10">
          <h4 class="font-weight-bold">{{ berryName }}</h4>
          <span>{{ berryDescription }}</span>
        </v-col>
        <v-col cols="2">
          <img :src="'/types/' + berryType + '.png'" width="30" height="30" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    berryImg: {
      type: String,
      required: true,
    },
    berryName: {
      type: String,
      required: true,
    },
    berryDescription: {
      type: String,
      required: true,
    },
    berryType: {
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
}

span {
  font-size: 0.9rem;
}

.content {
  width: 100%;
  min-height: 120px;
}
</style>
