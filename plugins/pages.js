/**
 * Renders the site's pages from Nunjucks templates and one content file per language.
 *
 * Each entry file (index.html, pl/index.html) is only a stub. This plugin swaps
 * its contents for the rendered template before Vite processes the HTML, so Vite
 * still bundles the CSS/JS it links. Templates and content trigger a full reload
 * in dev.
 */
import { readFileSync } from 'node:fs';
import { relative, resolve, sep } from 'node:path';
import nunjucks from 'nunjucks';

const toUrl = (file) => '/' + file.replace(/index\.html$/, '');

export default function pages({ entries }) {
    let root = process.cwd();
    let templatesDir;
    let contentDir;
    let env;

    const readJson = (name) => JSON.parse(readFileSync(resolve(contentDir, name), 'utf8'));

    const alternates = Object.entries(entries).map(([file, page]) => ({
        locale: page.locale,
        url: toUrl(file),
    }));

    return {
        name: 'heinze:pages',

        config(userConfig) {
            const base = resolve(userConfig.root ?? process.cwd());
            const input = Object.fromEntries(
                Object.keys(entries).map((file) => [file.replace(/\/?index\.html$/, '') || 'main', resolve(base, file)]),
            );

            return { build: { rollupOptions: { input } } };
        },

        configResolved(config) {
            root = config.root;
            templatesDir = resolve(root, 'src/templates');
            contentDir = resolve(root, 'src/content');
            env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templatesDir, { noCache: true }), {
                autoescape: true,
            });
        },

        transformIndexHtml: {
            order: 'pre',
            handler(html, ctx) {
                const file = relative(root, ctx.filename).split(sep).join('/');
                const page = entries[file];

                if (!page) {
                    return html;
                }

                const site = readJson('site.json');

                return env.render(page.template, {
                    site,
                    t: readJson(`${page.locale}.json`),
                    locale: page.locale,
                    url: toUrl(file),
                    alternates,
                    year: new Date().getFullYear(),
                });
            },
        },

        handleHotUpdate({ file, server }) {
            if (file.startsWith(templatesDir + sep) || file.startsWith(contentDir + sep)) {
                server.ws.send({ type: 'full-reload' });

                return [];
            }
        },
    };
}
