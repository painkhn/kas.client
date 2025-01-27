<script setup lang=ts>
import Header from '@/Components/Main/Header.vue';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/Components/ui/avatar'

const props = defineProps<PrimitiveProps & {
    class?: HTMLAttributes['class']
}>()

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb'
import Button from '@/Components/ui/button/Button.vue';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/Components/ui/collapsible'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import Input from '@/Components/ui/input/Input.vue'
import Label from '@/Components/ui/label/Label.vue'
import { Separator } from '@/Components/ui/separator'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from '@/Components/ui/sidebar'
import { cn } from '@/lib/utils'
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Plus,
    Settings2,
    Spade,
    SpadeIcon,
    Sparkles,
    SquareTerminal,
    Trash2,
} from 'lucide-vue-next'
import { PrimitiveProps } from 'radix-vue';
import { computed, HTMLAttributes, ref } from 'vue'

// This is sample data.
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
    <SidebarProvider class="bg-[#0C202E] relative">
        <Sidebar collapsible="icon">
            <SidebarTrigger class="-right-4 top-[15%] absolute z-40 hover:bg-transparent w-7 h-7" />
            <SidebarHeader class="mb-5 shadow-md shadow-black/40">
                <div class="w-full py-3 flex justify-center items-center">
                    <!-- <div class="w-8 h-8 bg-white rounded-full"></div> -->
                    <SpadeIcon class="" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup v-if="$page.props.auth.user">
                    <SidebarGroupLabel>Игры</SidebarGroupLabel>
                    <SidebarMenu>
                        <Collapsible v-for="item in data.navMain" :key="item.title" as-child
                            :default-open="item.isActive" class="group/collapsible">
                            <SidebarMenuItem>
                                <CollapsibleTrigger as-child>
                                    <SidebarMenuButton :tooltip="item.title">
                                        <component :is="item.icon" />
                                        <span>{{ item.title }}</span>
                                        <ChevronRight
                                            class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                                            <SidebarMenuSubButton as-child>
                                                <a :href="subItem.url">
                                                    <span>{{ subItem.title }}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup v-else class="p-4 border-b border-[#1375E1] space-y-4">
                    <SidebarGroupLabel class="px-0 text-lg inline text-center" :class="cn(
                        'duration-100',
                        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                        props.class)">Авторизация</SidebarGroupLabel>
                    <h3 class="text-center" :class="cn(
                        'duration-100',
                        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                        props.class)">Авторизируйтесь, чтобы начать играть прямо сейчас!</h3>
                    <Button class="bg-[#1375E1] text-white hover:bg-blue-500" :class="cn(
                        'duration-100',
                        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                        props.class)">Войти в аккаунт</Button>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <!--  -->
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
        <SidebarInset class="bg-[#061724]">
            <Header />

            <div class="px-10">
                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>