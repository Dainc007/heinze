<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Pages/Welcome/Components/Footer.vue';
import SideProjectsSection from '@/Pages/Welcome/Components/SideProjectsSection.vue';
import ProjectsSection from '@/Pages/Welcome/Components/ProjectsSection.vue';
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { ref } from 'vue';

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
    },
    ownProjects: {
        type: Array,
        required: true
    }
});

const pageTitle = ref(null);
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

/* Side Projects Clean Styles */
.side-project-card {
    position: relative;
    transition: all 0.3s ease;
    cursor: default;
    pointer-events: none;
}

.side-project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.coming-soon-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #fbbf24;
    color: #1f2937;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 4px;
    box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
}
</style>

<template>
    <GuestLayout>
    <Head title="Daniel Heinze - Full Stack Developer"/>
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">

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
                    <h1
                        ref="pageTitle"
                        tabindex="-1"
                        class="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 focus:outline-none"
                    >
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
                        download="danielheinze.pdf"
                        href="/files/danielheinze.pdf"
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

            <div class="absolute bottom-20 right-20 opacity-10 hidden lg:block">
                <div class="bg-gray-800 rounded-lg p-4 text-blue-400 font-mono text-sm">
                    <div>const skills = [</div>
                    <div>&nbsp;&nbsp;'PHP', 'Laravel',</div>
                    <div>&nbsp;&nbsp;'Vue.js', 'WHMCS'</div>
                    <div>];</div>
                </div>
            </div>
                </section>

        <!-- My Side Projects Section -->
        <section id="side-projects" class="py-16 relative overflow-hidden">
            <!-- Gradient Background matching other sections -->
            <div class="absolute inset-0 gradient-bg opacity-90"></div>

            <!-- Floating Background Shapes -->
            <div class="floating-shapes">
                <div class="shape w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
                <div class="shape w-16 h-16 bg-orange-500 rounded-lg rotate-45 opacity-20"></div>
                <div class="shape w-12 h-12 bg-pink-500 rounded-full opacity-20"></div>
                <div class="shape w-24 h-24 bg-purple-400 rounded-lg rotate-12 opacity-20"></div>
            </div>

            <!-- Background Blur Elements -->
            <div class="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-2xl"></div>

            <SideProjectsSection :ownProjects="ownProjects" />
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-24 relative overflow-hidden">
            <!-- Gradient Background matching hero section -->
            <div class="absolute inset-0 gradient-bg opacity-90"></div>

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
            <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>

            <ProjectsSection :projects="projects" />
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 relative overflow-hidden">
            <!-- Gradient Background matching hero section -->
            <div class="absolute inset-0 gradient-bg opacity-90"></div>

            <!-- Floating Background Shapes -->
            <div class="floating-shapes">
                <div class="shape w-24 h-24 bg-yellow-400 rounded-full opacity-15"></div>
                <div class="shape w-18 h-18 bg-blue-500 rounded-lg rotate-45 opacity-15"></div>
                <div class="shape w-14 h-14 bg-purple-500 rounded-full opacity-15"></div>
                <div class="shape w-28 h-28 bg-green-400 rounded-lg rotate-12 opacity-15"></div>
            </div>

            <!-- Background Blur Elements -->
            <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div class="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>

            <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <div class="animate-bounce inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Get In Touch
                </div>

                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Let's Work <span class="text-yellow-300">Together</span>
                </h2>
                <p class="text-xl text-gray-100 mb-12 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects.<br>
                    Ready to bring your ideas to life!
                </p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="mailto:danielheinze96@gmail.com"
                        class="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg class="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Send Email
                    </a>
                    <a
                        href="https://github.com/Dainc007"
                        target="_blank"
                        class="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
