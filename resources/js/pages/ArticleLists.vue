<script setup lang="ts">
import { ref, computed } from "vue";
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

interface ArticleProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  comments: number;
  category: string;
  image: string;
}

// State Kontrol Interaksi
const searchQuery = ref("");
const selectedCategory = ref("All");
const sortBy = ref("Newest");
const isSortDropdownOpen = ref(false);

// Gabungan Sumber Data Utama Berita
const articles = ref<ArticleProps[]>([
  {
    id: 1,
    title: "Baldur's Gate 3 Community Modathon 2026",
    excerpt: "Tidak terasa bulan Juli sudah hampir tiba! Ini berarti komunitas modding Baldur's Gate 3 secara resmi bersiap untuk gelaran Modathon tahunan ketiga! Hampir 400 karya luar biasa telah dikirimkan sejak ajang ini dimulai.",
    author: "Modsetti",
    category: "Mod News",
    date: "15 JUN 2026",
    comments: 17,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Stardew Valley Modfest - Pengumuman Pemenang",
    excerpt: "Setelah melalui proses kurasi yang ketat selama dua minggu penuh, para juri akhirnya mengumumkan pemenang Stardew Valley Modfest tahun ini. Kreativitas komunitas benar-benar tidak ada batasnya.",
    author: "Modsetti",
    category: "Event",
    date: "04 JUN 2026",
    comments: 31,
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Rangkuman Bulanan - Edisi Mei 2026",
    excerpt: "Bulan Mei 2026 dipenuhi dengan rilis mod yang mencengangkan untuk berbagai game RPG besar. Dalam rangkuman kali ini, kami menyoroti beberapa proyek ambisius yang berhasil mencuri perhatian.",
    author: "SlugGirl",
    category: "Monthly Roundup",
    date: "02 JUN 2026",
    comments: 47,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fallout Collectionathon - Pengumuman Pemenang",
    excerpt: "Menyusul kesuksesan serial TV-nya, gelaran Fallout Collectionathon tahun ini memecahkan rekor partisipasi terbanyak. Kategori modifikasi aset lingkungan mendominasi.",
    author: "ModularCocoon",
    category: "Event",
    date: "21 MEI 2026",
    comments: 46,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Rangkuman Bulanan - Edisi April 2026",
    excerpt: "Awal kuartal kedua tahun ini dibuka dengan kejutan dari komunitas retro modding. Simak daftar lengkap mod esensial yang rilis sepanjang bulan April 2026.",
    author: "SlugGirl",
    category: "Monthly Roundup",
    date: "06 MEI 2026",
    comments: 57,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1565&auto=format&fit=crop"
  }
]);

// Ekstraksi otomatis daftar kategori unik
const categories = computed(() => {
  return ["All", ...new Set(articles.value.map(a => a.category))];
});

// Artikel Utama Berukuran Besar (Featured)
const featuredArticle = computed(() => articles.value[0]);

// Pemrosesan Pencarian, Kategori Pil, & Sorting Berita
const filteredArticles = computed(() => {
  let result = articles.value.filter(a => a.id !== featuredArticle.value.id);

  if (selectedCategory.value !== "All") {
    result = result.filter(a => a.category === selectedCategory.value);
  }

  if (searchQuery.value.trim() !== "") {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(a => 
      a.title.toLowerCase().includes(query) || 
      a.excerpt.toLowerCase().includes(query)
    );
  }

  if (sortBy.value === "Newest") {
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else {
    result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
            :src="featuredArticle.image" 
            :alt="featuredArticle.title" 
            class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/featured:scale-103"
            loading="lazy"
          />
        </div>

        <!-- Meta Teks Unggulan -->
        <div class="lg:col-span-6 space-y-4 text-left flex flex-col justify-between h-full py-2">
          <div class="space-y-3">
            <span class="px-2.5 py-0.5 font-bold bg-primary/10 text-primary rounded-md uppercase tracking-wider text-[10px]">
              {{ featuredArticle.category }}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover/featured:text-primary transition-colors duration-200 leading-snug">
              {{ featuredArticle.title }}
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {{ featuredArticle.excerpt }}
            </p>
          </div>

          <div class="flex items-center gap-5 pt-4 text-xs text-muted-foreground font-medium">
            <span class="flex items-center gap-1.5"><User class="size-3.5" /> {{ featuredArticle.author }}</span>
            <span class="flex items-center gap-1.5"><Calendar class="size-3.5" /> {{ featuredArticle.date }}</span>
            <span class="flex items-center gap-1.5"><MessageSquare class="size-3.5" /> {{ featuredArticle.comments }}</span>
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
            :src="article.image" 
            :alt="article.title" 
            class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-105"
            loading="lazy"
          />
        </div>

        <!-- Teks Content Samping -->
        <div class="flex-1 space-y-1.5 min-w-0 text-left">
          <span class="text-[10px] font-bold text-primary uppercase tracking-wider">
            {{ article.category }}
          </span>
          
          <CardTitle class="text-sm sm:text-base font-bold text-foreground group-hover/card:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
            {{ article.title }}
          </CardTitle>
          
          <!-- Informasi Kaki Kartu Kecil -->
          <div class="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11px] text-muted-foreground pt-1  order/20">
            <span class="font-semibold text-foreground/80 truncate max-w-[80px]">{{ article.author }}</span>
            <span class="text-muted-foreground/30">•</span>
            <span class="flex items-center gap-1"><Calendar class="size-3" /> {{ article.date }}</span>
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