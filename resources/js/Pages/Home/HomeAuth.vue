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
import { ChevronRight, Crown, Dices, Flame, History, Maximize, RectangleHorizontal, Star } from 'lucide-vue-next';
import { ref } from 'vue';
import Cashback from './Cashback.vue';
import PrivilegeModal from '@/Components/Main/HomeAuth/PrivilegeModal/Index.vue'
import GameSelect from '@/Components/Main/HomeAuth/GameSection/Select.vue'

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

const isVisible = ref<boolean>(false)
const opacity = ref<number>(0)

const showGame = () => {
    isVisible.value = !isVisible.value
    window.scrollTo(0, 0)

    if (isVisible.value === true) {
        setTimeout(() => {
            opacity.value = 1 
        }, 100);
    } else {
        opacity.value = 0
    }
}

const isRoulette = ref<boolean>(false)
const isPragmatic = ref<boolean>(false)

const showRoulette = () => {
    isRoulette.value = true
    isPragmatic.value = false
}

const showPragmatic = () => {
    isRoulette.value = false
    isPragmatic.value = true
}

const close = () => {
    isRoulette.value = false
    isPragmatic.value = false

}

const fullscreenElement = ref<HTMLElement | null>(null);

const toggleFullscreen = () => {
    if (!fullscreenElement.value) return;

    if (!document.fullscreenElement) {
        fullscreenElement.value.requestFullscreen().catch(err => {
            console.error(`Ошибка при попытке перейти в полноэкранный режим: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
};
</script>

<template>
    <section class="px-10 w-full py-14 mb-10 space-y-14 transition-all duration-300" :style="{opacity: opacity}"
        v-show="isVisible">
        <div ref="fullscreenElement"
            class="w-full relative h-[800px] bg-[#061824] rounded-lg flex justify-center items-center flex-col border border-white/10">
            <div class="w-[300px] space-y-4 text-center">
                <button
                    class="py-3 font-semibold w-full text-base text-white bg-[#346bb3] hover:bg-blue-500 rounded-md transition-all">
                    Играть
                </button>
                <div class="flex items-center justify-center">
                    <p class="w-2/3">Отображать баланс в</p>
                    <GameSelect />
                </div>
                <div
                    class="absolute w-full px-8 left-0 flex items-center justify-between bottom-0 h-20 rounded-b-lg bg-[#0c202f]">
                    <Logo class="w-32 opacity-10" />
                    <div class="flex items-center gap-8">
                        <Star class="cursor-pointer transition-all hover:scale-125" />
                        <RectangleHorizontal class="cursor-pointer transition-all hover:scale-125" />
                        <Maximize class="cursor-pointer transition-all hover:scale-125" @click="toggleFullscreen" />
                    </div>
                </div>
                <div
                    class="absolute w-16 flex items-center justify-center h-16 rounded-full bg-[#061724] -bottom-8 left-1/2 -translate-x-1/2">
                    <Dices class="w-12" />
                </div>
            </div>
        </div>
        <div class="w-full pt-10 bg-[#0c202f] rounded-lg">
            <div class="w-1/3 mx-auto flex items-center gap-4 mb-10">
                <button class="w-1/2 py-2 bg-[#1F2E3E] font-semibold transition-all" @click="showRoulette"
                    :class="isRoulette === true ? '!bg-[#071722]' : ''">
                    Roulette
                </button>
                <button class="w-1/2 py-2 bg-[#1F2E3E] font-semibold transition-all" @click="showPragmatic"
                    :class="isPragmatic === true ? '!bg-[#071722]' : ''">
                    Progmatic Play
                </button>
            </div>
            <div class="w-full relative bg-[#1f2e3e] rounded-b-lg px-8 py-14">
                <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#1f2e3e] rounded-full flex items-center justify-center cursor-pointer transition-all"
                    :class="isRoulette || isPragmatic === true ? '-rotate-90 opacity-100' : 'rotate-90 cursor-default'"
                    @click="close">
                    <ChevronRight class="h-8 w-8 p-1 bg-[#091d2c] rounded-full transition-all"
                        :class="!isPragmatic && !isRoulette ? 'opacity-50' : 'opacity-100'" />
                </div>
                <div v-show="isRoulette" class="flex">
                    <div class="w-1/2 flex gap-8">
                        <img src="/img/exampleGameImage.jpeg" class="w-64 rounded-lg" alt="">
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold">Roulette</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                            <ul class="space-y-4">
                                <li>
                                    <div
                                        class="py-1 inline-block px-8 rounded-xl bg-[#346bb3] text-white font-semibold">
                                        <span>777</span>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        class="py-1 inline-block px-8 rounded-xl bg-[#346bb3] text-white font-semibold">
                                        <span>poker</span>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        class="py-1 inline-block px-8 rounded-xl bg-[#346bb3] text-white font-semibold">
                                        <span>progmatic play</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-1 w-1/2">
                        <div class="w-full shadow-xl shadow-black/20 rounded-b-md">
                            <div class="w-full p-10 bg-[#0c202f] rounded-t-md flex ">
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
                </div>
                <div class="w-full space-y-4" v-show="isPragmatic">
                    <h2 class="text-3xl font-semibold flex items-center gap-2">
                        <Flame class="w-10 h-10 text-[#b81f1e]" />
                        Популярное от провайдера
                    </h2>
                    <Carousel :data="games">
                        <!-- Кастомизация отображения элемента -->
                        <template #default="{ item }">
                            <button @click="showGame">
                                <div class="text-center">
                                    <img :src="item.image" :alt="item.title"
                                        class="w-full h-auto rounded-lg max-w-[240px]" />
                                </div>
                            </button>
                        </template>
                    </Carousel>
                    <Button class="w-1/3 mx-auto flex py-6 text-base text-white bg-[#346bb3] hover:bg-blue-500">
                        Посмотреть все игры от провайдера
                    </Button>
                </div>
            </div>
        </div>
    </section>
    <section class="max-w-[1600px] w-full px-10 mx-auto flex justify-between gap-8"
        :class="isVisible === true ? '' : 'py-14'">
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
            <!-- <Button class="w-full py-6 text-base text-white bg-[#346bb3] hover:bg-blue-500">

            </Button> -->
            <PrivilegeModal>Узнать больше о VIP
                привилегиях</PrivilegeModal>
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
                <button @click="showGame">
                    <div class="text-center">
                        <img :src="item.image" :alt="item.title" class="w-full h-auto rounded-lg max-w-[240px]" />
                    </div>
                </button>
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