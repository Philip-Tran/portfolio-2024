<script lang="ts" setup>
import { Github } from 'lucide-vue-next';
import { homePage } from '~/lib/content';

</script>

<template>
    <SharedAppSection>
        <div class="space-y-5 lg:space-y-6 xl:space-y-10 2xl:space-y-12 ">
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
            <div class="space-y-4 ">
                <h1 class="text-3xl xl:text-4xl  font-sans font-medium max-w-[600px]">
                    {{ homePage.headline }}
                </h1>
                <p class="text-text font-base xl:font-lg max-w-[630px]">

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
    <SharedAppSection title="Projects">
        <div
            class="flex flex-col space-y-8 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:space-x-0 lg:space-y-0 lg:gap-9 xl:gap-10 2xl:gap-y-14 2xl:gap-x-12">
            <SharedProjectCard v-for="i in 4" />
        </div>
        <div class="mt-4 items-center justify-center">
            <Button class="w-full">View all Projects</Button>
        </div>
    </SharedAppSection>
</template>