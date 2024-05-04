<script setup>
import LogoIcon from './components/icons/IconLogo.vue'
import TheButton from './components/TheButton.vue'
import TheMenu from './components/TheMenu.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <header class="transition-all duration-500 hidden lg:flex relative items-center align-middle py-4 px-28 h-[90px] shadow-sm">
    <LogoIcon class="z-10" />
    <ul class=" hidden lg:flex gap-8 items-center ml-12 text-sm">
      <a href="#diimo">
        <li>¿Qué es DiiMO?</li>
      </a>
      <a href="#how-it-works">
        <li>¿Cómo funciona?</li>
      </a>
      <a href="#how-to-start">
        <li>¿Cómo puedo obtener un adelanto de capital?</li>
      </a>
      <a href="#faq">
        <li>Preguntas frecuentes</li>
      </a>
    </ul>
    <TheButton msg="Aplica a tu adelanto de capital" class="ml-12" />
  </header>

  <TheMenu />

  <RouterView />
</template>