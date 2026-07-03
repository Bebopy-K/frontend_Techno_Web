<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    title: '',
    description: '',
    category: '',
    image: null as File | null,
});

function submit() {
    form.post('/products');
}

</script>
<template>
<form @submit.prevent="submit" enctype="multipart/form-data">

<input v-model="form.title" placeholder="Title" />
<input v-model="form.category" placeholder="Category" />
<textarea v-model="form.description" placeholder="Description"></textarea>

<input

type="file"

@change="form.image = ($event.target as HTMLInputElement).files?.[0] || null"

/>

<button type="submit">Simpan Produk</button>

</form>
</template>