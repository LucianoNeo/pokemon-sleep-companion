<template>
  <v-row
    @click="$router.push('/skills/' + skillName)"
    class="rounded-xl card justify-center align-center py-2"
  >
    <v-col cols="4" class="d-flex justify-start pl-10 align-center">
      <img :src="skillImg" width="50" />
    </v-col>
    <v-col
      cols="8"
      class="d-flex flex-column justify-center align-center"
    >
      <v-row class="justify-space-between content align-center">
        <v-col cols="12" class="d-flex flex-column  justify-center text-left">
          <h4 class="font-weight-bold">{{ skillName }}</h4>
          <span>{{ skillDescription }}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    skillImg: {
      type: String,
      required: true,
    },
    skillName: {
      type: String,
      required: true,
    },
    skillDescription: {
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
  border: 2px solid green !important;
  background-color: #2B2F30;
}

span {
  font-size: 0.9rem;
}

.content {
  width: 100%;
  min-height: 150px;
}

img {
  filter: drop-shadow(0px 0px 7px #FFF)
}
</style>
