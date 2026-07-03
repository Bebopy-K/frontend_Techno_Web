<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Coins,
  MessageCircle,
  Clock,
  Boxes,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

// Transformasi copywriting ke tingkat standar B2B global
const featureList: FeaturesProps[] = [
  {
    icon: "shieldCheck",
    title: "Tim Pengembang Profesional",
    description:
      "Seluruh proyek Anda ditangani langsung oleh engineer berkompetensi tinggi yang transparan, terorganisir, dan berdedikasi penuh pada visi bisnis Anda.",
  },
  {
    icon: "sparkles",
    title: "Presisi & Kualitas Tinggi",
    description:
      "Kami mengutamakan keandalan arsitektur di atas kecepatan instan. Setiap baris kode dikerjakan secara teliti demi hasil akhir yang matang dan minim celah.",
  },
  {
    icon: "zap",
    title: "Metodologi Agile & Adaptif",
    description:
      "Sebagai mitra teknologi yang tangkas, kami bekerja tanpa sekat birokrasi yang rumit. Proses iterasi, pengambilan keputusan, dan eksekusi berjalan jauh lebih cepat.",
  },
  {
    icon: "coins",
    title: "Efisiensi Investasi Teknologi",
    description:
      "Kami menawarkan struktur anggaran yang terukur dan kompetitif, memastikan modal yang Anda investasikan berbanding lurus dengan pertumbuhan bisnis.",
  },
  {
    icon: "messageCircle",
    title: "Pendekatan Konsultatif",
    description:
      "Kami memosisikan diri sebagai partner diskusi. Setiap ulasan, kebutuhan berkala, dan masukan dari sisi operasional Anda akan dianalisis secara mendalam.",
  },
  {
    icon: "clock",
    title: "Dukungan Teknis Siaga",
    description:
      "Infrastruktur bisnis tidak boleh berhenti. Kami menyediakan saluran komunikasi responsif untuk memitigasi kendala sistem kapan saja diperlukan.",
  },
  {
    icon: "boxes",
    title: "Solusi Ekosistem All-in-One",
    description:
      "Mulai dari rancangan arsitektur, integrasi sistem, hingga optimasi cloud. Seluruh spektrum kebutuhan IT Anda dapat diselesaikan di bawah satu pintu.",
  }
];

const iconMap: Record<string, any> = {
  coins: Coins,
  messageCircle: MessageCircle,
  clock: Clock,
  boxes: Boxes,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  zap: Zap,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    <!-- Background subtle radial ambient decor -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

    <!-- Corporate Header Strategy -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-16 border-b border-border/60 relative z-10">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Nilai Tambah Kami
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Mengapa Memilih Techno Celebes?
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
        Komitmen kami adalah menghadirkan standar rekayasa perangkat lunak terbaik demi menjamin keberlanjutan digitalisasi korporasi Anda.
      </p>
    </div>

    <!-- Smart Layout Grid Grid Matrix (7 Items Smart Handling) -->
    <!-- Menggunakan md:grid-cols-2 dan lg:grid-cols-3, namun item pertama/terpenting bisa mengambil space unik jika diinginkan, atau disusun secara rapat -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
      <div
        v-for="(feature, index) in featureList"
        :key="feature.title"
        :class="[
          'flex',
          // Trik opsional: Jika item ke-7 (terakhir) sendirian di baris baru pada layar desktop, buat dia memanjang secara elegan.
          index === 6 ? 'lg:col-span-3 lg:max-w-md lg:mx-auto lg:w-full' : ''
        ]"
      >
        <Card class="w-full bg-card/60 dark:bg-card/20 backdrop-blur-md border border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-xl hover:shadow-primary/[0.02] hover:border-primary/30 transition-all duration-300 rounded-2xl group/feature flex flex-col justify-between">
          <div>
            <CardHeader class="flex flex-col justify-start items-start pt-6 pb-3 px-6">
              <div
                class="bg-primary/[0.06] p-3 rounded-xl text-primary group-hover/feature:bg-primary group-hover/feature:text-primary-foreground border border-primary/10 transition-all duration-300 mb-4"
              >
                <component
                  :is="iconMap[feature.icon]"
                  class="size-5 transition-transform duration-300 group-hover/feature:scale-105"
                />
              </div>

              <!-- Feature Title -->
              <CardTitle class="text-lg font-bold tracking-tight text-foreground group-hover/feature:text-primary transition-colors duration-200">
                {{ feature.title }}
              </CardTitle>
            </CardHeader>

            <!-- Feature Description text -->
            <CardContent class="text-muted-foreground text-left text-sm leading-relaxed pb-6 px-6">
              {{ feature.description }}
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Layouting utility is fully handled with high-end tailwind classes */
</style>
