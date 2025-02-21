<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-icons/vue'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'touch-manipulation absolute h-8 w-8 rounded-full p-0',
      orientation === 'vertical'
        ? '-right-24 top-1/2 -translate-y-1/2'
        : 'right-0 top-[40%] -translate-y-1/2 rotate-0',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeftIcon class="h-4 w-4 text-current" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
