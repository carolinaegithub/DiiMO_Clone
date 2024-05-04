<script setup>
const props = defineProps(['title', 'msg', 'number']);
props.title;
props.msg;
props.number;
</script>

<template>
    <div class=" bg-white flex rounded-lg mx-8 lg:mx-0 lg:mr-4 xl:mr-6 sc:mr-28 items-center py-3 px-4 border border-slate-300 my-2 shadow-md hover:border-primary-700 hover:cursor-pointer hover:shadow-lg duration-150">
        <div class="flex items-center font-bold bg-primary-500 px-4 py-2 text-center justify-center rounded-lg text-white">{{ number }}</div>
        <div class="mx-4 text-primary-800">
            <h3 class=" font-bold ">{{ title }}</h3>
            <p>{{ msg }}</p>
        </div>
    </div>
</template>