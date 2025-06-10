<script setup>
import ScreenshotContainer from './ScreenshotContainer.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
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
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
            <div class="animate-bounce inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Portfolio
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white focus:outline-none">
                My Latest<span class="text-yellow-300"> Work </span>&<span class="text-yellow-300"> Clients</span>
            </h2>
            <p class="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                Here's a showcase of my work, featuring WHMCS modules, Laravel applications, and various web development projects that demonstrate my skills and passion for coding.
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 gap-8">
            <div v-for="project in projects" :key="project.id" class="project-card h-full">
                <ScreenshotContainer
                    :title="project.title"
                    :url="project.url"
                    :image="project.img"
                    :description="project.description"
                />
            </div>

            <!-- Fake card if odd number of projects -->
            <div class="project-card h-full">
                <div class="flex flex-col items-center justify-center gap-6 h-full rounded-lg bg-white/10 backdrop-blur-md p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.15)] ring-1 ring-white/20 border border-white/10 text-center min-h-[400px]">
                    <div class="flex flex-col items-center gap-4">
                        <div class="w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white">A place for your project!</h3>
                        <p class="text-gray-100 max-w-sm">
                            Have an exciting project in mind? Let's work together to bring your vision to life.
                        </p>
                    </div>
                    <Link
                        :href="route('contact')"
                        class="animate-bounce inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-100 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:from-yellow-300 hover:to-orange-400"
                    >
                        <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template> 