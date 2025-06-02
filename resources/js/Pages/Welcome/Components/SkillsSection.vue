<script setup>
import { ref } from 'vue';

const skills = ref([
    {
        name: 'PHP',
        level: 95,
        icon: '🐘',
        color: 'bg-purple-500',
        description: 'Advanced backend development'
    },
    {
        name: 'Laravel',
        level: 90,
        icon: '🔥',
        color: 'bg-red-500',
        description: 'Full-stack web applications'
    },
    {
        name: 'WHMCS',
        level: 85,
        icon: '💼',
        color: 'bg-blue-500',
        description: 'Custom modules & integrations'
    },
    {
        name: 'Vue.js',
        level: 75,
        icon: '💚',
        color: 'bg-green-500',
        description: 'Modern frontend development'
    },
    {
        name: 'JavaScript',
        level: 80,
        icon: '⚡',
        color: 'bg-yellow-500',
        description: 'Interactive web experiences'
    },
    {
        name: 'MySQL',
        level: 85,
        icon: '🗄️',
        color: 'bg-indigo-500',
        description: 'Database design & optimization'
    },
    {
        name: 'Tailwind CSS',
        level: 80,
        icon: '🎨',
        color: 'bg-cyan-500',
        description: 'Responsive UI design'
    },
    {
        name: 'Git',
        level: 85,
        icon: '🌿',
        color: 'bg-orange-500',
        description: 'Version control & collaboration'
    }
]);

const technologies = ref([
    { name: 'Livewire', icon: '⚡' },
    { name: 'Filament', icon: '📊' },
    { name: 'Inertia.js', icon: '🔗' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Composer', icon: '🎵' },
    { name: 'npm', icon: '📦' },
    { name: 'Vite', icon: '⚡' }
]);
</script>

<template>
    <section id="skills" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Skills & Expertise
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    I specialize in modern web development technologies with a focus on PHP, Laravel, and full-stack development.
                </p>
            </div>

            <!-- Main Skills Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <!-- Skill Icon & Name -->
                    <div class="flex items-center mb-4">
                        <div class="text-3xl mr-3">{{ skill.icon }}</div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                {{ skill.name }}
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                {{ skill.description }}
                            </p>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="relative">
                        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                            <span>Proficiency</span>
                            <span>{{ skill.level }}%</span>
                        </div>
                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                                :class="skill.color"
                                class="h-2 rounded-full transition-all duration-1000 ease-out"
                                :style="{ width: skill.level + '%' }"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technologies & Tools -->
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                    Technologies & Tools
                </h3>
                <div class="flex flex-wrap justify-center gap-4">
                    <div
                        v-for="tech in technologies"
                        :key="tech.name"
                        class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <span class="text-lg mr-2">{{ tech.icon }}</span>
                        <span class="font-medium">{{ tech.name }}</span>
                    </div>
                </div>
            </div>

            <!-- What I'm Best At Section -->
            <div class="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div class="text-center mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        What I'm Best At
                    </h3>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="text-4xl mb-4">🚀</div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Backend Development
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300">
                            Expert in PHP & Laravel with deep understanding of MVC architecture, RESTful APIs, and database optimization.
                        </p>
                    </div>
                    
                    <div class="text-center">
                        <div class="text-4xl mb-4">🔧</div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            WHMCS Development
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300">
                            Specialized in creating custom WHMCS modules, automation tools, and integrations for hosting companies.
                        </p>
                    </div>
                    
                    <div class="text-center">
                        <div class="text-4xl mb-4">💡</div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Full-Stack Solutions
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300">
                            Building complete web applications with modern technologies like Vue.js, Livewire, and Filament.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 