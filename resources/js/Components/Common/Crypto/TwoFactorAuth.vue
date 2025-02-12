<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Copy } from 'lucide-vue-next'

const props = defineProps<{
    withdrawalData: {
        amount: string
        address: string
        network: string
        name: string
    }
}>()

const emit = defineEmits<{
    (e: 'showEmail'): void
    (e: 'confirm'): void
}>()

const twoFactorCode = ref('')

const validateForm = () => {
    return twoFactorCode.value.trim() !== ''
}

const handleSubmit = () => {
    if (validateForm()) {
        emit('confirm')
    }
}
</script>

<template>
    <div>
        <div class="py-5 bg-[#1F2E3E]">
            <div class="w-[90%] mx-auto">
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div class="space-y-2">
                        <Label class="text-base font-semibold">Ваш код двухфакторной аутентификации:</Label>
                        <div class="relative">
                            <Input v-model="twoFactorCode" type="text" placeholder="Введите код"
                                class="bg-[#071722] text-base !py-6 !px-4 pr-10"
                                :class="{ 'border-red-500': twoFactorCode.trim() === '' }" required />
                            <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                        </div>
                        <p v-if="twoFactorCode.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
                    </div>
                    <p class="text-sm font-thin text-right">Изменить <a href="#!" class="text-blue-500 underline"
                            @click="emit('showEmail')">настройки</a> аутентификации</p>
                    <Button type="submit" class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500"
                        :disabled="!validateForm()">
                        Подтвердить вывод средств
                    </Button>
                </form>
            </div>
        </div>
        <div class="bg-[#0C202E] py-5">
            <div class="w-[90%] mx-auto">
                <h3 class="font-semibold mb-4">Информация о выводе</h3>
                <div class="flex gap-10 mb-8">
                    <ul class="space-y-2 opacity-60">
                        <li>
                            <p>Адрес:</p>
                        </li>
                        <li>
                            <p>Сеть:</p>
                        </li>
                        <li>
                            <p>Валюта:</p>
                        </li>
                        <li>
                            <p>Сумма:</p>
                        </li>
                    </ul>
                    <ul class="space-y-2 opacity-60">
                        <li>
                            <p>{{ props.withdrawalData.address }}</p>
                        </li>
                        <li>
                            <p>{{ props.withdrawalData.network }}</p> <!-- Сеть -->
                        </li>
                        <li>
                            <p>{{ props.withdrawalData.name }}</p> <!-- Валюта -->
                        </li>
                        <li>
                            <p>{{ props.withdrawalData.amount }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>