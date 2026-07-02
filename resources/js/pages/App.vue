<script setup lang="ts">
import MainLayout from "@/Layouts/MainLayout.vue"; 
import Hero from "@/components/Hero.vue";
import Benefits from "@/components/Benefits.vue";
import Features from "@/components/Features.vue";
import Services from "@/components/Services.vue";
import Products from "@/components/Product.vue";
import Team from "@/components/Team.vue";
import Community from "@/components/Community.vue";
import Contact from "@/components/Contact.vue";
import Article from "@/components/Article.vue";

// Anda bisa menghapus impor Navbar & Footer di sini karena sudah ditangani oleh MainLayout
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    features: string[];
}

interface Service {
    id: number;
    name: string;
}

interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    created_at: string;
    user: { name: string };
    service: { name: string };
    comments: { id: number }[];
}

const props = defineProps<{
    products: Product[];
    services: Service[];
    articles: Article[];
}>();
</script>

<template>
  <Navbar />
    <Hero />
    <Products :products="props.products"/>
    <Services :services="props.services"/>
    <Features />
    <Benefits />
    <Team />
    <Community />
    <Article :articles="props.articles"/>
    <Contact />
  <Footer />
</template>
