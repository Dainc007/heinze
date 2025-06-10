<script setup>
import ScreenshotContainer from './ScreenshotContainer.vue';

const props = defineProps({
    ownProjects: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
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
        <div class="text-center mb-12">
            <div class="animate-bounce inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Coming Soon
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white focus:outline-none">
                My <span class="text-yellow-300">Side Projects</span>
            </h2>
            <p class="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                These are my personal passion projects that I'm working on in my spare time. Each one represents innovative ideas and cutting-edge solutions.
            </p>
        </div>

        <!-- Side Projects Grid (3 columns) -->
        <div class="grid md:grid-cols-3 gap-6">
            <div v-for="project in ownProjects" :key="project.id" class="project-card side-project-card h-full">
                <div class="relative">
                    <!-- Coming Soon Badge -->
                    <div class="coming-soon-badge">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        SOON
                    </div>

                    <ScreenshotContainer
                        :title="project.title"
                        :url="project.url"
                        :image="project.img"
                        :image2="project.img2"
                        :image3="project.img3"
                        :description="project.description"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
