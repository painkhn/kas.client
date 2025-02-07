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

import Logo from '../Logo.vue';
import CryptoSelect from './CryptoSelect.vue';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'

import { ref, onMounted } from 'vue'
import axios from 'axios';
import { cn } from '@/lib/utils';
import { ArrowDown, BitcoinIcon, Copy, Search } from 'lucide-vue-next';
import Label from '@/Components/ui/label/Label.vue';
import Input from '@/Components/ui/input/Input.vue';
import Button from '@/Components/ui/button/Button.vue';

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

const activeAction = ref<'deposit' | 'withdrawal' | 'none'>('none');

const showDeposit = () => {
    activeAction.value = 'deposit';
    activeWithdrawalSubaction.value = 'none';
    containerHeight.value = 300
    secondaryContainerHeight.value = 0
    secondaryContainerHeight.value = 0

    console.log(containerHeight.value);

}

const showWithdrawal = () => {
    activeAction.value = 'withdrawal';
    activeWithdrawalSubaction.value = 'none';
    containerHeight.value = 400
    secondaryContainerHeight.value = 0

    console.log(containerHeight.value);
}

const activeWithdrawalSubaction = ref<'2fa' | 'email' | 'none'>('none');

const show2fa = () => {
    activeWithdrawalSubaction.value = '2fa';
    activeAction.value = 'none';

    containerHeight.value = 0
    secondaryContainerHeight.value = 400

    console.log(containerHeight.value);
    console.log(secondaryContainerHeight.value);
}

const showEmail2fa = () => {
    activeWithdrawalSubaction.value = 'email';
    activeAction.value = 'none';

    containerHeight.value = 0
    secondaryContainerHeight.value = 400

    console.log(containerHeight.value);
    console.log(secondaryContainerHeight.value);
}

const status = ref<'none' | 'completed' | 'rejected'>('none')

const statusCompleted = () => {
    status.value = 'completed';
    activeWithdrawalSubaction.value = 'none';
    activeAction.value = 'none';
    containerHeight.value = 0
    secondaryContainerHeight.value = 0

    statusContainerHeight.value = 200
}

const statusRejected = () => {
    status.value = 'rejected';
    activeWithdrawalSubaction.value = 'none';
    activeAction.value = 'none';
    containerHeight.value = 0
    secondaryContainerHeight.value = 0

    statusContainerHeight.value = 200
}

const statusNone = () => {
    status.value = 'none';
    activeWithdrawalSubaction.value = 'none';
    activeAction.value = 'none';
    containerHeight.value = 0
    secondaryContainerHeight.value = 0
    statusContainerHeight.value = 0
}

const containerHeight = ref<number>(0)
const secondaryContainerHeight = ref<number>(0)
const statusContainerHeight = ref<number>(0)

onMounted(fetchData);
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogContent class="!bg-[#0C202E] max-w-full w-[60%] !p-0">
            <DialogHeader class="w-full p-5">
                <DialogTitle class="">
                    <Logo class="flex justify-center text-center" />
                </DialogTitle>
                <DialogDescription>
                    <!--  -->
                </DialogDescription>
            </DialogHeader>

            <div class="bg-[#1F2E3E] py-5" v-if="status === 'none'">
                <div class="w-1/2 mx-auto">
                    <p class="mb-2">Ваш баланс и выбранная валюта:</p>
                    <Select>
                        <SelectTrigger class="!bg-[#071722] border-transparent outline-none">
                            <SelectValue class="w-full" placeholder="Выберите валюту" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel></SelectLabel>
                                <SelectItem v-for="(item, index) in data" :key="index" :value="item.value">
                                    <div class="flex items-center justify-between text-xl">
                                        {{ item.balance }}
                                        <div class="flex items-center pr-5 gap-2">
                                            <BitcoinIcon />
                                            {{ item.name }}
                                        </div>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div class="bg-[#1F2E3E] py-5" v-if="status === 'completed'">
                <div class="w-1/2 mx-auto text-center">
                    <svg class="w-24 h-24 text-green-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd" />
                    </svg>
                    <p class="text-lg font-semibold">Вывод средств успешно выполнен!</p>
                </div>
            </div>

            <div class="bg-[#1F2E3E] py-5" v-if="status === 'rejected'">
                <div class="w-1/2 mx-auto text-center">
                    <svg class="w-24 h-24 text-red-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                            clip-rule="evenodd" />
                    </svg>

                    <p class="text-lg font-semibold">Не удалось выполнить вывод средств</p>
                </div>
            </div>

            <DialogFooter class="pb-3 transition-all !justify-center !items-center !flex-col !max-w-full">
                <div class="!w-1/2 mx-auto transition-all flex justify-between" v-if="status === 'none'">
                    <button @click="showDeposit" :class="activeAction === 'deposit' ? '!bg-[#071722]' : ''"
                        class="w-1/3 py-2 bg-[#1F2E3E] font-semibold">Депозит</button>
                    <button @click="showWithdrawal" :class="activeAction === 'withdrawal' ? '!bg-[#071722]' : ''"
                        class="w-1/3 py-2 bg-[#1F2E3E] font-semibold">Вывод</button>
                </div>
                <div class="transition-all w-full" :style="{ height: statusContainerHeight + 'px' }">
                    <div class="w-[90%] mx-auto space-y-5" v-if="status === 'completed'">
                        <p class="text-center font-semibold opacity-80">Такие транзакции обычно занимают около 30 минут
                        </p>
                        <Button @click="statusNone"
                            class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">Готово
                        </Button>
                        <Button @click="statusNone"
                            class="w-full py-6 text-lg bg-[#1F2E3E] text-white hover:bg-[#071722]">Вернуться в кошелёк
                        </Button>
                    </div>
                    <div class="w-[90%] mx-auto space-y-5" v-if="status === 'rejected'">
                        <p class="text-center font-semibold opacity-80">Попробуйте еще раз или свяжитесь со службой
                            поддержки</p>
                        <Button @click="statusNone"
                            class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">Служба поддержки
                        </Button>
                        <Button @click="statusNone"
                            class="w-full py-6 text-lg bg-[#1F2E3E] text-white hover:bg-[#071722]">Вернуться в Кошелёк
                        </Button>
                    </div>
                </div>
            </DialogFooter>

            <div class="py-5 bg-[#1F2E3E] transition-all" :class="activeAction === 'none' ? '!p-0' : ''"
                :style="{ height: containerHeight + 'px' }">
                <div v-if="activeAction === 'deposit'">
                    <div class="w-[90%] mx-auto">
                        <div class="flex gap-10">
                            <div class="w-2/3 space-y-4">
                                <div class="space-y-2">
                                    <Label class="text-base font-semibold">Ваш BTC адрес Normal wallet:</Label>
                                    <div class="relative">
                                        <Input class="bg-[#071722] text-base !py-6 !px-4 !pr-14" />
                                        <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <Label class="text-base font-semibold">Сеть</Label>
                                    <div class="relative">
                                        <Input class="bg-[#071722] text-base !py-6 !px-4 !pr-14" />
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
                </div>
                <div v-if="activeAction === 'withdrawal'">
                    <div class="w-[90%] mx-auto">
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <Label class="text-base font-semibold">Введите сумму для вывода:</Label>
                                <div class="relative">
                                    <Input id="search" type="text" placeholder="Сколько"
                                        class="bg-[#071722] text-base !py-6 !px-4 pr-10" />
                                    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
                                        <button href="#!"
                                            class="px-6 py-1 text-blue-500 border-l border-white/20">Вывести
                                            всю сумму</button>
                                    </span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <Label class="text-base font-semibold">Адрес вашего внешнего BTC кошелька для вывода
                                    средств:</Label>
                                <div class="relative flex">
                                    <Input id="search" type="text" placeholder="Куда"
                                        class="bg-[#071722] text-base !py-6 !px-4 pr-10" />
                                    <Copy class="absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                                    <Select>
                                        <SelectTrigger
                                            class="w-[5%] absolute right-0 top-1/2 -translate-y-1/2 pl-4 !py-4 bg-[#071722] !border-0 rounded-none !border-l border-white/20">
                                        </SelectTrigger>
                                        <SelectContent class="fixed bottom-0 left-0">
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">
                                                    Apple
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <Label class="text-base font-semibold">Сеть:</Label>
                                <div class="relative">
                                    <Input id="search" type="text" placeholder="TRON (TRC20)"
                                        class="bg-[#071722] text-base !py-6 !px-4 pr-10" />
                                    <Copy class="absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                                    <Select>
                                        <SelectTrigger
                                            class="w-[5%] absolute right-0 top-1/2 -translate-y-1/2 pl-4 !py-4 bg-[#071722] !border-0 rounded-none !border-l border-white/20">
                                        </SelectTrigger>
                                        <SelectContent class="fixed bottom-0 left-0">
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">
                                                    Apple
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500"
                                @click="show2fa">Далее</Button>
                        </div>
                    </div>
                </div>
            </div>


            <div :class="activeWithdrawalSubaction === 'none' ? '!p-0' : ''"
                :style="{ height: secondaryContainerHeight + 'px' }">
                <div class="py-5 bg-[#1F2E3E]" v-if="activeWithdrawalSubaction === '2fa'">
                    <div class="w-[90%] mx-auto">
                        <div class="space-y-4">
                            <Label class="text-base font-semibold">Ваш код двухфакторной аутентификации:</Label>
                            <div class="relative">
                                <Input id="search" type="text" placeholder="Куда"
                                    class="bg-[#071722] text-base !py-6 !px-4 pr-10" />
                                <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                            </div>
                            <p class="text-sm font-thin text-right">Изменить <a href="#!"
                                    class="text-blue-500 underline" @click="showEmail2fa">настройки</a> аутентификации
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#0C202E] pb-5" v-if="activeWithdrawalSubaction === '2fa'">
                    <div class="w-[90%] mx-auto">
                        <h3 class="font-semibold mb-4">Информация о выводе</h3>
                        <div class="flex gap-10 mb-8">
                            <ul class="space-y-2 opacity-60">
                                <li>
                                    <p>Адрес:</p>
                                </li>
                                <li>
                                    <p>Сеть:</p>
                                </li>
                                <li>
                                    <p>Валюта:</p>
                                </li>
                                <li>
                                    <p>Сумма:</p>
                                </li>
                            </ul>
                            <ul class="space-y-2 opacity-60">
                                <li>
                                    <p>JFBFRR74HFLDNW845757HDLGH34487G</p>
                                </li>
                                <li>
                                    <p>TRON (TRC20)</p>
                                </li>
                                <li>
                                    <p>BTC</p>
                                </li>
                                <li>
                                    <p>0,0000000010</p>
                                </li>
                            </ul>
                        </div>
                        <Button @click="statusRejected"
                            class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">Подтвердить вывод
                            средств
                        </Button>
                    </div>
                </div>
            </div>
            <div :class="activeWithdrawalSubaction === 'none' ? '!p-0' : ''">
                <div class="py-5 bg-[#1F2E3E]" v-if="activeWithdrawalSubaction === 'email'">
                    <div class="w-[90%] mx-auto">
                        <div class="space-y-4">
                            <Label class="text-base font-semibold">Код подтверждения отправлен на вашу электронную почту
                                ******@gmail.com</Label>
                            <div class="relative">
                                <Input id="search" type="text" placeholder="Куда"
                                    class="bg-[#071722] text-base !py-6 !px-4 pr-10" />
                                <Copy class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20" />
                            </div>
                            <p class="text-sm font-thin text-right">Изменить <a href="#!"
                                    class="text-blue-500 underline" @click="show2fa">настройки</a> аутентификации</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#0C202E] pb-5" v-if="activeWithdrawalSubaction === 'email'">
                    <div class="w-[90%] mx-auto">
                        <h3 class="font-semibold mb-4">Информация о выводе</h3>
                        <div class="flex gap-10 mb-8">
                            <ul class="space-y-2 opacity-60">
                                <li>
                                    <p>Адрес:</p>
                                </li>
                                <li>
                                    <p>Сеть:</p>
                                </li>
                                <li>
                                    <p>Валюта:</p>
                                </li>
                                <li>
                                    <p>Сумма:</p>
                                </li>
                            </ul>
                            <ul class="space-y-2 opacity-60">
                                <li>
                                    <p>JFBFRR74HFLDNW845757HDLGH34487G</p>
                                </li>
                                <li>
                                    <p>TRON (TRC20)</p>
                                </li>
                                <li>
                                    <p>BTC</p>
                                </li>
                                <li>
                                    <p>0,0000000010</p>
                                </li>
                            </ul>
                        </div>
                        <Button @click="statusCompleted"
                            class="w-full py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">Подтвердить вывод
                            средств
                        </Button>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>