<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import { Calendar } from '@/Components/ui/calendar'

import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover'
import { cn } from '@/lib/utils'
import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const df = new DateFormatter('en-US', {
    dateStyle: 'long',
})

const value = ref<DateValue>()

defineProps<{
    componentField: any
}>()
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline" :class="cn(
                'justify-start text-left font-normal w-full !bg-[#D6D6D6] text-black hover:text-black',
                !value && 'text-black/80',
            )">
                <CalendarIcon class="mr-2 h-4 w-4" />
                {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Дата рождения" }}
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
            <Calendar v-model="value" initial-focus v-bind="componentField" class="bg-[#061724]" />
        </PopoverContent>
    </Popover>
</template>