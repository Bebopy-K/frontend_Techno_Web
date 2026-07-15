<script setup lang="ts">
import { ref, computed, withDefaults } from "vue";
import { Link } from "@inertiajs/vue3";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Search, 
  ChevronDown, 
  Calendar, 
  MessageSquare, 
  User,
  ArrowLeft
} from "lucide-vue-next";

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

const props = withDefaults(
    defineProps<{
        articles?: Article[];
    }>(),
    {
        articles: () => [],
    }
);
// State Kontrol Interaksi
const searchQuery = ref("");
const selectedCategory = ref("All");
const sortBy = ref("Newest");
const isSortDropdownOpen = ref(false);

// Ekstraksi otomatis daftar kategori unik
const categories = computed(() => {
    return [
        "All",
        ...new Set(props.articles.map(article => article.service.name))
    ];
});

// Artikel Utama Berukuran Besar (Featured)
const featuredArticle = computed(() => props.articles[0] ?? null);

// Pemrosesan Pencarian, Kategori Pil, & Sorting Berita
const filteredArticles = computed(() => {
  let result = props.articles.filter(
      article => article.id !== featuredArticle.value?.id
  );

  if (selectedCategory.value !== "All") {
    result = result.filter(
        article => article.service.name === selectedCategory.value
    );
  }

  if (searchQuery.value.trim() !== "") {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    );
  }

  if (sortBy.value === "Newest") {
    result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } else {
    result.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  }

  return result;
});
</script>

<template>
  <section
    id="article-list"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Katalog Berita</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Arsip Artikel Komunitas
        </h2>
      </div>
      
      <!-- Input Search Premium Sesuai screenshot -->
      <div class="relative w-full md:w-80 self-start md:self-auto">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari artikel..." 
          class="w-full bg-muted/40 dark:bg-card/40 pl-10 pr-4 py-2 text-sm rounded-full border order/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
        />
      </div>
    </div>

    <!-- FEATURED HERO BANNER (Hanya muncul jika filter kosong) -->
    <div v-if="featuredArticle && selectedCategory === 'All' && !searchQuery" class="mb-14">
      <Card class="bg-muted/30 dark:bg-card/40 border order/60 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 items-center group/featured relative">
        <Link :href="`/news/${featuredArticle.id}`" class="absolute inset-0 z-10" aria-label="Baca Artikel Utama"></Link>
        
        <!-- Gambar Unggulan (Efek Team & News Component) -->
        <div class="lg:col-span-6 w-full aspect-[16/10] overflow-hidden rounded-xl bg-muted border order/40 relative">
          <img 
            :src="'/storage/' + featuredArticle?.image"
            :alt="featuredArticle.title" 
            class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/featured:scale-103"
            loading="lazy"
          />
        </div>

        <!-- Meta Teks Unggulan -->
        <div class="lg:col-span-6 space-y-4 text-left flex flex-col justify-between h-full py-2">
          <div class="space-y-3">
            <span class="px-2.5 py-0.5 font-bold bg-primary/10 text-primary rounded-md uppercase tracking-wider text-[10px]">
              {{ featuredArticle?.service?.name }}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover/featured:text-primary transition-colors duration-200 leading-snug">
              {{ featuredArticle.title }}
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {{ featuredArticle.content.substring(0,180) }}...
            </p>
          </div>

          <div class="flex items-center gap-5 pt-4 text-xs text-muted-foreground font-medium">
            <span class="flex items-center gap-1.5"><User class="size-3.5" /> {{ featuredArticle?.user?.name }}</span>
            <span class="flex items-center gap-1.5"><Calendar class="size-3.5" /> {{ featuredArticle ? new Date(featuredArticle.created_at).toLocaleDateString() : '' }}</span>
            <span class="flex items-center gap-1.5"><MessageSquare class="size-3.5" /> {{ featuredArticle?.comments.length }}</span>
          </div>
        </div>
      </Card>
    </div>

    <!-- CONTROL FILTER: PIL KATEGORI & SORTING DROPDOWN -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <!-- Pills Category Filters (Meniru Screenshot 2026-06-28 005835.png) -->
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            selectedCategory === cat 
              ? 'bg-foreground text-background dark:bg-foreground dark:text-background' 
              : 'bg-muted/50 text-muted-foreground border order/60 hover:bg-background',
            'px-4 py-1.5 rounded-full text-xs font-semibold transition duration-200 shrink-0 shadow-xs'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Dropdown Sortir Premium -->
      <div class="relative self-end sm:self-auto">
        <button 
          @click="isSortDropdownOpen = !isSortDropdownOpen"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-muted/40 border order/60 text-xs font-semibold rounded-full shadow-xs text-foreground hover:bg-background transition"
        >
          {{ sortBy }}
          <ChevronDown class="size-3.5 text-muted-foreground" />
        </button>
        <div 
          v-if="isSortDropdownOpen" 
          class="absolute right-0 mt-2 w-36 bg-background dark:bg-card border order rounded-xl shadow-md py-1 z-20 text-xs text-left"
        >
          <button 
            @click="sortBy = 'Newest'; isSortDropdownOpen = false" 
            class="w-full px-4 py-2 hover:bg-muted text-foreground text-left font-medium"
          >Terbaru</button>
          <button 
            @click="sortBy = 'Oldest'; isSortDropdownOpen = false" 
            class="w-full px-4 py-2 hover:bg-muted text-foreground text-left font-medium"
          >Terlama</button>
        </div>
      </div>
    </div>

    <!-- MAIN ARTICLES GRID BLOCK LAYOUT (Gaya Gabungan Card Premium & Screenshot) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <Card
        v-for="article in filteredArticles"
        :key="article.id"
        class="bg-muted/40 dark:bg-card/50 hover:bg-background dark:hover:bg-background transition-all duration-300 group/card border order/60 hover:border-primary/30 rounded-xl shadow-sm overflow-hidden flex p-4 gap-4 items-center relative"
      >
        <Link 
          :href="`/news/${article.id}`" 
          class="absolute inset-0 z-10"
          :aria-label="article.title"
        ></Link>

        <!-- Mini Square Thumbnail Image -->
        <div class="relative w-24 h-20 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted border order/40 shadow-xs">
          <img 
            :src="'/storage/' + article.image" 
            :alt="article.title" 
            class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-105"
            loading="lazy"
          />
        </div>

        <!-- Teks Content Samping -->
        <div class="flex-1 space-y-1.5 min-w-0 text-left">
          <span class="text-[10px] font-bold text-primary uppercase tracking-wider">
            {{ article.service.name }}
          </span>
          
          <CardTitle class="text-sm sm:text-base font-bold text-foreground group-hover/card:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
            {{ article.title }}
          </CardTitle>
          
          <!-- Informasi Kaki Kartu Kecil -->
          <div class="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11px] text-muted-foreground pt-1  order/20">
            <span class="font-semibold text-foreground/80 truncate max-w-[80px]">{{ article.user.name }}</span>
            <span class="text-muted-foreground/30">•</span>
            <span class="flex items-center gap-1"><Calendar class="size-3" /> {{ new Date(article.created_at).toLocaleDateString() }}</span>
          </div>
        </div>
      </Card>
    </div>

    <!-- Empty State Handle -->
    <div v-if="filteredArticles.length === 0" class="text-center py-16 bg-muted/20 rounded-xl border border-dashed order/60 mt-6">
      <p class="text-sm text-muted-foreground">Tidak ditemukan artikel yang sesuai dengan kriteria pencarian Anda.</p>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>