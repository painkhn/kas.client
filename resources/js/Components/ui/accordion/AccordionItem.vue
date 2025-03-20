<script setup lang="ts">
import { cn } from '@/lib/utils'
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex gap-1">
    <AccordionItem v-bind="forwardedProps" :class="cn('w-[70%] bg-[#0c202f] px-4 rounded-l-md', props.class)">
      <slot />
    </AccordionItem>
    <div class="bg-[#0c202f] w-[30%] px-4 rounded-r-md flex flex-col justify-center h-[56px] text-center">
      <h3 class="font-semibold">
        $X-$X
      </h3>
      <p class="text-[12px] opacity-60 font-thin">
        Сумма оборота
      </p>
    </div>
  </div>
</template>
