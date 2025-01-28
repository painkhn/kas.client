<script setup lang="ts">
import { ref } from 'vue';
import PhoneInput from 'base-vue-phone-input'
import { useFocus } from '@vueuse/core'
import { ChevronDown, ChevronsUpDown } from 'lucide-vue-next'
import Popover from '../ui/popover/Popover.vue';
import PopoverTrigger from '../ui/popover/PopoverTrigger.vue';
import Button from '../ui/button/Button.vue';
import PopoverContent from '../ui/popover/PopoverContent.vue';
import Command from '../ui/command/Command.vue';
import CommandInput from '../ui/command/CommandInput.vue';
import CommandEmpty from '../ui/command/CommandEmpty.vue';
import CommandList from '../ui/command/CommandList.vue';
import CommandGroup from '../ui/command/CommandGroup.vue';
import CommandItem from '../ui/command/CommandItem.vue';
import Input from '../ui/input/Input.vue';
const open = ref(false)
const phoneInput = ref(null)
const { focused } = useFocus(phoneInput)
import FlagComponent from './FlagComponent.vue';
</script>


<template>
    <PhoneInput noUseBrowserLocale fetchCountry class="flex" country-locale="en-EN" :ignored-countries="['AC']">
        <template #selector="{ inputValue, updateInputValue, countries }">
            <Popover v-model:open="open">
                <PopoverTrigger>
                    <Button variant="outline" class="flex gap-1 rounded-s-lg !bg-[#D6D6D6] px-3">
                        <FlagComponent :country="inputValue" />
                        <ChevronDown class="-mr-2 h-4 w-4 text-black" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-[300px] p-0 !bg-[#061724]">
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandList>
                            <CommandGroup>
                                <CommandItem v-for="option in countries" :key="option.iso2" :value="option.name"
                                    class="gap-2" @select="() => {
                                        updateInputValue(option.iso2)
                                        open = false
                                        focused = true
                                    }
                                        ">
                                    <FlagComponent :country="option?.iso2" />
                                    <span class="flex-1 text-sm">{{
                                        option.name
                                    }}</span>
                                    <span class="text-foreground/50 text-sm">{{
                                        option.dialCode
                                    }}</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </template>

        <template #input="{ inputValue, updateInputValue, placeholder }">
            <Input ref="phoneInput" class="rounded-lg !bg-[#D6D6D6] placeholder:text-black/80 text-black ml-4"
                type="text" :model-value="inputValue" @input="updateInputValue" :placeholder="placeholder" />
        </template>
    </PhoneInput>
</template>
