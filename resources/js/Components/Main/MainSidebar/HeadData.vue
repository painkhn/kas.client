<script setup lang="ts">
import Collapsible from '@/Components/ui/collapsible/Collapsible.vue';
import CollapsibleTrigger from '@/Components/ui/collapsible/CollapsibleTrigger.vue';
import SidebarGroup from '@/Components/ui/sidebar/SidebarGroup.vue';
import SidebarMenu from '@/Components/ui/sidebar/SidebarMenu.vue';
import SidebarMenuButton from '@/Components/ui/sidebar/SidebarMenuButton.vue';
import SidebarMenuItem from '@/Components/ui/sidebar/SidebarMenuItem.vue';
import { Clock, Star } from 'lucide-vue-next';

const data = {
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
</script>

<template>
    <SidebarGroup v-if="$page.props.auth.user">
        <SidebarMenu>
            <Collapsible v-for="item in data.navMain" :key="item.title" as-child :default-open="item.isActive"
                class="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton :tooltip="item.title">
                            <component :is="item.icon" />
                            <span class="text-base">{{ item.title }}</span>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>