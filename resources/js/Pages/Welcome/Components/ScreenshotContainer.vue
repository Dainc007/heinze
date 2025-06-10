<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps(['id', 'title', 'url', 'image', 'image2', 'image3', 'description'])

const currentImageIndex = ref(0)
const isAnimating = ref(false)
let imageInterval = null

// Computed property to get all available images
const images = computed(() => {
    const imageArray = []
    if (props.image) imageArray.push(props.image)
    if (props.image2) imageArray.push(props.image2)
    if (props.image3) imageArray.push(props.image3)
    return imageArray
})

// Check if we have multiple images
const hasMultipleImages = computed(() => images.value.length > 1)

// Current image to display
const currentImage = computed(() => images.value[currentImageIndex.value] || props.image)

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}

function switchToNextImage() {
    if (!hasMultipleImages.value) return
    
    isAnimating.value = true
    
    setTimeout(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
        isAnimating.value = false
    }, 300) // Half of the animation duration
}

function startImageCycling() {
    if (!hasMultipleImages.value) return
    
    imageInterval = setInterval(() => {
        switchToNextImage()
    }, 5000) // Switch every 3 seconds
}

function stopImageCycling() {
    if (imageInterval) {
        clearInterval(imageInterval)
        imageInterval = null
    }
}

onMounted(() => {
    startImageCycling()
})

onUnmounted(() => {
    stopImageCycling()
})

// Restart cycling when images change
watch(() => images.value, () => {
    stopImageCycling()
    currentImageIndex.value = 0
    startImageCycling()
})
</script>

<style scoped>
.image-container {
    position: relative;
    overflow: hidden;
}

.image-transition {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-spin-enter {
    transform: rotateY(90deg) scale(0.8);
    opacity: 0;
}

.image-spin-exit {
    transform: rotateY(-90deg) scale(0.8);
    opacity: 0;
}

.multiple-images-indicator {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 4px;
}

.image-dots {
    display: flex;
    gap: 4px;
}

.image-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
}

.image-dot.active {
    background: #fbbf24;
    transform: scale(1.2);
}

.hover-pause {
    cursor: pointer;
}
</style>

<template>
    <a
        :href="url"
        id="docs-card"
        class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white/10 backdrop-blur-md p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.15)] ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 focus:outline-none focus-visible:ring-yellow-300 md:row-span-3 lg:p-10 lg:pb-10 transition-all duration-300 border border-white/10 h-full hover-pause"
        @mouseenter="stopImageCycling"
        @mouseleave="startImageCycling"
    >
        <div id="screenshot-container" class="image-container relative flex w-full flex-1 items-stretch">
            <!-- Light mode image -->
            <img
                :src="currentImage"
                alt="Project screenshot"
                class="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden image-transition"
                :class="{ 'image-spin-enter': isAnimating }"
                @error="handleImageError"
            />
            <!-- Dark mode image -->
            <img
                :src="currentImage"
                alt="Project screenshot"
                class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block image-transition"
                :class="{ 'image-spin-enter': isAnimating }"
            />
            
            <!-- Multiple images indicator -->
            <div v-if="hasMultipleImages" class="multiple-images-indicator">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
                <span>{{ currentImageIndex + 1 }}/{{ images.length }}</span>
            </div>

            <!-- Image dots indicator -->
            <div v-if="hasMultipleImages" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 image-dots">
                <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="image-dot"
                    :class="{ 'active': index === currentImageIndex }"
                ></div>
            </div>
            
            <div
                class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white/80 to-white/90"
            ></div>
        </div>

        <div class="relative flex items-center gap-6 lg:items-end">
            <div id="docs-card-content" class="flex items-start gap-6 lg:flex-col">
                <div class="pt-3 sm:pt-5 lg:pt-0">
                    <h2 class="text-xl font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md">{{title}}</h2>
                    <p class="mt-4 text-sm/relaxed text-gray-100">
                        {{description}}
                    </p>
                </div>
            </div>

            <svg
                class="size-6 shrink-0 stroke-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
            </svg>
        </div>
    </a>
</template>
