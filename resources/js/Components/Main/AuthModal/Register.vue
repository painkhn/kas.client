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

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/Components/ui/stepper'
import { toast } from '@/Components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import * as z from 'zod'

const formSchema = [
    z.object({
        fullName: z.string(),
        email: z.string().email(),
    }),
    z.object({
        password: z.string().min(2).max(50),
        confirmPassword: z.string(),
    }).refine(
        (values: any) => {
            return values.password === values.confirmPassword
        },
        {
            message: 'Passwords must match!',
            path: ['confirmPassword'],
        },
    ),
    z.object({
        favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
    }),
]

const stepIndex = ref(1)
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
    }
]

function onSubmit(values: any) {
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
}
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogContent class="bg-[#061724] p-0 gap-0 max-w-4xl">
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
                        <div class="grid grid-cols-1 w-1/3 items-start gap-2 h-full !max-h-full p-5">
                            <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                                class="relative flex w-full gap-4 items-center" :step="step.step">
                                <!-- <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                                    class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />
                                <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                                    class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" /> -->

                                <StepperTrigger as-child>
                                    <Button
                                        :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                                        size="icon" class="z-10 rounded-full shrink-0"
                                        :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                                        :disabled="state !== 'completed' && !meta.valid">
                                        <CheckIcon v-if="state === 'completed'" class="size-5" />
                                        <CircleIcon v-if="state === 'active'" />
                                        <DotIcon v-if="state === 'inactive'" />
                                    </Button>
                                </StepperTrigger>

                                <div class="flex flex-col break-words">
                                    <StepperTitle :class="[state === 'active' && 'text-primary']"
                                        class="text-sm font-semibold transition lg:text-base break-words"
                                        style="white-space: pre-line;">
                                        {{ step.title }}
                                    </StepperTitle>
                                    <!-- <StepperDescription :class="[state === 'active' && 'text-primary']"
                                        class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                                        {{ step.description }}
                                    </StepperDescription> -->
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
                                    <FormItem>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField" placeholder="Имя пользователя"
                                                class="!bg-[#D6D6D6] text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="email">
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email " v-bind="componentField" placeholder="Email"
                                                class="text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="b_date">
                                    <FormItem>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField" placeholder="Дата рождения"
                                                class="text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField, secondComponentField }" name="number">
                                    <div class="flex gap-4">
                                        <FormItem class="w-1/3">
                                            <FormControl>
                                                <Input type="text" v-bind="componentField" placeholder="Код страны"
                                                    class="text-black" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        <FormItem class="w-2/3">
                                            <FormControl>
                                                <Input type="text" v-bind="secondComponentField" placeholder="Номер телефона"
                                                    class="text-black" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="invite_code">
                                    <FormItem>
                                        <FormControl>
                                            <Input type="text" v-bind="componentField"
                                                placeholder="Код приглашения (Если есть)" class="text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 2">
                                <FormField v-slot="{ componentField }" name="password">
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField" class="text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>

                                <FormField v-slot="{ componentField }" name="confirmPassword">
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" v-bind="componentField" class="text-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>

                            <template v-if="stepIndex === 3">
                                <FormField v-slot="{ componentField }" name="favoriteDrink">
                                    <FormItem>
                                        <FormLabel>Drink</FormLabel>

                                        <Select v-bind="componentField">
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a drink" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="coffee">
                                                        Coffe
                                                    </SelectItem>
                                                    <SelectItem value="tea">
                                                        Tea
                                                    </SelectItem>
                                                    <SelectItem value="soda">
                                                        Soda
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </template>
                            <div class="flex items-center justify-between mt-4">
                                <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()">
                                    Back
                                </Button>
                                <div class="flex items-center gap-3">
                                    <Button v-if="stepIndex !== 3" :type="meta.valid ? 'button' : 'submit'"
                                        :disabled="isNextDisabled" size="sm" @click="meta.valid && nextStep()">
                                        Next
                                    </Button>
                                    <Button v-if="stepIndex === 3" size="sm" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </form>
                </Stepper>
            </Form>
            <!-- <form class="flex">
                <Stepper orientation="vertical" class="mx-auto flex w-1/2 flex-col justify-start gap-10">
                    <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                        class="relative flex w-full items-start gap-6" :step="step.step">
                        <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                            class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                        <StepperTrigger as-child>
                            <Button :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                                size="icon" class="z-10 rounded-full shrink-0"
                                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
                                <Check v-if="state === 'completed'" class="size-5" />
                                <Circle v-if="state === 'active'" />
                                <Dot v-if="state === 'inactive'" />
                            </Button>
                        </StepperTrigger>

                        <div class="flex flex-col gap-1">
                            <StepperTitle :class="[state === 'active' && 'text-primary']"
                                class="text-sm font-semibold transition lg:text-base">
                                {{ step.title }}
                            </StepperTitle>
                            <StepperDescription :class="[state === 'active' && 'text-primary']"
                                class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                                {{ step.description }}
                            </StepperDescription>
                        </div>
                    </StepperItem>
                </Stepper>
                <div action="" class="space-y-4 w-1/2">
                    <Input placeholder="Email" class="shadow shadow-black border-0 bg-[#0C202E]" />
                    <Input placeholder="Password" type="password" class="shadow shadow-black border-0 bg-[#0C202E]" />
                    <Button type="button" class="w-full bg-[#1375E1] text-white hover:bg-blue-500">Sign
                        in</Button>
                </div>
            </form> -->

            <DialogFooter>
                <!--  -->
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>