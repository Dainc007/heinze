<script setup>
import { ref } from 'vue'
import Header from '@/Pages/Welcome/Components/Header.vue';

const isDarkMode = ref(false);
const switchMode = function () {
    let app = document.getElementById('app');
    app.classList.contains('dark') === true ? app.classList.remove('dark') : app.classList.add('dark');
}


</script>
<style>
#background {
    animation: slide-in 1s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: both;

}

@keyframes slide-in {
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
        <nav class="-mx-3 flex flex-1 justify-end">
            <button
                aria-label="Theme Switcher"
                @click="isDarkMode = !isDarkMode; switchMode()"
                class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
                data-v-667c54d4="">
                <svg v-if="isDarkMode"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-sun text-liText-ternary-dark hover:text-amber-300 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-10">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg v-else
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"
                     class="feather feather-moon text-liText-ternary-dark hover:text-amber-300 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-10">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        </nav>
    </header>
</template>
