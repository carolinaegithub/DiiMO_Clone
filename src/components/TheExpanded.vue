<script setup>
import IconArrorwExtended from '@/components/icons/IconArrorwExtended.vue';
</script>

<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    title: String,
    msg: String,
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<template>
<div class="relative cursor-pointer text-black bg-slate-200 border border-slate-300 rounded-lg px-4 py-3 mb-4 text-sm transition-transform duration-1000" @click="toggleExpand">
    <div class="flex items-center justify-between ">
        <span>{{ title }}</span>
        <span class="rotate-180 text-slate-500 !transition-all !transform" :class=" {'!rotate-0' : expanded }" ><IconArrorwExtended /></span>
    </div>
    <div v-if="expanded" class="mt-8">
    <p>{{ msg }}</p>
    </div>
</div>
</template>