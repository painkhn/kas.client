<script setup lang="ts">
import Button from '@/Components/ui/button/Button.vue';

import Register from '@/Components/Main/AuthModal/Register.vue';
import Image from '@/Components/Common/Image.vue';
import { Check, Crown } from 'lucide-vue-next';
import Logo from '@/Components/Common/Logo.vue';
import RealTimeTable from '@/Components/Main/RealTimeTable.vue';
</script>

<template>
    <div class="w-full flex justify-between mb-16">
        <!-- левая половина контента -->
        <div class="w-1/2 grid grid-cols-1 pl-28 items-center pt-24 space-y-12">
            <h1 class="text-[72px] leading-[1.35] font-bold">
                Stay normal
                <br>
                Stay casino
            </h1>
            <div class="w-full">
                <Register class="">
                    Зарегистрироваться
                </Register>
            </div>
            <div class="space-y-2">
                <h2 class="text-center font-semibold">или войти с помощью</h2>
                <div
                    class="inline-flex gap-4 items-center p-2 shadow-md shadow-black bg-[#0C202E] w-full justify-center rounded">
                    <!-- переделать логотипы -->
                    <button>
                        <Image :src="'/img/facebook.svg'" />
                    </button>
                    <button>
                        <Image :src="'/img/google.svg'" />
                    </button>
                    <button>
                        <Image :src="'/img/twitch.svg'" />
                    </button>
                </div>
            </div>
        </div>
        <!-- правая половина конента -->
        <div class="w-[90%] py-24 min-h-[500px]">
            <Image :src="'/img/cashbackMainFull.svg'" class="drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        </div>
    </div>
    <section class="w-full px-28 mb-16">
        <ul class="grid grid-cols-5 gap-5">
            <li>
                <div class="w-full py-4 shadow-lg shadow-[#725302] rounded-md">
                    <Image :src="'/img/level_icons/bronze.svg'" class="w-10 mx-auto" />
                    <h3 class="text-center font-semibold text-lg">Bronze</h3>
                    <p class="text-3xl text-center font-semibold">I-III</p>
                    <p class="text-sm text-center text-[#725302]">Уровни</p>
                </div>
            </li>
            <li>
                <div class="w-full py-4 shadow-lg shadow-[#7f8f9c] rounded-md">
                    <Image :src="'/img/level_icons/silver.svg'" class="w-10 mx-auto" />
                    <h3 class="text-center font-semibold text-lg">Silver</h3>
                    <p class="text-3xl text-center font-semibold">I-III</p>
                    <p class="text-sm text-center text-[#7f8f9c]">Уровни</p>
                </div>
            </li>
            <li>
                <div class="w-full py-4 shadow-lg shadow-[#e6a14e] rounded-md">
                    <Image :src="'/img/level_icons/gold.svg'" class="w-10 mx-auto" />
                    <h3 class="text-center font-semibold text-lg">Gold</h3>
                    <p class="text-3xl text-center font-semibold">I-III</p>
                    <p class="text-sm text-center text-[#e6a14e]">Уровни</p>
                </div>
            </li>
            <li>
                <div class="w-full py-4 shadow-lg shadow-[#99dde3] rounded-md">
                    <Image :src="'/img/level_icons/platinum.svg'" class="w-10 mx-auto" />
                    <h3 class="text-center font-semibold text-lg">Platinum</h3>
                    <p class="text-3xl text-center font-semibold">I-V</p>
                    <p class="text-sm text-center text-[#99dde3]">Уровни</p>
                </div>
            </li>
            <li>
                <div class="w-full py-4 shadow-lg shadow-[#b184d5] rounded-md">
                    <Image :src="'/img/level_icons/vip.svg'" class="w-10 mx-auto" />
                    <h3 class="text-center font-semibold text-lg">VIP</h3>
                    <p class="text-3xl text-center font-semibold">I-V</p>
                    <p class="text-sm text-center text-[#b184d5]">Уровни</p>
                </div>
            </li>
        </ul>
    </section>
    <section class="w-full font-semibold text-[25px] text-center space-y-12">
        <h2>Чем выше уровень, тем больше привилегий! Присоединяйся, играй, куча плюшек и вообще мы классные</h2>
        <div class="w-full px-28 py-12 bg-[#0c202f]">
            <ul class="grid grid-cols-4 gap-10">
                <li>
                    <div class="w-full h-[100px] bg-white"></div>
                </li>
                <li>
                    <div class="w-full h-[100px] bg-white"></div>
                </li>
                <li>
                    <div class="w-full h-[100px] bg-white"></div>
                </li>
                <li>
                    <div class="w-full h-[100px] bg-white"></div>
                </li>
            </ul>
        </div>
    </section>
    <section class="px-28 my-24 w-full flex">
        <div class="w-1/2 space-y-16">
            <div>
                <p class="text-3xl font-semibold">Текст типа наслаждайтесь играми,
                    делайте больше ставок, и всё ок</p>
                <p>Тоже какой-то текст e.g. присоединяйтесь скорее</p>
            </div>
            <div class="w-2/3">
                <Register>
                    Зарегистрироваться
                </Register>
            </div>
        </div>
        <div class="flex w-1/2 gap-8">
            <Image :src="'/img/leftCashbackBonusBlock.svg'" />
            <div class="space-y-8">
                <div class="relative">
                    <Image :src="'/img/cashbackLight.svg'" />
                    <h3 class="absolute top-5 left-10 text-2xl font-semibold mb-10">Кешбэк</h3>
                    <p class="absolute top-[75px] left-10 mb-10 leading-snug"> Тут текст про регулярность
                        <br>
                        кешбэка
                    </p>
                    <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
                </div>
                <div class="relative">
                    <Image :src="'/img/cashbackLight.svg'" />
                    <p class="absolute top-5 left-10 mb-10 leading-snug"> Тут - про бонус и кешбэк за переход
                        на
                        <br>
                        новый уровень
                    </p>
                    <h3 class="absolute top-[85px] left-10 text-2xl font-semibold mb-10">Бонус</h3>
                    <Image :src="'/img/diamondIcon.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
                </div>
            </div>
        </div>
    </section>
    <section class="w-full font-semibold text-[25px] text-center space-y-12">
        <h2>Чем выше уровень, тем больше привилегий! Присоединяйся, играй, куча плюшек и вообще мы классные</h2>
        <div class="w-full px-28 py-12 bg-[#0c202f]">
            <ul class="grid grid-cols-9 gap-10">
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto1.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto2.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto3.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto4.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto5.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto6.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto7.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto8.svg'" class="h-full" />
                    </div>
                </li>
                <li>
                    <div class="w-full h-[100px]">
                        <Image :src="'/img/crypto_icons/crypto9.svg'" class="h-full" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="w-full py-24 px-28">
        <div class="grid grid-cols-3 grid-rows-3 gap-7">
            <div class="w-full h-full col-span-2 row-span-2 flex flex-col items-center justify-center gap-12 px-24">
                <h2 class="text-3xl font-semibold">Тысячи игр. Крупные выигрыши. Это Normal</h2>
                <Register>
                    Зарегистрироваться
                </Register>
            </div>
            <div class="w-full h-full relative">
                <Image :src="'/img/cashbackLight.svg'" />
                <h3 class="absolute top-3 left-10 text-2xl font-semibold mb-10">Конкурсы и турниры</h3>
                <p class="absolute top-[60px] left-10 mb-10 leading-snug w-[70%]"> Тут текст про регулярность и
                    выигрыши
                    lorem ipsum
                </p>
                <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
            </div>
            <div class="w-full h-full relative">
                <Image :src="'/img/cashbackDark.svg'" />
                <h3 class="absolute top-3 left-10 text-2xl font-semibold mb-10">Быстрый вывод выигрыша</h3>
                <p class="absolute top-[60px] left-10 mb-10 leading-snug w-[70%]"> Тут про удобство и надежность
                    кошелька
                </p>
                <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
            </div>
            <div class="w-full h-full relative">
                <Image :src="'/img/cashbackLight.svg'" />
                <h3 class="absolute top-3 left-10 text-2xl font-semibold mb-10">Служба поддержки</h3>
                <p class="absolute top-[60px] left-10 mb-10 leading-snug w-[70%]">Тут про помощь игроку 24/7</p>
                <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
            </div>
            <div class="w-full h-full relative">
                <Image :src="'/img/cashbackDark.svg'" />
                <h3 class="absolute top-3 left-10 text-2xl font-semibold mb-10">Еще один пункт придумать</h3>
                <p class="absolute top-[60px] left-10 mb-10 leading-snug w-[70%]">Lorem ipsum</p>
                <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
            </div>
            <div class="w-full h-full relative">
                <Image :src="'/img/cashbackLight.svg'" />
                <h3 class="absolute top-3 left-10 text-2xl font-semibold mb-10">VIP прогресс</h3>
                <p class="absolute top-[45px] left-10 mb-10 leading-snug w-[70%]"> Тут про то, что видно, сколько
                    осталось до
                    нового уровня, что-то типа мы честные</p>
                <Image :src="'/img/percent.svg'" class="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8" />
            </div>
        </div>
    </section>
    <section class="w-full px-28 relative">
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
    <section class="w-full p-28">
        <h2 class="text-3xl font-semibold text-center mb-4">Ставки и выигрыши в режиме реального времени</h2>
        <p class="text-center mb-10">
            Ознакомьтесь со ставками в популярных играх в реальном времени и оцените, сколько вы могли бы выиграть!
        </p>

        <RealTimeTable />
    </section>
</template>