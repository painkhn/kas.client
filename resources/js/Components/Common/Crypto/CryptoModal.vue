<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import Logo from '../Logo.vue'
import BalanceSelector from './BalanceSelector.vue'
import ActionButtons from './ActionButtons.vue'
import DepositSection from './DepositSection.vue'
import WithdrawalSection from './WithdrawalSection.vue'
import TwoFactorAuth from './TwoFactorAuth.vue'
import EmailAuth from './EmailAuth.vue'
import StatusSection from './StatusSection.vue'
import { Wallet } from 'lucide-vue-next'

const activeAction = ref<'deposit' | 'withdrawal' | 'none'>('deposit')
const activeWithdrawalSubaction = ref<'2fa' | 'email' | 'none'>('none')
const status = ref<'none' | 'completed' | 'rejected'>('none')

const containerHeight = ref<number>(350)
const secondaryContainerHeight = ref<number>(0)
const statusContainerHeight = ref<number>(0)

const withdrawalData = reactive({
    amount: '',
    address: '',
    network: '',
    name: ''
})

const selectedCurrency = ref<string>('') // Состояние выбранной валюты
const selectedName = ref<string>('') // Состояние выбранной валюты

const showDeposit = () => {
    activeAction.value = 'deposit'
    activeWithdrawalSubaction.value = 'none'
    containerHeight.value = 350
    secondaryContainerHeight.value = 0
    statusContainerHeight.value = 0
}

const showWithdrawal = () => {
    activeAction.value = 'withdrawal'
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

const handleWithdrawalSubmit = (data: typeof withdrawalData) => {
    Object.assign(withdrawalData, data)
    show2fa()
}
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogContent class="!bg-[#0C202E] max-w-full w-1/2 !p-0">
            <DialogHeader class="w-full p-5">
                <DialogTitle class="">
                    <Logo class="flex justify-center text-center w-[140px] mx-auto" />
                    <span class="flex justify-center items-center gap-2 font-light">wallet
                        <Wallet class="w-5" />
                    </span>
                </DialogTitle>
            </DialogHeader>

            <BalanceSelector v-if="status === 'none'" @update:currency="(value) => selectedCurrency = value"
                @update:name="(value) => selectedName = value" />
            <StatusSection :status="status" @close="setStatus('none')" />

            <ActionButtons v-if="status === 'none'" :active-action="activeAction" @show-deposit="showDeposit"
                @show-withdrawal="showWithdrawal" />

            <div class="py-5 bg-[#1F2E3E] transition-all" :class="activeAction === 'none' ? '!p-0' : ''"
                :style="{ height: containerHeight + 'px' }">
                <DepositSection v-if="activeAction === 'deposit'" :selected-currency="selectedCurrency"
                    :selected-name="selectedName" />
                <WithdrawalSection v-if="activeAction === 'withdrawal'" @submit="handleWithdrawalSubmit"
                    :selected-currency="selectedCurrency" :selected-name="selectedName" />
            </div>

            <div :class="activeWithdrawalSubaction === 'none' ? '!p-0' : ''"
                :style="{ height: secondaryContainerHeight + 'px' }">
                <TwoFactorAuth v-if="activeWithdrawalSubaction === '2fa'" :withdrawal-data="withdrawalData"
                    @show-email="showEmail2fa" @confirm="setStatus('rejected')" />
                <EmailAuth v-if="activeWithdrawalSubaction === 'email'" :withdrawal-data="withdrawalData"
                    @show-2fa="show2fa" @confirm="setStatus('completed')" />
            </div>
        </DialogContent>
    </Dialog>
</template>