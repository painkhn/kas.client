<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronLeft, } from 'lucide-vue-next'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button data-sidebar="trigger" variant="ghost" size="icon" :class="cn('h-7 w-7', props.class)" @click="toggleSidebar">
    <div class="flex relative justify-center items-center" :class="cn(
      'duration-200',
      'group-data-[collapsible=icon]:rotate-180',
      )">
      <div class="!w-3.5 !h-7 rounded-l-full bg-[#0C202E] absolute left-0 z-20"></div>
      <div class="w-7 !h-7 bg-[#0C202E] rounded-full border-2 border-dashed border-red-400 z-10"></div>
      <ChevronLeft class="z-40 absolute" />
    </div>
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
