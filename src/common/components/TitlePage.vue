<template>
  <section>
    <h1 class="text-3xl text-green-400">{{ title }}</h1>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
</script>
