<template>
  <v-row
    class="rounded-xl card primary justify-center align-center py-2"
    :class="incenseType ? incenseType : 'grass'"
  >
    <v-col cols="2" class="d-flex justify-center align-center">
      <img :src="incenseImg" width="50" />
    </v-col>
    <v-col
      cols="10"
      class="d-flex flex-column justify-space-between align-start"
    >
      <v-row class="justify-space-between content align-center">
        <v-col cols="10">
          <h4 class="font-weight-bold">{{ incenseName }}</h4>
          <span>{{ incenseDescription }}</span>
        </v-col>
        <v-col cols="2" class="d-flex align-content-start justify-start">
          <img :src="'/types/' + incenseType + '.png'" width="30" height="30" v-if="incenseType"/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    incenseImg: {
      type: String,
      required: true,
    },
    incenseName: {
      type: String,
      required: true,
    },
    incenseDescription: {
      type: String,
      required: true,
    },
    incenseType: {
      type: String | null,
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
  min-height: 150px;
}
</style>
