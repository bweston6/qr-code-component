<script setup>
import { defineProps } from "vue";
defineProps(["image", "alt", "title", "body"]);
</script>

<template>
  <article>
    <img :alt="alt" :src="require('@/assets/images/' + image)" />
    <header>{{ title }}</header>
    <p>{{ body }}</p>
  </article>
</template>

<style scoped>
article {
  --_radius: 1.5rem;
  --_padding: 1rem;
  background-color: white;
  border-radius: var(--_radius);
  font-size: 0.9rem;
  font-weight: 600;
  max-width: 32ch;
  padding: var(--_padding);
  text-align: center;
  width: 100%;
}
img {
  border-radius: calc(var(--_radius) - var(--_padding));
}
header {
  color: var(--color-100);
  font-size: 1.25rem;
  font-weight: 900;
  margin-block: 1rem;
}
</style>
