<template>
  <nav>
    <router-link v-for="route of routes" :key="route.name" :to="{ name: route.name}">
      {{ route.meta.title }}
    </router-link>
  </nav>
  <hr>
  <section>
    <router-view/>
  </section>
</template>

<script setup lang="ts">
import { routes } from "./router";
import inlineCss from './assets/inline.css?inline'
console.log('inlineCss:', inlineCss)
</script>

<style scoped>
nav a {
  margin: 0 10px;
}
</style>