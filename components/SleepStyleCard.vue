<template>
  <div class="card">
    <div class="blue rounded-t px-4 py-2">
      <h4>{{ name }}</h4>
    </div>
    <div class="d-flex primary rounded-b content">
      <v-col cols="3">
        <img :src="pokemonImg" width="180" />
      </v-col>
      <v-col cols="4" class="d-flex flex-column align-start">
        <h3>{{$t('sleepStyle.locations')}}</h3>
        <span>{{ location }}</span>
        <h3>{{$t('sleepStyle.from')}}</h3>
        <span>{{ rank }}</span>
      </v-col>
      <v-col cols="5">
        <h3>{{$t('sleepStyle.rewards')}}</h3>
        <ul>
          <li v-for="(item, index) in rewards" :key="index">{{ item }}</li>
        </ul>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonImg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    rewards: {
      type: Array[String],
      required: true,
    },
  },
}
</script>
<style scoped>
.card {
  width: 100%;
}

.content
{
  height: 150px;
}

img {
    transform: translate(-35px,-20px);
  }

@media (max-width: 767px) {
  img {
    transform: translateX(-50px);
  }

  .content
{
  height: 200px;
}
}
</style>
