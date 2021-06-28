<template>
  <!-- Qualities -->
  <v-container tag="section" id="qualities" class="py-5 px-5 px-md-3">
    <v-flex>
      <h3 class="text-center">My Qualities</h3>
    </v-flex>

    <v-flex class="py-5">
      <v-tabs centered>
        <!-- <v-tab-slider color="blue"></v-tab-slider> -->
        <v-tab
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
        >
          {{ tab }}
        </v-tab>
      </v-tabs>

      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </v-flex>
  </v-container>
  <!-- End of Qualities Section -->
</template>

<script>
export default {
  data() {
    return {
      currentTab: "Education",
      tabs: ["Education", "Experience", "Skills"],
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab + "Card";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>