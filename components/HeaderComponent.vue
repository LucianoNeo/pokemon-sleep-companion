<template>
  <header>
    <v-row class="primary px-4 pt-4">
      <v-col cols="10">
        <v-img :width="130" cover src="/logo.svg" />
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-content-end justify-end align-end">
        <button @click="changeLanguageTo('pt-BR')" >
          <img class="mb-4 rounded" width="36" src="/flags/BR.svg" />
        </button>
        <button @click="changeLanguageTo('en-US')" >
          <img class="rounded" width="36" src="/flags/US.svg" />
        </button>
      </v-col>
    </v-row>
  </header>
</template>
<script>
export default {
  methods: {
    changeLanguageTo(locale) {
      this.$i18n.setLocale(locale);
    },
  },
};
</script>
<style>
</style>
