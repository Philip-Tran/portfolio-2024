<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
import type { Project } from '~/lib/content';
defineProps<{
    project: Project
}>()
</script>

<template>
    <NuxtLink :to="`/projects/${project.slug}`">
        <div class="space-y-2 lg:space-y-5 hover:text-orange-500">
            <div class="w-full relative group aspect-video">
                <NuxtImg :src="project.featureImage" class="object-cover rounded-lg w-full h-full " placeholder />

                <!-- Overlay with buttons -->
                <div
                    class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                    <div
                        class="absolute z-50 top-[62%] w-full transform translate-y-full group-hover:translate-y-3/4 transition-transform duration-300 flex justify-center gap-4 p-4">
                        <NuxtLink :to="`/projects/${project.slug}`">
                            <Button class="rounded-full transition-colors">
                                Detail
                            </Button>
                        </NuxtLink>
                        <NuxtLink :to="project.repoLink" external target="_blank">
                            <Button @click.stop class="rounded-full z-[1000]  transition-colors">
                                Github Repo
                                <ExternalLink />
                            </Button>
                        </NuxtLink>
                        <NuxtLink :to="project.linkLive" external target="_blank">
                            <Button @click.stop class="rounded-full  0 transition-colors">
                                Link Live
                                <ExternalLink />
                            </Button>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="space-y-2 flex flex-col-reverse lg:flex-col">
                <ul class="flex flex-wrap gap-2 mt-4 lg:mt-0">
                    <li v-for="tech in project.stack" :key="tech"
                        class="px-3 py-1 text-xs font-medium bg-text rounded-full text-gray-900">
                        {{ tech }}
                    </li>
                </ul>
                <NuxtLink :to="`/projects/${project.slug}`" class="text-xl mb-8 lg:mb-0 lg:text-2xl font-normal">
                    <h2 class="">{{ project.title }}</h2>
                </NuxtLink>
            </div>
        </div>
    </NuxtLink>
</template>