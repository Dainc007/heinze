<template>
    <footer class="relative overflow-hidden">
        <!-- Gradient Background matching hero section -->
        <div class="absolute inset-0 gradient-bg opacity-95"></div>

        <!-- Floating Background Shapes -->
        <div class="floating-shapes">
            <div class="shape w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
            <div class="shape w-12 h-12 bg-blue-500 rounded-lg rotate-45 opacity-10"></div>
            <div class="shape w-8 h-8 bg-purple-500 rounded-full opacity-10"></div>
            <div class="shape w-20 h-20 bg-green-400 rounded-lg rotate-12 opacity-10"></div>
        </div>

        <!-- Background Blur Elements -->
        <div class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-2xl"></div>

        <div class="relative z-10 text-white">
        <!-- Social Links Section -->
        <div class="border-b border-white/20">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="mb-6 md:mb-0">
                                            <p class="text-lg text-gray-100">
                        Get connected with me on social networks:
                    </p>
                    </div>

                    <!-- Social Icons -->
                    <div class="flex space-x-6">
                        <a
                            href="https://www.facebook.com/danielvandaniel"
                            target="_blank"
                            class="text-gray-200 hover:text-blue-500 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 320 512">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                            </svg>
                        </a>

                        <a
                            onclick="event.preventDefault();"
                            href="#"
                            class="text-gray-200 hover:text-blue-400 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                            </svg>
                        </a>

                        <a
                            href="mailto:danielheinze96@gmail.com"
                            class="text-gray-200 hover:text-red-500 transition-colors duration-300"
                            aria-label="Email"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 488 512">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/daniel-heinze-199ab4209/"
                            class="text-gray-200 hover:text-blue-700 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M100.3 480H7V165h93.3zm-46.6-365C23.1 115 0 91.9 0 64.5 0 28.8 28.8 0 64.5 0S128 28.8 128 64.5c0 27.4-23.1 50.5-53.3 50.5zm365.6 365h-93.3V327.6c0-36.5-13-61.4-45.5-61.4-24.8 0-39.5 16.7-46.1 32.8-2.4 5.8-3 13.9-3 22.1v158.9h-93.3s1.2-257.5 0-284.5h93.3v40.3c-0.2 0.3-0.5 0.6-0.7 0.9h0.7v-0.9c12.4-19.1 34.6-46.4 84.3-46.4 61.5 0 107.5 40.4 107.5 127.5v163.1z"/>
                            </svg>
                        </a>


                        <a
                            onclick="event.preventDefault();"
                            title="snaggydainc"
                            href="#"
                            class="text-gray-200 hover:text-indigo-500 transition-colors duration-300"
                            aria-label="Discord"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                            </svg>
                        </a>

                        <a
                            href="https://github.com/Dainc007"
                            target="_blank"
                            class="text-gray-200 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- About Section -->
                <div>
                    <div class="flex items-center mb-4">
                        <svg class="w-6 h-6 mr-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"/>
                        </svg>
                        <h3 class="text-lg font-bold text-white">Daniel Heinze</h3>
                    </div>
                    <p class="text-gray-100 leading-relaxed">
                        Thank You for visiting my website. I'm always open to discussing new opportunities and exciting projects.
                    </p>
                </div>

                <!-- Skills Section -->
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">What I'm Best At</h3>
                    <ul class="space-y-2">
                        <li><a href="https://www.php.net/" target="_blank" class="text-gray-200 hover:text-white transition-colors">PHP</a> & <a href="https://laravel.com/" target="_blank" class="text-gray-200 hover:text-white transition-colors">Laravel</a></li>
                        <li><a href="https://www.whmcs.com/" target="_blank" class="text-gray-200 hover:text-white transition-colors">WHMCS</a></li>
                        <li><a href="#!" class="text-gray-200 hover:text-white transition-colors">Vue.js</a></li>
                        <li><a href="https://laravel-livewire.com/" target="_blank" class="text-gray-200 hover:text-white transition-colors">Livewire</a> & <a href="https://filamentphp.com/" target="_blank" class="text-gray-200 hover:text-white transition-colors">Filament</a></li>
                    </ul>
                </div>

                <!-- Links Section -->
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Useful Links</h3>
                    <ul class="space-y-2">
                        <li>
                            Partners: <a href="https://atthost.pl/" target="_blank" class="text-gray-200 hover:text-white transition-colors">Atthost</a>
                        </li>
                        <li>
                            <a href="https://github.com/Dainc007" target="_blank" class="text-gray-200 hover:text-white transition-colors">Code on Github</a>
                        </li>
                        <li>
                            <a href="mailto:danielheinze96@gmail.com" class="text-gray-200 hover:text-white transition-colors">Send me an Email</a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Section -->
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Contact Info</h3>
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-0.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                            </svg>
                            <span class="text-gray-200">Głuszyca, 58-340, Poland</span>
                        </div>

                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-0.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                            </svg>
                            <a href="mailto:danielheinze96@gmail.com" class="text-gray-200 hover:text-white transition-colors">danielheinze96@gmail.com</a>
                        </div>

                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-0.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-200">Ask for contact</span>
                        </div>

                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-0.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-200 text-sm">NIP (Tax number): 9910548604</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-white/20">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <p class="text-gray-200 text-sm">
                        © {{ new Date().getFullYear() }} Daniel Heinze. All rights reserved.
                    </p>
                    <p class="text-gray-200 text-sm mt-2 md:mt-0">
                        Built with Laravel, Vue.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<script setup>
// Any additional logic can be added here if needed
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
    animation: float 8s ease-in-out infinite;
}

.shape:nth-child(1) {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
}

.shape:nth-child(2) {
    top: 70%;
    left: 75%;
    animation-delay: 3s;
}

.shape:nth-child(3) {
    top: 50%;
    left: 25%;
    animation-delay: 6s;
}

.shape:nth-child(4) {
    top: 30%;
    left: 80%;
    animation-delay: 2s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(180deg); }
}
</style>
