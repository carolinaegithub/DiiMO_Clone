<script setup>
const props = defineProps(['msg'])
props.msg
</script>

<template>
  <button class="lg:flex text-white bg-primary-500 rounded-xl p-4 font-medium hover:bg-primary-600 duration-150">{{ msg }}</button>
</template>