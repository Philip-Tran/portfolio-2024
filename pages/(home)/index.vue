<script lang="ts" setup>
import { Github } from 'lucide-vue-next';
import { homePage } from '~/lib/content';

</script>

<template>
    <SharedAppSection>
        <div class="space-y-5">
            <div class="flex justify-between items-start">
                <div class="w-32 h-32 rounded-md">
                    <NuxtImg :src="homePage.image.url" :alt="homePage.image.altText" height="150px" width="150px"
                        placeholder />
                </div>
                <div>
                    <div>
                        I'm open to work
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <h1 class="text-3xl xl:text-4xl 2xl:text-5xl font-sans font-medium">
                    {{ homePage.headline }}
                </h1>
                <p class="text-text">

                    {{ homePage.sub_headline }}
                </p>
            </div>
            <div class="flex space-x-4">
                <div class="flex p-3 border border-text rounded-sm items-center justify-center border-opacity-40">
                    <Github class="w-5 h-5" />
                </div>
                <div class="flex p-3 border border-text rounded-sm items-center justify-center border-opacity-40">
                    <Github class="w-5 h-5" />
                </div>
                <div class="flex p-3 border border-text rounded-sm items-center justify-center border-opacity-40">
                    <Github class="w-5 h-5" />
                </div>
            </div>
        </div>
    </SharedAppSection>
    <SharedAppSection title="Work">
        <div class="flex flex-col space-y-8">
            <SharedProjectCard v-for="i in 3" />
        </div>
        <div class="mt-4 items-center justify-center">
            <Button class="w-full">View all Projects</Button>
        </div>
    </SharedAppSection>
</template>