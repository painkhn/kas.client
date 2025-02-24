<script setup lang="ts">
defineProps<{
    activeAction: 'none' | 'progress' | 'privilege'
}>()

const emit = defineEmits<{
    (e: 'showDeposit'): void
    (e: 'showWithdrawal'): void
}>()
</script>

<template>
    <div class="!w-2/3 mx-auto transition-all flex justify-between gap-5">
        <button @click="emit('showDeposit')" :class="activeAction === 'progress' ? '!bg-[#071722]' : ''"
            class="w-1/2 py-2 bg-[#1F2E3E] font-semibold">
            Прогресс
        </button>
        <button @click="emit('showWithdrawal')" :class="activeAction === 'privilege' ? '!bg-[#071722]' : ''"
            class="w-1/2 py-2 bg-[#1F2E3E] font-semibold">
            Привилегии
        </button>
    </div>
</template>