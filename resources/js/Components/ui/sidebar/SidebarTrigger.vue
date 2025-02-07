<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronLeft, } from 'lucide-vue-next'
import { useSidebar } from './utils'
import Image from '@/Components/Common/Image.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button data-sidebar="trigger" variant="ghost" size="icon" :class="cn('!w-9 duration-200', 'group-data-[collapsible=icon]:rotate-180', props.class)" @click="toggleSidebar">
    <slot />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
