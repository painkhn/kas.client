<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
    initialTime: number; // Время в секундах
}>();

// Ключ для localStorage
const STORAGE_KEY = 'circleTimerTimeLeft';

// Получаем сохраненное время из localStorage или используем initialTime
const savedTime = localStorage.getItem(STORAGE_KEY);
const timeLeft = ref(savedTime ? parseInt(savedTime, 10) : props.initialTime);

let interval: number | null = null;

// Форматируем время в формат HH:MM
const formattedTime = computed(() => {
    const hours = Math.floor(timeLeft.value / 3600); // Получаем часы
    const minutes = Math.floor((timeLeft.value % 3600) / 60); // Получаем минуты
    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;
});

// Запуск таймера
const startTimer = () => {
    if (interval) {
        clearInterval(interval); // Очищаем предыдущий интервал, если он существует
    }
    interval = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value -= 1;
        } else {
            clearInterval(interval!);
        }
    }, 1000);
};

// Сбрасываем таймер при изменении initialTime
watch(() => props.initialTime, (newInitialTime) => {
    timeLeft.value = newInitialTime; // Устанавливаем новое значение времени
    localStorage.setItem(STORAGE_KEY, newInitialTime.toString()); // Обновляем localStorage
    startTimer(); // Перезапускаем таймер
});

// Сохраняем время в localStorage при изменении timeLeft
watch(timeLeft, (newTime) => {
    localStorage.setItem(STORAGE_KEY, newTime.toString());
});

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    if (interval) {
        clearInterval(interval);
    }
    // Очищаем localStorage, если таймер завершился
    if (timeLeft.value === 0) {
        localStorage.removeItem(STORAGE_KEY);
    }
});
</script>

<template>
    <div
        class="w-40 h-40 border border-white/40 rounded-full flex items-center justify-center shadow-[0_0_20px_0_#5d81a7]">
        <span class="text-white text-3xl font-bold">{{ formattedTime }}</span>
    </div>
</template>