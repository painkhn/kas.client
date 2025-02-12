<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import axios from 'axios'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { BitcoinIcon } from 'lucide-vue-next'
import Image from '../Image.vue'

const data = ref<any>([])
const loading = ref(true)
const error = ref<any>(null)
const selectedCurrency = ref<string>('') // Состояние выбранной валюты
const selectedName = ref<string>('') // Состояние выбранного имени

const emit = defineEmits<{
    (e: 'update:currency', value: string): void
    (e: 'update:name', value: string): void
}>()

async function fetchData() {
    try {
        loading.value = true
        const response = await axios.get('https://c80d17bd7d393263.mokky.dev/CryptoData')
        data.value = response.data
    } catch (err) {
        console.log('error')
        error.value = err
    } finally {
        loading.value = false
    }
}

onMounted(fetchData)

const handleCurrencyChange = (value: string) => {
    selectedCurrency.value = value
    selectedName.value = value
    emit('update:currency', value) // Передаём выбранную валюту в родительский компонент
    emit('update:name', value)
}
</script>

<template>
    <div class="bg-[#1F2E3E] py-5">
        <div class="w-1/2 mx-auto">
            <p class="mb-2">Ваш баланс и выбранная валюта:</p>
            <Select @update:modelValue="handleCurrencyChange">
                <SelectTrigger class="!bg-[#071722] border-transparent outline-none">
                    <SelectValue class="w-full" placeholder="Выберите валюту" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup class="w-full">
                        <SelectLabel></SelectLabel>
                        <SelectItem v-for="(item, index) in data" :key="index" :value="item.value">
                            <div class="flex items-center justify-between text-xl gap-4">
                                {{ item.balance }}
                                <div class="flex items-center justify-end pr-5 gap-2">
                                    <Image class="w-5" :src="item.path" />
                                    {{ item.name }}
                                </div>
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </div>
</template>