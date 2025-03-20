<script setup lang="ts">
import Image from '@/Components/Common/Image.vue';
import Progress from '@/Components/ui/progress/Progress.vue';
import CircleProgress from '../CircleProgress.vue';


</script>

<template>
    <div class="w-2/3 mx-auto">
        <div class="w-full px-6 bg-[#0c202f] py-2 shadow-[0_0_15px_#5d81a7] rounded-md">
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
                    <Link :href="'/'" class="flex items-center gap-1 text-2xl transition-all hover:gap-2 font-semibold">
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
    </div>
</template>