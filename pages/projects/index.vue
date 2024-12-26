<script setup lang="ts">
import { AppData, Profile } from '~/lib/app';
import { projects } from '~/lib/content';
useHead({
    title: `Projects`
})

</script>

<template>
    <SharedAppSection title="Projects" description="">
        <div>
            <p class="text-text">Notable works of mine. See all the code at
                <a class="text-orange-500 hover:text-orange-400" :href="Profile.github.link" target="_blank">my
                    GitHub</a>
            </p>
        </div>
        <div
            class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">
            <SharedProjectCard v-for="project in projects" :key="project.slug" :project="project" />
        </div>
        <div class="mt-4 lg:mt-12 xl:mt-14 2xl:mt-16 items-center justify-center flex">
            <NuxtLink to="/contact" class="self-center">
                <Button class="w-full bg-transparent border-text  lg:w-min border-opacity-50"
                    variant="outline">Contact</Button>
            </NuxtLink>
        </div>
    </SharedAppSection>
</template>