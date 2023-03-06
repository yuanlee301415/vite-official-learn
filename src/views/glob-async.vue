<template>
  <div>
    <button @click="visible = true">加载异步组件</button>
    <div v-if="visible">
      <details open v-for="item of formItems">
        <summary>表单组件</summary>
        <component :is="item"/>
      </details>
    </div>

  </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";

const comps = import.meta.glob('../components/form-item/*.vue')
console.log('comps:', comps)

const formItems = Object.keys(comps).map(key => defineAsyncComponent(() => import(key)))
const visible = ref(false)
</script>

<style scoped>

</style>