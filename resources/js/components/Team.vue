<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";

interface TeamMember {
  imageUrl: string;
  name: string;
  degree?: string; // Gelar dipisah untuk menjaga konsistensi tipografi nama
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

// Data terstruktur rapi - Total 9 Personel (Sempurna untuk Grid 3 Kolom)
const teamList: TeamMember[] = [
  {
    imageUrl: "",
    name: "Najlah",
    positions: ["Direktris Utama"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Jafar Sadik",
    degree: "S.Kom., M.T.I",
    positions: ["Project Manager"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Muhammad Fahri Ahmad",
    degree: "S.Kom",
    positions: ["Kepala Pengembang Aplikasi Web"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }, { name: "Github", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Erwin Ardias",
    degree: "S.T, M.T",
    positions: ["Kepala Pengembang Machine Learning"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }, { name: "Github", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Fizar Syafaat",
    degree: "S.Kom., M.Kom",
    positions: ["Kepala Pengembang Aplikasi Mobile"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Ilman Pradana",
    degree: "S.Kom., M.Kom, CEH, CHFL",
    positions: ["Kepala Pengembang Jaringan & Keamanan"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Ir. Kadek Agus Dwiwijaya",
    degree: "S.T., MM",
    positions: ["Kepala Pengembangan Desktop"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }, { name: "Github", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Muhammad Rizal Faiz",
    degree: "S.Agr",
    positions: ["Kepala Pengembang IoT"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  },
  {
    imageUrl: "",
    name: "Muh. Aristo Indrajaya",
    degree: "S.T., M.T.",
    positions: ["Kepala Pengembang Hardware"],
    socialNetworks: [{ name: "LinkedIn", url: "#" }],
  }
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn": return LinkedInIcon;
    case "Github": return GithubIcon;
    case "X": return XIcon;
  }
};

// Helper untuk membuat inisial nama saat foto belum diunggah
const getInitial = (name: string) => {
  return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
};
</script>

<template>
  <section
    id="team"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative"
    data-aos="fade-up" 
    data-aos-duration="1000"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <!-- Corporate Header Strategy -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-16 border-b border-b-border/60">
      <div class="space-y-3 text-left">
        <div class="inline-flex items-center gap-2 px-1 py-1 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
          Struktur Dewan Teknis
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Susunan Tim Techno Celebes
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
        Didukung oleh kombinasi akademisi pascasarjana dan praktisi tersertifikasi untuk menjamin kualitas rekayasa sistem Anda.
      </p>
    </div>

    <!-- Balanced 3-Column Grid Layout Matrix -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="member in teamList"
        :key="member.name"
        class="bg-card/40 dark:bg-card/20 backdrop-blur-sm flex flex-col h-full overflow-hidden group/team border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.01] transition-all duration-300 rounded-2xl"
      >
        <CardHeader class="p-0 gap-0">
          <!-- Frame Image Area dengan Aspek Rasio Sinematik Portret (4:3 atau Square) -->
          <div class="w-full aspect-[4/3] overflow-hidden bg-muted/60 dark:bg-muted/20 flex items-center justify-center relative border-b border-border/40">
            
            <!-- Render jika gambar asli tersedia -->
            <img
              v-if="member.imageUrl"
              :src="member.imageUrl"
              :alt="member.name"
              class="w-full h-full object-cover saturate-0 group-hover/team:saturate-100 group-hover/team:scale-102 transition-all duration-500 ease-out"
              loading="lazy"
            />
            
            <!-- Premium Initial Fallback Vector Blueprint -->
            <div 
              v-else 
              class="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/20 to-muted text-muted-foreground/40 font-mono text-4xl font-black tracking-wider group-hover/team:text-primary/30 transition-all duration-500 select-none relative"
            >
              <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              {{ getInitial(member.name) }}
            </div>

          </div>

          <!-- Tipografi Nama Terstruktur -->
          <div class="pt-6 px-6 text-left">
            <CardTitle class="text-lg font-bold text-foreground tracking-tight group-hover/team:text-primary transition-colors duration-200">
              {{ member.name }}
            </CardTitle>
            <span v-if="member.degree" class="text-xs font-medium text-muted-foreground/80 mt-0.5 block font-mono">
              {{ member.degree }}
            </span>
          </div>
        </CardHeader>

        <!-- Position Box Wrapper -->
        <CardContent class="px-6 pt-3 pb-6 text-left flex-grow">
          <div class="flex flex-wrap gap-1.5">
            <span 
              v-for="(position, index) in member.positions" 
              :key="index"
              class="inline-flex text-xs px-2.5 py-0.5 rounded-md bg-primary/[0.04] text-muted-foreground border border-border/40 group-hover/team:border-primary/10 font-medium"
            >
              {{ position }}
            </span>
          </div>
        </CardContent>

        <!-- Social Networking Footer Connectors -->
        <CardFooter class="px-6 pb-6 pt-0 mt-auto justify-start border-t border-dashed border-border/40 pt-4 mx-6 px-0">
          <div class="flex items-center gap-3" v-if="member.socialNetworks.length > 0">
            <a
              v-for="{ name, url } in member.socialNetworks"
              :key="name"
              :href="url"
              target="_blank"
              class="text-muted-foreground hover:text-primary transition-all duration-200 p-1 hover:bg-primary/5 rounded-md"
              :aria-label="`Hubungkan LinkedIn atau portofolio dengan ${member.name}`"
            >
              <component :is="socialIcon(name)" class="size-4.5" />
            </a>
          </div>
          <div v-else class="text-[11px] font-mono text-muted-foreground/30 italic">
            Internal network profile
          </div>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<style scoped>
/* Transisi layouting murni menggunakan engine utility tailwind secara fleksibel */
</style>
