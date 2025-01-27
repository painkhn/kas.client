<script setup lang="ts">
import Button from '@/Components/ui/button/Button.vue';
import Input from '@/Components/ui/input/Input.vue';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/Components/ui/dialog'
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogContent class="bg-[#061724]">
            <DialogHeader class="space-y-4 mb-6">
                <DialogTitle class="text-center">Welcome back!</DialogTitle>
                <DialogDescription class="text-center">
                    First time here? <a href="#!" class="text-blue-600">Sign in</a>
                </DialogDescription>
            </DialogHeader>

            <form action="" class="space-y-4">
                <Input placeholder="Email" class="shadow shadow-black border-0 bg-[#0C202E]" />
                <Input placeholder="Password" type="password" class="shadow shadow-black border-0 bg-[#0C202E]" />
                <Button type="submit" class="w-full bg-[#1375E1] text-white hover:bg-blue-500">Sign
                    in</Button>
            </form>

            <DialogFooter>
                <!--  -->
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>