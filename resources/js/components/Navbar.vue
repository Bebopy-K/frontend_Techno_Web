<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#products",
    label: "PRODUK",
  },
  {
    href: "#services",
    label: "SERVIS",
  },
  {
    href: "#contact",
    label: "ARTIKEL",
  },
  {
    href: "#team",
    label: "TIM",
  },
  {
    href: "#news",
    label: "KONTAK",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-full top-0 left-0 sticky z-40 flex justify-between items-center px-4 md:px-8 py-3 bg-background/60 backdrop-blur-md border-b border-border/40': true,
    }"
  >
    <div class="flex items-center">
      <a href="/" class="flex items-center gap-2">
        <img 
          src="../assets/icon.svg" 
          alt="Logo" 
          class="size-12 object-contain invert dark:invert-0 light:invert transition-all duration-200" 
        />
      </a>
    </div>
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between bg-card"
        >
          <div>
            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <!-- <NavigationMenuTrigger class="bg-transparent text-base data-[state=open]:bg-muted/50"> -->
          <!--   Dropdown -->
          <!-- </NavigationMenuTrigger> -->
          <NavigationMenuContent>
            <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
              <img
                src="https://www.radix-vue.com/logo.svg"
                alt="Features Preview"
                class="h-full w-full rounded-md object-cover"
              />
              <ul class="flex flex-col gap-2">
                <li
                  v-for="{ title, description } in featureList"
                  :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted"
                >
                  <p class="mb-1 font-semibold leading-none text-foreground">
                    {{ title }}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
                    {{ description }}
                  </p>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem v-for="{ href, label } in routeList" :key="label">
          <NavigationMenuLink asChild>
            <Button
              variant="ghost"
              class="text-base"
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

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}

.shadow-dark {
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.05);
}
</style>


