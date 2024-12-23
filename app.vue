<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { AppData } from './lib/app';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${AppData.logo_text} | ${titleChunk}` : `${AppData.logo_text}`;
  }
})
</script>

<template>
  <Toaster />
  <div>
    <NuxtLoadingIndicator color="orange" :height=2 />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
