<script setup lang="ts">
import { AppData } from '~/lib/app';
import { aboutPage } from '~/lib/content';

useHead({
    title: `About`
})

</script>

<template>
    <SharedAppSection :border-bottom=false title="About">
        <p class="text-base text-white text-opacity-70 xl:text-lg mb-4 xl:mb-9">{{ aboutPage.brief }}</p>
        <article v-html="aboutPage.paragraph"
            class="prose prose-headings:text-white prose-headings:text-opacity-90 prose-headings:text-2xl prose-p:text-text prose-li:text-text prose-strong:text-white">
        </article>
        <div class="mt-4 lg:mt-12 xl:mt-14 2xl:mt-16 items-center justify-center flex">
            <NuxtLink to="/contact" class="self-center">
                <Button class="w-full bg-transparent border-text lg:w-min border-opacity-50" variant="outline">
                    Contact me
                </Button>
            </NuxtLink>
        </div>
    </SharedAppSection>
</template>