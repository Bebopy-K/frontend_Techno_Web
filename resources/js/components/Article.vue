<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, User, ArrowRight } from "lucide-vue-next";

interface ArticleProps {
  id: number;
  title: string;
  excerpt?: string;
  author: string;
  date: string;
  comments: number;
  category?: string;
  image: string;
}

// Artikel Utama (Sisi Kiri Besar)
const featuredArticle: ArticleProps = {
  id: 1,
  title: "Baldur's Gate 3 Community Modathon 2026",
  excerpt: "Can you believe July is almost here? That means the incredible Baldur's Gate 3 modding community is officially gearing up for the third annual Modathon! Nearly 400 incredible creations have been submitted for the event since it first began, and this year is already shaping up to be the most exciting yet.",
  author: "Modsetti",
  category: "Mod News",
  date: "15 JUN 2026",
  comments: 17,
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
};

// Daftar Artikel List (Sisi Kanan)
const articleList: ArticleProps[] = [
  {
    id: 2,
    title: "Stardew Valley Modfest - Winners",
    author: "Modsetti",
    date: "04 JUN 2026",
    comments: 31,
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Monthly Roundup - May 2026",
    author: "SlugGirl",
    date: "02 JUN 2026",
    comments: 47,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fallout Collectionathon - Winners",
    author: "ModularCocoon",
    date: "21 MAY 2026",
    comments: 46,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Monthly Roundup - April 2026",
    author: "SlugGirl",
    date: "06 MAY 2026",
    comments: 57,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1565&auto=format&fit=crop"
  }
];
</script>

<template>
  <section
    id="news"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Updates</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Latest News
        </h2>
      </div>
      <a 
        href="#" 
        class="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 group/link self-start md:self-end"
      >
        View all
        <ArrowRight class="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <article class="lg:col-span-5 group/featured relative">
        <a :href="`/news/${featuredArticle.id}`" class="absolute inset-0 z-10" aria-hidden="true"></a>
        
        <Card class="bg-transparent border-0 shadow-none overflow-hidden p-0">
          <div class="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border/40">
            <img 
              :src="featuredArticle.image" 
              :alt="featuredArticle.title" 
              class="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
          </div>
          
          <div class="pt-6 space-y-3">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
              <span v-if="featuredArticle.category" class="px-2.5 py-0.5 font-semibold bg-primary/10 text-primary rounded-md uppercase tracking-wider text-[10px]">
                {{ featuredArticle.category }}
              </span>
              <span class="text-muted-foreground flex items-center gap-1 font-medium">
                <User class="size-3.5 text-muted-foreground/70" /> {{ featuredArticle.author }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover/featured:text-primary group-hover/featured:underline decoration-2 underline-offset-4 transition-colors duration-200 leading-snug">
              {{ featuredArticle.title }}
            </h3>

            <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3 pt-1">
              {{ featuredArticle.excerpt }}
            </p>

            <div class="flex items-center gap-4 pt-2 text-xs text-muted-foreground font-medium border-t border-border/30">
              <span class="flex items-center gap-1.5"><Calendar class="size-3.5" /> {{ featuredArticle.date }}</span>
              <span class="flex items-center gap-1.5"><MessageSquare class="size-3.5" /> {{ featuredArticle.comments }} Comments</span>
            </div>
          </div>
        </Card>
      </article>

      <div class="lg:col-span-7 space-y-1">
        <article 
          v-for="(article, index) in articleList" 
          :key="article.id"
          class="group/list relative rounded-xl transition-all duration-200 p-3"
        >
          <a :href="`/news/${article.id}`" class="absolute inset-0 z-10" aria-hidden="true"></a>

          <div 
            class="flex items-center justify-between gap-6"
            :class="{ 'pt-4 ': index !== 0 }"
          >
            <div class="flex-1 space-y-2">
              <h4 class="text-base sm:text-lg font-bold text-foreground group-hover/list:text-primary group-hover/list:underline decoration-2 underline-offset-4  duration-200 line-clamp-2 leading-snug">
                {{ article.title }}
              </h4>
              
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span class="font-semibold text-foreground/70">{{ article.author }}</span>
                <span class="text-muted-foreground/40">•</span>
                <span>{{ article.date }}</span>
                <span class="text-muted-foreground/40">•</span>
                <span class="flex items-center gap-1"><MessageSquare class="size-3" /> {{ article.comments }}</span>
              </div>
            </div>

            <div class="relative w-24 h-16 sm:w-32 sm:h-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted border border-border/40">
              <img 
                :src="article.image" 
                :alt="article.title" 
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
