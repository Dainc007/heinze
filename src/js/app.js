import Alpine from 'alpinejs';

/**
 * Highlights the nav link of the section currently on screen.
 * Usage: <body x-data="scrollspy"> and :class="{ 'is-active': active === 'work' }".
 */
Alpine.data('scrollspy', () => ({
    active: '',

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.filter((entry) => entry.isIntersecting).forEach((entry) => (this.active = entry.target.id));
            },
            { rootMargin: '-35% 0px -60% 0px' },
        );

        document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    },
}));

/**
 * Hero terminal: types each command, then shows its output.
 * The full text is in the HTML, so it reads fine without JS or with reduced motion.
 * Rows: data-row="cmd" (its [data-type] text gets typed), "out", "prompt"; x-ref="cursor".
 */
Alpine.data('typewriter', () => ({
    async init() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const cursor = this.$refs.cursor;
        const rows = [...this.$el.querySelectorAll('[data-row]')];
        const texts = rows.map((row) => row.querySelector('[data-type]')?.textContent ?? '');

        // Hide rows but keep their space, so the box does not jump while typing.
        rows.forEach((row) => (row.style.visibility = 'hidden'));
        await sleep(400);

        for (const [i, row] of rows.entries()) {
            row.style.visibility = 'visible';

            if (row.dataset.row === 'cmd') {
                const target = row.querySelector('[data-type]');
                target.textContent = '';
                target.after(cursor);
                await sleep(300);
                for (const char of texts[i]) {
                    target.textContent += char;
                    await sleep(45 + Math.random() * 55);
                }
                await sleep(250);
            } else if (row.dataset.row === 'out') {
                await sleep(110);
            } else {
                row.append(cursor);
            }
        }
    },
}));

/** Footer easter egg. */
Alpine.data('ball', () => ({
    goals: 0,
    kicking: false,

    kick() {
        if (this.kicking) return;
        this.kicking = true;
        setTimeout(() => {
            this.kicking = false;
            this.goals++;
        }, 700);
    },
}));

window.Alpine = Alpine;
Alpine.start();
