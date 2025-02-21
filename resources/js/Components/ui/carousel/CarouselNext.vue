<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@radix-icons/vue'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute h-8 w-8 rounded-full p-0',
      orientation === 'vertical'
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 right-0 top-[60%] -translate-y-1/2 rotate-0',
      props.class,
    )"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRightIcon class="h-4 w-4 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
