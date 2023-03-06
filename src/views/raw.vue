<template>
  <textarea style="width: 100%" rows="5" disabled>{{ rawJs }}</textarea>
</template>

<script setup lang="ts">
import rawJs from '../assets/raw.js?raw'
console.log('rawJs:', rawJs)
</script>

<style scoped>

</style>