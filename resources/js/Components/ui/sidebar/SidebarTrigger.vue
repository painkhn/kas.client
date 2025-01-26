<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <!-- <PanelLeft /> -->
    <div class="!w-7 !h-7 bg-white rounded-full z-20"></div>
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
