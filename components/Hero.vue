<template>
  <!-- Hero -->
  <v-container fluid tag="section">
    <v-row>
      <v-card width="100vw">
        <v-img
          height="100vh"
          :src="require(`@/assets/images/Sky Line.jpg`)"
          alt="Skyline of a city"
          class="align-center"
        >
          <v-card-title height="100vh" class="d-flex flex-column">
            <h1>Hello, I am :</h1>
            <h3>David, nice to meet you</h3>
          </v-card-title>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
  <!-- End of Hero section -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>