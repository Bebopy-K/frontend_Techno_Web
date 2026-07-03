<script lang="ts" setup>
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import logoLightMode from "@/assets/full_icon_dark.svg"; // Logo gelap untuk latar terang
import logoDarkMode from "@/assets/full_icon.svg";       // Logo terang untuk latar gelap
const mode = useColorMode();
const footerLogoSrc = computed(() => {
  return mode.value === "dark" ? logoDarkMode : logoLightMode;
});
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6"
  >
    <div class="p-10 bg-card/30 dark:bg-card/10 backdrop-blur-md border border-border/40 rounded-2xl">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-3 flex items-center">
          <a href="/" class="flex items-center gap-2">
            <img 
              :src="footerLogoSrc" 
              alt="Logo" 
              class="w-48 sm:w-56 h-auto object-contain transition-all duration-300" 
            />
          </a>
        </div>

        <div class="flex flex-col gap-2.5">
          <h3 class="font-bold text-sm tracking-wide text-foreground uppercase opacity-90">Contact</h3>
          <div class="space-y-1.5 text-sm">
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2.5">
          <h3 class="font-bold text-sm tracking-wide text-foreground uppercase opacity-90">Help</h3>
          <div class="space-y-1.5 text-sm">
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2.5">
          <h3 class="font-bold text-sm tracking-wide text-foreground uppercase opacity-90">Socials</h3>
          <div class="space-y-1.5 text-sm">
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitch
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

