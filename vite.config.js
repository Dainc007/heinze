import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import pages from './plugins/pages.js';

export default defineConfig({
    plugins: [
        tailwindcss(),
        pages({
            // Entry file => template + language. Add a page here and create its stub file.
            entries: {
                'index.html': { template: 'home.njk', locale: 'en' },
                'pl/index.html': { template: 'home.njk', locale: 'pl' },
            },
        }),
    ],
});
