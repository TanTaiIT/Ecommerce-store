<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import BottomFooter from '@/components/common/BottomFooter.vue'
</script>

<template>
    <div class="flex flex-col w-full items-center">
        <NavBar/>

        <div class="mb-auto flex flex-col items-center">
            <slot></slot>
        </div>

        <BottomFooter/>
    </div>
</template>

<style>
</style>