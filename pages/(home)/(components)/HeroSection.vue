<script setup lang="ts">
import type { HomePage } from '~/lib/content';

import { Dot, Github } from 'lucide-vue-next';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

defineProps<{
    homePage: HomePage
}>()
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
                    <NuxtLink to="/contact">
                        <div
                            class="p-3 lg:p-3 2xl:px-4 2xl:py-2 pl-1 2xl:pl-2 rounded-md flex  bg-text bg-opacity-45 border text-[#fca311]">
                            <Dot color="#fca311" :stroke-width="6" class="" />
                            <span>{{ homePage.status == "available" ? "Open to work" : "I'm quite busy" }}</span>
                        </div>
                    </NuxtLink>
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
                <TooltipProvider>
                    <Tooltip v-for="item in homePage.social">
                        <TooltipTrigger as-child>
                            <NuxtLink class="" :to="item.link" external target="_blank">
                                <div
                                    class="flex p-3 border border-text rounded-sm items-center justify-center border-opacity-40 hover:border-opacity-60">
                                    <component :is="item.icon" class="w-5 h-5"></component>
                                </div>
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ item.name }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </SharedAppSection>
</template>