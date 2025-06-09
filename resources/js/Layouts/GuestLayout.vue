<script setup>
import TopNav from "@/Pages/Welcome/Components/TopNav.vue";
import {Link, router} from "@inertiajs/vue3";
import { ref } from 'vue';

const isNavigating = ref(false);

// Handle navigation with animation
const navigateWithAnimation = (url) => {
    isNavigating.value = true;
    
    // Add a small delay for the animation to be visible
    setTimeout(() => {
        router.visit(url, {
            onFinish: () => {
                isNavigating.value = false;
            }
        });
    }, 150);
};

// Handle projects navigation with focus management
const handleProjectsClick = () => {
    // If we're already on the welcome page, just scroll to projects
    if (route().current('welcome')) {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
            // Focus on projects title after scrolling
            setTimeout(() => {
                const projectsTitle = document.querySelector('#projects h2');
                if (projectsTitle) {
                    projectsTitle.setAttribute('tabindex', '-1');
                    projectsTitle.focus();
                }
            }, 500);
        }
    }
    // If we're not on welcome page, the Link component will handle navigation
};
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
                            : 'text-white/80 hover:text-white transition-all duration-300 hover:scale-105'"
                    >
                        Home
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
                        :href="route('welcome') + '#projects'"
                        @click="handleProjectsClick"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        Projects
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
                
                <!-- Loading indicator -->
                <div v-if="isNavigating" class="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
                </div>
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
