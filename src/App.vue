<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/Layout/TheHeader.vue'
</script>

<template>
  <main>
    <TheHeader />

    <RouterView />
  </main>

</template>

<style scoped lang="scss">

</style>
