<script setup>
import Header from '@/Pages/Welcome/Components/Header.vue';
</script>
<style>
#background {
    animation: slide-in-from-left 1s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: both;
}

@keyframes slide-in-from-left {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
<template>
    <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
        <div class="flex lg:justify-center lg:col-start-2">
            <img
                id="background"
                class=" lg:-left-10 lg:top-0 lg:max-w-[877px] lg:absolute"
                src="/images/welcome/dev4.png"
            />
        </div>
    </header>
</template>
