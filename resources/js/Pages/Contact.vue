<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Footer from "@/Pages/Welcome/Components/Footer.vue";
import {useForm} from "@inertiajs/vue3";

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const submit = () => {
    form.post(route('sendEmail'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div class="container mx-auto px-4 py-16 lg:py-24">
                <div class="text-center mb-16">
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in Touch
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you.
                    </p>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <!-- Contact Form -->
<!--                        <div class="order-2 lg:order-1">-->
<!--                            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-10">-->
<!--                                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">-->
<!--                                    Send a Message-->
<!--                                </h2>-->

<!--                                <form @submit.prevent="submit"-->
<!--                                      class="space-y-6"-->
<!--                                >-->
<!--                                    &lt;!&ndash; Name Field &ndash;&gt;-->
<!--                                    <div>-->
<!--                                        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">-->
<!--                                            Full Name *-->
<!--                                        </label>-->
<!--                                        <input-->
<!--                                            v-model="form.name"-->
<!--                                            type="text"-->
<!--                                            id="name"-->
<!--                                            name="name"-->
<!--                                            required-->
<!--                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"-->
<!--                                            placeholder="Enter your full name"-->
<!--                                        />-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; Email Field &ndash;&gt;-->
<!--                                    <div>-->
<!--                                        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">-->
<!--                                            Email Address *-->
<!--                                        </label>-->
<!--                                        <input-->
<!--                                            v-model="form.email"-->
<!--                                            type="email"-->
<!--                                            id="email"-->
<!--                                            name="email"-->
<!--                                            required-->
<!--                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"-->
<!--                                            placeholder="Enter your email address"-->
<!--                                        />-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; Subject Field &ndash;&gt;-->
<!--                                    <div>-->
<!--                                        <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">-->
<!--                                            Subject *-->
<!--                                        </label>-->
<!--                                        <input-->
<!--                                            v-model="form.subject"-->
<!--                                            type="text"-->
<!--                                            id="subject"-->
<!--                                            name="subject"-->
<!--                                            required-->
<!--                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"-->
<!--                                            placeholder="What's this about?"-->
<!--                                        />-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; Message Field &ndash;&gt;-->
<!--                                    <div>-->
<!--                                        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">-->
<!--                                            Message *-->
<!--                                        </label>-->
<!--                                        <textarea-->
<!--                                            v-model="form.message"-->
<!--                                            id="message"-->
<!--                                            name="message"-->
<!--                                            rows="5"-->
<!--                                            required-->
<!--                                            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-all duration-200"-->
<!--                                            placeholder="Tell me about your project or inquiry..."-->
<!--                                        ></textarea>-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; Submit Button &ndash;&gt;-->
<!--                                    <button-->
<!--                                        type="submit"-->
<!--                                        :disabled="form.processing"-->
<!--                                        class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"-->
<!--                                    >-->
<!--                                        <span v-if="!form.processing">Send Message</span>-->
<!--                                        <span v-else class="flex items-center space-x-2">-->
<!--                                            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">-->
<!--                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>-->
<!--                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>-->
<!--                                            </svg>-->
<!--                                            <span>Sending...</span>-->
<!--                                        </span>-->
<!--                                    </button>-->
<!--                                </form>-->
<!--                            </div>-->
<!--                        </div>-->

                        <!-- Contact Information -->
                        <div class="order-1 lg:order-2">
                            <div class="lg:sticky lg:top-8">
                                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                                    Contact Information
                                </h2>

                                <div class="space-y-6">
                                    <!-- Location -->
                                    <div class="flex items-start space-x-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium text-gray-900 dark:text-white">Location</h3>
                                            <p class="text-gray-600 dark:text-gray-400 mt-1">58-340 Głuszyca, Poland</p>
                                        </div>
                                    </div>

                                    <!-- Email -->
                                    <div class="flex items-start space-x-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium text-gray-900 dark:text-white">Email</h3>
                                            <a
                                                href="mailto:danielheinze96@gmail.com"
                                                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 mt-1 block"
                                            >
                                                danielheinze96@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <!-- Response Time -->
                                    <div class="flex items-start space-x-4">
                                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-medium text-gray-900 dark:text-white">Response Time</h3>
                                            <p class="text-gray-600 dark:text-gray-400 mt-1">Usually within 24 hours</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-12 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">Quick Response</h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">
                                        For urgent matters, please mention "URGENT" in your subject line. I'll prioritize your message and respond as quickly as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </GuestLayout>
</template>
