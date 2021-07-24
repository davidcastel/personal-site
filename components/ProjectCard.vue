<template>
  <v-card max-height="auto">
    <v-container fluid>
      <v-row no-gutters>
        <v-col
          cols="3"
          sm="4"
          md="3"
          align-self="center"
          class="my-auto mx-auto"
        >
          <v-icon
            size="7rem"
            :color="main_language"
            class="d-flex justify-center tilt-element"
            data-tilt
            data-tilt-perspective="50"
            >fab fa-{{ main_language }}</v-icon
          >
        </v-col>
        <v-col cols="9" sm="12" md="9">
          <v-card-title class="text-right">
            <h4>
              {{ title }}
            </h4>
          </v-card-title>
          <v-card-text>
            <p class="text-truncate d-block text-body-2 text-sm-body-1">
              {{ body_text }}
            </p>
            <p class="mb-0 text-body-2">
              Tools: <br />
              [<template v-for="lang in languages"> {{ lang + " " }} </template
              >]
            </p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-card-actions class="d-flex flex-row justify-space-around w-100">
          <v-btn elevation="2" color="primary" :href="btn_repo_link">
            {{ btn_repo_txt }}
          </v-btn>
          <v-btn
            v-if="has_site_link"
            elevation="2"
            color="primary"
            :href="btn_site_link"
            target="_blank"
          >
            {{ btn_site_txt }}
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    body_text: { type: String, required: true },
    main_language: { type: String, required: true },
    languages: { type: Array, required: true },
    btn_repo_txt: { type: String, required: true },
    btn_repo_link: { type: String, required: true },
    has_site_link: { type: Boolean, required: true },
    btn_site_txt: { type: String, required: false },
    btn_site_link: { type: String, required: false },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-truncate {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal !important;
}
</style>

<style lang="scss">
.python--text {
  color: #2b5b84 !important;
}

.html5--text {
  color: #f16529 !important;
}

.java--text {
  color: black !important;
}
</style>