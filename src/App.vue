<script setup>
import { useI18n } from "vue-i18n";
import ImageCardComponent from "./components/ImageCardComponent.vue";

const { t } = useI18n(); // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <main>
    <ImageCardComponent
      image="image-qr-code.png"
      :alt="t('message.qr-code.alt')"
      :title="t('message.qr-code.title')"
      :body="t('message.qr-code.body')"
    />
  </main>
</template>

<style scoped>
main {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  min-height: 100svh;
  padding: 1rem;
}
</style>
