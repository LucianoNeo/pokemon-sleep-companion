<template>
  <div class="primary title py-2 px-6">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.title {
  width: 100%;
}
</style>
