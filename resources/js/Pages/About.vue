<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
import { ref, onMounted } from 'vue';

const pageTitle = ref(null);

// Focus management for accessibility
onMounted(() => {
    // Focus on the main heading when the page loads
    setTimeout(() => {
        if (pageTitle.value) {
            pageTitle.value.focus();
        }
    }, 100);
});
</script>

<style scoped>
.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.shape {
    position: absolute;
    animation: float 6s ease-in-out infinite;
}

.shape:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.shape:nth-child(2) {
    top: 60%;
    left: 80%;
    animation-delay: 2s;
}

.shape:nth-child(3) {
    top: 40%;
    left: 20%;
    animation-delay: 4s;
}

.shape:nth-child(4) {
    top: 80%;
    left: 60%;
    animation-delay: 1s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}
</style>

<template>
<GuestLayout>

    <!-- About Section -->
    <section id="about" class="py-24 relative overflow-hidden min-h-screen">
        <!-- Gradient Background matching hero section -->
        <div class="absolute inset-0 gradient-bg opacity-95"></div>
        
        <!-- Floating Background Shapes -->
        <div class="floating-shapes">
            <div class="shape w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div class="shape w-16 h-16 bg-blue-500 rounded-lg rotate-45 opacity-20"></div>
            <div class="shape w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
            <div class="shape w-24 h-24 bg-green-400 rounded-lg rotate-12 opacity-20"></div>
        </div>

        <!-- Background Blur Elements -->
        <div class="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1">
                    <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        About Me
                    </div>

                    <h2 
                        ref="pageTitle"
                        tabindex="-1"
                        class="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                    >
                        Passionate Developer from
                        <span class="text-yellow-300">Poland</span>
                    </h2>

                    <div class="space-y-6 text-lg text-gray-100 leading-relaxed">
                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-yellow-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Hi there! I am a dedicated PHP Developer residing in a quaint town near the mountains. With expertise in WHMCS and Laravel, I am continuously expanding my knowledge by learning Vue.js.
                        </p>

                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6h1a3 3 0 000-6h-1m-4 6v6m4-6v6"/>
                            </svg>
                            In my free time, I enjoy hiking, diving into books, playing video games, and watching football. As a loyal Arsenal supporter and avid Premier League fan, I am always on the edge of my seat during matches.
                        </p>

                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                            I regularly dedicate my evenings and weekends to improving my apps which are strongly related to sport.
                        </p>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-6 mt-12">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-yellow-300">11+</div>
                            <div class="text-sm text-gray-200">Projects Completed</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-400">5+</div>
                            <div class="text-sm text-gray-200">Years Experience</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-400">∞</div>
                            <div class="text-sm text-gray-200">Learning Passion</div>
                        </div>
                    </div>
                </div>

                <div class="order-1 lg:order-2 relative">
                    <div class="relative">
                        <!-- Background decoration -->
                        <div class="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 transform rotate-3"></div>
                        <div class="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 transform -rotate-3"></div>

                        <!-- Main image -->
                        <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="/images/about/me.jpg"
                                alt="Daniel Heinze"
                                class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                        </div>

                        <!-- Floating skill badges -->
                        <div class="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                            <div class="text-2xl">⚡</div>
                        </div>
                        <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                            <div class="text-2xl">⚡</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</GuestLayout>
</template>
