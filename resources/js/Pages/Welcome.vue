<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Pages/Welcome/Components/Footer.vue';
import Header from '@/Pages/Welcome/Components/Header.vue';
import ScreenshotContainer from '@/Pages/Welcome/Components/ScreenshotContainer.vue';
import TopNav from "@/Pages/Welcome/Components/TopNav.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";


defineProps({
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


</style>
<template>
    <GuestLayout>
    <Head title="Welcome"/>
    <div class="bg-gray-50 text-black/50 dark:bg-slate-800 dark:text-white/50">
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <Header></Header>
                <main class="mt-6">
                    <div class="grid gap-6 lg:grid-cols-1 lg:gap-8 typing-animation">
                        <h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-right text-ternary-dark dark:text-primary-light uppercase">
                            Hi, I'm Daniel
                        </h1>
                        <p class="font-general-medium text-lg sm:text-xl  xl:text-2xl text-center sm:text-right leading-none text-gray-400">
                            A PHP <strong>Programmer</strong> <br>aspiring to become <br> a <strong>Full-stack Developer</strong>.
                        </p>
                        <div class="flex mb-6 justify-end">
                            <a
                                download="cv-eng.pdf"
                                href="/files/cv-eng.pdf"
                                class="flex justify-center items-center w-full sm:w-80 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                aria-label="Download Resume"
                            >
                                <i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
                                <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
                            </a>
                        </div>
                    </div>

                    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8 mb-6" id="projects">
                        <h1 class="col-span-2 mb-6 font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-center text-ternary-dark dark:text-primary-light uppercase">
                            My Projects
                        </h1>
                        <ScreenshotContainer
                            v-for="(project, index) in projects"
                            :key="project.id"
                            :title="project.title"
                            :url="project.url"
                            :image="project.img"
                            :description="project.description"
                        >
                        </ScreenshotContainer>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    </div>
    </GuestLayout>
</template>
