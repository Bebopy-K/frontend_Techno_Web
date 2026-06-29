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
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Membangun Kepercayaan Brand",
    description:
      "Luncurkan aplikasi yang andal dan sangat aman. Proses pengembangan kami yang mendetail serta tim yang tepercaya memastikan kehadiran digital Anda mencerminkan profesionalisme dan keamanan tinggi sejak hari pertama.",
  },
  {
    icon: "lineChart",
    title: "Menghasilkan Lebih Banyak Prospek",
    description:
      "Dengan layanan serba ada (all-in-one) kami yang komprehensif, kami tidak hanya menulis kode—kami membangun solusi web yang cepat dan teroptimasi penuh untuk memikat audiens target Anda dan mendongkrak trafik bisnis Anda.",
  },
  {
    icon: "wallet",
    title: "Konversi yang Lebih Tinggi",
    description:
      "Ubah pengunjung biasa menjadi pelanggan setia. Perpaduan antara biaya pengembangan yang ramah di kantong dan penyempurnaan yang berorientasi pada konsumen menjamin pengalaman UI/UX yang mulus demi menghasilkan ROI maksimal.",
  },
  {
    icon: "sparkle",
    title: "Uji Ide Pemasaran secara Cepat",
    description:
      "Bergerak cepat dan lampaui kompetitor Anda. Model startup kami yang agil dan bebas birokrasi memungkinkan Anda meluncurkan MVP dengan cepat, mengeksplorasi fitur-fitur baru, dan beradaptasi tanpa hambatan administratif.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
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
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Keuntungan</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Keuntungan memilih kami
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Akselerasi pertumbuhan bisnis Anda dengan keuntungan strategis yang dirancang untuk efisiensi tinggi dan hasil maksimal.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      <Card
        v-for="({ icon, title, description }, index) in benefitList"
        :key="title"
        class="bg-muted/40 dark:bg-card/50 hover:bg-background dark:hover:bg-background transition-all duration-200 group/number border border-border/60 hover:border-primary/30 rounded-xl shadow-sm"
      >
        <CardHeader class="pt-6 pb-2">
          <div class="flex justify-between items-start">
            <div class="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/number:bg-primary group-hover/number:text-primary-foreground transition-all duration-200 mb-4">
              <component
                class="size-5"
                :is="iconMap[icon]"
              />
            </div>
          </div>

          <CardTitle class="text-lg font-bold text-foreground group-hover/number:text-primary transition-colors duration-200 text-left">
            {{ title }}
          </CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-left text-sm leading-relaxed pb-6">
          {{ description }}
        </CardContent>
      </Card>
    </div>
  </section>
</template>
