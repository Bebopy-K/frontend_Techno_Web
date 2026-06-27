<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, FileText, Briefcase } from "lucide-vue-next";

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
    description: "Jelajahi produk digital dan solusi perangkat lunak inovatif buatan kami.",
    href: "/products",
  },
  {
    icon: FileText,
    title: "Artikel",
    description: "Baca wawasan terbaru, tutorial, dan tren teknologi di blog kami.",
    href: "/articles",
  },
  {
    icon: Briefcase,
    title: "Layanan Kami",
    description: "Solusi kustomisasi IT, pengembangan web, dan transformasi digital bisnis Anda.",
    href: "/services",
  },
];
</script>

<template>
  <section class="relative min-h-[700px] flex flex-col justify-center overflow-hidden bg-background isolation-auto w-full">
    
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full">
      <div
        class="grid place-items-center gap-8 mx-auto py-12 w-full"
      >
        <div class="text-center space-y-8 w-full">
          <div class="max-w-screen-lg mx-auto text-6xl md:text-7xl font-bold tracking-tight balance">
            <h1>Wujudkan Proyek Bersama Techno Celebes</h1>
          </div>

          <p class="max-w-screen-md mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Kami menghadirkan solusi nyata untuk tantangan bisnis Anda menggunakan teknologi mutakhir.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-8">
            <a
              v-for="({ icon, title, description, href }, index) in shortcutList"
              :key="title"
              :href="href"
              class="block group/card"
            >
              <Card class="bg-background/40 dark:bg-card/60 backdrop-blur-md hover:bg-background dark:hover:bg-background transition-all delay-75 group/number h-full border border-border/50 hover:border-border shadow-sm">
                <CardHeader>
                  <div class="flex justify-between items-start">
                    <component
                      :is="icon"
                      class="size-8 mb-6 text-primary transition-transform group-hover/card:-translate-y-1"
                    />
                    <span class="text-4xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{{ index + 1 }}
                    </span>
                  </div>
                  <CardTitle class="group-hover/card:text-primary transition-colors">
                    {{ title }}
                  </CardTitle>
                </CardHeader>
                <CardContent class="text-muted-foreground text-sm">
                  {{ description }}
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-0 h-full w-full pointer-events-none select-none glowing-container">
      
      <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 via-sky-400/20 via-indigo-500/10 to-transparent dark:via-primary/20 dark:via-primary/10"></div>

      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[600px] z-0 glow-shadow-breathing origin-bottom will-change-transform mix-blend-multiply dark:mix-blend-normal bg-gradient-to-t from-cyan-400/40 via-sky-400/15 via-indigo-400/5 to-transparent dark:from-primary/30 dark:via-primary/10 dark:via-primary/2 dark:to-transparent blur-[130px]"
      ></div>

      <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 via-sky-400/20 via-indigo-500/10 to-transparent dark:via-primary/20 dark:via-primary/10"></div>

    </div>
  </section>
</template>

<style scoped>
/* Expanded the viewbox bounding box to make sure neither the top nor bottom lines get cut off by browser layers */
.glowing-container {
  clip-path: inset(-10px 0px -10px 0px); 
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.7;
    transform: scaleY(0.85) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: scaleY(1.2) translateX(-50%);
  }
}

.glow-shadow-breathing {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 3.5s; 
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
</style>