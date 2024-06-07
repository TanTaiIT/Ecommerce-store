<script setup>
import SearchWrapper from '@/components/search/SearchWrapper.vue'
</script>

<template>
  <div class="fixed top-0 left-0 z-50 border-b-[1px] w-full bg-white gb-shadow flex flex-col">
    <div class="max-md:h-[45px] h-[35px] w-full bg-[#f9f9f9] flex justify-between px-3 items-center">
        <div class="max-md:hidden">Call us: 094619309</div>
        <div class="text-center">
            <strong>Sales 50%</strong> to day only when you apply code <strong>superbad.store</strong>
        </div>

        <div class="max-md:hidden">
            About us | help
        </div>
    </div>

    <div class="py-3 flex justify-between w-full items-center px-10" style="flex: 1 1 auto">
        <RouterLink to="/" class="font-bold text-lg mr-5">
            SUPERBAD.<span class="underlined underline-mask">STORE</span>
        </RouterLink>

        <SearchWrapper class="max-md:hidden"/>
    </div>
  </div>
</template>

<style>
</style>