<script setup>

defineProps(['id', 'title', 'url', 'image'])

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <a
        :href="url"
        id="docs-card"
        class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
    >
        <div id="screenshot-container" class="relative flex w-full flex-1 items-stretch">
            <img
                :src="image"
                alt="Laravel documentation screenshot"
                class="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                @error="handleImageError"
            />
            <img
                :src="image"
                alt="Laravel documentation screenshot"
                class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
            />
            <div
                class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"
            ></div>
        </div>

        <div class="relative flex items-center gap-6 lg:items-end">
            <div id="docs-card-content" class="flex items-start gap-6 lg:flex-col">
                <div class="pt-3 sm:pt-5 lg:pt-0">
                    <h2 class="text-xl font-semibold text-black dark:text-white">{{title}}</h2>
                    <p class="mt-4 text-sm/relaxed">
                        {{title}}
                    </p>
                </div>
            </div>

            <svg
                class="size-6 shrink-0 stroke-[#FF2D20]"
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
