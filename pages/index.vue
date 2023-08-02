<template>
  <v-row class="justify-center align-center">
    <v-container class="overflow-hidden">
      <v-row class="mt-4">
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/pokemon/1.png" buttonText="Pokémon" variant="3" goto="/pokemon"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/ingredientticketl.png" :buttonText="$t('home.items')" variant="2"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/energypillow.png" :buttonText="$t('home.sleepStyles')" variant="3" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/berries/grepaberry.png" :buttonText="$t('home.berries')"  variant="1"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/ingredients/fancyapple.png" :buttonText="$t('home.ingredients')"  variant="5"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/incenses/focusincense.png" :buttonText="$t('home.incenses')"  variant="6"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/subskillseed.png" :buttonText="$t('home.skills')" variant="7"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/dishes/mixedcurry.png" :buttonText="$t('home.dishes')" variant="6"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/island.png" :buttonText="$t('home.islands')" variant="7"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/goodcampticket.png" :buttonText="$t('home.shopItems')" variant="8"/>
        </v-col>
      </v-row>
    </v-container>
    <v-col cols="12" sm="8" md="6"> </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
