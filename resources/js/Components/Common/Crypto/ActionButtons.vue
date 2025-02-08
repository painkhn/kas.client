<script setup lang="ts">
defineProps<{
    activeAction: 'none' | 'deposit' | 'withdrawal'
}>()

const emit = defineEmits<{
    (e: 'showDeposit'): void
    (e: 'showWithdrawal'): void
}>()
</script>

<template>
    <div class="!w-1/2 mx-auto transition-all flex justify-between">
        <button @click="emit('showDeposit')" :class="activeAction === 'deposit' ? '!bg-[#071722]' : ''"
            class="w-1/3 py-2 bg-[#1F2E3E] font-semibold">
            Депозит
        </button>
        <button @click="emit('showWithdrawal')" :class="activeAction === 'withdrawal' ? '!bg-[#071722]' : ''"
            class="w-1/3 py-2 bg-[#1F2E3E] font-semibold">
            Вывод
        </button>
    </div>
</template>