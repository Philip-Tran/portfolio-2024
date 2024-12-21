<script setup lang="ts">
import { projects } from '~/lib/content';
</script>

<template>
    <SharedAppSection title="Projects">
        <div
            class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">
            <SharedProjectCard v-for="project in projects" :key="project.slug" :project="project" />
        </div>
        <div class="mt-4 items-center justify-center">
            <NuxtLink to="/contact">
                <Button class="w-full">Contact</Button>
            </NuxtLink>
        </div>
    </SharedAppSection>

</template>