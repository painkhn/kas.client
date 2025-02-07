<script setup lang="ts">
import { HTMLAttributes, watch } from 'vue'

const props = defineProps<PrimitiveProps & {
    class?: HTMLAttributes['class'];
    activeSidebar: 'profile' | 'notifications' | 'language';
}>()
import {
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from '@/Components/ui/sidebar'
import RightSidebarComponent from './RightSidebarComponent.vue'
import { PrimitiveProps } from 'radix-vue';
import Image from '@/Components/Common/Image.vue';
import ProfileData from './Profile/ProfileData.vue';
import SidebarFooter from '@/Components/ui/sidebar/SidebarFooter.vue';
import ProfileDataFooter from './Profile/ProfileDataFooter.vue';
import NotificationsData from './Notifications/NotificationsData.vue';
import NotificationsMiddleData from './Notifications/NotificationsMiddleData.vue';
import NotificationsFooterData from './Notifications/NotificationsFooterData.vue';

import { useRightSidebar } from '@/Components/Main/RightSidebar/utils';
import LanguageData from './Language/LanguageData.vue';

const { open, setOpen } = useRightSidebar();

watch(() => props.activeSidebar, () => {
    setOpen(true);
});
</script>

<template>

    <RightSidebarComponent v-model:open="open">
        <SidebarHeader class="mb-5 shadow-md shadow-black/40">
            <div class="w-full py-3 flex justify-center items-center">
                <Image :src="'/img/ProfileImage.svg'" v-if="props.activeSidebar === 'profile'" />
                <Image :src="'/img/NotificationsImage.svg'" v-if="props.activeSidebar === 'notifications'" />
                <Image :src="'/img/LanguageImage.svg'" v-if="props.activeSidebar === 'language'" />
            </div>
        </SidebarHeader>
        <SidebarContent class="p-4" v-if="props.activeSidebar === 'profile'">
            <ProfileData />
            <hr class="border-black/60">
            <ProfileDataFooter class="pt-4" />
        </SidebarContent>
        <SidebarContent class="p-4" v-if="props.activeSidebar === 'notifications'">
            <NotificationsData />
            <hr class="border-black/60">
            <NotificationsMiddleData class="opacity-60" />
            <hr class="border-black/60">
            <NotificationsFooterData />
        </SidebarContent>
        <SidebarContent class="p-4" v-if="props.activeSidebar === 'language'">
            <LanguageData />
        </SidebarContent>
        <SidebarFooter>
            <!--  -->
        </SidebarFooter>
        <SidebarRail />
    </RightSidebarComponent>


</template>