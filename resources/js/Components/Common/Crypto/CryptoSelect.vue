<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import axios from 'axios'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/Components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/Components/ui/popover'
import { cn } from '@/lib/utils'
import { Bitcoin, BitcoinIcon, Check, ChevronsUpDown, Wallet } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const data = ref<any>([]);
const loading = ref(true);
const error = ref(null);

async function fetchData() {
    try {
        loading.value = true;
        const response = await axios.get('https://c80d17bd7d393263.mokky.dev/CryptoData');
        data.value = response.data;
    } catch (err) {
        console.log('error');
    } finally {
        loading.value = false;
    }
}

onMounted(fetchData);

const open = ref(false)
const value = ref('')
</script>

<template>
    <Popover v-model:open="open">
        <div class="flex">
            <PopoverTrigger as-child>
                <Button variant="outline" role="combobox" :aria-expanded="open"
                    class="w-[200px] h-10 justify-between !bg-[#0C202E] border-black rounded-r-none">
                    {{ value ? data.find((data: any) => data.value === value)?.balance : 'Выберите валюту...' }}

                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
        </div>
        <PopoverContent class="w-[250px] p-0">
            <Command class="!bg-[#0C202E]" v-model="value">
                <CommandInput placeholder="Найти валюту..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandList>
                    <CommandGroup>
                        <CommandItem v-for="item in data" :key="item.value" :value="item.value" @select="open = false">
                            <Check :class="cn(
                                'mr-2 h-4 w-4',
                                value === item.value ? 'opacity-100' : 'opacity-0',
                            )" />
                            <span class="w-1/2">{{ item.balance }}</span>
                            <div class="text-right flex justify-end w-1/2">
                                <span>
                                    <BitcoinIcon />
                                </span>
                                <span>{{ item.name }}</span>
                            </div>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>