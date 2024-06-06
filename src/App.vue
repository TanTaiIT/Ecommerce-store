<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
// Data
const route = useRoute()

//Computed
const layoutMeta = computed(() => {
  return route.meta.layout
})

const layout = computed(()=> {
  return (layoutMeta.value || 'default') + '-layout'
})

</script>

<template>
  <component :is="layout"/>
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
