<script setup lang="ts">
import { aboutPage } from '~/lib/content';
</script>

<template>
    <SharedAppSection :border-bottom=false title="About">
        <p class="text-base xl:text-lg mb-4 xl:mb-9">{{ aboutPage.brief }}</p>
        <div v-html="aboutPage.paragraph" class="prose prose-headings:text-white text-white"></div>
    </SharedAppSection>
</template>