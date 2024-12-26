<script setup lang="ts">
import type { Project } from '~/lib/content';
defineProps<{
    project: Project
}>()
</script>

<template>
    <NuxtLink :to="`/projects/${project.slug}`">
        <div class="space-y-5 lg:space-y-5 hover:text-orange-500">
            <div class="w-full relative group aspect-video">
                <NuxtImg :src="project.featureImage" class="object-cover rounded-lg w-full h-full " placeholder />
                <div
                    class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                </div>
            </div>

            <div class="space-y-2">
                <ul class="flex flex-wrap gap-2">
                    <li v-for="tech in project.stack" :key="tech"
                        class="px-3 py-1 text-xs font-medium bg-text rounded-full text-gray-900">
                        {{ tech }}
                    </li>
                </ul>
                <h3 class="text-xl lg:text-2xl font-normal hover:text-orange-500">{{ project.title }}</h3>
            </div>
        </div>
    </NuxtLink>
</template>
