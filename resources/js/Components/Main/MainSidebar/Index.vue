<script setup lang="ts">
import { PrimitiveProps } from 'radix-vue';
import { HTMLAttributes } from 'vue'
import Image from '@/Components/Common/Image.vue';

import Button from '@/Components/ui/button/Button.vue';
import Login from '@/Components/Main/AuthModal/Login.vue';

import { cn } from '@/lib/utils'

import MiddleData from './MiddleData.vue'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarRail,
    SidebarTrigger,
} from '@/Components/ui/sidebar'

const props = defineProps<PrimitiveProps & {
    class?: HTMLAttributes['class']
}>()

import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
    Star,
    Clock
} from 'lucide-vue-next'
import HeadData from './HeadData.vue';
import FooterData from './FooterData.vue';

const headData = {
    navMain: [
        {
            title: 'Избранное',
            icon: Star,
            isActive: true,
        },
        {
            title: 'Недавние',
            icon: Clock,
            isActive: true,
        }
    ]
}

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    navMain: [
        {
            title: 'Playground',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: '#',
                },
                {
                    title: 'Starred',
                    url: '#',
                },
                {
                    title: 'Settings',
                    url: '#',
                },
            ],
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
}
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarTrigger class="-right-5 top-[15%] absolute z-40 hover:bg-transparent w-7 h-7 transition-all">
            <Image :src="'/img/sidebarTrigger.svg'" class="shadow shadow-black rounded-full" />
        </SidebarTrigger>
        <SidebarHeader class="mb-5 shadow-md shadow-black/40">
            <div class="w-full py-3 flex justify-center items-center">
                <Image :src="'/img/sidebarHeader.svg'" />
            </div>
        </SidebarHeader>
        <SidebarContent class="px-4 space-y-4">
            <HeadData v-if="!$page.props.auth.user" class="border-b border-black/40 px-0 py-4" />

            <MiddleData v-if="!$page.props.auth.user" class="px-2" />

            <FooterData v-if="!$page.props.auth.user" class="pt-4 border-t border-black/40" />

            <SidebarGroup v-else class="px-4">
                <div class="py-4 border-b border-[#1375E1] text-center space-y-4">
                    <SidebarGroupLabel class="px-0 text-lg inline text-center" :class="cn(
                        'duration-100',
                        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                        props.class)">Авторизация</SidebarGroupLabel>
                    <h3 class="text-center" :class="cn(
                        'duration-100',
                        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                        props.class)">Авторизируйтесь, чтобы начать играть прямо сейчас!</h3>
                    <Login>
                        <Button class="bg-[#1375E1] text-white hover:bg-blue-500" :class="cn(
                            'duration-100',
                            'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                            props.class)">Войти в аккаунт</Button>
                    </Login>
                </div>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <!--  -->
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
    
</template>