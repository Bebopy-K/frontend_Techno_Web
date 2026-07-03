<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useForm } from "@inertiajs/vue3";
import { PlusCircle, Image, FileText, ShoppingBag, X, Loader2, Calendar, Folder, FileEdit, Trash2, ChevronLeft, ChevronRight, ListOrdered } from "lucide-vue-next";
import ToggleTheme from "@/components/ToggleTheme.vue";

// Define TypeScript interfaces for your data structures
interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string; 
  created_at: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string; 
  created_at: string;
}

// Accept data passed from your Laravel Controller via Inertia props
const props = defineProps<{
  articles: Article[];
  products: Product[];
}>();

const activeForm = ref<"article" | "product" | null>(null);
const currentTab = ref<"articles" | "products">("articles");

// Shared Categories configurations for both articles and products
const categories = ["Announcement", "Tutorial", "Insight", "Case Study"];
const selectedCategory = ref<string>("All"); 

// Pagination States
const perPageOptions = [5, 10, 20, 50];
const itemsPerPage = ref(5);
const articlePage = ref(1);
const productPage = ref(1);

const articleForm = useForm({
  title: "",
  description: "",
  category: "Announcement",
  image: null as File | null,
});

const productForm = useForm({
  title: "",
  description: "",
  category: "Announcement", // Shared starting category
  image: null as File | null,
});

const handleArticleFile = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    articleForm.image = target.files[0];
  }
};

const handleProductFile = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    productForm.image = target.files[0];
  }
};

const submitArticle = () => {
  articleForm.post("/admin/articles", {
    onSuccess: () => {
      articleForm.reset();
      activeForm.value = null;
      articlePage.value = 1;
    },
  });
};

const submitProduct = () => {
  productForm.post("/admin/products", {
    onSuccess: () => {
      productForm.reset();
      activeForm.value = null;
      productPage.value = 1;
    },
  });
};

// --- Articles Logic ---
const filteredArticles = computed(() => {
  let items = [...props.articles];
  if (selectedCategory.value !== "All") {
    items = items.filter(a => a.category === selectedCategory.value);
  }
  return items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
});

const totalArticlePages = computed(() => Math.ceil(filteredArticles.value.length / itemsPerPage.value) || 1);

const paginatedArticles = computed(() => {
  const start = (articlePage.value - 1) * itemsPerPage.value;
  return filteredArticles.value.slice(start, start + itemsPerPage.value);
});

// --- Products Logic ---
const filteredProducts = computed(() => {
  let items = [...props.products];
  if (selectedCategory.value !== "All") {
    items = items.filter(p => p.category === selectedCategory.value);
  }
  return items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
});

const totalProductPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value) || 1);

const paginatedProducts = computed(() => {
  const start = (productPage.value - 1) * itemsPerPage.value;
  return filteredProducts.value.slice(start, start + itemsPerPage.value);
});

// Reset page counts when filters, view limits, or tabs change
watch([selectedCategory, itemsPerPage, currentTab], () => {
  productPage.value = 1;
  articlePage.value = 1;
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
</script>

<template>
  <div class="min-h-screen bg-background text-foreground p-6 sm:p-10 relative">
    
    <header class="flex justify-between items-center max-w-5xl mx-auto mb-12 pb-6 border-b border-border">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p class="text-sm text-muted-foreground mt-1">Manage and upload your web components.</p>
      </div>
      <div class="w-10 h-10 flex items-center justify-center">
        <ToggleTheme />
      </div>
    </header>

    <main class="max-w-5xl mx-auto space-y-12">
      
      <!-- Quick Actions -->
      <section class="space-y-4">
        <h2 class="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Quick Actions</h2>
        <div class="flex flex-wrap gap-4">
          <button 
            @click="activeForm = 'article'"
            class="flex items-center gap-3 px-5 py-3.5 bg-secondary/50 hover:bg-secondary/80 active:scale-[0.98] border border-border rounded-xl font-medium transition-all shadow-sm"
          >
            <FileText class="size-5 text-primary" />
            <span>Upload New Article</span>
            <PlusCircle class="size-4 text-muted-foreground ml-2" />
          </button>

          <button 
            @click="activeForm = 'product'"
            class="flex items-center gap-3 px-5 py-3.5 bg-secondary/50 hover:bg-secondary/80 active:scale-[0.98] border border-border rounded-xl font-medium transition-all shadow-sm"
          >
            <ShoppingBag class="size-5 text-emerald-500" />
            <span>Upload New Product</span>
            <PlusCircle class="size-4 text-muted-foreground ml-2" />
          </button>
        </div>
      </section>

      <!-- Control Bar: Toggles, Filters, and Row Limits -->
      <section class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-4 border-t border-border/40">
        <div class="flex flex-wrap items-center gap-6">
          <div class="space-y-2">
            <h2 class="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Select Inventory View</h2>
            <div class="flex p-1 bg-secondary/40 border border-border/60 rounded-xl w-fit">
              <button 
                @click="currentTab = 'articles'"
                :class="currentTab === 'articles' ? 'bg-background text-primary shadow-sm font-semibold' : 'text-muted-foreground hover:text-foreground'"
                class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all"
              >
                <FileText class="size-4" />
                <span>Articles ({{ filteredArticles.length }})</span>
              </button>
              <button 
                @click="currentTab = 'products'"
                :class="currentTab === 'products' ? 'bg-background text-emerald-500 shadow-sm font-semibold' : 'text-muted-foreground hover:text-foreground'"
                class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all"
              >
                <ShoppingBag class="size-4" />
                <span>Products ({{ filteredProducts.length }})</span>
              </button>
            </div>
          </div>

          <!-- Page Size Data Limiter Dropdown -->
          <div class="space-y-2">
            <h2 class="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Rows Per Page</h2>
            <div class="flex items-center gap-2 bg-secondary/40 border border-border/60 rounded-xl px-3 py-1.5 h-[46px] w-fit">
              <ListOrdered class="size-4 text-muted-foreground" />
              <select v-model="itemsPerPage" class="bg-transparent text-sm font-medium outline-none pr-2 cursor-pointer border-none focus:ring-0">
                <option v-for="option in perPageOptions" :key="option" :value="option" class="bg-card text-foreground">
                  Show {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Shared Filter Selection Cluster -->
        <div class="space-y-2">
          <h2 class="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Filter Content by Category
          </h2>
          
          <div class="flex flex-wrap gap-2 bg-secondary/10 p-1.5 border border-border/40 rounded-xl w-fit">
            <span 
              @click="selectedCategory = 'All'"
              :class="[
                selectedCategory === 'All' 
                  ? (currentTab === 'articles' ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'bg-emerald-500 text-white font-semibold shadow-sm') 
                  : 'bg-secondary/60 text-muted-foreground border border-border/40 hover:text-foreground'
              ]"
              class="px-4 py-1.5 text-xs rounded-lg cursor-pointer select-none transition-all font-medium"
            >
              All
            </span>
            <span 
              v-for="cat in categories" 
              :key="cat" 
              @click="selectedCategory = cat"
              :class="[
                selectedCategory === cat 
                  ? (currentTab === 'articles' ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'bg-emerald-500 text-white font-semibold shadow-sm') 
                  : 'bg-secondary/60 text-muted-foreground border border-border/40 hover:border-muted-foreground/40 hover:text-foreground'
              ]"
              class="px-4 py-1.5 text-xs font-medium rounded-lg cursor-pointer select-none transition-all"
            >
              {{ cat }}
            </span>
          </div>
        </div>
      </section>

      <!-- Main Datatable Interface -->
      <div class="space-y-12 transition-all duration-300">
        
        <!-- SIDE 1: ARTICLES INVENTORY -->
        <section v-if="currentTab === 'articles'" class="space-y-4 animate-in fade-in-50 duration-200">
          <div v-if="filteredArticles.length === 0" class="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-2xl text-center bg-secondary/5">
            <Folder class="size-8 text-muted-foreground/40 mb-2" />
            <p class="text-xs text-muted-foreground">No articles found matching this category criteria.</p>
          </div>

          <div v-else class="space-y-4">
            <div class="w-full border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-secondary/40 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider select-none">
                      <th class="p-4 pl-6 w-[80px]">Preview</th>
                      <th class="p-4">Article Title & Details</th>
                      <th class="p-4 w-[180px]">Category</th>
                      <th class="p-4 w-[160px]">Date Published</th>
                      <th class="p-4 pr-6 w-[100px] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border/60 text-sm">
                    <tr v-for="article in paginatedArticles" :key="'art-' + article.id" class="hover:bg-secondary/20 transition-colors group">
                      <td class="p-4 pl-6">
                        <div class="w-12 h-8 rounded-lg bg-secondary/60 border border-border overflow-hidden relative flex items-center justify-center">
                          <img v-if="article.image_url" :src="article.image_url" :alt="article.title" class="w-full h-full object-cover" />
                          <Image v-else class="size-4 text-muted-foreground/40" />
                        </div>
                      </td>
                      <td class="p-4 max-w-xs md:max-w-md">
                        <div class="flex flex-col">
                          <span class="font-semibold text-foreground tracking-tight truncate">{{ article.title }}</span>
                          <span class="text-xs text-muted-foreground line-clamp-1 mt-0.5">{{ article.description }}</span>
                        </div>
                      </td>
                      <td class="p-4 whitespace-nowrap">
                        <span class="bg-primary/10 text-primary border border-primary/20 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md">
                          {{ article.category }}
                        </span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-muted-foreground text-xs">
                        <div class="flex items-center gap-1.5">
                          <Calendar class="size-3.5 text-muted-foreground/60" />
                          <span>{{ formatDate(article.created_at) }}</span>
                        </div>
                      </td>
                      <td class="p-4 pr-6 whitespace-nowrap text-right">
                        <div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                          <button class="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Edit Article">
                            <FileEdit class="size-4" />
                          </button>
                          <button class="p-1.5 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors" title="Delete Article">
                            <Trash2 class="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Article Pagination UI Elements -->
            <div class="flex items-center justify-between px-2 py-1">
              <p class="text-xs text-muted-foreground">
                Showing Page <span class="font-medium text-foreground">{{ articlePage }}</span> of <span class="font-medium text-foreground">{{ totalArticlePages }}</span>
              </p>
              <div class="flex gap-2">
                <button 
                  @click="articlePage = Math.max(articlePage - 1, 1)" 
                  :disabled="articlePage === 1"
                  class="p-2 border border-border rounded-xl bg-card hover:bg-secondary/80 disabled:opacity-40 disabled:hover:bg-card transition-all"
                >
                  <ChevronLeft class="size-4" />
                </button>
                <button 
                  @click="articlePage = Math.min(articlePage + 1, totalArticlePages)" 
                  :disabled="articlePage === totalArticlePages"
                  class="p-2 border border-border rounded-xl bg-card hover:bg-secondary/80 disabled:opacity-40 disabled:hover:bg-card transition-all"
                >
                  <ChevronRight class="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- SIDE 2: PRODUCTS INVENTORY -->
        <section v-if="currentTab === 'products'" class="space-y-4 animate-in fade-in-50 duration-200">
          <div v-if="filteredProducts.length === 0" class="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-2xl text-center bg-secondary/5">
            <Folder class="size-8 text-muted-foreground/40 mb-2" />
            <p class="text-xs text-muted-foreground">No products found matching this category criteria.</p>
          </div>

          <div v-else class="space-y-4">
            <div class="w-full border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-secondary/40 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider select-none">
                      <th class="p-4 pl-6 w-[80px]">Preview</th>
                      <th class="p-4">Product Name & Specifications</th>
                      <th class="p-4 w-[180px]">Category</th>
                      <th class="p-4 w-[160px]">Date Listed</th>
                      <th class="p-4 pr-6 w-[100px] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border/60 text-sm">
                    <tr v-for="product in paginatedProducts" :key="'prod-' + product.id" class="hover:bg-secondary/20 transition-colors group">
                      <td class="p-4 pl-6">
                        <div class="w-12 h-8 rounded-lg bg-secondary/60 border border-border overflow-hidden relative flex items-center justify-center">
                          <img v-if="product.image_url" :src="product.image_url" :alt="product.title" class="w-full h-full object-cover" />
                          <Image v-else class="size-4 text-muted-foreground/40" />
                        </div>
                      </td>
                      <td class="p-4 max-w-xs md:max-w-md">
                        <div class="flex flex-col">
                          <span class="font-semibold text-foreground tracking-tight truncate">{{ product.title }}</span>
                          <span class="text-xs text-muted-foreground line-clamp-1 mt-0.5">{{ product.description }}</span>
                        </div>
                      </td>
                      <td class="p-4 whitespace-nowrap">
                        <span class="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md">
                          {{ product.category }}
                        </span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-muted-foreground text-xs">
                        <div class="flex items-center gap-1.5">
                          <Calendar class="size-3.5 text-muted-foreground/60" />
                          <span>{{ formatDate(product.created_at) }}</span>
                        </div>
                      </td>
                      <td class="p-4 pr-6 whitespace-nowrap text-right">
                        <div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                          <button class="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Edit Product">
                            <FileEdit class="size-4" />
                          </button>
                          <button class="p-1.5 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors" title="Delete Product">
                            <Trash2 class="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Product Pagination UI Elements -->
            <div class="flex items-center justify-between px-2 py-1">
              <p class="text-xs text-muted-foreground">
                Showing Page <span class="font-medium text-foreground">{{ productPage }}</span> of <span class="font-medium text-foreground">{{ totalProductPages }}</span>
              </p>
              <div class="flex gap-2">
                <button 
                  @click="productPage = Math.max(productPage - 1, 1)" 
                  :disabled="productPage === 1"
                  class="p-2 border border-border rounded-xl bg-card hover:bg-secondary/80 disabled:opacity-40 disabled:hover:bg-card transition-all"
                >
                  <ChevronLeft class="size-4" />
                </button>
                <button 
                  @click="productPage = Math.min(productPage + 1, totalProductPages)" 
                  :disabled="productPage === totalProductPages"
                  class="p-2 border border-border rounded-xl bg-card hover:bg-secondary/80 disabled:opacity-40 disabled:hover:bg-card transition-all"
                >
                  <ChevronRight class="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- Modals -->
    <div v-if="activeForm" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-card border border-border rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div class="flex justify-between items-center p-6 border-b border-border">
          <h3 class="text-xl font-bold">
            <span v-if="activeForm === 'article'" class="flex items-center gap-2">
              <FileText class="size-5 text-primary" /> Upload Article
            </span>
            <span v-else class="flex items-center gap-2">
              <ShoppingBag class="size-5 text-emerald-500" /> Upload Product
            </span>
          </h3>
          <button @click="activeForm = null" class="text-muted-foreground hover:text-foreground p-1 transition-colors">
            <X class="size-5" />
          </button>
        </div>

        <!-- Article Form Modal -->
        <form v-if="activeForm === 'article'" @submit.prevent="submitArticle" class="p-6 space-y-5">
          <div v-if="articleForm.errors.image || articleForm.errors.title || articleForm.errors.description || articleForm.errors.category" class="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs rounded-xl">
            {{ articleForm.errors.image || articleForm.errors.title || articleForm.errors.description || articleForm.errors.category }}
          </div>

          <div class="space-y-2">
            <label for="art-title" class="text-sm font-medium text-foreground/80">Title</label>
            <input id="art-title" v-model="articleForm.title" type="text" required placeholder="Enter article header title..." class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
          </div>

          <div class="space-y-2">
            <label for="art-desc" class="text-sm font-medium text-foreground/80">Description</label>
            <textarea id="art-desc" v-model="articleForm.description" rows="4" required placeholder="Write body paragraph details..." class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"></textarea>
          </div>

          <div class="space-y-2">
            <label for="art-cat" class="text-sm font-medium text-foreground/80">Category</label>
            <select id="art-cat" v-model="articleForm.category" class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm cursor-pointer">
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-foreground/80">Upload Image</label>
            <label class="flex flex-col items-center justify-center border border-dashed border-border hover:border-primary rounded-xl p-6 bg-secondary/10 cursor-pointer group transition-all">
              <Image class="size-7 text-muted-foreground/60 group-hover:text-primary transition-colors mb-2" />
              <span class="text-xs text-muted-foreground group-hover:text-foreground text-center line-clamp-1 max-w-[280px] transition-colors font-medium">
                {{ articleForm.image ? articleForm.image.name : "Click to select thumbnail image" }}
              </span>
              <input type="file" accept="image/*" required @change="handleArticleFile" class="hidden" />
            </label>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button type="button" @click="activeForm = null" class="px-4 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors">Cancel</button>
            <button type="submit" :disabled="articleForm.processing" class="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-60">
              <Loader2 v-if="articleForm.processing" class="size-4 animate-spin" />
              <span>{{ articleForm.processing ? 'Uploading...' : 'Publish Article' }}</span>
            </button>
          </div>
        </form>

        <!-- Product Form Modal -->
        <form v-else-if="activeForm === 'product'" @submit.prevent="submitProduct" class="p-6 space-y-5">
          <div v-if="productForm.errors.image || productForm.errors.title || productForm.errors.description || productForm.errors.category" class="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs rounded-xl">
            {{ productForm.errors.image || productForm.errors.title || productForm.errors.description || productForm.errors.category }}
          </div>

          <div class="space-y-2">
            <label for="prod-title" class="text-sm font-medium text-foreground/80">Product Title</label>
            <input id="prod-title" v-model="productForm.title" type="text" required placeholder="e.g., Infinite LMS Cloud" class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
          </div>

          <div class="space-y-2">
            <label for="prod-desc" class="text-sm font-medium text-foreground/80">Description</label>
            <textarea id="prod-desc" v-model="productForm.description" rows="3" required placeholder="Describe what makes this instance module unique..." class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"></textarea>
          </div>

          <div class="space-y-2">
            <label for="prod-cat" class="text-sm font-medium text-foreground/80">Category</label>
            <select id="prod-cat" v-model="productForm.category" class="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm cursor-pointer">
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-foreground/80">Upload Image</label>
            <label class="flex flex-col items-center justify-center border border-dashed border-border hover:border-primary rounded-xl p-6 bg-secondary/10 cursor-pointer group transition-all">
              <Image class="size-7 text-muted-foreground/60 group-hover:text-primary transition-colors mb-2" />
              <span class="text-xs text-muted-foreground group-hover:text-foreground text-center line-clamp-1 max-w-[280px] transition-colors font-medium">
                {{ productForm.image ? productForm.image.name : "Click to select product graphic" }}
              </span>
              <input type="file" accept="image/*" required @change="handleProductFile" class="hidden" />
            </label>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button type="button" @click="activeForm = null" class="px-4 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors">Cancel</button>
            <button type="submit" :disabled="productForm.processing" class="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-60">
              <Loader2 v-if="productForm.processing" class="size-4 animate-spin" />
              <span>{{ productForm.processing ? 'Saving...' : 'Create Product' }}</span>
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>