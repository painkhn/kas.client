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
    navMain: [
        {
            title: 'Russian',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
        },
        {
            title: 'Espanol',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
        },
        {
            title: 'Русский',
            desription: 'Lorem ipsum',
            url: '#',
            icon: Dices,
            isActive: true,
        },
    ],
}
</script>

<template>
    <SidebarGroup>
        <SidebarMenu class="gap-0 space-y-4">
            <Collapsible as-child class="group/collapsible">

            </Collapsible>
            <SidebarMenuItem v-for="item in data.navMain" :key="item.title" :default-open="item.isActive"
                :tooltip="item.title">
                <SidebarMenuButton class="px-2 py-0 h-auto" :class="cn(
                    'duration-100',
                    'group-data-[collapsible=icon]:p-0',
                    props.class)">
                    <span class="text-base">{{ item.title }}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>