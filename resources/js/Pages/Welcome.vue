<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import Layout from '@/Layouts/MainLayout.vue';
import Button from '@/Components/ui/button/Button.vue';

import Login from '@/Components/Main/AuthModal/Login.vue';
</script>

<template>

    <Head title="Main page" />

    <Layout>
        <div class="w-full flex justify-between gap-10">
            <!-- левая половина контента -->
            <div class="w-1/2 h-main grid grid-cols-1 pl-24 items-center py-24">
                <h1 class="text-6xl leading-normal">
                    Stay normal
                    <br>
                    Stay casino
                </h1>
                <div>
                    <Login>
                        <Button class="bg-[#1375E1] text-white py-6 hover:bg-blue-500">Зарегистрироваться</Button>
                    </Login>
                </div>
                <div>
                    <h2>или войти с помощью</h2>
                    <div class="inline-flex gap-4 items-center p-2 shadow-md shadow-black bg-[#0C202E] rounded">
                        <!-- переделать логотипы -->
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-12 h-12" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                            <path fill="#fff"
                                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-12 h-12" viewBox="0,0,256,256">
                            <g transform="">
                                <g fill-opacity="0" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                                </g>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path
                                        d="M128,220.16c-50.89856,0 -92.16,-41.26144 -92.16,-92.16v0c0,-50.89856 41.26144,-92.16 92.16,-92.16v0c50.89856,0 92.16,41.26144 92.16,92.16v0c0,50.89856 -41.26144,92.16 -92.16,92.16z"
                                        id="shape"></path>
                                </g>
                                <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-10 h-10 rounded-full"
                            viewBox="0,0,256,256">
                            <g transform="">
                                <g fill="#d03535" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                                </g>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <g transform="scale(8.53333,8.53333)">
                                        <path
                                            d="M15.00391,3c-6.629,0 -12.00391,5.373 -12.00391,12c0,6.627 5.37491,12 12.00391,12c10.01,0 12.26517,-9.293 11.32617,-14h-1.33008h-2.26758h-7.73242v4h7.73828c-0.88958,3.44825 -4.01233,6 -7.73828,6c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c2.009,0 3.83914,0.74575 5.24414,1.96875l2.8418,-2.83984c-2.134,-1.944 -4.96903,-3.12891 -8.08203,-3.12891z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
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
