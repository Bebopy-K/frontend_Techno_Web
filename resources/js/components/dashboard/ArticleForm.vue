<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    title: "",
    content: "",
    tags: "",
    image: null as File | null,
});

function submit() {
    form.post("/articles", {
        onSuccess: () => {
            form.reset();
        },
    });
}
</script>

<template>
    <div class="mt-10">

        <h2 class="text-2xl font-bold mb-5">
            Tambah Artikel
        </h2>

        <form
            @submit.prevent="submit"
            enctype="multipart/form-data"
            class="space-y-4"
        >

            <input
                v-model="form.title"
                type="text"
                placeholder="Judul Artikel"
                class="border p-2 rounded w-full"
            />

            <textarea
                v-model="form.content"
                placeholder="Isi Artikel"
                class="border p-2 rounded w-full"
                rows="5"
            ></textarea>

            <input
                v-model="form.tags"
                type="text"
                placeholder="Tags"
                class="border p-2 rounded w-full"
            />

            <input
                type="file"
                @change="form.image = ($event.target as HTMLInputElement).files?.[0] || null"
            />

            <button
                class="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Simpan Artikel
            </button>

        </form>

    </div>
</template>