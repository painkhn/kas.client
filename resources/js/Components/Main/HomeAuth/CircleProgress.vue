<script setup lang="ts">

</script>

<template>
    <div>
        <div class="circle-big">
            <div class="text flex justify-center items-center gap-2">
                <span class="absolute top-1/2 -translate-y-1/2">
                    75%
                </span>
            </div>
            <svg>
                <circle class="bg" cx="57" cy="57" r="52"></circle>
                <circle class="progress" cx="57" cy="57" r="52"></circle>
            </svg>
        </div>
    </div>
</template>

<style scoped>

.circle-big {
    position: relative;
    width: 114px;
    height: 114px;
    margin: 30px auto 25px auto;
}

.circle-big svg {
    width: 114px;
    height: 114px;
}

.circle-big .bg {
    fill: none;
    stroke-width: 5px;
    stroke: #343035;
}

.circle-big .progress {
    fill: none;
    stroke-width: 5px;
    stroke: #97aeca;
    stroke-linecap: round;
    stroke-dasharray: 326.56;
    stroke-dashoffset: 60;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    animation: big 1.5s ease-in-out;
}

.circle-big .text {
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    line-height: 22px;
}

.circle-big .text .small {
    font-size: 14px;
    color: #fff;
}

.circles-small {
    margin: 0 auto;
    width: 400px;
    height: 80px;
    text-align: center;
}

.circle-small {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 20px;
}

.circle-small svg {
    width: 80px;
    height: 80px;
}

.circle-small .bg {
    fill: none;
    stroke-width: 6px;
    stroke: #343035;
}

.circle-small .progress {
    fill: none;
    stroke-width: 6px;
    stroke: #97aeca;
    stroke-linecap: round;
    stroke-dasharray: 232.36;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}

.circle-small .progress.one {
    stroke-dashoffset: 80;
    animation: one 2.5s ease-in-out, appear 1s;
}

.circle-small .progress.two {
    stroke-dashoffset: 140;
    animation: two 3.5s ease-in-out, appear 2s;
}

.circle-small .text {
    font-size: 17px;
    text-align: center;
    font-weight: 400;
    line-height: 16px;
}

.circle-small .text .small {
    font-size: 12px;
    color: #fff;
}

@keyframes big {
    from {
        stroke-dashoffset: 326.56;
    }

    to {
        stroke-dashoffset: 60;
    }
}

@keyframes one {
    from {
        stroke-dashoffset: 232.36;
    }

    to {
        stroke-dashoffset: 80;
    }
}

@keyframes two {
    from {
        stroke-dashoffset: 232.36;
    }

    to {
        stroke-dashoffset: 140;
    }
}

@keyframes appear {

    0%,
    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>