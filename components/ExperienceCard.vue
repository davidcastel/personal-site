<template>
  <!-- Experience -->
  <v-expansion-panels
    id="experience-list"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="experience-tab"
  >
    <v-expansion-panel
      v-for="experience in experiences"
      :key="experience.company"
    >
      <template v-if="experience.hasPrograms">
        <v-expansion-panel-header>
          <h4>
            {{ experience.company }}
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card v-for="item in experience.programs" :key="item.title">
            <v-card-title>
              <h6>
                {{ item.program }} <br class="d-block d-sm-none" />
                - {{ item.title }}
                <br />
                {{ item.timeFrame }}
              </h6>
            </v-card-title>
            <v-card-text>
              <p v-html="item.body"></p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </template>
      <template v-else-if="experience.hasTitles">
        <v-expansion-panel-header>
          <h4>
            {{ experience.company }}
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card v-for="role in experience.programs" :key="role.title">
            <v-card-title>
              <h6>
                {{ role.title }}
                <br />
                {{ role.timeFrame }}
              </h6>
            </v-card-title>
            <v-card-text>
              <p v-html="role.body"></p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
  <!-- End of Experience -->
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          company: "Google",
          hasPrograms: true,
          hasTitles: false,
          programs: [
            {
              title: "Participant",
              program: "Software Product Sprint (SPS)",
              timeFrame: "May 2021 - Present",
              body: "",
            },
            {
              title: "Participant",
              program: "Computer Science Summer Institute (CSSI)",
              timeFrame: "July 2019",
              body: 'I had the honor to be able to help create "whee//" as the final project. It is a wheelchair accessible app that allows users to check if a location is wheelchair accessible or not. Using HTML and CSS, we created the base of the webpage with various webpages and connected all the webpages and buttons using python. We incorporated JavaScript to implement the wheelchair API as well as the Google Maps API.In addition, I implemented a live time stamp on a webpage to allow a user to check their time zone.',
            },
          ],
        },
        {
          company: "Draft Studios",
          hasPrograms: false,
          hasTitles: true,
          programs: [
            {
              title: "Junior Product Manager",
              timeFrame: "March 2021 - Present",
              body: "",
            },
            {
              title: "Junior Developer",
              timeFrame: "October 2019 - Present",
              body: "Colloborate with other developers to create functional websites for clients using Jekyll,Bootstrap, HTML/CSS, and JS. <br>- Fabricated and tested a process to simplify the development of a project by laying out templates and organzing the repository for effective development.",
            },
          ],
        },
        {
          company: "Students Run Philly Style (SRPS)",
          hasPrograms: false,
          hasTitles: true,
          programs: [
            {
              title: "Junior Running Leader",
              timeFrame: "February 2020 - Present",
              body: "",
            },
            {
              title: "Participant",
              timeFrame: "February 2015 - December 2019",
              body: "",
            },
          ],
        },
        {
          company: "University of Pennsylvania",
          hasPrograms: true,
          hasTitles: false,
          programs: [
            {
              title: "Participant",
              program: "Summer Mentorship Program (SMP)",
              timeFrame: "June 2017 - August 2017",
              body: "I was fortunate enough to be apart of the school of Engineering where I was exposed to various forms of engineering(ex. Computer Engineering, Civil Engineering, Electrical Engineering, and Mechanical Engineering). Throughout 4-weeks, my group and I built a functional Tobi robot to be able to present at the end of the program ceremony. The robot was designed using Solid Works for the frame and wheels. We learned how to solder to be able to create the circuit board required for the robot. We used Arduinos to program the robot's movement with the language C++.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>