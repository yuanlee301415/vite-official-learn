<template>
  <div>
    <img v-for="name of Object.keys(icons)" :key="name" :src="icons[name].default" alt="">
  </div>
</template>

<script setup lang="ts">
type Module = Record<string, { default: string }>
const icons: Module = import.meta.glob('../assets/icons/*.png', {eager: true})
console.log('icons:', icons)

Object.keys(icons).forEach((key) => {
  console.log('icon:', icons[key].default)
})
</script>

<style scoped>

</style>