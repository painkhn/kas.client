<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/Components/ui/popover'
</script>

<template>
    <Popover>
        <PopoverTrigger>
            <slot />
        </PopoverTrigger>
        <PopoverContent>
            Some popover content
        </PopoverContent>
    </Popover>
</template>