<template>
  <v-container>
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data: {
    projects: [
      {
        id: "maze-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
      {
        id: "banking-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
      {
        id: "path_of_hope-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
      {
        id: "wheell-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
      {
        id: "CVS_library-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
      {
        id: "calculator-project",
        cardItems: {
          title: "",
          img: "",
          body: "",
          languages: [],
          btn_repo: "See Source Code",
          repo_link: "",
          hasLink: false,
          btn_text: "",
          btn_link: "",
        },
      },
    ],
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>