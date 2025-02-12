<script setup lang="ts">
import { computed } from 'vue';

// Определяем пропс `src` с типом string
const props = defineProps<{
    src: string;
}>();

// Вычисляемое свойство для пути до изображения
const imageSrc = computed(() => props.src);
</script>

<template>
    <div>
        <img :src="imageSrc" alt="Image" class="image w-full h-full" />
    </div>
</template>