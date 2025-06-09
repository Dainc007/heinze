<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
</script>

<template>
<GuestLayout>

    <!-- About Section -->
    <section id="about" class="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1">
                    <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        About Me
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
                        Passionate Developer from
                        <span class="text-blue-600 dark:text-blue-400">Poland</span>
                    </h2>

                    <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Hi there! I am a dedicated PHP Developer residing in a quaint town near the mountains. With expertise in WHMCS and Laravel, I am continuously expanding my knowledge by learning Vue.js.
                        </p>

                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6h1a3 3 0 000-6h-1m-4 6v6m4-6v6"/>
                            </svg>
                            In my free time, I enjoy hiking, diving into books, playing video games, and watching football. As a loyal Arsenal supporter and avid Premier League fan, I am always on the edge of my seat during matches.
                        </p>

                        <p class="flex items-start">
                            <svg class="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                            I regularly dedicate my evenings and weekends to improving my apps which are strongly related to sport.
                        </p>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-6 mt-12">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">11+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600 dark:text-green-400">5+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Learning Passion</div>
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
