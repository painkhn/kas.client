<script setup lang="ts">
import Button from '../ui/button/Button.vue';


</script>

<template>
    <header
        class="w-full min-h-[72px] bg-gradient-to-r from-[#0C202E] to-[#2c3a44] flex items-center justify-between px-10">
        <div class="logo text-2xl font-semibold">
            NORMAL
        </div>
        <div class="space-x-4">
            <Button variant="link">Войти</Button>
            <Button class="bg-[#1375E1] text-white hover:bg-blue-500">Зарегистрироваться</Button>
        </div>
    </header>
</template>