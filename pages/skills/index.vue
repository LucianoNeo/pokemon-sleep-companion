<template>
  <div class="mt-4 d-flex flex-column">
    <div class="d-flex align-center ">
      <v-btn plain @click="$router.push('/')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="text-uppercase zindex">{{ $t('skillsList.skills') }}</h3>
    </div>
    <div class="mt-4 mx-0 d-flex justify-center align-center">
      <v-col cols="12" class="pa-0 ma-0">
        <v-text-field
          solo
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('skillsList.search')"
          v-model="searchText"
          class="mx-4"
        />
        <SectionTitle :title="$t('skillsList.mainSkill')" />
        <v-row class="d-flex justify-center cardsContainer mt-2">
          <v-col
            lg="4"
            sm="12"
            md="4"
            class="d-flex justify-center align-center"
            v-for="(skill, key) in filteredSkillsList"
            :key="key"
          >
            <SkillCard
              :skillName="skill.name"
              :skillDescription="$t('skills.' + skill.description)"
              :skillImg="skill.img"
            />
          </v-col>
        </v-row>
        <SectionTitle :title="$t('skillsList.subSkill')" />
      </v-col>
    </div>
  </div>
</template>

<script>
import skills from '@/data/skills'

export default {
  data() {
    return {
      skillList: skills,
      searchText: '',
    }
  },
  computed: {
    filteredSkillsList() {
      const searchText = this.searchText.toLowerCase().trim()
      return this.skillList.filter((skill) => {
        return skill.name.toLowerCase().includes(searchText)
      })
    },
  },
}
</script>
<style scoped>
.cardsContainer {
  height: 100%;
  margin: 0 !important;
}

@media (max-width: 767px) {
  .cardsContainer {
    max-width: 100%;
    height: 70vh;
    overflow-y: auto;
  }
}
</style>
