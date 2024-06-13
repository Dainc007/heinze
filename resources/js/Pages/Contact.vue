<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
</script>
<template>
<GuestLayout>
<div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10 dark:bg-zinc-700">
    <!-- Contact form -->
    <div class="w-full md:w-1/2">
        <div
            class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
            <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"> Contact Form </p>
            <form action="#" class="font-general-regular space-y-7">
                <div><label class="block mb-2 text-lg text-primary-dark dark:text-primary-light" for="Full Name">Full
                    Name</label><input
                    class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="name" name="name" placeholder="Full Name" aria-label="name" type="text" required=""></div>
                <div><label class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                            for="Email">Email</label><input
                    class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="email" name="email" placeholder="Email" aria-label="email" type="email" required=""></div>
                <div><label class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                            for="Subject">Subject</label><input
                    class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="subject" name="subject" placeholder="Subject" aria-label="subject" type="text" required="">
                </div>
                <div><label class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            for="message">Message</label><textarea
                    class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="message" name="message" aria-label="message" placeholder="Message" cols="14"
                    rows="6"></textarea></div>
                <div>
                    <button
                        class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                        type="submit" aria-label="Send Message">Send Message
                    </button>
                </div>
            </form>
        </div>
    </div><!-- Contact details -->
    <div class="w-full md:w-1/2">
        <div class="text-left max-w-xl px-6"><h2
            class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"> Contact
            details </h2>
            <ul class="font-general-regular">
                <li class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-map-pin w-5 text-gray-500 dark:text-gray-400 mr-4">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <a href="#" class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                       aria-label="Website and Phone">58-340 Głuszyca, Poland</a></li>
                <li class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-mail w-5 text-gray-500 dark:text-gray-400 mr-4">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="#"
                       class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
                       aria-label="Website and Phone">danielheinze96@gmail.com</a></li>
                <li class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-phone w-5 text-gray-500 dark:text-gray-400 mr-4">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="#"
                       class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
                       aria-label="Website and Phone"></a></li>
            </ul>
        </div>
    </div>
</div>
    <Footer></Footer>
</GuestLayout>
</template>
