<script setup lang="ts">
import Button from '@/Components/ui/button/Button.vue';
import { Card, CardContent } from '@/Components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/Components/ui/carousel'
import CircleTimer from './CircleTimer.vue';
</script>

<template>
    <Carousel class="relative w-full pr-10" :opts="{
        align: 'start',
    }">
        <CarouselContent>
            <CarouselItem v-for="(_, index) in 3" :key="index" class="basis-1/2">
                <div class="p-1">
                    <div class="w-full">
                        <div class="w-full p-10 bg-[#0c202f] rounded-t-md flex">
                            <div class="w-1/3">
                                <h2 class="text-3xl font-semibold mb-4">
                                    Lorem ipsum
                                </h2>
                                <p class="mb-6">
                                    Lorem ipsum dolor sit amet
                                </p>
                                <Button class="w-full py-6 text-base text-white bg-[#346bb3] hover:bg-blue-500">
                                    Участвовать
                                </Button>
                            </div>
                            <div class="w-2/3">
                                <CircleTimer :initialTime="7660" class="ml-auto" />
                            </div>
                        </div>
                        <div class="w-full p-5 bg-[#1f2e3e] rounded-b-md border-t-2 border-dashed border-white">
                            <p class="text-center font-semibold text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="-mr-5" />
        <CarouselNext class="-mr-5" />
    </Carousel>
</template>