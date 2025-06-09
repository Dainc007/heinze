<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
import {useForm} from "@inertiajs/vue3";
import { ref, onMounted } from 'vue';

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const pageTitle = ref(null);

const submit = () => {
    form.post(route('sendEmail'), {
        onFinish: () => form.reset(),
    });
};

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

<template>
    <GuestLayout>
        <!-- Hero Section -->
        <div class="relative overflow-hidden min-h-screen">
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
            <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>
            <div class="container mx-auto px-4 py-16 lg:py-24 relative z-10">
                <div class="text-center mb-16">
                    <h1 
                        ref="pageTitle"
                        tabindex="-1"
                        class="text-4xl lg:text-5xl font-bold text-white mb-4 focus:outline-none"
                    >
                        Get in <span class="text-yellow-300">Touch</span>
                    </h1>
                    <p class="text-xl text-gray-100 max-w-2xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you.
                    </p>
                </div>

                <div class="max-w-6xl mx-auto">
                    <!-- Main Contact Section -->
                    <div class="text-center mb-16">
                        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl">
                            <div class="mb-8">
                                <div class="w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    Ready to Start Your <span class="text-yellow-300">Project?</span>
                                </h3>
                                <p class="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
                                    I'm always excited to work on new projects and help bring innovative ideas to life. Whether you need a complex Laravel application, WHMCS modules, or Vue.js development, let's create something amazing together!
                                </p>
                            </div>

                            <!-- Email CTA -->
                            <div class="mb-12">
                                <p class="text-lg text-gray-200 mb-6">Drop me a line and let's discuss your project:</p>
                                <a 
                                    href="mailto:danielheinze96@gmail.com"
                                    class="group inline-flex items-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
                                >
                                    <svg class="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span class="text-sm sm:text-lg lg:text-xl">danielheinze96@gmail.com</span>
                                </a>
                            </div>

                            <!-- Social Links -->
                            <div class="border-t border-white/20 pt-8">
                                <p class="text-lg text-gray-200 mb-6">Or connect with me on social media:</p>
                                <div class="flex justify-center space-x-6">
                                    <!-- GitHub -->
                                    <a 
                                        href="https://github.com/Dainc007" 
                                        target="_blank"
                                        class="group w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg class="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>

                                    <!-- Facebook -->
                                    <a 
                                        href="https://www.facebook.com/danielvandaniel" 
                                        target="_blank"
                                        class="group w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg class="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 320 512">
                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                        </svg>
                                    </a>

                                    <!-- LinkedIn -->
                                    <a 
                                        href="#" 
                                        class="group w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg class="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                        </svg>
                                    </a>

                                    <!-- Twitter -->
                                    <a 
                                        href="#" 
                                        class="group w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg class="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 512 512">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Contact Information -->
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Location -->
                        <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-2">Location</h3>
                            <p class="text-gray-200">Głuszyca, Poland</p>
                            <p class="text-sm text-gray-300 mt-1">🇵🇱 Central European Time</p>
                        </div>

                        <!-- Response Time -->
                        <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-2">Response Time</h3>
                            <p class="text-gray-200">Within 24 hours</p>
                            <p class="text-sm text-gray-300 mt-1">⚡ Usually much faster!</p>
                        </div>

                        <!-- Availability -->
                        <div class="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-white mb-2">Availability</h3>
                            <p class="text-gray-200">Open for projects</p>
                            <p class="text-sm text-gray-300 mt-1">🚀 Ready to start immediately</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </GuestLayout>
</template>

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
    animation: float 7s ease-in-out infinite;
}

.shape:nth-child(1) {
    top: 15%;
    left: 10%;
    animation-delay: 0s;
}

.shape:nth-child(2) {
    top: 65%;
    left: 85%;
    animation-delay: 2.5s;
}

.shape:nth-child(3) {
    top: 45%;
    left: 15%;
    animation-delay: 5s;
}

.shape:nth-child(4) {
    top: 75%;
    left: 65%;
    animation-delay: 1.5s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(180deg); }
}
</style>
