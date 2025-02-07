<script setup lang="ts">
import { PrimitiveProps } from 'radix-vue';
import { HTMLAttributes } from 'vue'

import Collapsible from '@/Components/ui/collapsible/Collapsible.vue';
import CollapsibleContent from '@/Components/ui/collapsible/CollapsibleContent.vue';
import CollapsibleTrigger from '@/Components/ui/collapsible/CollapsibleTrigger.vue';
import Command from '@/Components/ui/command/Command.vue';
import SidebarGroup from '@/Components/ui/sidebar/SidebarGroup.vue';
import SidebarMenu from '@/Components/ui/sidebar/SidebarMenu.vue';
import SidebarMenuButton from '@/Components/ui/sidebar/SidebarMenuButton.vue';
import SidebarMenuItem from '@/Components/ui/sidebar/SidebarMenuItem.vue';
import SidebarMenuSub from '@/Components/ui/sidebar/SidebarMenuSub.vue';
import SidebarMenuSubButton from '@/Components/ui/sidebar/SidebarMenuSubButton.vue';
import SidebarMenuSubItem from '@/Components/ui/sidebar/SidebarMenuSubItem.vue';
import { cn } from '@/lib/utils';
import { AudioWaveform, BookOpen, Bot, ChartNoAxesColumnIncreasing, ChevronRight, Clock, Crown, Dices, Edit, Frame, GalleryVerticalEnd, Map, PieChart, Settings, Settings2, SquareTerminal, Star, Wallet } from 'lucide-vue-next';
import SidebarGroupLabel from '@/Components/ui/sidebar/SidebarGroupLabel.vue';

const props = defineProps<PrimitiveProps & {
    class?: HTMLAttributes['class']
}>()

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
            title: 'Lorem',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
        },
        {
            title: 'Lorem',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
        },
        {
            title: 'Lorem',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
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
    <SidebarGroup>
        <SidebarGroupLabel class="font-semibold text-base opacity-60">Прочитанные</SidebarGroupLabel>
        <SidebarMenu class="space-y-2">
            <Collapsible as-child class="group/collapsible">

            </Collapsible>
            <SidebarMenuItem v-for="item in data.navMain" :key="item.title" :default-open="item.isActive"
                :tooltip="item.title">
                <SidebarMenuButton class="px-2 h-auto" :class="cn(
                    'duration-100',
                    'group-data-[collapsible=icon]:p-0',
                    props.class)">
                    <div class="flex gap-4">
                        <div>
                            <component :is="item.icon" />
                        </div>
                        <div>
                            <span class="text-base">{{ item.title }}</span>
                            <p class="text-sm text-white/80 font-thin">{{ item.desription }}</p>
                        </div>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>