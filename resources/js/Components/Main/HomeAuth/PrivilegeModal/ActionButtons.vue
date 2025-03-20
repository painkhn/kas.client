<script setup lang="ts">
defineProps<{
    activeAction: 'none' | 'progress' | 'privilege'
}>()

const emit = defineEmits<{
    (e: 'showProgress'): void
    (e: 'showPrivilege'): void
}>()
</script>

<template>
    <div class="!w-2/3 mx-auto transition-all flex justify-between gap-5">
        <button @click="emit('showProgress')" :class="activeAction === 'progress' ? '!bg-[#071722]' : ''"
            class="w-1/2 py-2 bg-[#1F2E3E] font-semibold">
            Прогресс
        </button>
        <button @click="emit('showPrivilege')" :class="activeAction === 'privilege' ? '!bg-[#071722]' : ''"
            class="w-1/2 py-2 bg-[#1F2E3E] font-semibold">
            Привилегии
        </button>
    </div>
</template>