<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import Login from './AuthModal/Login.vue';
import Register from './AuthModal/Register.vue';
</script>

<template>
    <header
        class="w-full min-h-[72px] bg-gradient-to-r from-[#0C202E] to-[#2c3a44] flex items-center justify-between px-10">
        <div class="logo text-2xl font-semibold">
            NORMAL
        </div>
        <div class="space-x-4">
            <Login>
                <Button variant="link">Войти</Button>
            </Login>
            <Register>
                <Button class="bg-[#1375E1] text-white hover:bg-blue-500">Зарегистрироваться</Button>
            </Register>
        </div>
    </header>
</template>