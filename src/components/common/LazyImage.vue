<script setup>
import { ref } from 'vue'
// props

defineProps({
    classStyle: {
        type: String,
        default: '',
        required: false
    },
    src: {
        type: String,
        required: false,
        default: ''
    },
    id: {
        type: String,
        default: '',
        required: false,
    },
    alt: {
        type: String,
        default: '',
        required: false
    }
})

// datas
const load = ref(false)

// functions
const onLoad = () => {
    load.value = true
}
</script>

<template>
    <img v-if="src && load" :src="src" :class="classStyle" :alt="alt" :id="id" @load="onLoad">
    <img v-else src="@/assets/image/image-default.jpg" alt="default" :class="classStyle" :id="id" >
</template>

<style>
</style>