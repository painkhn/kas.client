<script setup lang="ts">
import CircleTimer from '@/Components/Main/HomeAuth/CircleTimer.vue';


</script>

<template>
    <div class="relative w-full">
        <img :src="'/img/cashbackWithTitle.svg'" class="drop-shadow-[0_0_10px_#5d81a7] w-full" />
        <!-- <div class="absolute top-1/2 -translate-y-1/2 left-[15%]">
            <p class="text-5xl font-semibold">CASHBACK</p>
        </div> -->
        <div class="absolute top-1/2 -translate-y-1/2 left-[73%]">
            <CircleTimer :initialTime="7660" />
        </div>
    </div>
</template>