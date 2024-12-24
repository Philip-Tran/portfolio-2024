<script setup lang="ts">
import type { Project } from '~/lib/content';
const props = defineProps<{
    projects: Project[]
}>()

const FeaturedProject = computed(() => {
    return props.projects.filter((project) => project.isFeatured);
});
</script>

<template>
    <SharedAppSection title="Projects">
        <div
            class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">
            <SharedProjectCard v-for="project in FeaturedProject" :key="project.slug" :project="project" />
        </div>
        <div class="mt-4 flex items-center justify-center">
            <NuxtLink to="/projects">
                <Button
                    class="w-full lg:w-min lg:self-center bg-transparent border-text border-opacity-60 hover:bg-text hover:bg-opacity-10 hover:text-white"
                    variant="outline">View all
                    Projects
                </Button>
            </NuxtLink>
        </div>
    </SharedAppSection>
</template>