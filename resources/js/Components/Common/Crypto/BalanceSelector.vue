<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { BitcoinIcon } from 'lucide-vue-next'

const data = ref<any>([])
const loading = ref(true)
const error = ref<any>(null)

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
</script>

<template>
    <div class="bg-[#1F2E3E] py-5">
        <div class="w-1/2 mx-auto">
            <p class="mb-2">Ваш баланс и выбранная валюта:</p>
            <Select>
                <SelectTrigger class="!bg-[#071722] border-transparent outline-none">
                    <SelectValue class="w-full" placeholder="Выберите валюту" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem v-for="(item, index) in data" :key="index" :value="item.value">
                            <div class="flex items-center justify-between text-xl">
                                {{ item.balance }}
                                <div class="flex items-center pr-5 gap-2">
                                    <BitcoinIcon />
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