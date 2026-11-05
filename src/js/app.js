import Alpine from 'alpinejs';

/**
 * Highlights the nav link of the section currently on screen.
 * Usage: <body x-data="scrollspy"> and :class="{ 'is-active': active === 'work' }".
 */
Alpine.data('scrollspy', () => ({
    active: 'about',

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
