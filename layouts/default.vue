<template>
  <v-app dark>
    <HeaderComponent/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="justify-center">
      <span>By LucianoNeo &copy; {{ new Date().getFullYear() }}</span>
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
  width: 100vw;
  background-color: #222;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
