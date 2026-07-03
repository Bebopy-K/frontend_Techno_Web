<script setup lang="ts">
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
  ArrowRight
} from "lucide-vue-next";

interface Service {
  id: number;
  name: string;
}

// Typings for our structural business path mappings
interface LocalServiceMeta {
  href: string;
  iconId: number;
}

const props = defineProps<{
  services: Service[];
}>();

// Dynamic map referencing our icon components based on the incoming backend dynamic ID
const iconMap: Record<number, any> = {
  1: Globe,
  2: Smartphone,
  3: Monitor,
  4: Cpu,
  5: Paintbrush,
  6: Network,
  7: Video,
  8: HelpCircle,
  9: BrainCircuit,
  10: GraduationCap,
};

// Strategic anchor link business directory mapping fallback matching your route structure
const businessLinksMap: Record<number, string> = {
  1: "#web-development",
  2: "#mobile-solutions",
  3: "#enterprise-desktop",
  4: "#iot-infrastructure",
  5: "#digital-design",
  6: "#network-systems",
  7: "#media-production",
  8: "#it-consulting",
  9: "#artificial-intelligence",
  10: "#edutech-lms",
};
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-16 border-b border-border/60">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Kapabilitas Kami
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Layanan Ekosistem Digital
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
        Kerangka kerja teknologi komprehensif untuk memodernisasi infrastruktur operasional bisnis dan tata kelola Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
      <div
        v-for="(service, index) in services"
        :key="service.id"
        class="flex"
      >
        <a 
          :href="businessLinksMap[service.id] || '#contact'" 
          class="group/service w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-all"
        >
          <Card
            class="bg-card/50 dark:bg-card/20 hover:bg-card dark:hover:bg-muted/10 h-full border border-border/40 hover:border-primary/30 flex items-center justify-between p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl"
          >
            <div class="flex items-center gap-4 overflow-hidden mr-2">
              <span class="text-xs font-mono font-bold text-muted-foreground/30 group-hover/service:text-primary/60 transition-colors w-5 shrink-0">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div class="p-2.5 bg-primary/5 rounded-xl text-primary group-hover/service:bg-primary group-hover/service:text-primary-foreground transition-all duration-300 shrink-0">
                <component
                  class="size-5"
                  :is="iconMap[service.id] || HelpCircle"
                />
              </div>

              <CardTitle class="text-sm sm:text-base font-bold text-foreground tracking-tight group-hover/service:text-primary transition-colors duration-200 line-clamp-1">
                {{ service.name }}
              </CardTitle>
            </div>

            <div class="p-1.5 rounded-full bg-muted/40 group-hover/service:bg-primary/10 transition-colors duration-300 shrink-0">
              <ArrowRight class="size-3.5 opacity-60 group-hover/service:opacity-100 group-hover/service:translate-x-0.5 transition-all duration-300 text-foreground group-hover/service:text-primary" />
            </div>
          </Card>
        </a>
      </div>
    </div>
  </section>
</template>
