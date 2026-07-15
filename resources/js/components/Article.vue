<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { MessageSquare, Calendar, User, ArrowRight } from "lucide-vue-next";
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    created_at: string;
    user: {
        name: string;
    };
    service: {
        name: string;
    };
    comments: {
        id: number;
    }[];
}

const props = defineProps<{
    articles: Article[];
}>();

const featuredArticle = computed(() => props.articles[0]);

const articleList = computed(() => props.articles.slice(1));
</script>

<template>
<section
    id="news"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up"
    data-aos-duration="1000"
>
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-border/40">
        <div class="space-y-2 text-left">
            <p class="text-sm font-semibold tracking-wider text-primary uppercase">
                Artikel & Berita
            </p>

            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Berita Terbaru
            </h2>
        </div>

        <a
            href="/news"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 group/link self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
        >
            Lihat semua
            <ArrowRight
                class="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
            />
        </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        <!-- Featured Article -->
        <article
            v-if="featuredArticle"
            class="lg:col-span-5 group/featured relative flex flex-col focus-within:ring-2 focus-within:ring-primary/40 focus-within:ring-offset-2 rounded-2xl transition-all duration-300"
        >
            <Link
                :href="`/news/${featuredArticle.id}`"
                class="absolute inset-0 z-10 rounded-2xl"
                :aria-label="`Baca selengkapnya tentang ${featuredArticle.title}`"
            />

            <Card class="bg-transparent border-0 shadow-none overflow-hidden p-0 flex flex-col h-full">

                <div class="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border/40">
                    <img
                        :src="'/storage/' + featuredArticle.image"
                        :alt="featuredArticle.title"
                        class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/featured:scale-105"
                        loading="lazy"
                    />

                    <div class="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>

                <div class="pt-6 flex-1 flex flex-col justify-between space-y-3">

                    <div class="space-y-3">

                        <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">

                            <span
                                v-if="featuredArticle.service"
                                class="px-2.5 py-0.5 font-bold bg-primary/10 text-primary rounded-md uppercase tracking-wider text-[10px]"
                            >
                                {{ featuredArticle.service.name }}
                            </span>

                            <span class="text-muted-foreground flex items-center gap-1 font-medium">
                                <User class="size-3.5 text-muted-foreground/70" />
                                {{ featuredArticle.user.name }}
                            </span>

                        </div>

                        <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover/featured:text-primary transition-colors duration-200 leading-snug">
                            {{ featuredArticle.title }}
                        </h3>

                        <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                            {{ featuredArticle.content.substring(0,180) }}...
                        </p>

                    </div>

                    <div class="flex items-center gap-4 pt-4 text-xs text-muted-foreground font-medium border-t border-border/30 mt-2">

                        <span class="flex items-center gap-1.5">
                            <Calendar class="size-3.5" />
                            {{ new Date(featuredArticle.created_at).toLocaleDateString() }}
                        </span>

                        <span class="flex items-center gap-1.5">
                            <MessageSquare class="size-3.5" />
                            {{ featuredArticle.comments.length }} Komentar
                        </span>

                    </div>

                </div>

            </Card>

        </article>

        <!-- List Artikel -->
        <div class="lg:col-span-7 divide-y divide-border/40 border-t lg:border-t-0 border-border/40">

            <article
                v-for="article in articleList"
                :key="article.id"
                class="group/list relative rounded-xl transition-all duration-300 p-4 -mx-4 hover:bg-muted/40 focus-within:bg-muted/40 flex items-center justify-between gap-4 sm:gap-6"
            >

                <Link
                    :href="`/news/${article.id}`"
                    class="absolute inset-0 z-10 rounded-xl"
                    :aria-label="`Baca selengkapnya tentang ${article.title}`"
                />

                <div class="flex-1 space-y-2.5 min-w-0">

                    <h4 class="text-base sm:text-lg font-bold text-foreground group-hover/list:text-primary transition-colors duration-200 line-clamp-2 leading-snug pr-2">
                        {{ article.title }}
                    </h4>

                    <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground">

                        <span class="font-semibold text-foreground/80">
                            {{ article.user.name }}
                        </span>

                        <span class="text-muted-foreground/30">•</span>

                        <span>
                            {{ new Date(article.created_at).toLocaleDateString() }}
                        </span>

                        <span class="text-muted-foreground/30">•</span>

                        <span class="flex items-center gap-1">
                            <MessageSquare class="size-3" />
                            {{ article.comments.length }}
                        </span>

                    </div>

                </div>

                <div class="relative w-20 h-14 sm:w-28 sm:h-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted border border-border/40 shadow-sm">

                    <img
                        :src="'/storage/' + article.image"
                        :alt="article.title"
                        class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/list:scale-105"
                        loading="lazy"
                    />

                </div>

            </article>

        </div>

    </div>

</section>
</template>

<style lang="less" scoped></style>