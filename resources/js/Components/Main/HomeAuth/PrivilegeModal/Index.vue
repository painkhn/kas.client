<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/Components/ui/dialog'
import { Crown } from 'lucide-vue-next'
import { ref } from 'vue'
import ActionButtons from './ActionButtons.vue'
import Logo from '@/Components/Common/Logo.vue'
import ProgressSection from './ProgressSection.vue'

const activeAction = ref<'progress' | 'privilege' | 'none'>('progress')
const activeWithdrawalSubaction = ref<'2fa' | 'email' | 'none'>('none')
const status = ref<'none' | 'completed' | 'rejected'>('none')

const containerHeight = ref<number>(350)
const secondaryContainerHeight = ref<number>(0)
const statusContainerHeight = ref<number>(0)

const showDeposit = () => {
    activeAction.value = 'progress'
    activeWithdrawalSubaction.value = 'none'
    containerHeight.value = 350
    secondaryContainerHeight.value = 0
    statusContainerHeight.value = 0
}

const showWithdrawal = () => {
    activeAction.value = 'privilege'
    activeWithdrawalSubaction.value = 'none'
    containerHeight.value = 470
    secondaryContainerHeight.value = 0
    statusContainerHeight.value = 0
}

const show2fa = () => {
    activeWithdrawalSubaction.value = '2fa'
    activeAction.value = 'none'
    containerHeight.value = 0
    secondaryContainerHeight.value = 400
    statusContainerHeight.value = 0
}

const showEmail2fa = () => {
    activeWithdrawalSubaction.value = 'email'
    activeAction.value = 'none'
    containerHeight.value = 0
    secondaryContainerHeight.value = 400
    statusContainerHeight.value = 0
}

const setStatus = (newStatus: 'none' | 'completed' | 'rejected') => {
    status.value = newStatus
    activeWithdrawalSubaction.value = 'none'
    activeAction.value = 'none'
    containerHeight.value = 0
    secondaryContainerHeight.value = 0
    statusContainerHeight.value = newStatus === 'none' ? 0 : 200
}

// const handleWithdrawalSubmit = (data: typeof withdrawalData) => {
//     Object.assign(withdrawalData, data)
//     show2fa()
// }
</script>

<template>
    <Dialog>
        <DialogTrigger class="w-full py-3 text-base text-white bg-[#346bb3] hover:bg-blue-500 rounded-md">
            <slot />
        </DialogTrigger>
        <DialogContent class="!bg-[#0C202E] max-w-full w-1/3 !p-0">
            <DialogHeader class="w-full p-5">
                <DialogTitle class="">
                    <Logo class="flex justify-center text-center w-[140px] mx-auto" />
                    <span class="flex justify-center items-center gap-2 font-light">VIP
                        <Crown class="w-5" />
                    </span>
                </DialogTitle>
            </DialogHeader>

            <!-- <BalanceSelector v-if="status === 'none'" @update:currency="(value) => selectedCurrency = value"
                @update:name="(value) => selectedName = value" /> -->
            <!-- <StatusSection :status="status" @close="setStatus('none')" /> -->

            <ActionButtons v-if="status === 'none'" :active-action="activeAction" @show-deposit="showDeposit"
                @show-withdrawal="showWithdrawal" />

            <div class="py-5 bg-[#1F2E3E] transition-all" :class="activeAction === 'none' ? '!p-0' : ''"
                :style="{ height: containerHeight + 'px' }">
                <ProgressSection v-if="activeAction === 'progress'" />
                <PrivelegeSection v-if="activeAction === 'privilege'" />
            </div>

            <!-- <div :class="activeWithdrawalSubaction === 'none' ? '!p-0' : ''"
                :style="{ height: secondaryContainerHeight + 'px' }">
                <TwoFactorAuth v-if="activeWithdrawalSubaction === '2fa'" :withdrawal-data="withdrawalData"
                    @show-email="showEmail2fa" @confirm="setStatus('rejected')" />
                <EmailAuth v-if="activeWithdrawalSubaction === 'email'" :withdrawal-data="withdrawalData"
                    @show-2fa="show2fa" @confirm="setStatus('completed')" />
            </div> -->
        </DialogContent>
    </Dialog>
</template>