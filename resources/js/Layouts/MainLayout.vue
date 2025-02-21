<script setup lang=ts>
import Header from '@/Components/Main/Header.vue';

import {
    SidebarInset,
    SidebarProvider,
} from '@/Components/ui/sidebar'

import MainSidebar from '@/Components/Main/MainSidebar/Index.vue';
import UserSidebar from '@/Components/Main/RightSidebar/UserSidebar.vue';
import RightSidebarProvider from '@/Components/Main/RightSidebar/RightSidebarProvider.vue';
import SidebarRightTrigger from '@/Components/Main/RightSidebar/SidebarRightTrigger.vue';
import { Bell, ChevronDown, Globe, User, User2 } from 'lucide-vue-next';
import { ref } from 'vue';
import Footer from '@/Components/Main/Footer.vue';

// Состояние для отслеживания активного сайдбара
const activeSidebar = ref<'profile' | 'notifications' | 'language'>('profile');

// Функции для переключения состояния
const showProfile = () => {
    activeSidebar.value = 'profile';
};

const showNotifications = () => {
    activeSidebar.value = 'notifications';
};

const showLanguage = () => {
    activeSidebar.value = 'language';
};
</script>

<template>
    <SidebarProvider class="bg-[#0C202E] relative">

        <MainSidebar />

        <RightSidebarProvider class="bg-[#0C202E] relative">
            <SidebarInset class="bg-[#061724]">

                <Header>
                    <div class="flex items-center gap-4">
                        <SidebarRightTrigger v-if="$page.props.auth.user" @click="showProfile">
                            <User class="!w-6 !h-6" :class="activeSidebar === 'profile' ? 'text-blue-500' : ''" />
                        </SidebarRightTrigger>
                        <SidebarRightTrigger v-if="$page.props.auth.user" @click="showNotifications">
                            <Bell class="!w-6 !h-6" :class="activeSidebar === 'notifications' ? 'text-blue-500' : ''" />
                        </SidebarRightTrigger>
                        <SidebarRightTrigger v-if="$page.props.auth.user" @click="showLanguage">
                            <Globe class="!w-6 !h-6" :class="activeSidebar === 'language' ? 'text-blue-500' : ''" />
                        </SidebarRightTrigger>
                    </div>
                </Header>
                <div>
                    <slot />
                </div>
                <Footer />
            </SidebarInset>
            <UserSidebar v-if="$page.props.auth.user" :active-sidebar="activeSidebar" />
        </RightSidebarProvider>

    </SidebarProvider>


</template>