<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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

interface ServiceProps {
  icon: string;
  title: string;
  href: string;
}

const serviceList: ServiceProps[] = [
  { icon: "web", title: "Website", href: "#govtech" },
  { icon: "android", title: "Aplikasi Android", href: "#nmt" },
  { icon: "desktop", title: "Aplikasi Komputer", href: "#infrastructure" },
  { icon: "iot", title: "Internet of Things (IoT)", href: "#rbac" },
  { icon: "design", title: "Design Digital", href: "#edutech" },
  { icon: "network", title: "Sistem Jaringan", href: "#edutech" },
  { icon: "content", title: "Content Creator", href: "#edutech" },
  { icon: "consultant", title: "IT Consultant", href: "#edutech" },
  { icon: "ai", title: "Artificial Intelligence", href: "#edutech" },
  { icon: "lms", title: "LMS Kampus & Sekolah", href: "#edutech" },
];

// Fixed: Icons correctly mapped to individual values with modern fallback
const iconMap: Record<string, any> = {
  web: Globe,
  android: Smartphone,
  desktop: Monitor,
  iot: Cpu,
  design: Paintbrush,
  network: Network,
  content: Video,
  consultant: HelpCircle,
  ai: BrainCircuit,
  lms: GraduationCap,
};
</script>

<template>
  <section
    id="services"
    class="container py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">layanan</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Layanan Ekosistem Digital Kami
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Solusi teknologi end-to-end terintegrasi untuk mempercepat transformasi digital bisnis dan institusi Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div
        v-for="({ icon, title, href }, index) in serviceList"
        :key="title"
        class="flex"
      >
        <a 
          :href="href" 
          class="group/service w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-xl transition-all"
        >
          <Card
            class="bg-card dark:bg-card/40 hover:bg-muted/30 h-full border border-border/60 hover:border-primary/30 flex items-center justify-between p-4 sm:p-5 shadow-sm transition-all duration-200"
          >
            <div class="flex items-center gap-4">
              <span class="text-xs font-mono font-bold text-muted-foreground/30 group-hover/service:text-primary/70 transition-colors w-6">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div class="p-2 bg-primary/5 rounded-lg group-hover/service:bg-primary group-hover/service:text-primary-foreground transition-colors duration-300 text-primary">
                <component
                  class="size-5"
                  :is="iconMap[icon]"
                />
              </div>

              <CardTitle class="text-base font-semibold text-foreground tracking-tight transition-colors duration-200">
                {{ title }}
              </CardTitle>
            </div>

            <ArrowRight class="size-4 opacity-40 group-hover/service:opacity-100 group-hover/service:translate-x-1 transition-all duration-200 text-primary" />
          </Card>
        </a>
      </div>
    </div>
  </section>
</template>
