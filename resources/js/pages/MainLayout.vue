<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>