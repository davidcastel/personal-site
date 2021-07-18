<template>
  <v-container id="project-preview" tag="section" class="py-5 px-5 px-md-3">
    <v-flex>
      <h3 class="text-center">Projects I've Worked On</h3>
    </v-flex>
    <v-row align="stretch" class="py-5">
      <v-col
        v-for="project in projects"
        :key="project.id"
        align-self="stretch"
        cols="12"
        sm="6"
      >
        <ProjectCard
          :title="project.cardItems.title"
          :body_text="project.cardItems.body"
          :main_language="project.cardItems.main_language"
          :languages="project.cardItems.languages"
          :btn_repo_txt="project.cardItems.btn_repo"
          :btn_repo_link="project.cardItems.repo_link"
          :has_site_link="project.cardItems.hasLink"
          :btn_site_txt="project.cardItems.btn_text"
          :btn_site_link="project.cardItems.btn_link"
        />
      </v-col>
      <v-col cols="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: "maze-project",
          cardItems: {
            title: "Mystical Maze",
            img: "",
            body: "This is my final project for my Computer Science (CS 171) class. The objective was to use what I learned in the class and be able to create a game. I decided to create a maze game in python on the terminal. The purpose of the game is to have the player go through the maze with seeing the walls and eventually make it to the end of the maze.",
            main_language: "python",
            languages: ["Python"],
            btn_repo: "See Source Code",
            repo_link: "https://github.com/davidcastel/Python-Maze",
            hasLink: false,
          },
        },
        {
          id: "banking-project",
          cardItems: {
            title: "Banking Project",
            img: "",
            body: "This is my final project for my Software Engineering (SE 181) class. The objective of the project was to implement best software engineering practices while following TDD (Test Driven Development) to be able to build out a banking system. The purpose of the system is to take in a list of string commands in a specific format and watch your money interact with the system and grow over time. The project was built using Java, JDK 11, and JUnit5 to be able to run test on my local machine.",
            main_language: "java",
            languages: ["Java,", "JUnit,", "JDK11"],
            btn_repo: "See Source Code",
            repo_link: "https://github.com/davidcastel/SE-course-project",
            hasLink: false,
          },
        },
        {
          id: "path_of_hope-project",
          cardItems: {
            title: "The Path of Hope",
            img: "",
            body: "This is a project created to tell immigrant children stories in the United States in a childs book style. Implementing original illustrations and stories, the user can have fun reading along with the drawings that show case the story.",
            main_language: "html5",
            languages: ["HTML,", "CSS"],
            btn_repo: "See Source Code",
            repo_link: "/",
            hasLink: true,
            btn_text: "Vist Site",
            btn_link: "https://davidcastel.github.io/The-Path-Of-Hope/",
          },
        },
        {
          id: "CVS_library-project",
          cardItems: {
            title: "CSV Library",
            img: "",
            body: "A python library that I created for my course-long project. It is meant to read CSV files and be able to create and display a table according to the way that the user wants to see it.",
            main_language: "python",
            languages: [
              "Python,",
              "Plotly,",
              "PySimpleGUI,",
              "numpy,",
              "matplotlib",
            ],
            btn_repo: "See Source Code",
            repo_link: "https://github.com/davidcastel/CSV_Library",
            hasLink: false,
          },
        },
      ],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>