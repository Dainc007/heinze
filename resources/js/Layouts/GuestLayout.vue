<script setup>

import TopNav from "@/Pages/Welcome/Components/TopNav.vue";
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <!-- Navigation -->
    <nav class="fixed top-0 w-full glass-effect z-50 border-b border-white/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="font-bold text-xl text-white">
                    Daniel Heinze
                </div>
                <div class="hidden md:flex space-x-8">
                    <Link 
                        :href="route('welcome')" 
                        :class="route().current('welcome') 
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1' 
                            : 'text-white/80 hover:text-white transition-colors'"
                    >
                        Home
                    </Link>
                    <Link 
                        :href="route('about')" 
                        :class="route().current('about') 
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1' 
                            : 'text-white/80 hover:text-white transition-colors'"
                    >
                        About Me
                    </Link>
                    <Link 
                        href="#projects" 
                        class="text-white/80 hover:text-white transition-colors"
                    >
                        Projects
                    </Link>
                    <Link 
                        :href="route('contact')" 
                        :class="route().current('contact') 
                            ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1' 
                            : 'text-white/80 hover:text-white transition-colors'"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </nav>    <slot/>
</template>
