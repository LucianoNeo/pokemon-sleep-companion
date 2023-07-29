<template>
  <v-row justify="center" align="center" class="mt-8">
    <v-container >
      <v-row class="mt-4">
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/pokemon/1.png" buttonText="Pokémon" variant="3"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/ingredientticketl.png" buttonText="Itens" variant="2"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/energypillow.png" buttonText="Sleep Styles" variant="3" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/berries/grepaberry.png" buttonText="Berries"  variant="1"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/ingredients/fancyapple.png" buttonText="Ingredients"  variant="5"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/incenses/focusincense.png" buttonText="Incenses"  variant="6"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/subskillseed.png" buttonText="Skills" variant="7"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/dishes/mixedcurry.png" buttonText="Dishes" variant="6"/>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <HomeButton buttonImg="island.png" buttonText="Islands" variant="7"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <HomeButton buttonImg="/itens/goodcampticket.png" buttonText="SHOP ITENS" variant="8"/>
        </v-col>
      </v-row>
    </v-container>
    <v-col cols="12" sm="8" md="6"> </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
