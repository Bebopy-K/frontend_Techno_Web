<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  featured?: boolean; // Menentukan kartu mana yang mengambil space lebih besar
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Membangun Kredibilitas & Kepercayaan Brand",
    description:
      "Kami merancang arsitektur aplikasi dengan standar enkripsi tinggi dan reliabilitas enterprise. Proses pengembangan yang transparan memastikan aset digital Anda mencerminkan profesionalisme mutakhir serta jaminan keamanan tingkat tinggi sejak hari pertama rilis.",
    featured: true, 
  },
  {
    icon: "lineChart",
    title: "Skalabilitas Prospek & Akuisisi Market",
    description:
      "Kami tidak sekadar menulis kode baris demi baris. Melalui optimalisasi performa performant web, indexing struktur SEO, serta kecepatan load data yang ekstrem, ekosistem digital kami dikonstruksi secara taktis untuk mendongkrak konversi organik bisnis Anda.",
    featured: false,
  },
  {
    icon: "wallet",
    title: "Optimalisasi Efisiensi Biaya & ROI Maksimal",
    description:
      "Ubah impresi kunjungan kasual menjadi retensi klien setia. Melalui integrasi rancangan UI/UX yang intuitif serta kalkulasi arsitektur cloud server yang hemat resource, kami mengamankan fungsionalitas bisnis terbaik demi melipatgandakan Return on Investment Anda.",
    featured: false,
  },
  {
    icon: "sparkle",
    title: "Time-to-Market Agil Tanpa Hambatan",
    description:
      "Eksekusi ide pemasaran Anda secara instan sebelum didahului oleh kompetitor. Menggunakan siklus pengembangan agile berpola modern, kami memangkas kompleksitas administratif reguler untuk membantu Anda meluncurkan MVP (Minimum Viable Product) secara adaptif dan presisi.",
    featured: true,
  },
];

const iconMap: Record<string, any> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    <!-- Header Strategi Bisnis -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-16 border-b border-border/60">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Dampak Strategis
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Keuntungan Akselerasi Bersama Kami
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
        Amankan keunggulan kompetitif industri lewat integrasi sistem yang dirancang khusus demi efisiensi operasional mutakhir.
      </p>
    </div>

    <!-- Premium Bento Grid Architecture Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
      <Card
        v-for="({ icon, title, description, featured }, index) in benefitList"
        :key="title"
        :class="[
          'bg-card/40 dark:bg-card/20 backdrop-blur-sm hover:bg-card dark:hover:bg-muted/10 transition-all duration-300 group/benefit border border-border/40 hover:border-primary/30 rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden relative',
          featured ? 'md:col-span-2' : 'md:col-span-1'
        ]"
      >
        <!-- Subtle Structural Grid Numbering Background -->
        <span class="absolute top-4 right-6 text-3xl font-mono font-extrabold text-muted-foreground/5 dark:text-muted-foreground/[0.03] group-hover/benefit:text-primary/10 select-none pointer-events-none transition-colors duration-300">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <div>
          <CardHeader class="pt-6 pb-3 px-6 text-left">
            <!-- Icon Wrapper Container -->
            <div class="p-2.5 bg-primary/[0.06] border border-primary/10 rounded-xl text-primary group-hover/benefit:bg-primary group-hover/benefit:text-primary-foreground transition-all duration-300 mb-4 w-fit">
              <component
                class="size-5 transition-transform duration-300 group-hover/benefit:scale-105"
                :is="iconMap[icon]"
              />
            </div>

            <!-- Title Content -->
            <CardTitle class="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover/benefit:text-primary transition-colors duration-200">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <!-- Description Text Layout -->
          <CardContent :class="[
            'text-muted-foreground text-left text-sm leading-relaxed pb-6 px-6',
            featured ? 'max-w-3xl' : 'max-w-full'
          ]">
            {{ description }}
          </CardContent>
        </div>
      </Card>
    </div>
  </section>
</template>

<style scoped>
/* Bento layouts are purely dynamic handled via tailwind utility engine layers */
</style>
