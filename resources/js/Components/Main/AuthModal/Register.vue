<script setup lang="ts">
import Button from '@/Components/ui/button/Button.vue';
import Input from '@/Components/ui/input/Input.vue';

import 'vue3-tel-input/dist/vue3-tel-input.css'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/Components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/Components/ui/stepper'
import { toast } from '@/Components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import * as z from 'zod'
import Image from '@/Components/Common/Image.vue';
import Logo from '@/Components/Common/Logo.vue';
import Calendar from '@/Components/Common/Calendar.vue';
import PhoneInput from '@/Components/Common/PhoneInput.vue';

// Схемы валидации для каждого шага
const formSchema = [
    // Шаг 1: Личная информация
    z.object({
        fullName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
        email: z.string().email("Некорректный email"),
        number: z.string().min(10, "Номер телефона должен содержать минимум 10 цифр"),
        invite_code: z.string().optional(), // Код приглашения не обязателен
    }),
    // Шаг 2: Безопасность
    z.object({
        password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
        confirmPassword: z.string(),
    }).refine(
        (values) => values.password === values.confirmPassword,
        {
            message: "Пароли не совпадают",
            path: ["confirmPassword"],
        },
    ),
    // Шаг 3: Политика конфиденциальности
    z.object({
        // acceptTerms: z.literal(true, {
        //     errorMap: () => ({ message: "Вы должны принять политику конфиденциальности" }),
        // }),
        acceptTerms: z.string().min(1, "Вы должны принять политику конфиденциальности")
    }),
];

const stepIndex = ref(1);
const steps = [
    {
        step: 1,
        title: 'Создание аккаунта',
        description: 'Provide your name and email',
    },
    {
        step: 2,
        title: 'Безопасность',
        description: 'Choose a password',
    },
    {
        step: 3,
        title: `Политика\nконфиденциальности`,
        description: 'Choose a drink',
    },
    {
        step: 4
    }
];

function onSubmit(values: any) {
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    });
}

const number_codes = [
    { id: '1', value: '1' },
    { id: '2', value: '2' },
    { id: '3', value: '3' },
]
</script>

<template>
    <Dialog>
        <DialogTrigger class="w-full bg-[#1375E1] py-4 rounded-md text-white hover:bg-blue-500 transition-all">
            <slot />
        </DialogTrigger>
        <DialogContent class="bg-[#061724] p-0 gap-0 max-w-4xl h-[550px]">
            <DialogHeader class="space-y-4">
                <!-- <DialogTitle class="text-center">Welcome back!</DialogTitle>
                <DialogDescription class="text-center">
                    First time here? <a href="#!" class="text-blue-600">Sign in</a>
                </DialogDescription> -->
            </DialogHeader>
            <Form v-slot="{ meta, values, validate }" as="" keep-values
                :validation-schema="toTypedSchema(formSchema[stepIndex - 1])">
                <Stepper v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }" v-model="stepIndex"
                    class="block w-full h-full !max-h-full">
                    <form class="flex h-full !max-h-full" @submit="(e) => {
                        e.preventDefault()
                        validate()

                        if (stepIndex === steps.length && meta.valid) {
                            onSubmit(values)
                        }
                    }">
                        <div class="flex flex-col gap-8 w-1/3 items-start !max-h-full p-5 h-[550px]">
                            <div class="logo text-2xl font-semibold">
                                <Logo class="w-[100px]" />
                            </div>
                            <div v-if="stepIndex === 1">
                                <h3 class="text-2xl font-semibold">Шаг 1</h3>
                                <p class="text-sm opacity-80">
                                    Давайте познакомимся!
                                    <br>
                                    Заполните поля с личной информацией.
                                    мб что-то про важность, что юзеру 18+
                                </p>
                            </div>
                            <div v-if="stepIndex === 2">
                                <h3 class="text-2xl font-semibold">Шаг 2</h3>
                                <p class="text-sm opacity-80">
                                    Для защиты ваших данных придумайте
                                    надежный пароль или воспользуйтесь
                                    генератором паролей.
                                </p>
                            </div>
                            <div v-if="stepIndex === 3">
                                <h3 class="text-2xl font-semibold">Шаг 3</h3>
                                <p class="text-sm opacity-80">
                                    Пожалуйста, вниметельно ознакомьтесь
                                    с нашей политикой конфиденциальности.
                                </p>
                            </div>
                            <div v-if="stepIndex === 4">
                                <h3 class="text-2xl font-semibold">Готово</h3>
                                <p class="text-sm opacity-80">
                                    Спасибо за регистрацию
                                    <br>
                                    Хорошей игры!
                                </p>
                            </div>
                            <StepperItem v-for="step in steps.slice(0, 4)" :key="step.step" v-slot="{ state }"
                                class="relative flex w-full gap-4 items-center" :step="step.step">
                                <StepperTrigger as-child>
                                    <Button
                                        :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                                        size="icon" class="z-10 rounded-full shrink-0"
                                        :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                                        :disabled="state !== 'completed' && !meta.valid" v-if="step.step !== 4">
                                        <Image :src="'/img/checkedColored.svg'" v-if="state === 'completed'"
                                            class="w-12" />
                                        <Image :src="'/img/firstNumberColored.svg'"
                                            v-if="state === 'active' && step.step === 1" class="w-12" />
                                        <Image :src="'/img/secondNumberColored.svg'"
                                            v-if="state === 'active' && stepIndex === 2" class="w-12" />
                                        <Image :src="'/img/thirdNumberColored.svg'"
                                            v-if="state === 'active' && stepIndex === 3" class="w-12" />
                                        <Image :src="'/img/secondNumberUncolored.svg'"
                                            v-if="state === 'inactive' && step.step === 2" class="w-12" />
                                        <Image :src="'/img/thirdNumberUncolored.svg'" class="w-12"
                                            v-if="state === 'inactive' && step.step === 3" />
                                        <div v-if="step.step === 4"> {{ null }} </div>
                                    </Button>
                                </StepperTrigger>

                                <div class="flex flex-col break-words">
                                    <StepperTitle :class="[state === 'active' && 'text-primary']"
                                        class="text-sm font-semibold transition lg:text-base break-words"
                                        style="white-space: pre-line;">
                                        {{ step.title }}
                                    </StepperTitle>
                                </div>
                            </StepperItem>
                        </div>

                        <div class="flex flex-col gap-4 w-2/3 bg-[#1E2D3C] p-5">
                            <template v-if="stepIndex === 1">
                                <div class="text-center space-y-2">
                                    <h2 class="font-bold text-2xl">Создать аккаунт</h2>
                                    <p>
                                        У меня уже есть аккаунт! <a href="#!">Войти</a>
                                    </p>
                                </div>
                                <FormField v-slot="{ componentField }" name="fullName">
                                    <FormItem v-auto-animate>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField" placeholder="Имя пользователя"
                                                class="!bg-[#D6D6D6] text-black placeholder:text-black/80" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="email">
                                    <FormItem v-auto-animate>
                                        <FormControl>
                                            <Input type="email " v-bind="componentField" placeholder="Email"
                                                class="text-black !bg-[#D6D6D6] placeholder:text-black/80" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="b_date">
                                    <FormItem>
                                        <FormControl>
                                            <Calendar :componentField="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="number">
                                    <FormItem v-auto-animate>
                                        <FormControl>
                                            <PhoneInput v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="invite_code">
                                    <FormItem>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField"
                                                placeholder="Код приглашения (Если есть)"
                                                class="text-black !bg-[#D6D6D6] placeholder:text-black/80" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 2">
                                <div class="text-center space-y-2">
                                    <h2 class="font-bold text-2xl">Безопасность</h2>
                                </div>
                                <FormField v-slot="{ componentField }" name="password">
                                    <FormItem v-auto-animate>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField"
                                                class="text-black !bg-[#D6D6D6] placeholder:text-black/80"
                                                placeholder="Пароль" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="confirmPassword">
                                    <FormItem v-auto-animate>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField"
                                                class="text-black !bg-[#D6D6D6] placeholder:text-black/80"
                                                placeholder="Подтвердите пароль" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 3">
                                <div class="text-center space-y-2">
                                    <h2 class="font-bold text-2xl">Политика конфиденциальности</h2>
                                </div>
                                <FormField v-slot="{ componentField }" name="acceptTerms">
                                    <FormItem>
                                        <FormControl>
                                            <div class="flex items-center gap-2">
                                                <input type="checkbox" v-bind="componentField" id="acceptTerms" />
                                                <label for="acceptTerms" class="text-sm">
                                                    Я принимаю политику конфиденциальности
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage v-auto-animate />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 4">
                                <div class="text-center space-y-4 my-auto">
                                    <h2 class="font-bold text-2xl">Регистрация успешно завершена!</h2>
                                    <p>
                                        Какой-то текст e.g. подтвердите почту в настройках
                                    </p>
                                </div>
                            </template>
                            <div class="flex items-center justify-between mt-auto">
                                <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()"
                                    v-if="stepIndex !== 4"
                                    class="px-12 py-6 text-lg bg-[#D6D6D6] text-black hover:text-black hover:bg-[#f0f0f0]">
                                    Назад
                                </Button>
                                <Button variant="outline" size="sm" @click="prevStep()" v-if="stepIndex === 4"
                                    class="px-12 py-6 text-lg bg-[#D6D6D6] text-black hover:text-black hover:bg-[#f0f0f0]">
                                    Назад
                                </Button>
                                <div class="flex items-center gap-3">
                                    <Button v-if="stepIndex !== 4" type="button" :disabled="!meta.valid" size="sm"
                                        @click="meta.valid && nextStep()"
                                        class="px-12 py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">
                                        Далее
                                    </Button>
                                    <!-- <Button :type="meta.valid ? 'button' : 'submit'" v-if="stepIndex === 3"
                                        @click="nextStep()"
                                        class="px-12 py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">
                                        Далее
                                    </Button> -->
                                    <Button v-if="stepIndex === 4" size="sm" type="submit"
                                        class="px-12 py-6 text-lg bg-[#1375E1] text-white hover:bg-blue-500">
                                        Готово
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </form>
                </Stepper>
            </Form>
            <DialogFooter>
                <!--  -->
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>