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

// Import ikon User untuk digunakan sebagai fallback avatar profil
import { User } from "lucide-vue-next";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "",
    firstName: "Najlah",
    lastName: "",
    positions: ["Direktris Utama"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "Github", url: "" },
      // { name: "X", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Jafar Sadik",
    lastName: "S.Kom., M.T.I",
    positions: ["Project Manager"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "X", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Muhammad Fahri Ahmad",
    lastName: "S.Kom",
    positions: ["Kepala Pengembang Aplikasi Web"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "Github", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Erwin Ardias",
    lastName: "S.T, M.T",
    positions: ["Kepala Pengembang Machine Learning"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "Github", url: "" },
      // { name: "X", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Fizar Syafaat",
    lastName: "S.Kom., M.Kom ",
    positions: ["Kepala Pengembang Aplikasi Mobile"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Ilman Pradana",
    lastName: "S.Kom., M.Kom, CEH, CHFL",
    positions: ["Kepala Pengembang Jaringan"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "Github", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Ir. Kadek Agus Dwiwijaya",
    lastName: "S.T., MM",
    positions: ["Kepala Pengembangan Desktop"],
    socialNetworks: [
      // { name: "LinkedIn", url: "" },
      // { name: "Github", url: "" },
      // { name: "X", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Muhammad Rizal Faiz",
    lastName: "S.Agr",
    positions: ["Kepala pengembang IoT"],
    socialNetworks: [
      // { name: "X", url: "" },
    ],
  },
  {
    imageUrl: "",
    firstName: "Muh. Aristo Indrajaya",
    lastName: "S.T., M.T.",
    positions: ["Kepala pengembang Hardware"],
    socialNetworks: [
      // { name: "X", url: "" },
    ],
  }
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;
    case "Github":
      return GithubIcon;
    case "X":
      return XIcon;
  }
};
</script>

<template>
  <section
    id="team"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Tim</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Susunan tim Techno Celebes
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Didukung oleh talenta profesional dan ahli di bidangnya untuk mewujudkan standar ekosistem digital terbaik bagi bisnis Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="firstName"
        class="bg-muted/40 dark:bg-card/50 flex flex-col h-full overflow-hidden group/hoverimg border border-border/60 hover:border-primary/30 transition-all duration-300 rounded-xl shadow-sm"
      >
        <CardHeader class="p-0 gap-0">
          <div class="w-full aspect-square overflow-hidden bg-muted flex items-center justify-center relative">
            
            <!-- JIKA IMAGE URL TERSEDIA -->
            <img
              v-if="imageUrl"
              :src="imageUrl"
              :alt="`${firstName} ${lastName}`"
              class="w-full h-full object-cover saturate-0 transition-all duration-500 ease-out group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-105"
              loading="lazy"
            />
            
            <!-- JIKA IMAGE URL KOSONG -->
            <div 
              v-else 
              class="w-full h-full flex items-center justify-center bg-secondary/30 dark:bg-muted/50 text-muted-foreground/60 transition-transform duration-500 group-hover/hoverimg:scale-105"
            >
              <User class="w-24 h-24 stroke-[1.25]" />
            </div>

          </div>
          <CardTitle class="pt-6 pb-2 px-6 text-xl font-bold text-foreground text-left">
            {{ firstName }} <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent class="px-6 pb-6 text-left flex-grow">
          <p class="text-sm text-muted-foreground leading-relaxed">
            <span 
              v-for="(position, index) in positions" 
              :key="index"
            >
              {{ position }}<span v-if="index < positions.length - 1">, </span>
            </span>
          </p>
        </CardContent>

        <CardFooter class="px-6 pb-6 space-x-3.5 pt-0 mt-auto justify-start">
          <a
            v-for="{ name, url } in socialNetworks"
            :key="name"
            :href="url"
            target="_blank"
            class="text-muted-foreground hover:text-primary transition-colors duration-200"
            :aria-label="`Kunjungi halaman ${name} ${firstName}`"
          >
            <component :is="socialIcon(name)" class="size-5" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>