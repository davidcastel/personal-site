<template>
  <!-- Experience -->
  <v-expansion-panels
    class="tab-pane fade"
    id="experience-list"
    role="tabpanel"
    aria-labelledby="experience-tab"
  >
    <v-expansion-panel v-for="project in projects" :key="project">
      <v-expansion-panel-header>
        <h4>
          {{ project.title }}
          <br />
          <span>{{ project.company }}</span> <br />
          <span>{{ project.timeFrame }}</span>
        </h4>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ project.body }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <!-- End of Experience -->
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Participant",
          company: "Google - Software Product Sprint",
          timeFrame: "2021 - Present",
          body: "",
        },
        {
          title: "Junior Developer",
          company: "Draft Studios",
          timeFrame: "2019 - Present",
          body: "",
        },
        {
          title: "Participant",
          company: "Google - Computer Science Summer Institute (CSSI)",
          timeFrame: "2019",
          body: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>