<script lang="ts" setup>
import { ref, computed } from "vue";
import { useColorMode } from "@vueuse/core";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

// 1. Import aset secara eksplisit agar dikenali dan di-compile oleh Vite di Laravel
import iconLight from "@/assets/icon_dark.svg"; // Aset gelap untuk latar terang (Light Mode)
import iconDark from "@/assets/icon.svg";       // Aset terang untuk latar gelap (Dark Mode)

interface RouteProps {
  href: string;
  label: string;
}

const mode = useColorMode();

const routeList: RouteProps[] = [
  { href: "/products", label: "Produk" },
  { href: "/services", label: "Layanan" },
  { href: "/news", label: "Artikel" },
  { href: "/#team", label: "Tim Kami" },
  { href: "/#contact", label: "Kontak" },
];

const isOpen = ref<boolean>(false);

// 2. Menggunakan Computed Property untuk menangani penukaran resolusi file secara reaktif
const logoSrc = computed(() => {
  return mode.value === "dark" ? iconDark : iconLight;
});
</script>

<template>
  <div class="fixed top-4 inset-x-0 z-50 w-full max-w-6xl mx-auto pointer-events-none">
    <header
      class="w-full flex justify-between items-center px-4 md:px-6 py-2.5 pointer-events-auto transition-all duration-300 shadow-sm border border-border/50 bg-background/80 backdrop-blur-md text-foreground rounded-2xl"
    >
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2">
          <img 
            :src="logoSrc" 
            alt="Logo"
            class="h-8 w-auto object-contain transition-all duration-300"
          />
        </a>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="size-9 rounded-xl hover:bg-muted/80">
              <Menu class="size-5 cursor-pointer" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            class="flex flex-col justify-between bg-card/95 backdrop-blur-md border-r border-border/40 w-[280px]"
          >
            <div class="flex flex-col gap-1.5 pt-6">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-sm font-medium rounded-xl h-10 px-4"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>

            <SheetFooter class="flex flex-col justify-start items-stretch gap-4 pb-4">
              <Separator class="bg-border/60" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div class="hidden lg:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList class="gap-1">
            <NavigationMenuItem v-for="{ href, label } in routeList" :key="label">
              <NavigationMenuLink asChild>
                <Button
                  variant="ghost"
                  class="text-sm font-medium h-9 px-4 rounded-xl transition-colors hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  as-child
                >
                  <a :href="href">
                    {{ label }}
                  </a>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div class="h-4 w-[1px] bg-border/60" />
        
        <ToggleTheme />
      </div>
    </header>
  </div>
</template>

<style scoped>
/* State handling completely clean and driven by modern utility classes */
</style>
