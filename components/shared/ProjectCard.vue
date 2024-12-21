<script setup lang="ts">
import type { Project } from '~/lib/content';
defineProps<{
    project: Project
}>()
</script>

<template>
    <NuxtLink :to="`/projects/${project.slug}`">
        <div class="space-y-5 lg:space-y-5">
            <div class="w-full h-72 xl:h-80 2xl:h-96 relative">
                <NuxtImg src="/images/hero-image.avif" class="object-cover rounded-lg w-full h-full" placeholder />
            </div>

            <div class="space-y-2">
                <span class="uppercase text-xs tracking-widest">{{ project.stack }}</span>
                <h4 class="text-xl lg:text-2xl font-normal">{{ project.title }}</h4>
            </div>
        </div>
    </NuxtLink>
</template>
