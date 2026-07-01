<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-vue-next";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
}

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <section
    id="products"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    <!-- Section Executive Header Elements -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-16 border-b border-border/60">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 rounded-full text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Produk
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Portofolio Solusi Digital
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
        Sistem perangkat lunak berskala industri yang dirancang khusus untuk mengoptimalkan efisiensi eksekusi bisnis Anda.
      </p>
    </div>

    <!-- Product Solution Matrix Grid Architecture -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex"
      >
        <Card
          class="bg-card/50 dark:bg-card/30 backdrop-blur-sm transition-all duration-300 group/product w-full border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.02] flex flex-col justify-between overflow-hidden rounded-2xl"
        >
          <div>
            <!-- Professional Framed Interface Context Mockup Media Container -->
            <div class="relative w-full aspect-[16/10] overflow-hidden bg-muted border-b border-border/40">
              <img 
                :src="'/storage/' + product.image"
                :alt="product.title"
                class="w-full h-full object-cover object-top group-hover/product:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
              
              <!-- Subtle Category Floater Pill -->
              <span class="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-background/90 text-foreground border border-border/40 backdrop-blur-md shadow-sm">
                {{ product.category }}
              </span>
            </div>

            <CardHeader class="pt-6 pb-2 px-6">
              <CardTitle class="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover/product:text-primary transition-colors duration-200 flex items-center justify-between gap-4">
                {{ product.title }}
              </CardTitle>
            </CardHeader>

            <CardContent class="space-y-6 px-6 pb-6">
              <p class="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                {{ product.description }}
              </p>

              <!-- Enterprise Capability List Component -->
              <div class="space-y-3 pt-4 border-t border-border/40">
                <p class="text-xs font-bold uppercase text-foreground/80 tracking-widest">Spesifikasi Kapabilitas:</p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li
                    v-for="feature in product.features"
                    :key="feature"
                    class="flex items-start text-sm text-muted-foreground/90 font-medium"
                  >
                    <Check class="size-4 text-primary mr-2.5 mt-0.5 shrink-0" />
                    <span class="line-clamp-2 leading-tight">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </div>

          <!-- Conversion Bottom Trigger Matrix Row -->
          <CardFooter class="grid grid-cols-1 gap-3 pt-4 pb-6 px-6 mt-auto border-t border-border/40 bg-muted/10 dark:bg-muted/5">
            <Button class="w-full font-medium tracking-wide rounded-xl shadow-sm group/btn" variant="default">
              <span class="inline-flex items-center gap-1">
                Eksplorasi
                <ArrowUpRight class="size-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
