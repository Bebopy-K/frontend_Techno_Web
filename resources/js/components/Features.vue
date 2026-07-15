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

const featureList: FeaturesProps[] = [
  {
    icon: "coins", 
    title: "Harga terjangkau",
    description:
      "Kami menawarkan projek yang tidak banyak menghabiskan uang Anda dalam pembuatan projek",
  },
  {
    icon: "messageCircle", 
    title: "Pro konsumer",
    description:
      "Kami selalu mendengar ulasan-ulasan Anda jika semisalnya ada kekurangan yang dapat dipertimbangkan",
  },
  {
    icon: "clock", 
    title: "Pesan kapan saja",
    description:
      "Kami melayani pelanggan 24/7 untuk mengatasi masalah mereka",
  },
  {
    icon: "boxes", 
    title: "All in one servis",
    description:
      "Kami memiliki banyak servis yang dapat menyelesaikan permasalahan Anda",
  },
  {
    icon: "shieldCheck", 
    title: "Tim Developer Terpercaya",
    description:
      "Proyek Anda ditangani langsung oleh tim pengembang profesional yang kompeten, transparan, dan berdedikasi penuh pada visi Anda.",
  },
  {
    icon: "sparkles", 
    title: "Detail & Presisi Tinggi",
    description:
      "Kami mengutamakan kualitas di atas kecepatan instan. Setiap baris kode dan elemen desain kami kerjakan secara teliti demi hasil akhir yang matang dan minim celah.",
  },
  {
    icon: "zap",
    title: "Agil & Bebas Birokrasi",
    description:
      "Sebagai startup yang adaptif, kami bekerja tanpa sekat birokrasi yang berbelit. Pengambilan keputusan dan eksekusi perubahan dapat dilakukan dengan jauh lebih cepat.",
  }
];

const iconMap: Record<
  string,
  | typeof Coins
  | typeof MessageCircle
  | typeof Clock
  | typeof Boxes
  | typeof ShieldCheck
  | typeof Sparkles
  | typeof Zap
> = {
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
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12 ">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">tawaran</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Mengapa pilih kami?
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Kelebihan dan nilai tambah ekosistem kami yang dirancang khusus untuk memastikan efisiensi dan performa terbaik bisnis Anda.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border border-border/40 shadow-sm hover:border-primary/20 transition-all duration-200 rounded-xl group/feature">
          <CardHeader class="flex flex-col justify-start items-start pt-6 pb-2">
            <div
              class="bg-primary/10 p-2.5 rounded-xl text-primary group-hover/feature:bg-primary group-hover/feature:text-primary-foreground transition-all duration-200 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-5"
              />
            </div>

            <CardTitle class="text-lg font-bold group-hover/feature:text-primary transition-colors duration-200">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-left text-sm leading-relaxed pb-6">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>