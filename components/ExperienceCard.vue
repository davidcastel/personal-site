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
          <h5>
            {{ experience.company }}
          </h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card v-for="item in experience.programs" :key="item.title">
            <v-card-title>
              {{ item.program }} - {{ item.title }}
              <br />
              {{ item.timeFrame }}
            </v-card-title>
            <v-card-text>
              <p>
                {{ item.body }}
              </p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </template>
      <template v-else-if="experience.hasTitles">
        <v-expansion-panel-header>
          <h5>
            {{ experience.company }}
          </h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card v-for="role in experience.programs" :key="role.title">
            <v-card-title>
              {{ role.title }}
              <br />
              {{ role.timeFrame }}
            </v-card-title>
            <v-card-text>
              {{ role.body }}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </template>
      <template v-else>
        <v-expansion-panel-header>
          <h5>
            {{ experience.programs }} - {{ experience.title }}
            <br />
            <span>{{ experience.company }}</span>
            <br />
            <span>{{ experience.timeFrame }}</span>
          </h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>
              {{ experience.body }}
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
              body: "",
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
              timeFrame: "August 2019 - Present",
              body: "",
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
          title: "Participant",
          hasPrograms: false,
          hasTitles: false,
          programs: "Teen Photo",
          company: "Philadelphia Photo Arts Center (PPAC)",
          timeFrame: "September 2017 - May 2019",
          body: "",
        },
        {
          title: "Participant",
          hasPrograms: false,
          hasTitles: false,
          programs: "Summer Mentorship Program (SMP)",
          company: "University of Pennsylvania",
          timeFrame: "June 2017 - August 2017",
          body: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>