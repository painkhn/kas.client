<script setup lang="ts">
import Image from '@/Components/Common/Image.vue';
import Logo from '@/Components/Common/Logo.vue';
import Carousel from '@/Components/Main/HomeAuth/Carousel.vue';
import CircleProgress from '@/Components/Main/HomeAuth/CircleProgress.vue';
import CircleTimer from '@/Components/Main/HomeAuth/CircleTimer.vue';
import EventsCarousel from '@/Components/Main/HomeAuth/EventsCarousel.vue';
import RealTimeTable from '@/Components/Main/RealTimeTable.vue';
import Button from '@/Components/ui/button/Button.vue';
import Progress from '@/Components/ui/progress/Progress.vue';
import { Link } from '@inertiajs/vue3';
import { ChevronRight, Crown, Flame, History } from 'lucide-vue-next';
import { ref } from 'vue';
import Cashback from './Cashback.vue';

const games = ref([
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
]);

// Пример данных для второй карусели
const popular = ref([
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    { image: '/img/exampleGameImage.jpeg' },
    // Добавьте больше данных по необходимости
]);
</script>

<template>
    <section class="max-w-[1600px] w-full px-10 mx-auto py-14 flex justify-between gap-8">
        <div class="w-[450px] space-y-8">
            <div class="w-full px-6 pb-9 py-4 bg-transparent shadow-[0_0_15px_#5d81a7] rounded-md">
                <div class="flex justify-between items-center text-[#97aeca] font-semibold mb-8">
                    <p class="text-xl">
                        {{ $page.props.auth.user.name }}
                    </p>
                    <p class="text-xl">
                        Silver
                    </p>
                </div>
                <div class="flex">
                    <div class="w-1/2 space-y-4">
                        <Link :href="'/'"
                            class="flex items-center gap-1 text-2xl transition-all hover:gap-2 font-semibold">
                        VIP Прогресс
                        <ChevronRight class="w-6 h-6 mt-1" />
                        </Link>
                        <p class="text-lg font-semibold leading-snug">
                            До уровня <span class="text-[#97aeca]">Silver II</span> осталось $6k оборота
                        </p>
                        <div class="flex items-center gap-2">
                            <div class="relative">
                                <Image :src="'/img/level_icons/silver.svg'" class="w-8 h-8" />
                                <span
                                    class="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-black text-sm">I</span>
                            </div>
                            <Progress :model-value="33" />
                            <div class="relative">
                                <Image :src="'/img/level_icons/silver.svg'" class="w-8 h-8" />
                                <span
                                    class="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-black text-sm">II</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <CircleProgress />
                    </div>
                </div>
            </div>
            <Button class="w-full py-6 text-base text-white bg-[#346bb3] hover:bg-blue-500">
                Узнать больше о VIP привилегиях
            </Button>
        </div>
        <div class="flex items-center mb-20">
            <Image :src="'/img/separator.svg'" class="!w-2" />
        </div>
        <div class="max-h-[377px] space-y-6 flex flex-col justify-between">
            <Cashback />
            <div class="w-full">
                <p class="font-semibold text-lg">
                    Ежедневный кешбэк скоро будет доступен
                    <br>
                    Тут текст типа продолжайте играть, чтобы кешбэк был больше
                </p>
            </div>
        </div>
    </section>
    <section class="py-20 px-10 space-y-8">
        <h2 class="text-3xl font-semibold flex items-center gap-2">
            <History class="w-10 h-10 text-[#346bb3]" />
            Ваши игры
        </h2>
        <!-- Передаем данные для первой карусели -->
        <Carousel :data="games">
            <!-- Кастомизация отображения элемента -->
            <template #default="{ item }">
                <Link :href="'#!'">
                <div class="text-center">
                    <img :src="item.image" :alt="item.title" class="w-full h-auto rounded-lg max-w-[240px]" />
                </div>
                </Link>
            </template>
        </Carousel>
    </section>
    <section class="py-20 px-10 space-y-8">
        <h2 class="text-3xl font-semibold flex items-center gap-2">
            <Flame class="w-10 h-10 text-[#b81f1e]" />
            Набирающие популярность
        </h2>
        <!-- Передаем данные для второй карусели -->
        <Carousel :data="popular">
            <!-- Кастомизация отображения элемента -->
            <template #default="{ item }">
                <img :src="item.image" :alt="item.title" class="w-full h-auto rounded-lg max-w-[240px]" />
            </template>
        </Carousel>
    </section>
    <section class="py-20 px-10 space-y-8">
        <h2 class="text-3xl font-semibold flex items-center gap-2">
            <Crown class="w-10 h-10 text-[#57852b]" />
            Конкурсы и турниры
        </h2>
        <EventsCarousel />
    </section>

    <section class="w-full px-10 space-y-8 mb-16">
        <h2 class="text-3xl font-semibold flex items-center gap-2">
            <Image :src="'/img/sidebarHeader.svg'" class="w-10 h-10 text-[#57852b]" />
            Ставки казино
        </h2>

        <RealTimeTable />
    </section>

    <section class="w-full px-28 relative mb-16">
        <Image :src="'/img/roulette.svg'" class="drop-shadow-[15px_0_15px_rgba(0,0,0,0.5)] w-full" />
        <Logo class="absolute top-6 left-1/2 -translate-x-1/2 z-40 w-[200px]" />
        <div class="absolute text-center w-[100px] h-[150px] top-[50%] left-1/2 -translate-x-1/2">
            <Image :src="'/img/roulette_icons/wallet.svg'" />
            <span class="font-semibold">Информация Хранилище</span>
        </div>
        <div class="absolute text-center w-[100px] h-[150px] top-[40%] left-[37%] -translate-x-1/2 rotate-[25deg]">
            <Image :src="'/img/roulette_icons/crown.svg'" />
            <span class="font-semibold">Информация Normal VIP</span>
        </div>
        <div class="absolute text-center w-[150px] h-[150px] top-[40%] left-[64%] -translate-x-1/2 -rotate-[23deg]">
            <Image :src="'/img/roulette_icons/arrows.svg'" class="w-[100px] mx-auto" />
            <span class="font-semibold"> Руководство
                Депозит и вывод</span>
        </div>
        <div class="absolute text-center w-[100px] h-[150px] top-[15%] left-[25%] -translate-x-1/2 rotate-[45deg]">
            <Image :src="'/img/roulette_icons/cubes.svg'" />
            <span class="font-semibold">Информация Казино</span>
        </div>
        <div class="absolute text-center w-[100px] h-[150px] top-[15%] left-[75%] -translate-x-1/2 -rotate-[45deg]">
            <Image :src="'/img/roulette_icons/coins.svg'" />
            <span class="font-semibold">Информация Криптовалюта</span>
        </div>
    </section>
</template>