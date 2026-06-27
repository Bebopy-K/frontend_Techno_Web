<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Users,
  Check 
} from "lucide-vue-next";

interface ProductProps {
  icon: string;
  image: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

const productList: ProductProps[] = [
  {
    icon: "govtech",
    image: '@/components/public/proudct1.jpeg', 
    title: "Sistem Notifikasi Pajak Daerah (GovTech)",
    category: "LMS Kampus dan Sekolah",
    description: "Modul backend siap pakai untuk automasi blast pengingat pajak kendaraan terintegrasi API gateway.",
    features: ["Integrasi WhatsApp/SMS API", "Dasbor Analitik Real-time", "Multi-role Access"]
  }, 
  {
    icon: "govtech",
    image: '../../public/product2.svg', 
    title: "Sistem Notifikasi Pajak Daerah (GovTech)",
    category: "LMS Kampus dan Sekolah",
    description: "Modul backend siap pakai untuk automasi blast pengingat pajak kendaraan terintegrasi API gateway.",
    features: ["Integrasi WhatsApp/SMS API", "Dasbor Analitik Real-time", "Multi-role Access"]
  },
];

const iconMap: Record<string, any> = {
  govtech: Terminal,
  nmt: Cpu,
  infrastructure: HardDrive,
  rbac: ShieldCheck,
  edutech: Users,
};
</script>

<template>
  <section
    id="products"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Produk</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Hasil produk kami
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Solusi teknologi end-to-end terintegrasi untuk mempercepat transformasi digital bisnis dan institusi Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
      <div
        v-for="({ icon, image, title, category, description, features }) in productList"
        :key="title"
        class="flex"
      >
        <Card
          class="bg-card dark:bg-card/50 transition-all duration-200 group/product w-full border border-border/60 hover:border-primary/30 flex flex-col justify-between shadow-sm overflow-hidden"
        >
          <div>
            <div class="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[32/9] overflow-hidden bg-muted">
              <img 
                :src="image" 
                :alt="title" 
                class="w-full h-full object-cover object-center group-hover/product:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>

            <CardHeader class="pt-6 pb-1">
              <div class="flex justify-between items-center mb-4">
                <div class="p-2.5 bg-primary/10 rounded-xl group-hover/product:bg-primary group-hover/product:text-primary-foreground transition-colors duration-200 text-primary">
                  <component
                    class="size-5"
                    :is="iconMap[icon]"
                  />
                </div>
                <span class="text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                  {{ category }}
                </span>
              </div>
              
              <CardTitle class="text-xl font-bold text-foreground group-hover/product:text-primary transition-colors duration-200 min-h-[56px] flex items-center">
                {{ title }}
              </CardTitle>
            </CardHeader>

            <CardContent class="space-y-6">
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ description }}
              </p>

              <div class="space-y-2.5 pt-2">
                <p class="text-xs font-semibold uppercase text-foreground/70 tracking-wider">Key Features:</p>
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
            <Button class="w-full font-semibold shadow-sm" variant="default">
              Lihat Detail Produk
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
