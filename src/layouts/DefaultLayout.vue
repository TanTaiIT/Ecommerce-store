<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import BottomFooter from '@/components/common/BottomFooter.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const mainElement = ref(null)
const router = useRoute()
// watch
watch(() => router.path, () => {
    mainElement.value.scrollTo(0, 0)
})
</script>
<template>
    <div class="flex flex-col w-full items-center">
      <NavBar />
  
      <div
        ref="mainElement"
        class="mb-auto flex flex-col items-center h-[calc(100vh-90px)] overflow-y-auto w-full mt-[90px]"
      >
        <slot></slot>
        <BottomFooter />
      </div>
    </div>
  </template>
<style>
</style>