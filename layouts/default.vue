<template>
  <div id="app">
    <BContainer class="d-flex flex-column justify-content-around min-vh-100 p-4 p-md-5">
      <Nuxt class="text-dark text-center" />
    </BContainer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#app {
  background-image: url("~/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

@include media-breakpoint-up(md) {
  #app .container {
    max-width: 540px;
  }
}
</style>
