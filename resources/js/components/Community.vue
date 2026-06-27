<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import DiscordIcon from "@/icons/DiscordIcon.vue";
</script>

<template>
  <section
    id="community"
    class="relative overflow-hidden py-24 sm:py-32 bg-background isolation-auto w-full"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <div class="absolute bottom-0 left-0 w-full z-0 h-full overflow-hidden pointer-events-none select-none">
      <div
        class="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[120%] h-[500px] z-0 glow-ambient-breathing origin-center mix-blend-multiply dark:mix-blend-normal bg-gradient-to-r from-primary/20 via-[#D247BF]/10 to-cyan-500/10 dark:from-primary/15 dark:via-[#D247BF]/10 dark:to-transparent blur-[140px]"
      ></div>
      
      <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 via-[#D247BF]/40 via-cyan-400/20 to-transparent dark:via-primary/20 dark:via-[#D247BF]/30"></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      
      <Card
        class="relative max-w-5xl mx-auto bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 sm:p-12 shadow-xl hover:border-primary/20 transition-all duration-300 group/cta"
      >
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div class="flex-1 text-center md:text-left space-y-4">
            <CardHeader class="p-0 space-y-2">
              <CardTitle class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Lagi cari kerja?<br class="hidden sm:inline" />
                <span class="text-transparent bg-gradient-to-r from-primary to-[#D247BF] bg-clip-text">
                  We are HIRING
                </span>
              </CardTitle>
            </CardHeader>
          </div>

          <div class="flex flex-col items-center justify-center min-w-[240px] gap-6">
            <div class="p-5 bg-background border border-border/40 rounded-2xl shadow-sm transition-transform duration-500 group-hover/cta:scale-110 group-hover/cta:rotate-3">
              <component
                class="w-12 h-12 text-[#5865F2] fill-current"
                :is="DiscordIcon"
              />
            </div>

            <CardFooter class="p-0 w-full">
              <Button 
                as-child 
                size="lg" 
                class="w-full font-bold shadow-md tracking-wide group-hover/cta:translate-y-[-2px] transition-all duration-200"
              >
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord Community
                </a>
              </Button>
            </CardFooter>
          </div>

        </div>
      </Card>
    </div>
  </section>
</template>

<style scoped>
@keyframes glow-ambient-animation {
  from {
    opacity: 0.6;
    transform: scale(0.9) translate(-50%, 50%);
  }
  to {
    opacity: 1;
    transform: scale(1.1) translate(-50%, 50%);
  }
}

.glow-ambient-breathing {
  animation-name: glow-ambient-animation;
  animation-iteration-count: infinite;
  animation-duration: 4s; 
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  will-change: transform, opacity;
}
</style>