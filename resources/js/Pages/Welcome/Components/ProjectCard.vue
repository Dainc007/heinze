<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
        <!-- Image Container -->
        <div class="relative h-48 overflow-hidden">
            <img
                :src="project.img"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                    {{ project.category }}
                </span>
            </div>
            
            <!-- View Project Button (appears on hover) -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                    :href="project.url"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    View Project
                </a>
            </div>
        </div>
        
        <!-- Content -->
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {{ project.description }}
            </p>
            
            <!-- Footer -->
            <div class="flex items-center justify-between">
                <div class="flex items-center text-blue-600 dark:text-blue-400">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                    <span class="text-sm font-medium">Live Demo</span>
                </div>
                
                <a
                    :href="project.url"
                    target="_blank"
                    class="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style> 