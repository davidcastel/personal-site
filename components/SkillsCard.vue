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
            <p v-html="item.title"></p>
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
        { title: "Languages", isRows: true, skill: ["Spanish"] },
        {
          title: "Programming Languages",
          isRows: false,
          skill: [
            {
              title: "HTML/CSS &emsp; &emsp;<strong>(Proficient)</strong>",
              progress: 89,
              color: "red",
            },
            {
              title: "JavaScript &emsp; &emsp;<strong>(Intermate)</strong>",
              progress: 80,
              color: "orange",
            },
            {
              title: "Python &emsp; &emsp; &emsp; <strong>(Novice)</strong>",
              progress: 65,
              color: "light-blue",
            },
            {
              title:
                "Java &emsp; &emsp; &emsp; &emsp;<strong>(Novice)</strong>",
              progress: 55,
              color: "green",
            },
          ],
        },
        { title: "Frameworks", isRows: true, skill: ["Bootstrap"] },
        {
          title: "Tools",
          isRows: true,
          skill: [
            "Command-line,",
            "Linux",
            "Git,",
            "Github,",
            "VsCode,",
            "Vim,",
            "Slack,",
            "Asana,",
            "Figma,",
            "Jekyll,",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>