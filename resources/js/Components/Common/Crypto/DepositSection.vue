<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { Label } from '@/Components/ui/label'
import { Input } from '@/Components/ui/input'
import { Copy } from 'lucide-vue-next'

const props = defineProps<{
    selectedName: string
    selectedCurrency: string
}>()

const currency = computed(() => {
    switch (props.selectedCurrency) {
        case 'BTC':
            return 'BSC'
        case 'ETH':
            return 'ETH'
        case 'USDT':
            return 'TRON'
        default:
            return ''
    }
})

const address = computed(() => {
    switch (props.selectedCurrency) {
        case 'BTC':
            return '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
        case 'ETH':
            return 'cd2a3d9f938e13cd947ec05abc7fe734df8dd826'
        case 'USDT':
            return 'TA32jrQdN2L2souJjFpUmnmdta7hJGiV9T'
        default:
            return ''
    }
})

const btcAddress = ref('')
const network = ref('')
</script>

<template>
    <div class="w-[90%] mx-auto">
        <div class="flex gap-10">
            <div class="w-2/3 space-y-4">
                <div class="space-y-2">
                    <Label class="text-base font-semibold">Ваш {{ props.selectedName }} адрес Normal wallet:</Label>
                    <div class="relative">
                        <Input v-model="btcAddress" :value="address" class="bg-[#071722] text-base !py-6 !px-4 !pr-14" required />
                        <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                    </div>
                </div>
                <div class="space-y-2">
                    <Label class="text-base font-semibold">Сеть</Label>
                    <div class="relative">
                        <Input v-model="network" :value="currency" readonly
                            class="bg-[#071722] text-base !py-6 !px-4 !pr-14" required />
                        <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                    </div>
                </div>
                <div class="py-4">
                    <p class="font-thin">Тут текст типа убедитесь, что вы не олень</p>
                </div>
            </div>
            <div class="w-1/3">
                <img src="/img/qr-code.svg" class="w-2/3 ml-auto" alt="">
            </div>
        </div>
    </div>
</template>