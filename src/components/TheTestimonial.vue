<script>
export default {
    props: {
        opinion: String,
        person: String,
    },
};
</script>

<template>
<div class="m-4 bg-white shadow flex-1 h-auto px-4 py-2 rounded-lg">
<p class="my-4 text-xl text-gray-500">{{ opinion }}</p>    
<span class="italic">{{ person }}</span>
</div>
</template>