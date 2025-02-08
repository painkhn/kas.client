<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Copy } from 'lucide-vue-next'

const btcAddress = ref('')
const network = ref('')

const validateForm = () => {
    return btcAddress.value.trim() !== '' && network.value.trim() !== ''
}
</script>

<template>
    <div class="w-[90%] mx-auto">
        <div class="flex gap-10">
            <div class="w-2/3 space-y-4">
                <div class="space-y-2">
                    <Label class="text-base font-semibold">Ваш BTC адрес Normal wallet:</Label>
                    <div class="relative">
                        <Input v-model="btcAddress" class="bg-[#071722] text-base !py-6 !px-4 !pr-14"
                            :class="{ 'border-red-500': btcAddress.trim() === '' }" required />
                        <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                    </div>
                    <p v-if="btcAddress.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
                </div>
                <div class="space-y-2">
                    <Label class="text-base font-semibold">Сеть</Label>
                    <div class="relative">
                        <Input v-model="network" class="bg-[#071722] text-base !py-6 !px-4 !pr-14"
                            :class="{ 'border-red-500': network.trim() === '' }" required />
                        <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                    </div>
                    <p v-if="network.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
                </div>
                <div class="py-4">
                    <p class="font-thin">Тут текст типа убедитесь, что вы не олень</p>
                </div>
            </div>
            <div class="w-1/3">
                <img src="/img/qr-code.svg" class="w-2/3 ml-auto" alt="">
            </div>
        </div>
    </div>
</template>