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
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Leo",
    lastName: "Miranda",
    positions: ["Vue Frontend Developer", "Creator Of This Website"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Elizabeth",
    lastName: "Moore",
    positions: ["UI/UX Designer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "David",
    lastName: "Diaz",
    positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Sarah",
    lastName: "Robinson",
    positions: ["Cloud Native Developer", "Kubernetes Orchestrator"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Michael",
    lastName: "Holland",
    positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Zoe",
    lastName: "Garcia",
    positions: ["JavaScript Evangelist", "Deno Champion"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Evan",
    lastName: "James",
    positions: ["Backend Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Pam",
    lastName: "Taylor",
    positions: ["Fullstack Developer", "UX Researcher"],
    socialNetworks: [
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
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
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Team</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          The Company Dream Team
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
        :key="imageUrl"
        class="bg-muted/40 dark:bg-card/50 flex flex-col h-full overflow-hidden group/hoverimg border border-border/60 hover:border-primary/30 transition-all duration-300 rounded-xl shadow-sm"
      >
        <CardHeader class="p-0 gap-0">
          <div class="w-full aspect-square overflow-hidden bg-muted">
            <img
              :src="imageUrl"
              alt=""
              class="w-full h-full object-cover saturate-0 transition-all duration-500 ease-out group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-105"
              loading="lazy"
            />
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
            :aria-label="`Visit ${firstName}'s ${name} page`"
          >
            <component :is="socialIcon(name)" class="size-5" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
