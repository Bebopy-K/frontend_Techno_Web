<script setup lang="ts">
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ProductForm from "@/components/dashboard/ProductForm.vue";
import ProductTable from "@/components/dashboard/ProductTable.vue";
import ArticleForm from "@/components/dashboard/ArticleForm.vue";
import ArticleTable from "@/components/dashboard/ArticleTable.vue";

defineProps<{
    products: any[]
    articles: any[]
}>();

</script>

<template>

    <DashboardHeader />

    <ProductForm />

    <ProductTable :products="products"/>

    <ArticleForm />

    <ArticleTable :articles="articles"/>

</template>