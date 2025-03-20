<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'

const data = [
    {
        image: '',
        value: 'USD',
    },
    {
        image: '',
        value: 'EUR',
    },
    {
        image: '',
        value: 'RUB',
    },
]
</script>

<template>
    <Select>
        <SelectTrigger class="w-1/3 border-0">
            <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel></SelectLabel>
                <SelectItem v-for="(item, index) in data" :key="index" :value="item.value" class="cursor-pointer">
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 rounded-full bg-white"></div>
                        <p>{{ item.value }}</p>
                    </div>
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>