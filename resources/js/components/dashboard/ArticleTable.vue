<script setup lang="ts">
import { router } from "@inertiajs/vue3";

defineProps<{
    articles: any[];
}>();

function destroyArticle(id: number) {

    if (confirm("Yakin ingin menghapus artikel?")) {

        router.delete(`/articles/${id}`);

    }

}
</script>

<template>

<div class="mt-10">

    <h2 class="text-2xl font-bold mb-5">

        Daftar Artikel

    </h2>

    <table class="w-full border">

        <thead>

            <tr class="bg-gray-100">

                <th class="border p-2">Gambar</th>

                <th class="border p-2">Judul</th>

                <th class="border p-2">Tags</th>

                <th class="border p-2">Aksi</th>

            </tr>

        </thead>

        <tbody>

            <tr
                v-for="article in articles"
                :key="article.id"
            >

                <td class="border p-2">

                    <img
                        :src="'/storage/' + article.image"
                        width="80"
                    >

                </td>

                <td class="border p-2">

                    {{ article.title }}

                </td>

                <td class="border p-2">

                    {{ article.tags }}

                </td>

                <td class="border p-2">

                    <button
                        @click="destroyArticle(article.id)"
                        class="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Hapus
                    </button>

                </td>

            </tr>

        </tbody>

    </table>

</div>

</template>