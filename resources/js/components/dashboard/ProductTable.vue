<script setup lang="ts">
import { router } from "@inertiajs/vue3";

const props = defineProps<{
    products: any[]
}>();

function destroyProduct(id:number){

    if(confirm("Yakin ingin menghapus produk?")){

        router.delete(`/products/${id}`);

    }

}

</script>
<template>
<table border="1">
    <thead>
        <tr>
            <th>Gambar</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Aksi</th>
        </tr>
    </thead>

    <tbody>
        <tr
            v-for="product in props.products"
            :key="product.id"
        >
            <td>
                <img
                    :src="'/storage/' + product.image"
                    width="80"
                >
            </td>

            <td>{{ product.title }}</td>

            <td>{{ product.category }}</td>

            <td>
                <button @click="destroyProduct(product.id)">
                    Hapus
                </button>
            </td>
        </tr>
    </tbody>
</table>
</template>