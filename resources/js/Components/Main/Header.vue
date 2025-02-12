<script setup lang="ts">
import Logo from '../Common/Logo.vue';
import Button from '../ui/button/Button.vue';
import Login from './AuthModal/Login.vue';
import Register from './AuthModal/Register.vue';
import CryptoSelect from '../Common/Crypto/CryptoSelect.vue';
import { Wallet } from 'lucide-vue-next';
import CryptoModal from '../Common/Crypto/CryptoModal.vue';
import CryptoPopover from '../Common/Crypto/CryptoPopover.vue';
</script>

<template>
    <header
        class="w-full min-h-[90px] bg-gradient-to-r from-[#0C202E] to-[#2c3a44] flex items-center justify-between px-10">
        <div class="logo">
            <Logo />
        </div>
        <div class="flex items-center">
            <CryptoSelect />
            <CryptoModal>
                <div class="p-2 bg-blue-500 rounded-r">
                    <Wallet />
                </div>
            </CryptoModal>
        </div>
        <div class="space-x-4 flex" v-if="!$page.props.auth.user">
            <Login>
                <Button variant="link">Войти</Button>
            </Login>
            <div class="w-[200px]">
                <Register>
                    <span class="font-semibold">Зарегистрироваться</span>
                </Register>
            </div>
        </div>
        <div v-else>
            <slot />
        </div>

    </header>
</template>