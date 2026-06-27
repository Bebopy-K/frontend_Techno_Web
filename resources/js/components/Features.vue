<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "badgeCheck",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "pictureInPicture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "mousePointerClick",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12 ">
      <div class="space-y-2 text-left">
        <p class="text-sm font-semibold tracking-wider text-primary uppercase">Features</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Mengapa pilih kami?
        </h2>
      </div>
      <p class="text-muted-foreground max-w-md text-sm sm:text-base">
        Kelebihan dan nilai tambah ekosistem kami yang dirancang khusus untuk memastikan efisiensi dan performa terbaik bisnis Anda.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border border-border/40 shadow-sm hover:border-primary/20 transition-all duration-200 rounded-xl group/feature">
          <CardHeader class="flex flex-col justify-start items-start pt-6 pb-2">
            <div
              class="bg-primary/10 p-2.5 rounded-xl text-primary group-hover/feature:bg-primary group-hover/feature:text-primary-foreground transition-all duration-200 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-5"
              />
            </div>

            <CardTitle class="text-lg font-bold group-hover/feature:text-primary transition-colors duration-200">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-left text-sm leading-relaxed pb-6">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
