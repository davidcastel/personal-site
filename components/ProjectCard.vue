<template>
  <v-card max-height="auto">
    <v-card-title>
      <h4>
        {{ title }}
      </h4>
    </v-card-title>
    <v-card-text>
      <p class="text-truncate d-block">
        {{ body_text }}
      </p>
    </v-card-text>
    <v-card-text>
      <p class="mb-0">
        <template v-for="lang in languages">
          {{ lang + " " }}
        </template>
      </p>
    </v-card-text>
    <v-card-action>
      <v-btn elevation="2" color="primary" :href="btn_repo_link">
        {{ btn_repo_txt }}
      </v-btn>
      <v-btn
        v-if="has_site_link"
        elevation="2"
        color="primary"
        :href="btn_site_link"
      >
        {{ btn_site_txt }}
      </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    body_text: { type: String, required: true },
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