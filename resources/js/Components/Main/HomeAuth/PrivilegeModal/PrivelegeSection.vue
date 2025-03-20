<script setup lang="ts">
import Image from '@/Components/Common/Image.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion'

// const defaultValue = 'bronze'

const data = [
    {
        value: 'bronze',
        name: 'Bronze I-III',
        image: '/img/level_icons/bronze.svg'
    },
    {
        value: 'silver',
        name: 'Silver I-III',
        image: '/img/level_icons/silver.svg'
    },
    {
        value: 'gold',
        name: 'Gold I-III',
        image: '/img/level_icons/gold.svg'
    },
    {
        value: 'platinum',
        name: 'Platinum I-V',
        image: '/img/level_icons/platinum.svg'
    },
    {
        value: 'vip',
        name: 'VIP I-V',
        image: '/img/level_icons/vip.svg'
    },
]
</script>

<template>
    <div class="w-[90%] mx-auto">
        <div class="flex gap-4">
            <Accordion type="multiple" collapsible class="w-full space-y-4">
                <AccordionItem v-for="(item, index) in data" :key="index" :value="item.value" class="!w-full">
                    <AccordionTrigger>
                        <div class="flex gap-4">
                            <Image :src="item.image" class="w-6" />
                            <span class="text-base font-semibold">{{ item.name }}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul class="list-disc pl-5 space-y-2">
                            <li>
                                Кэшбек
                                <ul class="list-disc pl-5 space-y-2 mt-2">
                                    <li>
                                        Ежедневный
                                    </li>
                                    <li>
                                        Ежедневный
                                    </li>
                                    <li>
                                        Ежедневный
                                    </li>
                                    <li>
                                        Ежедневный
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Бонус
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>