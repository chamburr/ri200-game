<template>
  <div>
    <BCard class="bg-white shadow py-4 px-2">
      <h1 class="font-weight-bold mb-5">页面不存在</h1>
      <p class="h5 mb-5">抱歉，您要查看的页面不存在。</p>
      <NuxtLink to="/">
        <BButton class="px-4" variant="primary" size="lg" pill>返回主页</BButton>
      </NuxtLink>
    </BCard>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>
