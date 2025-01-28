<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Layout from '@/Layouts/MainLayout.vue';
import Button from '@/Components/ui/button/Button.vue';

import Register from '@/Components/Main/AuthModal/Register.vue';
import Image from '@/Components/Common/Image.vue';
</script>

<template>

    <Head title="Main page" />

    <Layout>
        <div class="w-full flex justify-between gap-10">
            <!-- левая половина контента -->
            <div class="w-1/2 h-main grid grid-cols-1 pl-28 items-center py-24">
                <h1 class="text-[72px] leading-[1.35]">
                    Stay normal
                    <br>
                    Stay casino
                </h1>
                <div>
                    <Register>
                        <Button class="bg-[#1375E1] text-white py-6 hover:bg-blue-500">Зарегистрироваться</Button>
                    </Register>
                </div>
                <div>
                    <h2>или войти с помощью</h2>
                    <div class="inline-flex gap-4 items-center p-2 shadow-md shadow-black bg-[#0C202E] rounded">
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
            <div class="w-1/2">
                <div class="w-full h-main bg-white"></div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>
.h-main {
    height: calc(100vh - 150px);
}
</style>
