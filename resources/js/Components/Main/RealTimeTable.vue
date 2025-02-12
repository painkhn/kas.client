<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table'
import { Dices } from 'lucide-vue-next';

const data = [
    {
        game: 'Texas Poker',
        user: 'Bond777',
        bet: 19.55235500,
        coefficient: 0.15,
        pay: 22.48520825
    },
    {
        game: 'Texas Poker',
        user: 'Bond777',
        bet: 19.55235500,
        coefficient: 0.15,
        pay: 22.48520825
    },
    {
        game: 'Texas Poker',
        user: 'Bond777',
        bet: 19.55235500,
        coefficient: 0.15,
        pay: 22.48520825
    },
    {
        game: 'Texas Poker',
        user: 'Bond777',
        bet: 19.55235500,
        coefficient: 0.15,
        pay: 22.48520825
    },
    {
        game: 'Texas Poker',
        user: 'Bond777',
        bet: 19.55235500,
        coefficient: 0.15,
        pay: 22.48520825
    },
]
</script>

<template>
    <Table>
        <TableHeader class="bg-[#346bb3]">
            <TableRow>
                <TableHead class="w-[200px] py-5 pl-5">
                    Игра
                </TableHead>
                <TableHead>Пользователь</TableHead>
                <TableHead>Сумма ставки</TableHead>
                <TableHead>Коэффициент</TableHead>
                <TableHead class="text-right pr-5">
                    Выплата
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody v-for="(item, index) in data" :key="index">
            <TableRow class="bg-[#0c202f]">
                <TableCell class="font-medium pl-5 flex items-center gap-2 py-5">
                    <Dices />
                    {{ item.game }}
                </TableCell>
                <TableCell>
                    {{ item.user }}
                </TableCell>
                <TableCell>
                    {{ item.bet }}
                </TableCell>
                <TableCell>
                    {{ item.coefficient }}
                </TableCell>
                <TableCell class="text-right pr-5">
                    {{ item.pay }}
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>