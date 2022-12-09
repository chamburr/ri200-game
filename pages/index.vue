<template>
  <div>
    <BCard class="bg-white shadow py-4 px-2">
      <div class="px-4 mb-4">
        <img class="py-4 w-50" src="~/assets/icon.png" alt="Logo" />
      </div>
      <h1 class="font-weight-bold mb-4">RI200人物匹配</h1>
      <p class="h5 mb-5">
        你想不想知道你和那个莱书的伟大先驱或杰出校友最相像呢？现在就来回答几个小问题来看看吧！
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
