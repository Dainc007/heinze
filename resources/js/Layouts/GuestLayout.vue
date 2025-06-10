<script setup>
import TopNav from "@/Pages/Welcome/Components/TopNav.vue";
import {Link, router} from "@inertiajs/vue3";
import { ref } from 'vue';

const isNavigating = ref(false);
const showingMobileMenu = ref(false);
</script>

<template>
    <!-- Navigation -->
    <nav class="fixed top-0 w-full glass-effect z-50 border-b border-white/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class=" animate-pulse font-bold text-xl text-white">
                    Daniel Heinze
                </div>
                <div class="hidden md:flex space-x-8">
                    <Link
                        :href="route('welcome')"
                        :class="route().current('welcome')
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1'
                            : 'text-white/80 hover:text-white transition-all duration-300 hover:scale-105'"
                    >
                        Home
                    </Link>
                    <Link
                        :href="route('side-projects')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        Side Projects
                    </Link>
                    <Link
                        :href="route('projects')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        Projects
                    </Link>
                    <Link
                        :href="route('about')"
                        :class="route().current('about')
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1'
                            : 'text-white/80 hover:text-white transition-all duration-300 hover:scale-105'"
                    >
                        About Me
                    </Link>
                    <Link
                        :href="route('contact')"
                        :class="route().current('contact')
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1'
                            : 'text-white/80 hover:text-white transition-all duration-300 hover:scale-105'"
                    >
                        Contact
                    </Link>
                </div>

                <!-- Hamburger Button for Mobile -->
                <div class="md:hidden">
                    <button
                        @click="showingMobileMenu = !showingMobileMenu"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Toggle navigation menu"
                    >
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                :class="{
                                    hidden: showingMobileMenu,
                                    'inline-flex': !showingMobileMenu,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{
                                    hidden: !showingMobileMenu,
                                    'inline-flex': showingMobileMenu,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <!-- Loading indicator -->
                <div v-if="isNavigating" class="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
            :class="{ block: showingMobileMenu, hidden: !showingMobileMenu }"
            class="md:hidden"
        >
            <div class="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md border-t border-white/20">
                <Link
                    :href="route('welcome')"
                    :class="route().current('welcome')
                        ? 'bg-yellow-400/20 text-yellow-300 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-yellow-300'
                        : 'text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300'"
                    @click="showingMobileMenu = false"
                >
                    Home
                </Link>
                <Link
                    :href="route('side-projects')"
                    @click="showingMobileMenu = false"
                    class="text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                >
                    Side Projects
                </Link>
                <Link
                    :href="route('projects')"
                    @click="showingMobileMenu = false"
                    class="text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                >
                    Projects
                </Link>
                <Link
                    :href="route('about')"
                    :class="route().current('about')
                        ? 'bg-yellow-400/20 text-yellow-300 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-yellow-300'
                        : 'text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300'"
                    @click="showingMobileMenu = false"
                >
                    About Me
                </Link>
                <Link
                    :href="route('contact')"
                    :class="route().current('contact')
                        ? 'bg-yellow-400/20 text-yellow-300 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-yellow-300'
                        : 'text-white/80 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300'"
                    @click="showingMobileMenu = false"
                >
                    Contact
                </Link>
            </div>
        </div>
    </nav>
    <slot/>
</template>

<style scoped>
.glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.glass-effect:hover {
    background: rgba(255, 255, 255, 0.15);
}

/* Smooth page transitions */
.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

/* Navigation item animations */
nav a {
    position: relative;
    overflow: hidden;
}

nav a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
}

nav a:hover::before {
    left: 100%;
}
</style>
