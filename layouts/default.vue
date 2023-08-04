<template>
  <v-app dark>
    <HeaderComponent/>
    <v-main class="accent">
        <Nuxt />
    </v-main>
    <v-footer class="justify-center">
      <span>By LucianoNeo &copy; {{ new Date().getFullYear() }} v0.65</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
html,body{
  background-color: #222;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
