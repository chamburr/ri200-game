<template>
  <div>
    <BCard class="bg-white shadow py-4 px-2">
      <div class="px-4 mb-4">
        <img class="py-4 w-50" src="~/assets/icon.jpg" alt="Logo" />
      </div>
      <h1 id="title" class="font-weight-bold d-inline-block mb-4">
        <span id="title-span" class="mx-2 px-1 rounded">莱</span>看你是谁？
      </h1>
      <p class="h5 mb-5">
        你想不想知道你和莱佛士书院的哪位先驱或校友最相像呢？现在就回答几个小问题来看看吧！
      </p>
      <NuxtLink to="/game">
        <BButton class="px-4" variant="primary" size="lg" pill>开始匹配</BButton>
      </NuxtLink>
    </BCard>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#title-span {
  display: inline-block;
  transform: rotate(-10deg);
  color: green;
  border: solid green 2px;
}
</style>
