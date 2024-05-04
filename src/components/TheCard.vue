<script>
import { ref } from 'vue';

export default {
    setup() {
        const images = ref([
            {
                url: './assets/sin-papeleos-ni-largas-filas.webp', name: 'image1'
            },
            {
                url: './assets/sin-anticipos-ni-fiadores.webp', name: 'image2'
            },
            {
                url: './assets/confiable-y-seguro.webp', name: 'image3'
            },
        ])
        return { images }
    },
};
</script>

<template>
    <div>
        <img v-for="image in images" :key="image.id"  :src="image.url" alt="">
    </div>
</template>