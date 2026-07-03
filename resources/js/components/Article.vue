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

// Strategi Destructuring List Berita
const featuredArticle = computed(() => props.articles[0]);
const articleList = computed(() => props.articles.slice(1, 5)); // Dibatasi maksimal 4 item samping agar tidak terlalu panjang

// Helper Format Tanggal Indonesia untuk Konsistensi Standar Produksi B2B
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <section
    id="news"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <!-- Header Publikasi Strategis -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 mb-16 border-b border-border/60">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Wawasan Teknis
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Wawasan & Berita Terbaru
        </h2>
      </div>

      <Link
        href="/news"
        class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors duration-200 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1.5 px-3 bg-primary/5 border border-primary/10 sm:self-auto self-start"
      >
        Lihat Semua Berita
        <ArrowRight class="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
      </Link>
    </div>

    <!-- Editorial Layout Hub Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      
      <!-- COLUMN 1: Hero Featured Publication Layout (Left Side) -->
      <div v-if="featuredArticle" class="lg:col-span-5 flex">
        <article class="group/featured relative flex flex-col justify-between w-full border border-border/40 dark:bg-card/20 p-5 rounded-2xl transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.01]">
          <Link :href="`/news/${featuredArticle.id}`" class="absolute inset-0 z-10 rounded-2xl" />
          
          <div class="space-y-5">
            <!-- Thumbnail Cover Image -->
            <div class="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-muted border border-border/30">
              <img
                :src="'/storage/' + featuredArticle.image"
                :alt="featuredArticle.title"
                class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/featured:scale-102"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>

            <!-- Meta Tags Chassis -->
            <div class="space-y-3 text-left">
              <div class="flex items-center gap-3 text-xs">
                <span
                  v-if="featuredArticle.service"
                  class="px-2.5 py-0.5 font-mono font-bold bg-primary/[0.06] text-primary rounded-md uppercase tracking-wider text-[10px] border border-primary/10"
                >
                  {{ featuredArticle.service.name }}
                </span>
                <span class="text-muted-foreground flex items-center gap-1.5 font-medium">
                  <User class="size-3.5 text-muted-foreground/60" />
                  {{ featuredArticle.user.name }}
                </span>
              </div>

              <!-- Title & Excerpt Content -->
              <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover/featured:text-primary transition-colors duration-200 leading-snug">
                {{ featuredArticle.title }}
              </h3>
              
              <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {{ featuredArticle.content }}
              </p>
            </div>
          </div>

          <!-- Bottom Footer Details -->
          <div class="flex items-center gap-4 pt-4 text-xs text-muted-foreground font-medium border-t border-dashed border-border/60 mt-6">
            <span class="flex items-center gap-1.5">
              <Calendar class="size-3.5" />
              {{ formatDate(featuredArticle.created_at) }}
            </span>
            <span class="flex items-center gap-1.5">
              <MessageSquare class="size-3.5" />
              {{ featuredArticle.comments.length }} Komentar
            </span>
          </div>
        </article>
      </div>

      <!-- COLUMN 2: Row Directory Feed Layout (Right Side) -->
      <div class="lg:col-span-7 flex flex-col justify-start gap-1">
        <div class="text-xs font-mono font-bold text-muted-foreground/50 uppercase tracking-widest pb-3 border-b border-border/40 mb-2 text-left">
          Rilis Berita Berkala
        </div>

        <article
          v-for="article in articleList"
          :key="article.id"
          class="group/list relative rounded-xl transition-all duration-300 py-4 px-3 hover:bg-muted/30 flex items-center justify-between gap-5 sm:gap-8 text-left border-b border-border/30 last:border-0"
        >
          <Link :href="`/news/${article.id}`" class="absolute inset-0 z-10 rounded-xl" />

          <!-- Details Info Stack -->
          <div class="flex-1 space-y-2 min-w-0">
            <h4 class="text-base sm:text-lg font-bold text-foreground group-hover/list:text-primary transition-colors duration-200 line-clamp-2 leading-snug pr-2">
              {{ article.title }}
            </h4>

            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground font-medium">
              <span class="text-foreground/80 font-semibold">{{ article.user.name }}</span>
              <span class="text-muted-foreground/30 font-mono">•</span>
              <span>{{ formatDate(article.created_at) }}</span>
              <span class="text-muted-foreground/30 font-mono">•</span>
              <span class="flex items-center gap-1">
                <MessageSquare class="size-3" />
                {{ article.comments.length }}
              </span>
            </div>
          </div>

          <!-- Compact Architectural Media Frame Cover -->
          <div class="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 overflow-hidden rounded-xl bg-muted border border-border/40 shadow-sm">
            <img
              :src="'/storage/' + article.image"
              :alt="article.title"
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/list:scale-102"
              loading="lazy"
            />
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Grid rendering is fully responsive utilizing tailwind core layouts */
</style>
