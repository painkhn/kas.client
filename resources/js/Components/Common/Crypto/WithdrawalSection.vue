<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/Components/ui/select'
import { Copy } from 'lucide-vue-next'

const amount = ref('')
const address = ref('')
const network = ref('')
const currency = ref('')

const emit = defineEmits<{
    (e: 'submit', data: { amount: string, address: string, network: string, currency: string }): void
}>()

const validateForm = () => {
    return amount.value.trim() !== '' &&
        address.value.trim() !== '' &&
        network.value.trim() !== '' &&
        currency.value.trim() !== ''
}

const handleSubmit = () => {
    if (validateForm()) {
        emit('submit', {
            amount: amount.value,
            address: address.value,
            network: network.value,
            currency: currency.value
        })
    }
}
</script>

<template>
    <div class="w-[90%] mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="space-y-2">
                <Label class="text-base font-semibold">Введите сумму для вывода:</Label>
                <div class="relative">
                    <Input v-model="amount" type="text" placeholder="Сколько"
                        class="bg-[#071722] text-base !py-6 !px-4 pr-10"
                        :class="{ 'border-red-500': amount.trim() === '' }" required />
                    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
                        <button class="px-6 py-1 text-blue-500 border-l border-white/20">Вывести всю сумму</button>
                    </span>
                </div>
                <p v-if="amount.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
            </div>
            <div class="space-y-2">
                <Label class="text-base font-semibold">Адрес вашего внешнего BTC кошелька для вывода средств:</Label>
                <div class="relative flex">
                    <Input v-model="address" type="text" placeholder="Куда"
                        class="bg-[#071722] text-base !py-6 !px-4 pr-10"
                        :class="{ 'border-red-500': address.trim() === '' }" required />
                    <Copy class="absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                    <Select v-model="currency">
                        <SelectTrigger
                            class="w-[5%] absolute right-0 top-1/2 -translate-y-1/2 pl-4 !py-4 bg-[#071722] !border-0 rounded-none !border-l border-white/20">
                        </SelectTrigger>
                        <SelectContent class="fixed bottom-0 left-0">
                            <SelectGroup>
                                <SelectLabel>Валюта</SelectLabel>
                                <SelectItem value="BTC">BTC</SelectItem>
                                <SelectItem value="ETH">ETH</SelectItem>
                                <SelectItem value="USDT">USDT</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <p v-if="address.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
            </div>
            <div class="space-y-2">
                <Label class="text-base font-semibold">Сеть:</Label>
                <div class="relative">
                    <Input v-model="network" type="text" placeholder="TRON (TRC20)"
                        class="bg-[#071722] text-base !py-6 !px-4 pr-10"
                        :class="{ 'border-red-500': network.trim() === '' }" required />
                    <Copy class="absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                    <Select v-model="network">
                        <SelectTrigger
                            class="w-[5%] absolute right-0 top-1/2 -translate-y-1/2 pl-4 !py-4 bg-[#071722] !border-0 rounded-none !border-l border-white/20">
                        </SelectTrigger>
                        <SelectContent class="fixed bottom-0 left-0 w-[250px]">
                            <SelectGroup>
                                <SelectLabel>Сеть</SelectLabel>
                                <SelectItem value="TRON">TRON (TRC20)</SelectItem>
                                <SelectItem value="ETH">Ethereum (ERC20)</SelectItem>
                                <SelectItem value="BSC">Binance Smart Chain (BEP20)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <p v-if="network.trim() === ''" class="text-red-500 text-sm">Это поле обязательно</p>
            </div>
            <Button type="submit" class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500"
                :disabled="!validateForm()">
                Далее
            </Button>
        </form>
    </div>
</template>