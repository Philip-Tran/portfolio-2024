<script setup lang="ts">
import type { Project } from '~/lib/content';
defineProps<{
    projects: Project[]
}>()
</script>

<template>
    <SharedAppSection title="Projects">
        <div
            class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">
            <SharedProjectCard v-for="project in projects" :key="project.slug" :project="project" />
        </div>
        <div class="mt-4 items-center justify-center">
            <Button class="w-full">View all Projects</Button>
        </div>
    </SharedAppSection>
</template>