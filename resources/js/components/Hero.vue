<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, FileText, Briefcase, ArrowUpRight } from "lucide-vue-next";

const mode = useColorMode();

interface ShortcutProps {
  icon: typeof ShoppingBag | typeof FileText | typeof Briefcase;
  title: string;
  description: string;
  href: string;
}

const shortcutList: ShortcutProps[] = [
  {
    icon: ShoppingBag,
    title: "Produk",
    description: "Jelajahi produk digital dan solusi perangkat lunak inovatif siap pakai.",
    href: "/products",
  },
  {
    icon: Briefcase,
    title: "Layanan",
    description: "Solusi integrasi IT, arsitektur web, dan transformasi digital perusahaan Anda.",
    href: "/services",
  },
  {
    icon: FileText,
    title: "Artikel",
    description: "Baca analisis teknologi terbaru, dokumentasi, dan tren bisnis masa kini.",
    href: "/news",
  },
];
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-primary/95 to-background w-full py-24 lg:py-36 isolation-auto">
    
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      
      <div class="absolute inset-0 ps2-grid-matrix opacity-[0.25] dark:opacity-[0.12]" />
      
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(var(--accent-rgb,var(--primary)),0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.2)_0%,transparent_70%)]" />

      <div class="absolute inset-0 opacity-40 dark:opacity-70">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/30 blur-[100px] animate-ps2-orb-float-slow" />
        <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[140px] animate-ps2-orb-float-fast" />
        <div class="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-primary/30 blur-[90px] animate-ps2-orb-float-reverse" />
      </div>

      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/40 to-transparent" />
    </div>
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full flex flex-col justify-between h-full gap-24">
      
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto space-y-3 w-full" data-aos="fade-up" data-aos-duration="1000">
        
        <h1 class="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
          Dari ide, <br/> 
          menjadi realita
        </h1>

        <p class="max-w-2xl text-base sm:text-lg lg:text-1xl text-muted-foreground/90 font-medium leading-relaxed text-balance">
          Techno Celebes merancang dan membangun perangkat lunak skala bisnis untuk memecahkan kompleksitas permasalahan Anda.
        </p>

      </div>

      <div class="w-full space-y-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="flex items-center gap-4">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground/40 whitespace-nowrap"></span>
          <div class="h-[1px] w-full bg-foreground/10 dark:bg-border/20" />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-7xl mx-auto w-full">
          <a
            v-for="({ icon, title, description, href }) in shortcutList"
            :key="title"
            :href="href"
            class="block group/card h-full"
          >
            <Card class="bg-card/20 dark:bg-card/5 backdrop-blur-md hover:bg-card/60 dark:hover:bg-card/20 transition-all duration-300 h-full border border-foreground/10 dark:border-border/30 hover:border-primary/40 rounded-2xl group-hover/card:-translate-y-1 shadow-sm">
              <CardHeader class="pb-3">
                <div class="flex justify-between items-start">
                  <div class="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-300">
                    <component :is="icon" class="size-5" />
                  </div>
                  <ArrowUpRight class="size-4 text-muted-foreground/40 group-hover/card:text-primary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                </div>
                <CardTitle class="text-base font-bold pt-4 group-hover/card:text-primary transition-colors">
                  {{ title }}
                </CardTitle>
              </CardHeader>
              <CardContent class="text-muted-foreground/80 text-sm leading-relaxed">
                {{ description }}
              </CardContent>
            </Card>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ps2-grid-matrix {
  background-image: 
    linear-gradient(to right, hsl(var(--foreground) / 0.15) 3px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--foreground) / 0.15) 3px, transparent 1px);
  background-size: 5rem 5rem;
  mask-image: radial-gradient(circle at 50% 40%, #000 20%, transparent 80%);
}

@keyframes ps2-nebula-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}

@keyframes ps2-orb-float-slow {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(30px, -40px) scale(1.15); opacity: 0.6; }
  100% { transform: translate(-10px, 10px) scale(0.95); opacity: 0.3; }
}

@keyframes ps2-orb-float-fast {
  0% { transform: translate(0, 0) scale(1.05); opacity: 0.4; }
  50% { transform: translate(-40px, 30px) scale(0.95); opacity: 0.5; }
  100% { transform: translate(20px, -20px) scale(1.05); opacity: 0.4; }
}

@keyframes ps2-orb-float-reverse {
  0% { transform: translate(0, 0) scale(0.95); opacity: 0.4; }
  50% { transform: translate(-20px, -30px) scale(1.1); opacity: 0.3; }
  100% { transform: translate(30px, 20px) scale(0.95); opacity: 0.4; }
}

.animate-ps2-orb-float-slow {
  animation: ps2-orb-float-slow 21s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-fast {
  animation: ps2-orb-float-fast 24s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-reverse {
  animation: ps2-orb-float-reverse 18s ease-in-out infinite;
  will-change: transform, opacity;
}
</style>