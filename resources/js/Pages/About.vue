<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
</script>

<template>
<GuestLayout>
    <div class="dark:bg-gray-900 dark:text-white/75 pt-0.5"><!-- App header -->
        <div class="">
            <!-- About me -->
            <div class="container mx-auto">
                <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20"><!-- About profile image -->
                    <div class="w-full  mb-7 "><img src="/images/about/me.jpg"
                                                                   class="rounded-xl w-100" alt=""></div>
                    <!-- About details -->
                    <div class="w-full sm:w-3/4 text-left"><p
                        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Hi there! I
                        am a dedicated PHP Developer residing in a quaint town near the mountains. With expertise in
                        WHMCS and Laravel, I am continuously expanding my knowledge by learning Vue.js. In my free time,
                        I enjoy hiking, diving into books, playing video games, and watching football. As a loyal
                        Arsenal supporter and avid Premier League fan, I am always on the edge of my seat during
                        matches.</p>
                        <p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">I
                            regularly dedicate my evenings and weekends to improving my apps which are strongly related to sport.</p></div>
                </div>
            </div>

        </div><!-- Scroll to top -->
        <div class="vue-back-to-top shadow-lg" style="bottom: 20px; right: 30px; display: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-chevron-up">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </div>
    </div>
    <Footer></Footer>
</GuestLayout>
</template>
