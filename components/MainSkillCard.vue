<template>
  <div class="card py-4 px-4 my-8 d-flex align-center justify-center">
    <img src="/types/fire.png" alt="fire type" width="64" height="64" class="mr-4">
    <div>
      <h3>{{ title }}</h3>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  border: 2px solid green;
  border-radius: 20px;
  background-color: #2B2F30;
}
</style>
