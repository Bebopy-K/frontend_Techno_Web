<script setup lang="ts">
import { ref, computed } from "vue";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Search, ChevronDown } from "lucide-vue-next";

interface ProductFromApi {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  features?: string[] | null;
}

interface ProductProps {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

const props = defineProps<{
  products: ProductFromApi[];
}>();

// State Kontrol Interaksi Filter
const searchQuery = ref("");
const selectedCategory = ref("All");
const sortBy = ref("Default");
const isSortDropdownOpen = ref(false);

// Normalisasi data dari backend agar konsisten dengan UI
const productList = computed<ProductProps[]>(() => {
  return (props.products ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    description: p.description,
    // image di DB sudah tersimpan seperti: products/<filename>.jpg
    image: p.image ? "/storage/" + p.image.replace(/^\/+/, "") : "",
    features: Array.isArray(p.features) ? p.features : [],
  }));
});

// Pengambilan otomatis kategori unik dari data produk
const categories = computed(() => {
  return ["All", ...new Set(productList.value.map((p) => p.category))];
});

// Pemrosesan Filter Live Search, Pil Kategori, dan Sorting
const filteredProducts = computed(() => {
  let result = [...productList.value];


  // 1. Filter Kategori Pil
  if (selectedCategory.value !== "All") {
    result = result.filter(p => p.category === selectedCategory.value);
  }

  // 2. Filter Live Search Input
  if (searchQuery.value.trim() !== "") {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    );
  }

  // 3. Sorting Logika
  if (sortBy.value === "A-Z") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy.value === "Z-A") {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }

  return result;
});
</script>

<template>
  <section
    id="product-list"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12  border-border/40">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Katalog Produk</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Eksplorasi Hasil Produk Kami
        </h2>
      </div>
      
      <div class="relative w-full md:w-80 self-start md:self-auto">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari produk teknologi..." 
          class="w-full bg-muted/40 dark:bg-card/40 pl-10 pr-4 py-2 text-sm rounded-full border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
        />
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            selectedCategory === cat 
              ? 'bg-foreground text-background dark:bg-foreground dark:text-background' 
              : 'bg-muted/50 text-muted-foreground border border-border/60 hover:bg-background',
            'px-4 py-1.5 rounded-full text-xs font-semibold transition duration-200 shrink-0 shadow-xs'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="relative self-end sm:self-auto">
        <button 
          @click="isSortDropdownOpen = !isSortDropdownOpen"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-muted/40 border border-border/60 text-xs font-semibold rounded-full shadow-xs text-foreground hover:bg-background transition"
        >
          Urutan: {{ sortBy }}
          <ChevronDown class="size-3.5 text-muted-foreground" />
        </button>
        <div 
          v-if="isSortDropdownOpen" 
          class="absolute right-0 mt-2 w-36 bg-background dark:bg-card border border-border rounded-xl shadow-md py-1 z-20 text-xs text-left"
        >
          <button 
            @click="sortBy = 'Default'; isSortDropdownOpen = false" 
            class="w-full px-4 py-2 hover:bg-muted text-foreground text-left font-medium"
          >Bawaan</button>
          <button 
            @click="sortBy = 'A-Z'; isSortDropdownOpen = false" 
            class="w-full px-4 py-2 hover:bg-muted text-foreground text-left font-medium"
          >Nama A-Z</button>
          <button 
            @click="sortBy = 'Z-A'; isSortDropdownOpen = false" 
            class="w-full px-4 py-2 hover:bg-muted text-foreground text-left font-medium"
          >Nama Z-A</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
      <div
v-for="({ image, title, category, description, features }) in filteredProducts"
        :key="title"
        class="flex"
      >
        <Card
          class="bg-card dark:bg-card/50 transition-all duration-300 group/product w-full border border-border/60 hover:border-primary/30 flex flex-col justify-between shadow-sm overflow-hidden rounded-xl"
        >
          <div>
            <div class="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[21/10] overflow-hidden bg-muted  border-border/30">
              <img 
                :src="image" 
                :alt="title" 
                class="w-full h-full object-cover object-center group-hover/product:scale-103 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>

            <CardHeader class="pt-6 pb-1">
              <div class="flex justify-between items-center mb-4">
                <div class="p-2.5 bg-primary/10 rounded-xl group-hover/product:bg-primary group-hover/product:text-primary-foreground transition-colors duration-200 text-primary">

                </div>
                <span class="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                  {{ category }}
                </span>
              </div>
              
              <CardTitle class="text-xl font-bold text-foreground group-hover/product:text-primary transition-colors duration-200 min-h-[56px] flex items-center text-left leading-snug">
                {{ title }}
              </CardTitle>
            </CardHeader>

            <CardContent class="space-y-6 text-left">
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ description }}
              </p>

              <div class="space-y-2.5 pt-2">
                <p class="text-xs font-bold uppercase text-foreground/70 tracking-wider">Fitur Utama:</p>
                <ul class="space-y-2">
                  <li 
                    v-for="feature in features" 
                    :key="feature"
                    class="flex items-start text-sm text-muted-foreground"
                  >
                    <Check class="size-4 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </div>

          <CardFooter class="flex flex-col items-stretch gap-4 pt-6 mt-auto border-t border-border/60 bg-muted/20 dark:bg-muted/5 rounded-b-xl">
            <Button class="w-full font-semibold shadow-sm transition-all" variant="default">
              Lihat Produk
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>

    <div v-if="filteredProducts.length === 0" class="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border/60 mt-6">
      <p class="text-sm text-muted-foreground">Tidak ada produk teknologi yang cocok dengan kata kunci pencarian Anda.</p>
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