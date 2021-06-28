<template>
  <!-- Skils -->
  <v-container class="tab-pane fade" id="skills-list">
    <v-row v-for="skill in skills" :key="skill" class="card">
      <v-col cols="12" sm="4" md="3">
        <h4 class="text-center text-sm-right">{{ skill.title }} :</h4>
      </v-col>
      <v-col cols="12" sm="8">
        <template v-if="skill.isRows">
          <p class="mb-0">
            <template v-for="item in skill.skill">
              {{ item + " " }}
            </template>
          </p>
        </template>
        <template v-else>
          <v-row v-for="item in skill.skill" :key="item">
            <p>
              {{ item.title }}
            </p>
            <v-progress-linear
              height="10"
              :color="item.color"
              :value="item.progress"
              width="80"
              striped
              rounded
            ></v-progress-linear>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { title: "Bilingual", isRows: true, skill: ["Spanish"] },
        {
          title: "Languages",
          isRows: false,
          skill: [
            { title: "HTML/CSS", progress: 90, color: "red" },
            { title: "JavaScript", progress: 80, color: "orange" },
            { title: "Python", progress: 75, color: "light-blue" },
            { title: "Java", progress: 45, color: "green" },
          ],
        },
        { title: "Frameworks", isRows: true, skill: ["Bootstrap"] },
        {
          title: "Tools",
          isRows: true,
          skill: [
            "Command-line,",
            "Git,",
            "Jekyll,",
            "VsCode,",
            "Vim,",
            "Slack,",
            "Asana,",
            "Figma,",
            "Github,",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>