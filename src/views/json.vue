<template>
  name:
  <pre>{{ name }}</pre>

  version:
  <pre>{{ version }}</pre>

  description:
  <pre>{{ description }}</pre>

  dependencies:
  <pre>{{ dependencies }}</pre>

  devDependencies:
  <pre>{{ devDependencies }}</pre>
</template>

<script setup lang="ts">
import {name, version, description, dependencies, devDependencies} from '../../package.json'

</script>

<style scoped>

</style>