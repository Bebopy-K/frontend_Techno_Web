import { createSSRApp, h, DefineComponent } from 'vue'; // 1. Changed createApp to createSSRApp
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '@/pages/MainLayout.vue';

createInertiaApp({
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`, 
            import.meta.glob<DefineComponent>('./Pages/**/*.vue')
        );
        
        if (page.default.layout === undefined) {
            page.default.layout = MainLayout;
        }
        
        return page;
    },
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();

        AOS.init();

        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia);

        if (typeof window !== 'undefined') {
            app.mount(el);
        }

        return app;
    },
});