<script setup lang="ts">
import { ArrowLeft, Command, Github } from 'lucide-vue-next';
import { type Project, projects } from '~/lib/content';

const route = useRoute()

const project = ref<Project>()
onBeforeMount(() => {
    project.value = projects.find((p) => p.slug === route.params.slug)
})
</script>

<template>
    <div>
        <SharedAppSection>
            <div class="-mt-4 lg:-mt-2">
                <NuxtLink to="/projects">
                    <Button
                        class="text-gray-400 px-0 hover:text-orange-500 transition-all duration-600 bg-transparent hover:bg-transparent"
                        variant="ghost">
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </NuxtLink>
            </div>
            <div class="flex flex-col space-y-9">
                <div class="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <div class="flex flex-col space-y-6 lg:space-y-8 2xl:space-y-10 lg:w-2/3">
                        <div class="flex flex-col space-y-3 lg:space-y-4 2xl:space-y-6 lg:max-w-[700px]">
                            <h1 class="text-2xl lg:text-3xl 2xl:text-4xl font-normal ">{{ project?.title }}</h1>
                            <p class="text-lg lg:text-xl text-text"> {{ project?.brief }}</p>
                        </div>
                        <div class="flex flex-col space-y-2 2xl:space-y-4">
                            <h3 class="text-xl lg:text-2xl 2xl:text-3xl">Key features</h3>
                            <div class="flex flex-col space-y-2 lg:space-y-3 text-text">
                                <div v-for="item in project?.keyFeatures"
                                    class="flex flex-row space-x-2 xl:space-x-3 2xl:space-x-4 items-center hover:text-white ">
                                    <Command :size=12 class="text-orange-600 min-h-3 min-w-3" />
                                    <p>{{ item }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-2 lg:space-x-3">
                            <NuxtLink v-if="project?.linkLive" :to="project?.linkLive" external target="_blank">
                                <Button class="bg-transparent  border-text rounded-sm" variant="outline">View Live
                                    Project</Button>
                            </NuxtLink>
                            <NuxtLink v-if="project?.repoLink" :to="project?.repoLink" external target="_blank">
                                <Button class="bg-transparent  border-text rounded-sm" variant="outline">
                                    <Github />
                                    <span>Repo</span>
                                </Button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:flex lg:flex-col space-y-6 ">
                        <span class="text-xl 2xl:text-2xl">Stack</span>
                        <div class="flex flex-wrap gap-3">
                            <div v-for="item in project?.stack"
                                class="py-1 px-2 rounded-lg border border-text text-text border-opacity-70">
                                <span class="hover:text-white">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator class="bg-opacity-25 bg-text" />
                <div class="w-full flex flex-col 2xl:space-x-8 2xl:flex-row">
                    <div class="flex flex-col space-y-3 2xl:space-y-6 2xl:w-3/4">
                        <h3 class="text-xl lg:text-2xl 2xl:text-3xl">Screenshots</h3>
                        <div class="flex flex-col space-y-6 lg:space-y-7 2xl:space-y-12">
                            <div class="relative group" v-for="item in project?.screenShots" :key="item.url">
                                <NuxtImg :src="item.url" class="rounded-sm w-full" />
                                <div
                                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <span class="text-white text-lg xl:text-2xl">{{ item.descriptionText }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="2xl:1/4">
                    </div>
                </div>
            </div>
        </SharedAppSection>
    </div>
</template>