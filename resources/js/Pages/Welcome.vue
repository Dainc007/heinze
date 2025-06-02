<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Pages/Welcome/Components/Footer.vue';
import Header from '@/Pages/Welcome/Components/Header.vue';
import ScreenshotContainer from '@/Pages/Welcome/Components/ScreenshotContainer.vue';
import TopNav from "@/Pages/Welcome/Components/TopNav.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";

const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    projects: {
        type: Array,
        required: true
    }
});

</script>

<style>
.typing-animation {
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: .15em;
    animation: typing 3s;
    animation-fill-mode: both;
}

@keyframes typing {
    0% {
        width: 25%;
    }
    100% {
        width: 100%;
    }
}

.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-pattern {
    background-image: 
        radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px);
    background-size: 60px 60px;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.shape {
    position: absolute;
    opacity: 0.1;
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

.scroll-smooth {
    scroll-behavior: smooth;
}

.glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
}

.project-card {
    transition: all 0.3s ease;
    transform: perspective(1000px) rotateY(0deg);
}

.project-card:hover {
    transform: perspective(1000px) rotateY(-5deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
</style>

<template>
    <GuestLayout>
    <Head title="Daniel Heinze - Full Stack Developer"/>
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
        
        <!-- Navigation -->
        <nav class="fixed top-0 w-full glass-effect z-50 border-b border-white/20">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="font-bold text-xl text-white">
                        Daniel Heinze
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#hero" class="text-white/80 hover:text-white transition-colors">Home</a>
                        <a href="#about" class="text-white/80 hover:text-white transition-colors">About</a>
                        <a href="#projects" class="text-white/80 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" class="text-white/80 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
            <div class="absolute inset-0 gradient-bg opacity-95"></div>
            
            <!-- Floating Background Shapes -->
            <div class="floating-shapes">
                <div class="shape w-32 h-32 bg-yellow-400 rounded-full"></div>
                <div class="shape w-24 h-24 bg-blue-500 rounded-lg rotate-45"></div>
                <div class="shape w-20 h-20 bg-purple-500 rounded-full"></div>
                <div class="shape w-28 h-28 bg-green-400 rounded-lg rotate-12"></div>
            </div>
            
            <!-- Additional Background Elements -->
            <div class="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>
            
            <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white z-10">
                <div class="typing-animation">
                    <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold mb-6">
                        Hi, I'm <span class="text-yellow-300">Daniel</span>
                    </h1>
                    <p class="text-xl md:text-2xl xl:text-3xl mb-8 text-gray-100">
                        A PHP <strong class="text-yellow-300">Programmer</strong><br/>
                        aspiring to become a<br/>
                        <strong class="text-yellow-300">Full-stack Developer</strong>
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                    <a
                        href="#projects"
                        class="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        View My Work
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </a>
                    <a
                        download="cv-eng.pdf"
                        href="/files/cv-eng.pdf"
                        class="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                        <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>
            
            <!-- Hero Image -->
            <div class="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-30">
                <img
                    src="/images/welcome/dev4.png"
                    alt="Developer Illustration"
                    class="w-96 h-auto"
                />
            </div>

            <!-- Code Snippets Background -->
            <div class="absolute top-20 left-20 opacity-10 hidden lg:block">
                <div class="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm">
                    <div>&lt;?php</div>
                    <div>class Developer {</div>
                    <div>&nbsp;&nbsp;public $name = 'Daniel';</div>
                    <div>}</div>
                </div>
            </div>
            
            <div class="absolute bottom-20 right-20 opacity-10 hidden lg:block">
                <div class="bg-gray-800 rounded-lg p-4 text-blue-400 font-mono text-sm">
                    <div>const skills = [</div>
                    <div>&nbsp;&nbsp;'PHP', 'Laravel',</div>
                    <div>&nbsp;&nbsp;'Vue.js', 'WHMCS'</div>
                    <div>];</div>
                </div>
            </div>
        </section>

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
                                <div class="text-2xl">🐘</div>
                            </div>
                            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                                <div class="text-2xl">⚡</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-24 bg-white dark:bg-gray-900 relative">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#4F46E5" fill-opacity="0.1">
                            <circle cx="36" cy="36" r="12"/>
                            <circle cx="6" cy="6" r="6"/>
                        </g>
                    </g>
                </svg>
            </div>
            
            <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                        Portfolio
                    </div>
                    
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        My <span class="text-purple-600 dark:text-purple-400">Latest Work</span>
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Here's a showcase of my work, featuring WHMCS modules, Laravel applications, and various web development projects that demonstrate my skills and passion for coding.
                    </p>
                </div>

                <!-- Projects Grid -->
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="project in projects" :key="project.id" class="project-card">
                        <ScreenshotContainer
                            :title="project.title"
                            :url="project.url"
                            :image="project.img"
                            :description="project.description"
                        />
                    </div>
                </div>
                
                <!-- View More Button -->
                <div class="text-center mt-12">
                    <button class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        View All Projects
                    </button>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            
            <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Get In Touch
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Let's Work <span class="text-blue-600 dark:text-blue-400">Together</span>
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects.<br>
                    Ready to bring your ideas to life!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="mailto:danielheinze96@gmail.com"
                        class="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg class="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Send Email
                    </a>
                    <a
                        href="https://github.com/Dainc007"
                        target="_blank"
                        class="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg class="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View GitHub
                    </a>
                </div>
            </div>
        </section>

        <Footer />
    </div>
    </GuestLayout>
</template>
