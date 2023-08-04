<template>
  <header>
    <div class="primary px-4 pt-4 d-flex">
      <v-col cols="10">
        <v-img :width="130" cover src="/logo.svg" />
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-content-end align-end">
        <button @click="changeLanguageTo('pt-BR')" >
          <img :class="{ active: currentLanguage === 'pt-BR' }" class="mb-4 rounded" width="36" src="/flags/BR.svg" />
        </button>
        <button @click="changeLanguageTo('en-US')" >
          <img :class="{ active: currentLanguage === 'en-US' }" class="rounded" width="36" src="/flags/US.svg" />
        </button>
      </v-col>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      currentLanguage: 'pt-BR',
    };
  },
  methods: {
    changeLanguageTo(locale) {
      this.$i18n.setLocale(locale);
      this.currentLanguage = locale;
    },
  },
};
</script>
<style>
header{
  max-width: 100%;
}

.active{
  border: 2px solid white;
}
</style>
