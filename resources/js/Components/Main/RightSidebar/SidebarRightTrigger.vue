<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronLeft } from 'lucide-vue-next'
import { useRightSidebar } from '@/Components/Main/RightSidebar/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useRightSidebar()
</script>

<template>
    <Button data-sidebar="trigger" variant="ghost" size="icon"
        :class="cn('duration-200', 'group-data-[collapsible=icon]:rotate-180', props.class)" class="w-10"
        @click="toggleSidebar">
        <slot />
        <span class="sr-only">Toggle Sidebar</span>
    </Button>
</template>