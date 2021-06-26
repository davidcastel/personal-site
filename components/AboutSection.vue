<template>
  <v-container id="about-me" tag="section" class="py-5 px-5 px-md-3">
    <!-- About Me -->
    <v-card class="mb-3 border-0" color="transparent" outlined>
      <v-row class="g-0 d-flex flex-column flex-sm-row">
        <v-col cols="8" sm="4" class="my-auto mx-auto">
          <v-img
            :lazy-src="require(`@/assets/images/selfie.jpg`)"
            :src="require(`@/assets/images/selfie.jpg`)"
            alt="Selfie of David"
            class="card-img-top rounded-3"
          ></v-img>
        </v-col>
        <v-col class="my-auto">
          <v-card-title class="py-0">
            <h3 class="py-0">A little bit about myself:</h3>
          </v-card-title>
          <v-card-text class="ps-md-5 pt-4 pt-md-3">
            <p>
              I am a web developer always trying to improve my skills and
              knowedelge. I am currently a student Double majoring in Software
              Engineering and Procrasination with a minor in sleeping. I
              specialize in writing beautiful broken code. I enjoy running on
              colder days and have completed three full marathons so far. My
              goal one day is to be able to run the 6 world marathons.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <!-- End of About Me Section -->
  </v-container>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>