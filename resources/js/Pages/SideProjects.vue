<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
import ScreenshotContainer from '@/Pages/Welcome/Components/ScreenshotContainer.vue';
import { ref, onMounted } from 'vue';

const props = defineProps({
    ownProjects: {
        type: Array,
        required: true
    }
});

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
<GuestLayout>
    <!-- My Side Projects Section -->
    <section id="side-projects" class="py-24 relative overflow-hidden min-h-screen">
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
        
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="text-center mb-12">
                <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Coming Soon
                </div>

                <h2 
                    ref="pageTitle"
                    tabindex="-1"
                    class="text-4xl md:text-5xl font-bold mb-6 text-white focus:outline-none"
                >
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
                            :description="project.description"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</GuestLayout>
</template> 