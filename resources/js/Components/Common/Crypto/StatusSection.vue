<script setup lang="ts">
import { Button } from '@/Components/ui/button'

defineProps<{
    status: 'none' | 'completed' | 'rejected'
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <div v-if="status !== 'none'" class="bg-[#1F2E3E] py-5">
        <div class="w-1/2 mx-auto text-center">
            <template v-if="status === 'completed'">
                <svg class="w-24 h-24 text-green-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                        clip-rule="evenodd" />
                </svg>
                <p class="text-lg font-semibold">Вывод средств успешно выполнен!</p>
            </template>
            <template v-else-if="status === 'rejected'">
                <svg class="w-24 h-24 text-red-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clip-rule="evenodd" />
                </svg>
                <p class="text-lg font-semibold">Не удалось выполнить вывод средств</p>
            </template>
        </div>
        <div class="w-full pb-5 py-5 mt-5 bg-[#0c202f]">
            <div class="w-[90%] mx-auto space-y-5">
                <p class="text-center font-semibold opacity-80">
                    {{ status === 'completed' ? 'Такие транзакции обычно занимают около 30 минут' : 'Попробуйте еще раз или свяжитесь со службой поддержки' }}
                </p>
                <Button @click="emit('close')" class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">
                    {{ status === 'completed' ? 'Готово' : 'Служба поддержки' }}
                </Button>
                <Button @click="emit('close')" class="w-full py-6 text-lg bg-[#1F2E3E] text-white hover:bg-[#071722]">
                    Вернуться в кошелёк
                </Button>
            </div>
        </div>
    </div>
</template>