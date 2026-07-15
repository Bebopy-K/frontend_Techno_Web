<script setup lang="ts">
import { ref } from "vue";
import { MessageSquare, Calendar, User, ArrowLeft, Send } from "lucide-vue-next";
import { Link } from "@inertiajs/vue3";

interface Comment {
    id: number;
    name: string;
    email: string;
    comment: string;
    created_at: string;
}

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
    comments: Comment[];
}

const props = defineProps<{
    article: Article;
}>();

const newComment = ref("");

const comments = ref([...props.article.comments]);

const handleSubmitComment = () => {
    if (!newComment.value.trim()) return;

    comments.value.unshift({
        id: Date.now(),
        name: "Guest",
        email: "",
        comment: newComment.value,
        created_at: "Baru saja"
    });

    newComment.value = "";
};
</script>

<template>
  <div class="min-h-screen bg-background text-foreground pt-24 pb-16">
    <div class="container max-w-4xl mx-auto px-4 sm:px-6">
      
      <div class="mb-8">
        <Link 
          href="/#news" 
          class="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Berita
        </Link>
      </div>

      <header class="space-y-4 mb-8 text-left">
        <span class="px-2.5 py-0.5 font-bold bg-primary/10 text-primary rounded-md uppercase tracking-wider text-[10px]">
          {{ article.service.name }}
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {{ article.title }}
        </h1>
        
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground border-b border-border/40 pb-6">
          <span class="flex items-center gap-2 font-medium text-foreground">
            <User class="size-4 text-muted-foreground/70" /> {{ article.user.name }}
          </span>
          <span class="flex items-center gap-1.5">
            <Calendar class="size-4" /> {{ new Date(article.created_at).toLocaleDateString() }}
          </span>
          <span class="flex items-center gap-1.5">
            <MessageSquare class="size-4" /> {{ comments.length }} Komentar
          </span>
        </div>
      </header>

      <div class="relative w-full aspect-[21/9] overflow-hidden rounded-2xl bg-muted border border-border/40 mb-10 shadow-lg">
        <img 
          :src="'/storage/' + article.image" 
          :alt="article.title" 
          class="w-full h-full object-cover object-center"
        />
      </div>

      <article class="prose prose-stone dark:prose-invert max-w-none text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6 text-left">
        <p v-for="(paragraph, index) in article.content.split('\n\n')" :key="index">
          {{ paragraph }}
        </p>
      </article>

      <section class="mt-16 pt-12 border-t border-border/40 text-left">
        <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-8 flex items-center gap-2.5">
          <MessageSquare class="size-5 text-primary" />
          Komentar ({{comments.length }})
        </h3>

        <form @submit.prevent="handleSubmitComment" class="space-y-4 mb-10">
          <div class="relative rounded-xl border border-border/60 bg-muted/20 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all duration-200">
            <textarea
              v-model="newComment"
              rows="3"
              placeholder="Tulis opini atau komentar kamu di sini..."
              class="w-full bg-transparent px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none resize-none"
            ></textarea>
            
            <div class="flex justify-end p-2 border-t border-border/20 bg-muted/10 rounded-b-xl">
              <button
                type="submit"
                :disabled="!newComment.trim()"
                class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-md shadow hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Kirim
                <Send class="size-3" />
              </button>
            </div>
          </div>
        </form>

        <div class="space-y-6">
          <div 
            v-for="comment in comments"
            :key="comment.id"
            class="flex gap-4 p-4 rounded-xl border border-border/30 bg-muted/10"
          >
            <div class="size-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
              <User class="size-4 text-primary" />
            </div>

            <div class="space-y-1.5 flex-1 min-w-0">
              <div class="flex items-center justify-between gap-4">
                <h4 class="text-sm font-bold text-foreground truncate">
                  {{ comment.name }}
                </h4>
                <span class="text-[11px] text-muted-foreground font-medium shrink-0">
                  {{ comment.created_at }}
                </span>
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {{ comment.comment }}
              </p>
            </div>
          </div>
        </div>
        
      </section>

    </div>
  </div>
</template>

<style scoped>
article p {
  text-align: justify;
}
</style>
