<script setup lang="ts">
import { computed, ref } from "vue";
import { MessageSquare, Calendar, User, ArrowLeft, Share2, Send } from "lucide-vue-next";
import { Link } from "@inertiajs/vue3";

const props = defineProps<{
  id: number;
}>();

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: number;
  category: string;
  image: string;
}

interface Comment {
  id: number;
  author: string;
  avatar?: string;
  date: string;
  content: string;
}

// Reactive state untuk input komentar baru
const newComment = ref("");

// Mock Data Gabungan
const allArticles: Article[] = [
  {
    id: 1,
    title: "Baldur's Gate 3 Community Modathon 2026",
    content: "Tidak terasa bulan Juli sudah hampir tiba! Ini berarti komunitas modding Baldur's Gate 3 secara resmi bersiap untuk gelaran Modathon tahunan ketiga! Hampir 400 karya luar biasa telah dikirimkan sejak ajang ini dimulai, dan tahun ini tampaknya akan menjadi yang paling menarik.\n\nPara modder dari seluruh dunia akan berkumpul untuk menunjukkan kreativitas mereka, mulai dari kosmetik baru, mekanik gameplay, hingga ekspansi cerita yang sepenuhnya disuarakan oleh AI atau pengisi suara amatir yang berbakat. Pihak Larian Studios juga dikabarkan memberikan dukungan penuh untuk event tahun ini dengan menyediakan beberapa merchandise eksklusif sebagai hadiah utama.",
    author: "Modsetti",
    category: "Mod News",
    date: "15 JUN 2026",
    comments: 17,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Stardew Valley Modfest - Pengumuman Pemenang",
    content: "Setelah melalui proses kurasi yang ketat selama dua minggu penuh, para juri akhirnya mengumumkan pemenang Stardew Valley Modfest tahun ini. Kreativitas komunitas benar-benar tidak ada batasnya, menghadirkan mekanik pertanian baru, festival musiman yang belum pernah ada sebelumnya, hingga perluasan peta wilayah baru di luar Pelican Town.",
    author: "Modsetti",
    category: "Event",
    date: "04 JUN 2026",
    comments: 31,
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Rangkuman Bulanan - Edisi Mei 2026",
    content: "Bulan Mei 2026 dipenuhi dengan rilis mod yang mencengangkan untuk berbagai game RPG besar. Dalam rangkuman kali ini, kami menyoroti beberapa proyek ambisius yang berhasil mencuri perhatian komunitas global, termasuk perombakan total UI untuk beberapa game klasik.",
    author: "SlugGirl",
    category: "Monthly Roundup",
    date: "02 JUN 2026",
    comments: 47,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fallout Collectionathon - Pengumuman Pemenang",
    content: "Menyusul kesuksesan serial TV-nya, gelaran Fallout Collectionathon tahun ini memecahkan rekor partisipasi terbanyak. Kategori modifikasi aset lingkungan mendominasi, memberikan nuansa kehancuran pasca-apokaliptik yang jauh lebih realistis dan mencekam untuk dinikmati para pemain setianya.",
    author: "ModularCocoon",
    category: "Event",
    date: "21 MEI 2026",
    comments: 46,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Rangkuman Bulanan - Edisi April 2026",
    content: "Awal kuartal kedua tahun ini dibuka dengan kejutan dari komunitas retro modding. Simak daftar lengkap mod esensial yang rilis sepanjang bulan April 2026 yang wajib masuk ke dalam daftar unduhan kamu minggu ini.",
    author: "SlugGirl",
    category: "Monthly Roundup",
    date: "06 MEI 2026",
    comments: 57,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1565&auto=format&fit=crop"
  }
];

// Mock Data Komentar Terkait
const mockComments = ref<Comment[]>([
  {
    id: 1,
    author: "ShadowHeartFan",
    date: "16 Jun 2026",
    content: "Gak sabar nunggu rilis mod cerita baru tahun ini! Modathon tahun lalu bener-bener ngerubah cara gw mainin BG3 rute ke-5 gw."
  },
  {
    id: 2,
    author: "GamerToge",
    date: "15 Jun 2026",
    content: "Dukungan penuh dari Larian emang jempolan sih. Jarang ada studio sebesar mereka yang bener-bener ngerangkul komunitas modder lokal sampai ngasih merchandise resmi."
  }
]);

const article = computed(() => {
  return allArticles.find((a) => a.id === props.id) || allArticles[0];
});

// Fungsi simulasi submit komentar
const handleSubmitComment = () => {
  if (!newComment.value.trim()) return;
  
  mockComments.value.unshift({
    id: Date.now(),
    author: "Kamu (Guest)",
    date: "Baru saja",
    content: newComment.value
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
          {{ article.category || 'News' }}
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {{ article.title }}
        </h1>
        
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground border-b border-border/40 pb-6">
          <span class="flex items-center gap-2 font-medium text-foreground">
            <User class="size-4 text-muted-foreground/70" /> {{ article.author }}
          </span>
          <span class="flex items-center gap-1.5">
            <Calendar class="size-4" /> {{ article.date }}
          </span>
          <span class="flex items-center gap-1.5">
            <MessageSquare class="size-4" /> {{ mockComments.length }} Komentar
          </span>
        </div>
      </header>

      <div class="relative w-full aspect-[21/9] overflow-hidden rounded-2xl bg-muted border border-border/40 mb-10 shadow-lg">
        <img 
          :src="article.image" 
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
          Diskusi ({{ mockComments.length }})
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
            v-for="comment in mockComments" 
            :key="comment.id"
            class="flex gap-4 p-4 rounded-xl border border-border/30 bg-muted/10"
          >
            <div class="size-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
              <User class="size-4 text-primary" />
            </div>

            <div class="space-y-1.5 flex-1 min-w-0">
              <div class="flex items-center justify-between gap-4">
                <h4 class="text-sm font-bold text-foreground truncate">
                  {{ comment.author }}
                </h4>
                <span class="text-[11px] text-muted-foreground font-medium shrink-0">
                  {{ comment.date }}
                </span>
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {{ comment.content }}
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