<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Benefits from "@/components/Benefits.vue";
import Features from "@/components/Features.vue";
import Services from "@/components/Services.vue";
import Products from "@/components/Product.vue" 
// import HowItWorks from "@/components/HowItWorks.vue";
// import Sponsors from "@/components/Sponsors.vue";
// import Testimonials from "@/components/Testimonials.vue";
import Team from "@/components/Team.vue";
// import Pricing from "@/components/Pricing.vue";
import Community from "@/components/Community.vue";
import Contact from "@/components/Contact.vue";
import Article from "@/components/Article.vue"
// import FAQ from "@/components/FAQ.vue";
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

    user: {
        name: string;
    };

    service: {
        name: string;
    };

    comments: {
        id: number;
    }[];
}

const props = defineProps<{
    products: Product[];
    services: Service[];
    articles: Article[];
}>();

console.log(props.products);
</script>

<template>
  <!-- <Navbar /> -->
  <Hero />
  <Products :products="props.products"/>
  <Services :services="props.services"/>
  <Features />
  <Benefits />
  <Team />
  <Sponsors />
  <HowItWorks />
  <Testimonials />
  <Community />
  <Article :articles="props.articles"/>
  <Pricing />
  <FAQ />
  <Contact />
  <!-- <Footer /> -->
</template>