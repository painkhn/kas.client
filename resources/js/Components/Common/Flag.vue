<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    country: string
}>()

const flagPath = computed(() => {
    try {
        return new URL(`../node_modules/circle-flags/flags/${props.country.toLowerCase()}.svg`, import.meta.url).href
    } catch {
        return ''
    }
})
</script>

<template>
    <img v-if="flagPath" :src="flagPath" :alt="country" class="w-6 h-4 rounded" />
</template>
