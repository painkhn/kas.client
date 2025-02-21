<script setup lang="ts">
import { Card, CardContent } from '@/Components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/Components/ui/carousel';

// Определяем пропс data
const props = defineProps<{
    data: any[];
}>();
</script>

<template>
    <Carousel class="relative w-full pr-10" :opts="{ align: 'start' }">
        <CarouselContent class="w-[90%]">
            <!-- Используем переданные данные для отображения элементов -->
            <CarouselItem v-for="(item, index) in data" :key="index" class="basis-1/4 max-w-[260px]">
                <div class="p-1">
                    <Card>
                        <CardContent class="flex aspect-square items-center justify-center">
                            <!-- Слот для кастомизации отображения элемента -->
                            <slot :item="item" :index="index">
                                <!-- Значение по умолчанию, если слот не передан -->
                                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                            </slot>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="-mr-5" />
        <CarouselNext class="-mr-5" />
    </Carousel>
</template>