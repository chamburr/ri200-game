<template>
  <div id="app" class="bg-light">
    <BContainer class="d-flex flex-column justify-content-around min-vh-100 p-5">
      <Nuxt class="text-dark text-center" />
    </BContainer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@include media-breakpoint-up(md) {
  #app .container {
    max-width: 540px;
  }
}
</style>
