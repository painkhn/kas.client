<template>
    <span class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
        <img v-if="country" :src="flagUrl" :alt="countryName" :title="countryName" />
    </span>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
    country: {
        type: String,
        required: true,
    },
    countryName: {
        type: String,
        required: false,
    },
})

const flagUrl = computed(() => {
    return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`
})
</script>
