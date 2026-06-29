<script setup lang="ts">
import { ref, computed } from "vue";
import { Card, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Cpu, 
  Paintbrush, 
  Network, 
  Video, 
  HelpCircle, 
  BrainCircuit, 
  GraduationCap,
  ArrowRight,
  Search,
  ChevronDown
} from "lucide-vue-next";

interface ServiceProps {
  id: number;
  icon: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

// State Kontrol Interaksi Filter
const searchQuery = ref("");
const selectedCategory = ref("All");
const sortBy = ref("Default");
const isSortDropdownOpen = ref(false);

// Data Katalog Layanan Bisnis Komplit (Ekspansi dari file Services.vue)
const serviceList = ref<ServiceProps[]>([
  {
    id: 1,
    icon: "web",
    title: "Pengembangan Website & Web Apps",
    category: "Software Development",
    description: "Pembuatan landing page premium, website company profile, hingga web application kustom berbasis Laravel dan Vue.js yang cepat, aman, dan SEO-friendly.",
    features: ["Arsitektur SPA (Single Page Application)", "Optimasi Kecepatan & Core Web Vitals", "Integrasi Database & Restful API"]
  },
  {
    id: 2,
    icon: "android",
    title: "Pengembangan Aplikasi Mobile (Android)",
    category: "Software Development",
    description: "Solusi pembuatan aplikasi android native maupun lintas platform dengan performa mulus untuk mendukung mobilitas operasional bisnis Anda.",
    features: ["UI/UX Mobile Responsif", "Push Notification System", "Offline Mode Capabilities"]
  },
  {
    id: 3,
    icon: "desktop",
    title: "Aplikasi Komputer (Desktop Software)",
    category: "Software Development",
    description: "Rancang bangun perangkat lunak berbasis desktop untuk kebutuhan internal manajemen perusahaan, sistem POS (Point of Sales), hingga automasi lokal.",
    features: ["Cross-Platform Deployment", "Sistem Manajemen Keamanan Lokal", "Sinkronisasi Cloud Hybrid"]
  },
  {
    id: 4,
    icon: "iot",
    title: "Internet of Things (IoT) & Embedded System",
    category: "Hardware & Automation",
    description: "Integrasi perangkat keras pintar, sensor, dan mikrokontroler untuk automasi industri, monitoring cerdas, atau sistem kendali jarak jauh.",
    features: ["Real-time Data Telemetry", "Custom Microcontroller Integration", "Sistem Dasbor Kontrol IoT"]
  },
  {
    id: 5,
    icon: "design",
    title: "Desain Digital & UI/UX Research",
    category: "Creative & Design",
    description: "Layanan perancangan antarmuka digital (UI/UX) untuk aplikasi web dan mobile yang modern, ergonomis, berpusat pada kenyamanan pengguna (user-centered).",
    features: ["High-Fidelity Wireframing & Prototyping", "User Journey Mapping", "Design System & Asset Handover"]
  },
  {
    id: 6,
    icon: "network",
    title: "Rancang Bangun Jaringan & Infrastruktur",
    category: "Infrastructure",
    description: "Implementasi topologi jaringan komputer aman, manajemen router/switch, konfigurasi VPN, hingga arsitektur Zero Trust menggunakan Cloudflare & Tailscale.",
    features: ["Zero Trust Networking Setup", "Network Monitoring & Alerting", "Firewall & Security Hardening"]
  },
  {
    id: 7,
    icon: "ai",
    title: "Implementasi Artificial Intelligence & NMT",
    category: "Advanced Tech",
    description: "Integrasi modul kecerdasan buatan, pemrosesan bahasa alami (NLP), hingga pengembangan model Neural Machine Translation khusus untuk preservasi data teks.",
    features: ["Model Fine-Tuning & Training", "Custom Dataset Text Corpus Pipeline", "REST API Integration Engine"]
  },
  {
    id: 8,
    icon: "lms",
    title: "Sistem LMS Kampus dan Sekolah",
    category: "Advanced Tech",
    description: "Penyediaan infrastruktur Learning Management System (LMS) siap pakai untuk digitalisasi materi edukasi, kuis interaktif, dan rekapitulasi nilai.",
    features: ["Multi-Role (Dosen, Mahasiswa, Admin)", "E-Report Generation", "Sleek Portal Interface"]
  }
]);

// Pemetaan Ikon Komponen Dinamis Sesuai Berkas Services.vue Kamu
const iconMap: Record<string, any> = {
  web: Globe,
  android: Smartphone,
  desktop: Monitor,
  iot: Cpu,
  design: Paintbrush,
  network: Network,
  content: Video,
  consultant: HelpCircle,
  ai: BrainCircuit,
  lms: GraduationCap
};

// Pengambilan otomatis kategori unik dari data layanan
const categories = computed(() => {
  return ["All", ...new Set(serviceList.value.map(s => s.category))];
});

// Pemrosesan Filter Live Search, Pil Kategori, dan Sorting
const filteredServices = computed(() => {
  let result = [...serviceList.value];

  // 1. Filter Kategori Pil
  if (selectedCategory.value !== "All") {
    result = result.filter(s => s.category === selectedCategory.value);
  }

  // 2. Filter Live Search Input
  if (searchQuery.value.trim() !== "") {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query)
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
    id="service-list"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-border/40">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Layanan Kami</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Solusi Teknologi Komprehensif
        </h2>
      </div>
      
      <div class="relative w-full md:w-80 self-start md:self-auto">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari layanan bisnis..." 
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

    <div class="space-y-4 w-full">
      <div
        v-for="(service, index) in filteredServices"
        :key="service.title"
        class="group/service w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-xl block text-left"
      >
        <Card
          class="bg-card dark:bg-card/40 hover:bg-muted/30 dark:hover:bg-card/70 border border-border/60 hover:border-primary/30 p-5 sm:p-6 shadow-sm transition-all duration-300 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center"
        >
          <div class="lg:col-span-4 flex items-center gap-4">
            <span class="text-xs font-mono font-bold text-muted-foreground/30 group-hover/service:text-primary/70 transition-colors w-6">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="p-2.5 bg-primary/5 rounded-xl group-hover/service:bg-primary group-hover/service:text-primary-foreground transition-colors duration-300 text-primary shrink-0">
              <component
                class="size-5"
                :is="iconMap[service.icon]"
              />
            </div>

            <div class="space-y-1">
              <span class="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/40 block w-max">
                {{ service.category }}
              </span>
              <CardTitle class="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover/service:text-primary transition-colors duration-200">
                {{ service.title }}
              </CardTitle>
            </div>
          </div>

          <div class="lg:col-span-5 text-sm text-muted-foreground leading-relaxed lg:border-l lg:border-border/30 lg:pl-6">
            {{ service.description }}
          </div>

          <div class="lg:col-span-3 flex items-center justify-between gap-4 lg:border-l lg:border-border/30 lg:pl-6">
            <div class="text-[11px] text-muted-foreground/80 space-y-1">
              <div 
                v-for="feat in service.features.slice(0, 2)" 
                :key="feat" 
                class="flex items-center gap-1.5 truncate"
              >
                <div class="size-1 rounded-full bg-primary/60"></div>
                <span class="truncate">{{ feat }}</span>
              </div>
            </div>

            <div class="p-2 bg-muted/60 dark:bg-card border border-border/40 rounded-full text-muted-foreground group-hover/service:text-primary group-hover/service:translate-x-1 transition-all duration-300 shrink-0">
              <ArrowRight class="size-4" />
            </div>
          </div>
        </Card>
      </div>
    </div>

    <div v-if="filteredServices.length === 0" class="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border/60 mt-6">
      <p class="text-sm text-muted-foreground">Tidak ada bidang layanan yang cocok dengan kriteria pencarian Anda.</p>
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