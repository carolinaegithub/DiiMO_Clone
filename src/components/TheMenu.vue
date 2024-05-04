<script setup>
import IconMenu from './icons/IconMenu.vue';
import LogoIcon from './icons/IconLogo.vue';
import TheButton from './TheButton.vue';
</script>

<script>
export default {
    data() {
        return {
            expanded: false,
        };
    },
    methods: {
        toggleExpand() {
            this.expanded = !this.expanded;
        },
    },
};
</script>

<template>
    <header class="transition-all duration-500 lg:hidden !drop-shadow-2xl h-auto relative pr-7  p-8">
        <div class="flex items-center align-middle !justify-between">
            <LogoIcon class="z-10" />
            <IconMenu @click="toggleExpand" />
        </div>
        <div v-if="expanded" class=" block w-full h-full">
            <ul class=" pl-4 items-center ">
                <a href="#diimo">
                    <li class="my-6">¿Qué es DiiMO?</li>
                </a>
                <a href="#how-it-works">
                    <li class="mb-6">¿Cómo funciona?</li>
                </a>
                <a href="#how-to-start">
                    <li class="mb-6">¿Cómo puedo obtener un adelanto de capital?</li>
                </a>
                <a href="#faq">
                    <li class="mb-6">Preguntas frecuentes</li>
                </a>
            </ul>
            <TheButton msg="Aplica a tu adelanto de capital" class="mt-4" />
        </div>
    </header>
</template>
