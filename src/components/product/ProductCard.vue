<script setup>
defineProps({
    width: {
        type: String,
        default: 'w-[200px]'
    },

    product: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div :class="`flex flex-col h-[330px] overflow-hidden product-card-shadow bg-white rounded-xl ${width}`">
        <img :src="product.image" :alt="product.name" class="h-[180px] object-cover"/>
        <div class="flex-auto p-3">
            <p class="text-sm font-semibold text-[#363636] truncate-2">{{ product.name }}</p>
        </div>
    </div>
</template>

<style>
</style>