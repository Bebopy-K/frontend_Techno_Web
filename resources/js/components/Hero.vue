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
    title: "Produk Kami",
    description: "Jelajahi produk digital dan solusi perangkat lunak inovatif siap pakai.",
    href: "/products",
  },
  {
    icon: Briefcase,
    title: "Layanan Kustom",
    description: "Solusi integrasi IT, arsitektur web, dan transformasi digital perusahaan Anda.",
    href: "/services",
  },
  {
    icon: FileText,
    title: "Wawasan & Artikel",
    description: "Baca analisis teknologi terbaru, dokumentasi, dan tren bisnis masa kini.",
    href: "/news",
  },
];
</script>

<template>
  <section class="relative min-h-[950px] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-background w-full py-20 lg:py-32 isolation-auto">
    
    <!-- ================= PS2 BIOS AMBIENT ENGINE BACKGROUND ================= -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      
      <!-- Infinite Tech-Grid Array Matrix (PS2 Void Space Floor) -->
      <div class="absolute inset-0 ps2-grid-matrix opacity-[0.25] dark:opacity-[0.15]" />
      
      <!-- Core Monolithic Light Source (Slowly Rotating Horizon Gas) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.08)_0%,rgba(6,182,212,0.04)_40%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.12)_0%,rgba(6,182,212,0.05)_50%,transparent_70%)] animate-ps2-nebula-spin" />

      <!-- Floating Quantum Cloud Gas Nodes (The PS2 White Ambient Orbs) -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px] animate-ps2-orb-float-slow" />
        <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/[0.03] blur-[140px] animate-ps2-orb-float-fast" />
        <div class="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-accent/5 blur-[90px] animate-ps2-orb-float-reverse" />
      </div>

      <!-- Top/Bottom Linear Laser Guides -->
      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
    <!-- ====================================================================== -->

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full flex flex-col justify-between h-full gap-20">
      
      <!-- Split Layout: Conversion Copy & Tech Graphic Context -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        <!-- Left Column: Heavy Corporate Value Proposition -->
        <div class="lg:col-span-7 space-y-6 text-left flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-xl">
            Anda berpikir, <br /><span class="bg-gradient-to-r from-primary via-cyan-500 to-primary/70 bg-clip-text text-transparent">Kami mengeksekusi</span>
          </h1>

          <p class="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Techno Celebes merancang dan membangun arsitektur perangkat lunak skala korporat untuk memecahkan kompleksitas permasalahan industri Anda.
          </p>
        </div>

        <!-- Right Column: Abstract Technical Architecture Graphic Presentation -->
        <div class="lg:col-span-5 relative w-full hidden lg:block" data-aos="fade-left" data-aos-duration="1000">
          <div class="relative w-full aspect-square max-w-[420px] mx-auto rounded-3xl border border-border/50 bg-gradient-to-br from-card/60 to-background/80 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />
            
            <!-- Structural Dashboard Representation Mockup Element -->
            <div class="space-y-4 opacity-90 transition-opacity duration-500">
              <div class="flex items-center gap-2 border-b border-border/40 pb-4">
                <div class="size-2.5 rounded-full bg-primary/40" />
                <div class="size-2.5 rounded-full bg-cyan-500/30" />
                <div class="size-2.5 rounded-full bg-muted-foreground/20" />
                <div class="h-3 w-24 bg-muted rounded-full ml-2" />
              </div>
              <div class="h-24 w-full bg-muted/30 rounded-xl border border-border/20 animate-pulse" />
              <div class="grid grid-cols-2 gap-4">
                <div class="h-16 bg-primary/[0.03] rounded-xl border border-primary/10" />
                <div class="h-16 bg-cyan-500/[0.03] rounded-xl border border-cyan-500/10" />
              </div>
              <div class="h-20 w-full bg-muted/20 rounded-xl border border-border/10" />
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Row: Service/Product Entry Points -->
      <div class="w-full space-y-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="flex items-center gap-4">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground/50 whitespace-nowrap">Akses Cepat Solusi</span>
          <div class="h-[1px] w-full bg-border/40" />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-7xl mx-auto w-full">
          <a
            v-for="({ icon, title, description, href }) in shortcutList"
            :key="title"
            :href="href"
            class="block group/card h-full"
          >
            <Card class="bg-card/30 dark:bg-card/10 backdrop-blur-md hover:bg-card/80 dark:hover:bg-card/30 transition-all duration-300 h-full border border-border/40 hover:border-primary/30 rounded-2xl group-hover/card:-translate-y-1">
              <CardHeader class="pb-3">
                <div class="flex justify-between items-start">
                  <div class="p-2.5 rounded-xl bg-primary/[0.06] border border-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-300">
                    <component :is="icon" class="size-5" />
                  </div>
                  <ArrowUpRight class="size-4 text-muted-foreground/30 group-hover/card:text-primary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                </div>
                <CardTitle class="text-base font-bold pt-4 group-hover/card:text-primary transition-colors">
                  {{ title }}
                </CardTitle>
              </CardHeader>
              <CardContent class="text-muted-foreground text-sm leading-relaxed">
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
/* Matrix Grid Line Definition */
.ps2-grid-matrix {
  background-image: 
    linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px);
  background-size: 5rem 5rem;
  mask-image: radial-gradient(circle at 50% 50%, #000 30%, transparent 85%);
}

/* ================= HARDWARE-ACCELERATED PS2 KINETIC ANIMATIONS ================= */
@keyframes ps2-nebula-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.15);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}

@keyframes ps2-orb-float-slow {
  0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  50% { transform: translate(40px, -60px) scale(1.2); opacity: 0.8; }
  100% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.4; }
}

@keyframes ps2-orb-float-fast {
  0% { transform: translate(0, 0) scale(1.1); opacity: 0.5; }
  50% { transform: translate(-50px, 40px) scale(0.95); opacity: 0.7; }
  100% { transform: translate(30px, -30px) scale(1.1); opacity: 0.5; }
}

@keyframes ps2-orb-float-reverse {
  0% { transform: translate(0, 0) scale(0.9); opacity: 0.6; }
  50% { transform: translate(-30px, -50px) scale(1.1); opacity: 0.4; }
  100% { transform: translate(40px, 30px) scale(0.9); opacity: 0.6; }
}

.animate-ps2-nebula-spin {
  animation: ps2-nebula-spin 28s linear infinite;
  will-change: transform;
}

.animate-ps2-orb-float-slow {
  animation: ps2-orb-float-slow 16s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-fast {
  animation: ps2-orb-float-fast 20s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-reverse {
  animation: ps2-orb-float-reverse 14s ease-in-out infinite;
  will-change: transform, opacity;
}
</style>
