import { createSSRApp, h, DefineComponent } from 'vue'; // 1. Changed createApp to createSSRApp
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();

        AOS.init();

        // 2. Use createSSRApp so Vue knows it needs to match server-generated HTML
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia);

        // 3. Only mount to the DOM if we are running in the browser
        if (typeof window !== 'undefined') {
            app.mount(el);
        }

        return app;
    },
});